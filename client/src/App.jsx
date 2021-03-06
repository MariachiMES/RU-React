import "./App.scss";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import NewCaseManager from "./components/NewCaseManager/NewCaseManager";
import Census from "./components/census/Census";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./components/Landing/Landing";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  useEffect(() => {
    document.title = "Reunify";
  }, []);
  // Construct our main GraphQL API endpoint
  const httpLink = createHttpLink({
    uri: "/graphql",
  });
  // Construct request middleware that will attach the JWT token to every request as an `authorization` header
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <div className="App">
            <Route path="/" exact component={Landing}></Route>
            <Route path="/signup" exact component={NewCaseManager}></Route>
            <Route path="/Census" exact component={Census}></Route>
            <Route path="/Dashboard/:minorId" component={Dashboard}>
              <Dashboard />
            </Route>
          </div>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
