import User from '../models/User.js';
import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken';
export const graphqlResolver = {
  hello() {},
  createUser: async function (parent, args, context, info) {
    const error = [];
    const { email, name, password } = args.input;
    if (!validator.isEmail(email)) {
      error.push({ message: 'Invalid email' });
    }
    if (
      validator.isEmpty(password) ||
      !validator.isLength(password, { min: 5 })
    ) {
      error.push({ message: 'Password too short' });
    }
    if (error.length > 0) {
      const error = new Error(error.message);
      throw error;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error('User already Exists');
      throw error;
    }
    //if email doesnt exist create user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email: email,
      name: name,
      password: hashedPassword,
    });

    const createUser = await user.save();
    return res
      .status(201)
      .send({ ...createUser._doc, _id: createUser._id.toString() });
  },

  login: async function (parent, args, context, info) {
    const { email, password } = args.input;
    const user = await User.findOne({ email });
    if (!user) throw new Error('user not found');

    const isEqual = bcrypt.compare(password, user.password);
    if (!isEqual) throw new Error('Password doesnt match');
    const token = jwt.sign(
      { userId: user._id.toString(), email: user.email },
      'somesecretkey',
      { expiresIn: '1h' }
    );

    return { token: token, userId: user._id.toString() };
  },
};
