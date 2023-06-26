import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoriesRequested, categoriesLoaded } from "../../actions/shop-actions";
import { userDataLoaded, userDataRequested } from "../../actions/user-actions";
import { withShopService } from "../hoc";

const LoadingData = ({ children, shopService }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const hasToken = !!localStorage.getItem("token");
        if (hasToken) {
            dispatch(userDataRequested());
            shopService.getUserData()
                .then(userData => dispatch(userDataLoaded(userData)));
        }

        dispatch(categoriesRequested());
        shopService.getCategories()
            .then(categories => dispatch(categoriesLoaded(categories)));
        }, [shopService, dispatch]
    );

    return (
        <div>{children}</div>
    );
};

export default withShopService()(LoadingData);