import express from 'express'
import { Search } from '../Model/search_model.js'

const topsearch = express.Router()
// GET /api/top-searches
topsearch.get("/top-searches", async (req, res) => {
  // aggregate top 5 terms
  const agg = await Search.aggregate([
    { $group: { _id: "$term", count: { $sum: 1 } } },
    { $sort: { count: -1 } },

    { $limit: 5 },
  ]);
  res.json(agg.map((a) => ({ term: a._id, count: a.count })));
});
export default topsearch