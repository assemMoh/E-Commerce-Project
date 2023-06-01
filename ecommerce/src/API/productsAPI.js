import axios from "axios";

let baseURL = "http://localhost:3005/products";
let adminURL = "http://localhost:3005/admins";

let getAllProduct = () => axios.get(baseURL);

let getProduct = (productId) => axios.get(`${baseURL}/${productId}`);

let addProduct = (product) => axios.post(baseURL, product);

let deleteProduct = (productId) => axios.delete(`${baseURL}/${productId}`);

let editProduct = (productId, product) =>
	axios.put(`${baseURL}/${productId}`, product);

let getAdmin = () => axios.get(`${adminURL}/${1}`);

export let productAPI = {
	getAllProduct,
	addProduct,
	deleteProduct,
	editProduct,
	getProduct,
	getAdmin,
};
