import React from "react";
import { AuthServiceConsumer } from "../auth-service-context";

const withAuthService = () => (Wrapped) => {
    return (props) => {
        return (
            <AuthServiceConsumer>
                {
                    (authService) => {
                        return (
                            <Wrapped {...props} authService={authService} />
                        );
                    }
                }
            </AuthServiceConsumer>
        )
    }
};

export default withAuthService;
