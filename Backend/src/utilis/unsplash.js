import axios from "axios";

export async function searchUnsplash(term, per_page = 30) {
  try {
    // Unsplash API URL with single API key
    const url = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(
      term
    )}&per_page=${per_page}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;

    // Make API request
    const res = await axios.get(url);
    
    
    // Return full data (includes results array)
    return res.data;
    
    
  } catch (error) {
    console.error(
      " Unsplash API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
}
export default searchUnsplash