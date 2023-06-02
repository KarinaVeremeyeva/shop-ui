import React, { useEffect } from "react";
import { withShopService } from "../hoc";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsLoaded, productAddedToCart, productRemovedFromCart, allProductsRemovedFromCart } from "../../actions";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";

const ShoppingCart = ({ shopService }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems)

    useEffect(() => {
        shopService.getCartItems()
            .then((cartItems) => dispatch(cartItemsLoaded(cartItems)));
        }, [dispatch, shopService]
    );

    const handleIncreaseProductCount = (productId) => {
        shopService.addToCart(productId)
            .then(cartItem => dispatch(productAddedToCart(cartItem)));  
    };

    const handleDecreaseProductCount = (productId) => {
        shopService.reduceProductCount(productId)
            .then(() => dispatch(productRemovedFromCart(productId)));
    };

    const handleRemoveProductFromCart = (productId) => {
        shopService.removeFromCart(productId)
            .then(() => dispatch(allProductsRemovedFromCart(productId)));
    };

    return (
        <Grid container direction="row">
            <Typography variant="h6">Shopping cart</Typography>
            {
                cartItems.map(item => {
                    const { id, product: { name }, quantity } = item
                    return (
                        <Grid item xs={12} key={id}>
                            <div>{name}</div>
                            <div>Count: {quantity}</div>
                            <ButtonGroup variant="outlined">
                                <Button
                                    onClick={() => handleIncreaseProductCount(item.product.id)}
                                    color="success"
                                    startIcon={<Add />}
                                />
                                <Button
                                    onClick={() => handleDecreaseProductCount(item.product.id)}
                                    color="warning"
                                    startIcon={<Remove />}
                                />
                                <Button
                                    onClick={() => handleRemoveProductFromCart(item.product.id)}
                                    color="error"
                                    startIcon={<Delete />}
                                />
                            </ButtonGroup>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};

export default withShopService()(ShoppingCart);