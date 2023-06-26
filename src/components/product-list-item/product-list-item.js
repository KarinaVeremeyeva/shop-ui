import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Card, CardContent, Grid, Typography, Tooltip, CardActionArea } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ADD_PRODUCT_TO_CART } from "../../reducers/constants";
import classes from './product-list-item.module.css';
import image from '../../assets/no-image.jpg';
import SpinnerButton from "../spinner/spinner-button";

const ProductListItem = ({ product, onClick }) => {
    const { id, name, price, category: { name: categoryName}, photoUrl } = product;
    const photo = photoUrl || image;
    const loading = useSelector(state => state.user.loading[ADD_PRODUCT_TO_CART]);

    return (
        <Grid item xs={12} md={4}>
            <Card classes={{ root: classes.productListItem }} square>
                <CardActionArea component={Link} to={`/products/${id}`}>
                    <CardContent>
                        <Box src={photo} component="img" className={classes.itemImage} alt="item-image" />
                        <Tooltip title={name}>
                            <Typography variant="h6" className={classes.productNameContainer}>
                                {name}
                            </Typography>
                        </Tooltip>
                        <Typography variant="h6">${price}</Typography>
                        <Typography variant="body1">{categoryName}</Typography>
                    </CardContent>
                </CardActionArea>
                <div className={classes.btnContainer}>
                    <SpinnerButton loading={loading}>
                        {(loading) => (
                            <Button className={classes.btnWrapper} disabled={loading} onClick={() => onClick(id)} variant="contained" startIcon={<ShoppingCartIcon />}>
                                Buy
                            </Button>
                        )}
                    </SpinnerButton>
                </div>
            </Card>
        </Grid>
    );
};

export default ProductListItem;