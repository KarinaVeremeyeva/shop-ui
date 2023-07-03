import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Grid, Typography, Box, Card, CardContent } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { addProductToCart, reduceProductCount, removeAllProducts } from "../../../actions/user-actions";
import { withShopService } from "../../hoc";
import SpinnerButton from "../../spinner/spinner-button";
import { ADD_PRODUCT_TO_CART, REDUCE_PRODUCT, REMOVE_PRODUCTS } from "../../../reducers/constants";
import classes from './shopping-cart-item.module.css';
import image from '../../../assets/no-image.jpg';

const ShoppingCartItem = ({ cartItem, shopService }) => {
    const { product: { id, name, price, photoUrl, description }, quantity } = cartItem
    const photo = photoUrl || image;
    
    const loadingAdd = useSelector(state => state.user.loading[ADD_PRODUCT_TO_CART]);
    const loadingReduce = useSelector(state => state.user.loading[REDUCE_PRODUCT]);
    const loadingRemove = useSelector(state => state.user.loading[REMOVE_PRODUCTS]);

    const dispatch = useDispatch();

    const handleIncreaseProductCount = (productId) => {
        dispatch(addProductToCart(shopService, productId));
    };

    const handleDecreaseProductCount = (productId) => {
        dispatch(reduceProductCount(shopService, productId));
    };

    const handleRemoveProductFromCart = (productId) => {
        dispatch(removeAllProducts(shopService, productId));
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
                                <SpinnerButton loading={loadingAdd}>
                                    {(loadingAdd) => (
                                        <Button
                                            disabled={loadingAdd}
                                            onClick={() => handleIncreaseProductCount(id)}
                                            color="success"
                                            startIcon={<Add />}
                                            classes={{ startIcon: classes.buttonIcon }}
                                        />
                                    )}
                                </SpinnerButton>
                                <SpinnerButton loading={loadingReduce}>
                                    {(loadingReduce) => (
                                        <Button
                                            disabled={loadingReduce}
                                            onClick={() => handleDecreaseProductCount(id)}
                                            color="warning"
                                            startIcon={<Remove />}
                                            classes={{ startIcon: classes.buttonIcon }}
                                        />
                                    )}
                                </SpinnerButton>
                                <SpinnerButton loading={loadingRemove}>
                                    {(loadingRemove) => (
                                        <Button
                                            disabled={loadingRemove}
                                            onClick={() => handleRemoveProductFromCart(id)}
                                            color="error"
                                            startIcon={<Delete />}
                                            classes={{ startIcon: classes.buttonIcon }}
                                        />
                                    )}
                                </SpinnerButton>
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