// Configuration for the poll application
// Secure implementation: Use environment variables for sensitive data
export const API_KEY = import.meta.env.VITE_API_KEY || "";
export const API_URL = import.meta.env.VITE_API_URL || "https://api.example.com";
