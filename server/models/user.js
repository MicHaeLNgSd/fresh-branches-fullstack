const { Schema, model } = require('mongoose');
const yup = require('yup');

const EMAIL_VALIDATION_SCHEMA = yup.string().required().email();

const userSchema = new Schema({
  firstName: { type: String, required: [true, 'firstName is a required field'] },
  lastName: { type: String },
  imgSrc: {
    type: String,
    required: [true, 'firstName is a required field'],
    unique: [true, 'imgSrc must be unique'],
  },
  email: {
    type: String,
    required: [true, 'email is a required field'],
    validate: {
      validator: async (email) => EMAIL_VALIDATION_SCHEMA.isValid(email),
      message: (props) =>
        `${props.value} is not a valid email. Must be like email@email.email`,
    },
  },
  password: {
    type: String,
    required: [true, 'password is a required field'],
    minlenght: [8, 'password min lenght is 8'],
  },
  isMale: { type: Boolean, required: [true, 'isMale is a required field'] },
});

const User = model('User', userSchema);
module.exports = User;
