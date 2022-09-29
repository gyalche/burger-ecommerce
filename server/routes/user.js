import express from 'express';

import passport from 'passport';
import { getAdminUsers, logout, myProfile } from '../controllers/user.js';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();
router.get(
  '/googlelogin',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);
router.get(
  '/googlelogin',
  (req, res) => {
    res.send('loggedin');
  }
  //   passport.authenticate('google', {
  //     scope: ['profile'],
  //     successRedirect: process.env.FRONTEND_URL,
  //   })
);
router.get('/me', isAuthenticated, myProfile);
router.get('/logout', logout);
//Admin route;
router.get('/admin/user', isAuthenticated, authorizeAdmin, getAdminUsers);
export default router;
