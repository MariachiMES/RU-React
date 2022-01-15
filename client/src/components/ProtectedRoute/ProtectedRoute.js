import React, {Component, useEffet, useState} from "react";
import {Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";
import useToken from "../../useToken";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const [loading, setLoading] = useState(true)
    const token = useToken();

    useEffect(() => {
        if (token.checkedStorage) {
            setLoading(false)
        }
    })
}
return (
    <div className="something">
        {loading ? <loading thing doing stuff> : (
            <Route 
            {...rest}
            render = {(props) =>
            !token.expired && token.authority === "Case Manager" ? (
                <Component {...props} />
        ) : (
            <Redirect to ="/"/>
        )
            }
            />
        )})
    </div>
