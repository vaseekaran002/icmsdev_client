import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, ListGroup } from 'react-bootstrap';

import MuiTypography from '@mui/material/Typography';

const UserModal = ({show = true, onHide, members}) => {

    return (
        <Modal
            show={show}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={onHide}
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Members
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <ListGroup variant="flush">
                
                {members && members.length > 0 && 
                    members.map(item => {
                    return (
                        <ListGroup.Item>
                            <div className="flex members-list"> 
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                            </div>
                            <div className="flex members-details">
                                <div>
                                <MuiTypography variant="h5" gutterBottom>
                                    {item.artistName}
                                </MuiTypography>
                                </div>
                                <div>
                                <Button variant="primary" size="sm">Add</Button>
                                </div>
                            </div>
                            </div>
                        </ListGroup.Item>
                    )
                    })
                }
            </ListGroup>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

UserModal.propTypes = {
    members: PropTypes.array,
    onHide: PropTypes.func,
    show: PropTypes.bool
};

export default UserModal;