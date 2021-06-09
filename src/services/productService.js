import axios from 'axios';

export default class ProductService {
    getProducts() {
        return axios.get("http://127.0.0.1:8080/api/products/getall")
    }

    getByProductName(productName) {
        return axios.get("http://127.0.0.1:8080/api/products/getByProductName?productName=" + productName);
    }
}