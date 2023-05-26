import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import classes from './product-list-item.module.css';

const ProductListItem = ({ product }) => {
    const { id, name, price, categoryName, photoUrl } = product;
    return (
        <Grid item xs={12} md={4}>
            <Card classes={{ root: classes.productListItem }} square>
                <CardContent>
                    <Box
                        component="img"
                        sx={{
                            height: '100%',
                            width: '100%'
                        }}
                        alt="item-image"
                        src={photoUrl} />

                    <Typography variant="h6">
                        <Link to={`/products/${id}`} className={classes.link}>
                            {name}
                        </Link>
                    </Typography>
                    <Typography variant="h6">${price}</Typography>
                    <Typography variant="body1">{categoryName}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductListItem;