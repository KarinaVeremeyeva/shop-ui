import React from "react";
import { AuthServiceConsumer } from "../../contexts/auth-service-context";

const withAuthService = () => (Wrapped) => {
    return (props) => {
        return (
            <AuthServiceConsumer>
                { (authService) => (<Wrapped {...props} authService={authService} />) }
            </AuthServiceConsumer>
        );
    }
};

export default withAuthService;
