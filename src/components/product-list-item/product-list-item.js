import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, Card, CardContent, Grid, Typography, Tooltip, CardActionArea, CircularProgress } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ADD_PRODUCT_TO_CART } from "../../reducers/constants";
import classes from './product-list-item.module.css';
import image from '../../assets/no-image.jpg';

const ProductListItem = ({ product, onClick }) => {
    const { id, name, price, category: { name: categoryName}, photoUrl } = product;
    const photo = photoUrl || image;
    const loading = useSelector(state => state.loading[ADD_PRODUCT_TO_CART]);

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
                <Box>
                    <Button disabled={loading} onClick={() => onClick(id)} variant="contained" startIcon={<ShoppingCartIcon />}>
                        Buy
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
            </Card>
        </Grid>
    );
};

export default ProductListItem;