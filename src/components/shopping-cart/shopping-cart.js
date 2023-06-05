import React, { useEffect } from "react";
import { withShopService } from "../hoc";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsLoaded } from "../../actions";
import { Grid, Typography } from "@mui/material";
import ShoppingCartItem from "../shopping-cart-item";

const ShoppingCart = ({ shopService }) => {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        shopService.getCartItems()
            .then((cartItems) => dispatch(cartItemsLoaded(cartItems)));
        }, [dispatch, shopService]
    );

    const totalPrice = cartItems.reduce(
        (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
        0
    );

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
                cartItems.map(item => {
                    return (
                        <ShoppingCartItem key={item.id} cartItem={item} shopService={shopService} />
                    );
                })
            }
        </Grid>
    );
};

export default withShopService()(ShoppingCart);