import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const ApiService = {
  async getCaterers() {
    try {
      const response = await axios.get(`${BASE_URL}/caterers`);
      return response.data;
    } catch (error) {
      console.error("Error fetching caterers:", error);
      throw error;
    }
  },

  // Fetch a single caterer by ID
  async getCatererById(id) {
    try {
      const response = await axios.get(`${BASE_URL}/caterers/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching caterer with ID ${id}:`, error);
      throw error;
    }
  },

  //Fetch all cuisines
  async getCuisines() {
    try {
      const response = await axios.get(`${BASE_URL}/cuisines`);
      return response.data;
    } catch (error) {
      console.error("Error fetching cuisines:", error);
      throw error;
    }
  },

  // Fetch caterers by cuisine type
  async getCaterersByCuisine(cuisine) {
    try {
      const response = await axios.get(
        `${BASE_URL}/caterers/cuisine/${cuisine}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching caterers for cuisine ${cuisine}:`, error);
      throw error;
    }
  },

  // Place an order
  async placeOrder(orderData) {
    try {
      const response = await axios.post(`${BASE_URL}/orders`, orderData);
      return response.data;
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  },

  // Fetch all orders (optional)
  async getOrders() {
    try {
      const response = await axios.get(`${BASE_URL}/orders`);
      return response.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  },

  // Fetch an order by ID
  async getOrderById(id) {
    try {
      const response = await axios.get(`${BASE_URL}/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching order with ID ${id}:`, error);
      throw error;
    }
  },
};

export default ApiService;
