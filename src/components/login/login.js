import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, FormGroup, FormHelperText, TextField } from "@mui/material";
import classes from './login.module.css';
import { withShopService } from "../hoc";
import { userDataLoaded } from "../../actions";
import { useDispatch } from "react-redux";

const Login = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setError] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();        
        props.authService.login(login, password)
            .then(() => {
                const userData = props.shopService.getUserData();
                return dispatch(userDataLoaded(userData));
            })
            .then(() => navigate("/"))
            .catch(() => setError('Wrong username or password'));
    };

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
        setError("");
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError("");
    };

    return (
        <Card>
            <CardContent component="form" onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <FormGroup className={classes.formGroupContainer}>
                    <label>Username</label>
                    <TextField
                        onChange={handleLoginChange}
                        value={login}>
                    </TextField>
                </FormGroup>
                <FormGroup className={classes.formGroupContainer}>
                    <label>Password</label>
                    <TextField
                        type="password"
                        onChange={handlePasswordChange}
                        value={password}>
                    </TextField>
                </FormGroup>
                <FormHelperText error={!!errorText}>
                {errorText}
                </FormHelperText>
                <div className={classes.buttonContainer}>
                    <Button type="submit" variant="contained" disabled={!login || !password}>Login</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default withShopService()(Login);