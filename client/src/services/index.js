import axios from "axios";

class ApiService {
  constructor() {
    this.API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  }

  async getAllBooks() {
    const result = await axios.get(`${this.API_URL}/books/top`);
    return result.data;
  }

  async getBook(id) {
    const result = await axios.get(`${this.API_URL}/books/${id}`);
    return result.data;
  }

  async createBook(book) {
    const result = await axios.post(`${this.API_URL}/books`, {...book});
    return result.data;
  }
}

export default ApiService;