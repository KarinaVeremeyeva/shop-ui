import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../actions/shop-actions";
import { fetchUserData } from "../../actions/user-data-actions";
import { withShopService } from "../hoc";

const LoadingData = ({ children, shopService }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const hasToken = !!localStorage.getItem("token");
        if (hasToken) {
            dispatch(fetchUserData(shopService));
        }

        dispatch(fetchCategories(shopService));
        }, [shopService, dispatch]
    );

    return (
        <div>{children}</div>
    );
};

export default withShopService()(LoadingData);