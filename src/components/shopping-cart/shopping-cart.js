import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { withShopService } from "../hoc";
import { fetchCartItems } from "../../actions/user-actions";
import ShoppingCartItem from "../shopping-cart/shopping-cart-item";
import Spinner from "../spinner";
import { CART_ITEMS } from "../../reducers/constants";

const ShoppingCart = ({ shopService }) => {
    const cartItems = useSelector(state => state.user.cartItems);
    const loading = useSelector(state => state.user.loading[CART_ITEMS]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartItems(shopService))
    }, [dispatch, shopService]);

    const totalPrice = cartItems.reduce(
        (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
        0
    );

    if (loading) {
        return <Spinner />;
    }

    if (cartItems.length === 0) {
        return (
            <div>Shopping cart is empty.</div>
        );
    };

    return (
        <Grid container direction="row">
            <Typography variant="h6">Shopping cart</Typography>
            <Typography variant="h6">(${totalPrice})</Typography>
            {
                cartItems.map(item => (
                    <ShoppingCartItem key={item.id} cartItem={item} shopService={shopService} />
                ))
            }
        </Grid>
    );
};

export default withShopService()(ShoppingCart);