import axios from "axios";

class ApiService {
  constructor() {
    this.API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  }

  async getAllTeachers() {
    const result = await axios.get(`${this.API_URL}/teachers`);
    return result.data;
  }
}

export default ApiService;