import { Formik } from "formik";
import * as Yup from "yup";
import '../css/Login.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { productAPI } from "../API/productsAPI";
import { useNavigate } from "react-router-dom";

// Creating schema
const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(4, "Password must be at least 4 characters"),
});

export function LoginAdmin() {
    let navigate = useNavigate();
    let [admins, setAdmins] = useState([]);

    let goToPanel = () => {
        navigate(
            '/admin/panel'
        )
    };

useEffect(() => {
    retrieveProduct();
}, []);

let retrieveProduct = async () => {
    try {
        let response = await productAPI.getAllAdmins();
        setAdmins(response.data);
    } catch (error) {
        console.log(error);
    }
};

return (
    <>
        {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
        <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {

                // Alert the input values of the form that we filled
                // alert(JSON.stringify(values));
                for (const admin of admins) {
                    console.log((admins))

                    if (values['email'] === admin['email'] && values['password'] === admin['password']) {
                        console.log(admin)
                        goToPanel();
                    }
                }

            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <div className="text-center mt-5 p-5">
                    <div className="m-auto w-50 text-start">
                        {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                        <form noValidate onSubmit={handleSubmit}>
                            <h3>Admin login</h3>
                            {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                            <div className="my-5">

                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email id / username"
                                    className="form-control inp_text"
                                    id="email"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.email && touched.email && errors.email}
                                </p>
                            </div>
                            {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                            <div className="my-5">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                                {/* If validation is not passed show errors */}
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                            </div>
                            {/* Click on submit button to submit the form */}
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    </>
);
}
