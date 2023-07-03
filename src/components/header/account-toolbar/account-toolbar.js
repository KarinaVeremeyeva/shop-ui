import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
import { withAuthService } from "../../hoc";
import { resetUserData } from "../../../actions/user-actions";
import { getIsPermittedForAdmin, getIsPermittedForUser } from "../../../selectors/selectors";
import classes from './account-toolbar.module.css';

const AccountToolbar = ({ authService }) => {
    const isAuthorized = useSelector(state => !!state.userData.userData);
    const email = useSelector(state => state.userData.userData?.email);
    const isAdminPermited = useSelector(getIsPermittedForAdmin);
    const isUserPermited = useSelector(getIsPermittedForUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogoutHandler = () => {
        authService.logout()
            .then(() => dispatch(resetUserData()));
    };

    const onCartClickHandler = () => navigate('cart');

    if (!isAuthorized) {
        return (
            <div className={classes.toolbarWrapper}>
                <Link to={'accounts/login'} className={classes.link}>Login</Link>
            </div>
        );
    }

    return (
        <div className={classes.toolbarWrapper}>
            {isAdminPermited && (
                <>
                    <Link to={'details/admin'} className={classes.link}>Manage Details</Link>
                    <Link to={'categories/admin'} className={classes.link}>Manage Categories</Link>
                    <Link to={'products/admin'} className={classes.link}>Manage Products</Link>
                </>
            )}
            <div className={classes.link}>{email}</div>
            {isUserPermited && (
                <Button
                    onClick={onCartClickHandler}
                    classes={{ root: classes.button }}
                    variant="text"
                    startIcon={<ShoppingCartIcon />}
                >
                    Cart
                </Button>
            )}
            <div onClick={onLogoutHandler} className={classes.link}>Logout</div>
        </div>
    );
};

export default withAuthService()(AccountToolbar);