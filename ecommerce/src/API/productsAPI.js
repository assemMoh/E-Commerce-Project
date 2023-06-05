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

let usersURL = "http://localhost:3005/users";

export let registerUser = (newUser) => axios.post(`${usersURL}`, newUser)
export let getUsers = () => axios.get(usersURL)

let currentUserURL = "http://localhost:3005/currentUser";
export let loginUser = (currentUser) => axios.post(currentUserURL, currentUser)
export let getCurrentUser = () => axios.get(currentUserURL + "/1")
export let logoutUser = (currentUser) => axios.delete(currentUserURL + "/1", currentUser)

let currentAdminURL = "http://localhost:3005/currentAdmin";
export let loginAdmin = (currentAdmin) => axios.post(currentAdminURL, currentAdmin)
export let getCurrentAdmin = () => axios.get(currentAdminURL + "/1")
export let logoutAdmin = (currentAdmin) => axios.delete(currentAdminURL + "/1", currentAdmin)



// export let changeUserCart = (newUser) 			=>	axios.put(usersURL + "/1", newUser)
// export let addProductToCart = (userID, newUser) => 	axios.put(`${currentUserURL}/${userID}`, newUser)
