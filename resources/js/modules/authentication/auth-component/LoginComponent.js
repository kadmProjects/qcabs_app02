import React from 'react';
import './LoginComponent.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {
    CardContent, CardHeader,
    TextField,
    Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '30%',
        marginTop: '5%',
        paddingBottom: '3%',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        borderRadius: 0,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    header: {
        textAlign: 'center',
        fontSize: 50,
        marginTop: '10%'
    },
    form: {
        '& .MuiTextField-root': {
            width: '100%'
        },
        textAlign: 'center',
    },
    textField: {
        background: 'white',
        marginBottom: '4%',
    },
    loginBtn: {
        width: '100%',
        borderRadius: 0
    }
}));

export default function LoginComponent() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="QCabs" classes={{ title: classes.header }}></CardHeader>
            <CardContent>
                <form className={classes.form} noValidate autoComplete="off">
                    <div>
                        <TextField className={classes.textField} size="small" id="" label="Username" variant="filled" />
                    </div>
                    <div>
                        <TextField className={classes.textField} size="small" id="" label="Password" variant="filled" />
                    </div>
                    <div>
                        <Button size="medium" className={classes.loginBtn} variant="contained" color="primary">Sign In</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}