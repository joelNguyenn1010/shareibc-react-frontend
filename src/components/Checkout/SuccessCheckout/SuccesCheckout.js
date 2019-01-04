import React from 'react'
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {NavLink} from 'react-router-dom'
const SuccessCheckout = (props) => {
    return (

        <Container>
        <Modal isOpen={props.success} 
        toggle={props.toggle}
        >
          <ModalHeader 
        //   toggle={this.toggle}
          >Thank you for buying this product, please check your email to get the receive</ModalHeader>
          <ModalBody>
          if there any problem about your order, please contact shareibc@gmail.com
          </ModalBody>
          <ModalFooter>
            <Button color="primary">
                <NavLink className="text-white" to="/"  >Home</NavLink>
            </Button>
            <Button color="primary">
             <NavLink className="text-white" to="/products" >Continous shopping</NavLink>
            </Button>
          </ModalFooter>
        </Modal>
      </Container>


        // <Dialog
        //     open={props.success}
        //     aria-labelledby="alert-dialog-title"
        //     aria-describedby="alert-dialog-description"
        // >
        //     <DialogTitle className="text-success" id="alert-dialog-title">{"Thank you for buying this product, please check your email to get the receive"}</DialogTitle>
        //     <DialogContent>
        //         <DialogContentText id="alert-dialog-description">
        //             if there any problem about your order, please contact shareibc@gmail.com
        //   </DialogContentText>
        //     </DialogContent>
        //     <DialogActions>
        //         <Button color="primary">
        //             <NavLink to="/" exact >Home</NavLink>
        //         </Button>
        //         <Button color="primary">
        //             <NavLink to="/products" exact >Continous shopping</NavLink>
        //         </Button>
        //     </DialogActions>
        // </Dialog>
    )
}

export default SuccessCheckout