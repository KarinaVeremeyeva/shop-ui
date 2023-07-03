import React from "react";
import { ShopServiceConsumer } from "../../contexts/shop-service-context";

const withShopService = () => (Wrapped) => {
    return (props) => {
        return (
            <ShopServiceConsumer>
                { (shopService) => (<Wrapped {...props} shopService={shopService} />) }
            </ShopServiceConsumer>
        );
    };
}

export default withShopService;