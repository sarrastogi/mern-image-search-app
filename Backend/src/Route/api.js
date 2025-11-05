import express from "express";
import { Search } from "../Model/search_model.js";
import searchUnsplash from "../utilis/unsplash.js";
import { User } from "../Model/user_model.js";
const router = express.Router();
 function ensureAuth(req, res, next) {
   if (req.isAuthenticated && req.isAuthenticated()) return next();
   return res.status(401).json({ error: "Not authenticated" });
 }
 //POST /api/search
router.post("/search", ensureAuth, async (req, res) => {
  const { term } = req.body;
  if (!term) return res.status(400).json({ error: "term required" });
  // store
   
     
       await Search.create({ term, userId: req.user._id });
     
   

  // call Unsplash
  const results = await searchUnsplash(term, 40);
  // simplify returned image objects
  const images = results.results.map((i) => ({
    id: i.id,
    alt: i.alt_description || "No description",
    url: i.urls.small, 
    full: i.urls.full,
    thumb: i.urls.thumb,
    link: i.links.html,
  }));
  
  
  res.json({ term, total: results.total, images });
});

router.get("/history", ensureAuth, async (req, res) => {
  
  if (!req.user) return res.status(401).json({ message: "Not logged in" });

  const history = await Search.find({ userId: req.user._id })
    .sort({ timestamp: -1 })
    .limit(200);
   
   
  res.json(history);

});


export default router