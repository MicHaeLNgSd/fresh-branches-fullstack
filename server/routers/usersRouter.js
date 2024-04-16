const usersRouter = require('express').Router();
const { UsersController } = require('./../controllers');

usersRouter.route('/').post(UsersController.create).get(UsersController.findAll);
usersRouter
  .route('/:userId')
  .get(UsersController.findOne)
  .put(UsersController.updateOne)
  .delete(UsersController.deleteOne);

module.exports = usersRouter;
