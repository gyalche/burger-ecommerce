import express from 'express';
import dotenv from 'dotenv';
import { currentDB } from './config/database.js';
import cors from 'cors';
import { connectPassport } from './utils/provider.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import passport from 'passport';
import graphqlHttp from 'express-graphql';

// import session from 'express-session';
dotenv.config({ path: './config/config.env' });

currentDB();
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

//Using Middlewares;
//graphql middleware;
app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitalized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'development' ? false : true,
      httpOnly: process.env.NODE_ENV === 'development' ? false : true,
      sameSite: process.env.NODE_ENV === 'development' ? false : 'none',
    },
  })
);
app.use(cookieParser());

app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(passport.session());
app.enable('trust proxy');

connectPassport();
//import routes;
import userRoute from './routes/user.js';
import orderRoute from './routes/order.js';
import { graphqlSchema } from './graphql/schema.js';
import { graphqlResolver } from './graphql/resolver.js';

app.use('/api/v1', userRoute);
app.use('/api/v1', orderRoute);

//Using error middleare;
app.use(errorMiddleware);
export default app;
