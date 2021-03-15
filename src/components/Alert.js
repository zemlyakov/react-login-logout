import { useEffect } from "react";

const Alert = ({message, children}) => {
    useEffect(() => {
        if (message) {
            window.alert(message);
        }
    }, [message]);
    return children;
};

export default Alert;
