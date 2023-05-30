import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withAuthService } from "../hoc";
import { resetUserData } from "../../actions";
import classes from './account-toolbar.module.css';

const AccountToolbar = ({ authService }) => {
    const isAuthorized = useSelector(state => !!state.userData)
    const dispatch = useDispatch();

    const onLogoutHandler = () => {
        authService.logout()
            .then(() => dispatch(resetUserData()));
    };

    return (
        <div>
            {!isAuthorized && (<Link to={`accounts/login/`} className={classes.link}>Login</Link>)}
            {isAuthorized && (<div onClick={onLogoutHandler} className={classes.link}>Logout</div>)}
        </div>
    );
};

export default withAuthService()(AccountToolbar);