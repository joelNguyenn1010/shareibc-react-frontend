import React from 'react'
import { NavLink } from 'react-router-dom'
import CartTable from '../../../Cart/CartTable/CartTable'
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

const CartModal = (props) => {
    return (
        <React.Fragment>
            <Modal isOpen={props.modal} toggle={() => props.toggle()} fullHeight position="right">
                <ModalHeader toggle={() => props.toggle()}>Cart</ModalHeader>
                <ModalBody>
                    <CartTable />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.toggle()}>Close</Button>
                    <NavLink to='/checkout' className="btn btn-outline-primary" >Checkout</NavLink>

                    {/* <Button color="primary">Save changes</Button> */}
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}

export default CartModal