import React from "react";
import { ShopServiceConsumer } from "../shop-service-context";

const withShopService = () => (Wrapped) => {
    return (props) => {
        return (
            <ShopServiceConsumer>
                {
                    (shopService) => {
                        return (
                            <Wrapped {...props} shopService={shopService} />
                        );
                    }
                }
            </ShopServiceConsumer>
        );
    };
}

export default withShopService;