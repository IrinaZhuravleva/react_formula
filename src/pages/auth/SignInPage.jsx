import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import FormContainer from "./FormContainer";
import AuthForm from "./AuthForm";
import RedirectToPlantsIfSignedIn from "../shared-components/RedirectToPlantsIfSignedIn";
import * as userService from "services/user";
import SessionContext from "contexts/SessionContext";


const SignInPage = () => {
    const [error, setError] = useState("");
    const location = useLocation();
    const sessionContext = useContext(SessionContext);
    console.log("SignInPage session context:", sessionContext);
    

    return (
        <RedirectToPlantsIfSignedIn>
            <FormContainer>
                <div className="min-h-5 text-sm font-lato text-red-800">{error}</div>
                {location.state?.accountCreated && (
                    <div className="text-sm font-lato text-green-800 border border-green-400 bg-green-100 p-2 rounded-md mb-2">
                        Account successfully created. Please sign in.
                    </div>
                )}
                <AuthForm
                    fields={[
                        { label: 'username', inputType: 'text' },
                        { label: 'password', inputType: 'password' },
                    ]}
                    submitButtonLabel="Sign In"
                    onSubmit={ async (values) => {
                        // console.log(values);
                        const response = await userService.createSession({username: values.username, password: values.password});
                        const data =  await response.json();

                        if (response.status === 201) {
                            setError("");
                            sessionContext.signIn(data.capstone_session_token);
                        } else {
                            setError(data.error);
                        }
                    }}/>
                <Link to="/signup" className="mt-4 text-emerald-700 underline hover:text-emerald-800">
                    create an account
                </Link>
            </FormContainer>
        </RedirectToPlantsIfSignedIn>
    );
}
export default SignInPage;