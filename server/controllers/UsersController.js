const { User } = require('../models');

module.exports.create = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.findOne = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findOne({ _id: userId });

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.findAll = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.updateOne = async (req, res, next) => {
  try {
    const {
      params: { userId },
      body,
    } = req;

    const user = await User.findByIdAndUpdate(userId, body, { new: true });

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteOne = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const user = await User.findByIdAndDelete(userId);

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

// class User {
//   static async create(req, res, next) {}
//   static async findOne() {}
//   static async findAll() {}
//   static async updateOne() {}
//   static async deleteOne() {}
// }

// module.exports = User;
