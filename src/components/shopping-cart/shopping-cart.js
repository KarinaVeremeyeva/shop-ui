import React, { useEffect } from "react";
import { withShopService } from "../hoc";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsLoaded, productAddedToCart, productRemovedFromCart, allProductsRemovedFromCart } from "../../actions";
import { Button, ButtonGroup, Grid, Typography, Box } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import classes from './shopping-cart.module.css';

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
                    const { id, product: { name, price, photoUrl }, quantity } = item
                    const photo = 'https://img.5element.by/import/images/ut/goods/good_bb7becb4-828d-11ed-bb97-0050560120e8/-1_600.jpg';
                    return (
                        <Grid container xs={12} key={id}>
                            <Grid item xs={6} direction="column">
                                <Box src={photo} component="img" alt="item-image" className={classes.cartItemImage}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h6">{name}</Typography>
                                <div>Count: {quantity}</div>
                                <div>Price: ${price}</div>
                                <ButtonGroup variant="outlined" className={classes.buttonGroupContainer} >
                                    <Button
                                        onClick={() => handleIncreaseProductCount(item.product.id)}
                                        color="success"
                                        startIcon={<Add />}
                                        classes={{ startIcon: classes.buttonIcon }}
                                    />
                                    <Button
                                        onClick={() => handleDecreaseProductCount(item.product.id)}
                                        color="warning"
                                        startIcon={<Remove />}
                                        classes={{ startIcon: classes.buttonIcon }}
                                    />
                                    <Button
                                        onClick={() => handleRemoveProductFromCart(item.product.id)}
                                        color="error"
                                        startIcon={<Delete />}
                                        classes={{ startIcon: classes.buttonIcon }}
                                    />
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};

export default withShopService()(ShoppingCart);