import axios from 'axios';
import { BASE_URL } from '../config/apiPaths';

// SINGLETON PATTERN 
class ConexionServer {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 5000,
    });
  }
  getInstance() {
    return this.instance;
  }
}
const api = new ConexionServer().getInstance();


export default api;