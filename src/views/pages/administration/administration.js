import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

import MuiTypography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import "./style.css";

import UserModal from "./user-modal";
import { useDispatch, useSelector } from "react-redux";
import { getMusician } from "store/actions/musicianActions";

const Administartion = ({ administration, members }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const musicianState = useSelector((state) => state.musician.musician);
  const [musician, setMusician] = useState();
  useEffect(() => {
    dispatch(getMusician({ artistName: "jeverson" }));
    setMusician(musicianState);
  }, []);

  useEffect(() => {
    setMusician(musicianState);
  }, [musicianState]);

  console.log("mu", musicianState);

  return (
    <div className="administration section">
      {modalShow && (
        <UserModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          members={members}
        />
      )}

      <MuiTypography variant="h4" gutterBottom>
        Administration
      </MuiTypography>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={8} className="admin-form-view">
          {(() => {
            if (musician != undefined && musician.length > 0) {
              return (
                <>
                  <div className="flex form-view">
                    <div className="label">StaksPay Id</div>
                    <div className="value">{musician[0].staksPayId}</div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">StaksPay Username</div>
                    <div className="value">{musician[0].userName}</div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">Artist Name (Public)</div>
                    <div className="value">{musician[0].artistName}</div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">Facebook Link</div>
                    <div className="value">
                      <a target="_blank" href={musician[0].facebookLink}>
                        {musician[0].facebookLink}
                      </a>
                    </div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">Hometown</div>
                    <div className="value">{musician[0].hometown}</div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">Genres</div>
                    <div className="value">{musician[0].genres}</div>
                  </div>
                </>
              );
            }
          })()}
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="flex members-section">
            <div>
              <MuiTypography variant="h5" gutterBottom>
                Members
              </MuiTypography>
            </div>
            <div>
              <Button variant="link" onClick={() => setModalShow(true)}>
                Discover
              </Button>
            </div>
          </div>
          {members &&
            members.length > 0 &&
            members.map((item) => {
              return (
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
                      <Button variant="link" onClick="">
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
};

Administartion.propTypes = {
  administration: PropTypes.object,
  members: PropTypes.array,
};

export default Administartion;
