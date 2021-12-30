import axios from "axios";

class ApiService {
  constructor() {
    this.API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  }

  async getAllBooks() {
    const result = await axios.get(`${this.API_URL}/books/top`);
    return result.data;
  }

  async getAllCategories() {
    const result = await axios.get(`${this.API_URL}/categories`);
    return result.data;
  }

  async getAllDependencies() {
    return await axios.get(`${this.API_URL}/books/getAllDependencies`);
  }

  async searchBook(searchString) {
    const result = await axios.get(`${this.API_URL}/books/search_book/${searchString}`);
    return result.data;
  }

  async getBook(id) {
    const result = await axios.get(`${this.API_URL}/books/${id}`);
    return result.data;
  }

  async getAllBooksWithCategoryID(id) {
    const result = await axios.get(`${this.API_URL}/categories/${id}`);
    return result.data;
  }

  async addToCart(cart) {
    const result = await axios.post(`${this.API_URL}/cart`, { ...cart });
    console.log('result from cart', result)
    return result;
  }

  async deleteBookFromCart(bookId) {
    const result = await axios.delete(`${this.API_URL}/cart/${bookId}`);
    return result;
  }

  async getCart() {
    const result = await axios.get(`${this.API_URL}/cart`);
    return result.data;
  }

  async acceptBill(id) {
    const result = await axios.put(`${this.API_URL}/bill/${id}`);
    return result;
  }
  async getAllBills() {
    const result = await axios.get(`${this.API_URL}/bill`);
    return result.data;
  }

  async createBook(book) {
    const result = await axios.post(`${this.API_URL}/books`, { ...book });
    return result.data;
  }

  async createBill(listBooks) {
    const result = await axios.post(`${this.API_URL}/bill`, {
      listBooks: listBooks
    });
    return result.data;
  }
}

export default ApiService;