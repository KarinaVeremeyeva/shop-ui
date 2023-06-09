import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoriesLoaded, userDataLoaded } from "../../actions";
import { withShopService } from "../hoc";

const LoadingData = ({ children, shopService }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        shopService.getUserData()
            .then(userData => dispatch(userDataLoaded(userData)));

        shopService.getCategories()
            .then(categories => dispatch(categoriesLoaded(categories)));
        }, [shopService, dispatch]
    );

    return (
        <div>{children}</div>
    );
};

export default withShopService()(LoadingData);