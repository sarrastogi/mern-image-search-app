import dotenv from "dotenv";
import passport from "passport";

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import { User } from "../Model/user_model.js";

dotenv.config();
// Serialize user (store user ID in session)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user (fetch full user from DB)
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id); // 
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Helper function to handle login/signup for both providers
async function handleUser(profile, provider) {
  const email =
    profile.emails && profile.emails[0] ? profile.emails[0].value : null;
  if (!email) throw new Error("Email not provided by provider");

  let user = await User.findOne({ email });
  

  if (user) {
    // If user exists but doesn't have this provider linked, add it
    if (provider === "google" && !user.googleId) user.googleId = profile.id;
    if (provider === "github" && !user.githubId) user.githubId = profile.id;
    await user.save();
  } else {
    // Create new user if not found
    user = await User.create({
      email,
      googleId: provider === "google" ? profile.id : undefined,
      githubId: provider === "github" ? profile.id : undefined,
      displayName: profile.displayName || "",
      firstName: profile.name?.givenName || "",
      lastName: profile.name?.familyName || "",
      image: profile.photos && profile.photos[0] ? profile.photos[0].value : "",
    });
  }

  return user;
}

// ✅ Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5004/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await handleUser(profile, "google");
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// ✅ GitHub Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5004/auth/github/callback",
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await handleUser(profile, "github");
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);
export default passport;
