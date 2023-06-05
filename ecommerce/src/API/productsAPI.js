import axios from "axios";

let productURL = "http://localhost:3005/products";
let adminURL = "http://localhost:3005/admins";

// let baseURL = "http://localhost:3005/products";

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

const currentUserURL = "http://localhost:3005/currentUser";

const usersURL = "http://localhost:3005/users";
// export let changeUserCart = (newUser) =>axios.put(`${usersURL}/${userID}`, newUser)

export const changeUserCart = (userID, newUser) => {
  return axios.put(`${usersURL}/${userID}`, newUser);
};

export const addProductToCart = (userID, newUser) => {
  return axios.put(`${currentUserURL}/${userID}`, newUser);
};

export let getUserCart = (userID) => axios.get(`${usersURL}/${userID}/cart`)


export let registerUser = (newUser) => axios.post(`${usersURL}`, newUser)
export let getUsers = () => axios.get(usersURL)


export let loginUser = (currentUser) => axios.post(currentUserURL, currentUser)
export let getCurrentUser = () => axios.get(currentUserURL + "/1")
export let logoutUser = (currentUser) => axios.delete(currentUserURL + "/1", currentUser)

// (userID, productID) => axios.post(`"http://localhost:3005/currentUser"/${userID}/cart`, productID);

let currentAdminURL = "http://localhost:3005/currentAdmin";
export let loginAdmin = (currentAdmin) => axios.post(currentAdminURL, currentAdmin)
export let getCurrentAdmin = () => axios.get(currentAdminURL + "/1")
export let logoutAdmin = (currentAdmin) => axios.delete(currentAdminURL + "/1", currentAdmin)
