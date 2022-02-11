import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  Button,
  ListGroup,
  Dropdown,
  InputGroup,
  FormControl,
  DropdownButton,
} from "react-bootstrap";
import MuiTypography from "@mui/material/Typography";
import { Stack, OutlinedInput } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMusicians } from "store/actions/musicianActions";
import debounce from "lodash.debounce";
const UserModal = ({ show = true, onHide }) => {
  const [searchText, setSearchText] = useState(null);
  const [searchType, setSearchType] = useState("artistName");
  const dispatch = useDispatch();
  const [members, setMembers] = useState();
  const stateMemebers = useSelector((state) => state.musician.musicians);
  var params = {
    artistName: "",
    city: "",
    genre: "",
    staksId: "",
  };
  useEffect(() => {
    setMembers(stateMemebers);
  }, [stateMemebers]);

  const handleChange = (event) => {
    let text = event.target.value;
    if (searchType.match("artistName")) {
      params.artistName = text;
    } else if (searchType.match("city")) {
      params.city = text;
    } else if (searchType.match("genre")) {
      params.genre = text;
    } else {
      params.staksId = text;
    }

    dispatch(getMusicians(params));
    // TODO: API integration to search the musicians
  };

  const debounceOnChange = debounce(handleChange, 500);

  const handleTypeChange = (type) => {
    setSearchType(type);
  };

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
          {searchType && (
            <InputGroup onChange={debounceOnChange}>
              <DropdownButton
                variant="outline-secondary"
                title={searchType}
                id="search-text-type"
              >
                <Dropdown.Item onClick={() => handleTypeChange("artistName")}>
                  Name
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTypeChange("city")}>
                  City
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTypeChange("genre")}>
                  Genre
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTypeChange("staksId")}>
                  StaksId
                </Dropdown.Item>
              </DropdownButton>
              <FormControl aria-label="Text input with radio button" />
            </InputGroup>
          )}
        </>
        <ListGroup variant="flush">
          {stateMemebers &&
            stateMemebers.length > 0 &&
            stateMemebers.map((item) => {
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
                        <Button variant="primary" size="sm">
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

UserModal.propTypes = {
  //   members: PropTypes.array,
  onHide: PropTypes.func,
  show: PropTypes.bool,
};

export default UserModal;
