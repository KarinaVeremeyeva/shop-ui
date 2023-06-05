import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './product-list-item.module.css';
import image from '../../assets/no-image.jpg';

const ProductListItem = ({ product, onClick }) => {
    const { id, name, price, category: { name: categoryName}, photoUrl } = product;
    const photo = photoUrl || image;

    return (
        <Grid item xs={12} md={4}>
            <Card classes={{ root: classes.productListItem }} square>
                <CardContent>
                    <Box src={photo} component="img" className={classes.itemImage} alt="item-image" />
                    <Typography variant="h6">
                        <Link to={`/products/${id}`} className={classes.link}>
                            {name}
                        </Link>
                    </Typography>
                    <Typography variant="h6">${price}</Typography>
                    <Typography variant="body1">{categoryName}</Typography>
                    <Button onClick={() => onClick(id)} variant="contained" startIcon={<ShoppingCartIcon />}>
                        Buy
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductListItem;