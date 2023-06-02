import axios from "axios";

let productURL = "http://localhost:3005/products";
let usersURL = "http://localhost:3005/users";

// let baseURL = "http://localhost:3005/products";
let adminURL = "http://localhost:3005/admins";

let getAllProduct = () => axios.get(productURL);

let getProduct = (productId) => axios.get(`${productURL}/${productId}`);

let addProduct = (product) => axios.post(productURL, product);

let deleteProduct = (productId) => axios.delete(`${productURL}/${productId}`);

let editProduct = (productId, product) =>
	axios.put(`${productURL}/${productId}`, product);

let getAllAdmins = () => axios.get(adminURL);

export let productAPI = {
	getAllProduct,
	addProduct,
	deleteProduct,
	editProduct,
	getProduct,
	getAllAdmins,
};

export let registerUser = (newUser) => axios.post(`${usersURL}`, newUser)
export let getUsers = () => axios.get(usersURL)