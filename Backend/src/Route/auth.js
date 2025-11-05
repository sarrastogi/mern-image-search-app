import express from "express";
import passport from "passport";
const router = express.Router();

// Google OAuth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/login`,
    session: true,
  }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL);
  }
);

// GitHub OAuth
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: `${process.env.CLIENT_URL}/login`,
    session: true,
  }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL);
  }
);

// Logout
router.post("/logout", (req, res) => {
  req.logout(() => {
    // <-- works only if you are using passport
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logged out" });
  });
});

export default router;
