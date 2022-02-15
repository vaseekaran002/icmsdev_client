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
import {
  addMusicianMembers,
  getMusicians,
} from "store/actions/musicianActions";
import debounce from "lodash.debounce";
const UserModal = ({ show = true, onHide }) => {
  const [debounceCount, setDebounceCount] = useState(0);
  const [searchType, setSearchType] = useState("Name");
  const dispatch = useDispatch();
  const [members, setMembers] = useState();
  const stateMemebers = useSelector((state) => state.musician.musicians);
  const musician = useSelector((state) => state.musician.musician);
  var params = {
    artistName: "",
    city: "",
    genre: "",
    staksId: "",
  };
  useEffect(() => {
    setMembers(stateMemebers);
  }, [stateMemebers]);

  useEffect(() => {
    console.log(debounceCount);
  }, [debounceCount]);

  const handleChange = (event) => {
    let text = event.target.value;
    if (searchType.match("Name")) {
      params.artistName = text;
    } else if (searchType.match("City")) {
      params.city = text;
    } else if (searchType.match("Genre")) {
      params.genre = text;
    } else {
      params.staksId = text;
    }

    dispatch(getMusicians(params));
    // TODO: API integration to search the musicians
  };

  const debounceOnChange = debounce(handleChange, 2000);

  const handleTypeChange = (type) => {
    setSearchType(type);
  };

  const handleAdd = (memberId) => {
    dispatch(
      addMusicianMembers({
        musicianId: musician[0].radaptiveId,
        memberId: memberId,
      })
    );
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
            <InputGroup>
              <DropdownButton
                variant="outline-secondary"
                title={searchType}
                id="search-text-type"
              >
                <Dropdown.Item onClick={() => handleTypeChange("Name")}>
                  Name
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTypeChange("City")}>
                  City
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTypeChange("Genre")}>
                  Genre
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTypeChange("StaksId")}>
                  StaksId
                </Dropdown.Item>
              </DropdownButton>
              <FormControl
                onChange={(e) => {
                  if (e.target.value.length > 4) {
                    handleChange(e);
                  } else {
                    debounceOnChange(e);
                  }
                }}
                //onChange={debounceOnChange}
                aria-label="Text input with radio button"
              />
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
                        <Button
                          onClick={() => handleAdd(item.radaptiveId)}
                          variant="primary"
                          size="sm"
                        >
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
