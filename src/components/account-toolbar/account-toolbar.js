import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
import { withAuthService } from "../hoc";
import { resetUserData } from "../../actions";
import { getIsPermittedForAdmin } from "../../selectors/selectors";
import classes from './account-toolbar.module.css';

const AccountToolbar = ({ authService }) => {
    const isAuthorized = useSelector(state => !!state.userData);
    const email = useSelector(state => state.userData?.email);
    const isUserPermited = useSelector(getIsPermittedForAdmin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogoutHandler = () => {
        authService.logout()
            .then(() => dispatch(resetUserData()));
    };

    const onCartClickHandler = () => {
        if (isAuthorized) {
            navigate('cart');
        }
        else {
            navigate('accounts/login');
        }
    };

    return (
        <div className={classes.toolbarWrapper}>
            {isAuthorized && isUserPermited && (<Link to={'admin'} className={classes.link}>Admin Panel</Link>)}
            {isAuthorized && (<div className={classes.link}>{email}</div>)}
            <Button
                onClick={onCartClickHandler}
                classes={{ root: classes.button }}
                variant="text"
                startIcon={<ShoppingCartIcon />}>
                Cart
            </Button>
            {!isAuthorized && (<Link to={`accounts/login`} className={classes.link}>Login</Link>)}
            {isAuthorized && (<div onClick={onLogoutHandler} className={classes.link}>Logout</div>)}
        </div>
    );
};

export default withAuthService()(AccountToolbar);