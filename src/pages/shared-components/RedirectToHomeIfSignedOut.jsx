import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SessionContext from "contexts/SessionContext";


const RedirectToHomeIfSignedOut = (props) => {
    const {userName} = useContext(SessionContext);
    const navigate = useNavigate();
    
    useEffect(() => {   
        if (userName === null) {
            navigate("/");
        }
    }, [userName, navigate]);

    return props.children;
};

export default RedirectToHomeIfSignedOut;