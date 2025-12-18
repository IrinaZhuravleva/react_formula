import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormContainer from "./FormContainer";
import AuthForm from "./AuthForm";
import RedirectToPlantsIfSignedIn from "../shared-components/RedirectToPlantsIfSignedIn";
import * as userService from "services/user";

const SignUpPage = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    return (
        <RedirectToPlantsIfSignedIn>
            <FormContainer>
                <div className="min-h-5 text-sm font-lato text-red-800">{error}</div>
                <AuthForm
                    fields={[
                        { label: 'username', inputType: 'text' },
                        { label: 'password', inputType: 'password' },
                        { label: 'confirm password', inputType: 'password' }
                    ]}
                    submitButtonLabel="Sign Up"
                    onSubmit={ async (values) => {
                        // console.log(values);
                        if (values.username.length < 4) {
                            setError("Username must be at least 4 characters long");
                            return;
                        }
                        if (values.password.length < 4) {
                            setError("Password must be at least 4 characters long");
                            return;
                        }
                        if (values.password !== values['confirm password']) {
                            setError("Passwords do not match");
                            return;
                        }
                        const response = await userService.createUser({username: values.username, password: values.password});
                        if (response.status === 201) {
                            setError("");
                            navigate("/", {state: { accountCreated: true }});
                        } else {
                            const data =  await response.json();
                            setError(data.error);
                        }
                    }}
                />
                <Link to="/" className="mt-4 text-emerald-700 underline hover:text-emerald-800">
                    Already have an account? Sign In
                </Link>
            </FormContainer>
        </RedirectToPlantsIfSignedIn>
    );
};


export default SignUpPage;
