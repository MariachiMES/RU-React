const { User } = require("../models");

//import signToken function from auth
const { signToken } = require("../utils/auth");

module.exports = {
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user.id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this ID!!!" });
    }

    res.json(foundUser);
  },
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: "Cannot find this USER!!!" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong Password" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  async login({ body }, res) {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  //   async addMinor({ user, body }, res) {
  //     console.log(user);
  //     try {
  //       const updatedUser = await User.findOneAndUpdate(
  //         { _id: user._id },
  //         { $addToSet: { savedMinors: body } },
  //         { new: true, runValidators: true }
  //       );
  //       return res.json(updatedUser);
  //     } catch (err) {
  //       console.log(err);
  //       return res.status(400).json(err);
  //     }
  //   },
};
