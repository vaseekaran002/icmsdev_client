import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, ListGroup, Dropdown, InputGroup, FormControl, DropdownButton } from 'react-bootstrap';
import MuiTypography from '@mui/material/Typography';
import {
    Stack,
    OutlinedInput
} from '@mui/material';
const UserModal = ({show = true, onHide, members}) => {

    const [searchText, setSearchText] = useState(null);
    const [searchType, setSearchType] = useState("Name");
    const handleChange = (event) => {
        let text = event.target.value;
        setSearchText(text);

        // TODO: API integration to search the musicians
    }

    const handleTypeChange = (type) => {
        setSearchType(type);
    }

    return (
        <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={onHide}
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Discover musicians
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                { searchType &&
                    <InputGroup onChange={handleChange}>
                        <DropdownButton
                            variant="outline-secondary"
                            title={searchType}
                            id="search-text-type"
                            
                        >
                            <Dropdown.Item onClick={() => handleTypeChange("Name")}>Name</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleTypeChange("Email")}>Email</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-label="Text input with radio button" />
                    </InputGroup>   
                }
                </>
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