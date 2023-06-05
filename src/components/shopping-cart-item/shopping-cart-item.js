import React from "react";
import { useDispatch } from "react-redux";
import { Button, ButtonGroup, Grid, Typography, Box, Card, CardContent } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { productAddedToCart, productRemovedFromCart, allProductsRemovedFromCart } from "../../actions";
import classes from './shopping-cart-item.module.css';
import { withShopService } from "../hoc";

const ShoppingCartItem = ({ cartItem, shopService }) => {
    const { product: { id, name, price, photoUrl, description }, quantity } = cartItem
    const photo = 'https://img.5element.by/import/images/ut/goods/good_bb7becb4-828d-11ed-bb97-0050560120e8/-1_600.jpg';
    const dispatch = useDispatch();

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
        <div className={classes.cartItemContainer}>
            <Card classes={{ root: classes.cartItemBorder }} square>
                <CardContent>
                    <Grid container>
                        <Grid item xs={4}>
                            <Box src={photo} component="img" alt="item-image" className={classes.cartItemImage}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h6">{name}</Typography>
                            <div>Count: {quantity}</div>
                            <div>Price: ${price}</div>
                            <div>Total: ${quantity * price}</div>
                            <ButtonGroup variant="outlined" className={classes.buttonGroupContainer}>
                                <Button
                                    onClick={() => handleIncreaseProductCount(id)}
                                    color="success"
                                    startIcon={<Add />}
                                    classes={{ startIcon: classes.buttonIcon }}
                                />
                                <Button
                                    onClick={() => handleDecreaseProductCount(id)}
                                    color="warning"
                                    startIcon={<Remove />}
                                    classes={{ startIcon: classes.buttonIcon }}
                                />
                                <Button
                                    onClick={() => handleRemoveProductFromCart(id)}
                                    color="error"
                                    startIcon={<Delete />}
                                    classes={{ startIcon: classes.buttonIcon }}
                                />
                            </ButtonGroup>
                            <div>{description}</div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default withShopService()(ShoppingCartItem);