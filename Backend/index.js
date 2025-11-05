import dotenv from "dotenv";
import express, { Router } from "express";
import session from "express-session";
import Connect from "./src/Db/Index.js";
import router from "./src/Route/api.js";
import topsearch from "./src/Route/topsearch.js";
import authRouter from "./src/Route/auth.js"
import passport from "passport";
import  "./src/Config/passport.js";

dotenv.config()
let app = express();
let port = process.env.PORT || 5000;
 app.use(express.json())
Connect()
  .then(() => {
    app.use(
      session({ secret: "secret", resave: false, saveUninitialized: true })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/auth',authRouter)
    app.use("/api", router);
    app.use("/api",topsearch);
    
    app.get('/api/me', (req, res) => {
    if (!req.user) return res.json({ user: null });
    res.json({ user: { id: req.user._id, name: req.user.name, provider:req.user.provider } });
    });

    app.listen(port, () => {
      console.log("Connected");

      console.log(`server is listen on http://localhost:${port}`);
      
    });
  })
  .catch((error) => {
    console.log(error);
  });
