import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { NavLink } from 'react-router-dom'

const SuccessCheckout = (props) => {
    return (
        <Dialog
            open={props.success}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle className="text-success" id="alert-dialog-title">{"Thank you for buying this product, please check your email to get the receive"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    if there any problem about your order, please contact shareibc@gmail.com
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary">
                    <NavLink to="/" exact >Home</NavLink>
                </Button>
                <Button color="primary">
                    <NavLink to="/products" exact >Continous shopping</NavLink>
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SuccessCheckout