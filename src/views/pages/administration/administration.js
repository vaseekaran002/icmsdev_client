import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import MuiTypography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import "./style.css";
import ClipLoader from "react-spinners/ClipLoader";

import UserModal from "./user-modal";
import { useDispatch, useSelector } from "react-redux";
import { getMusician, getMusicianMembers } from "store/actions/musicianActions";
import { css } from "@emotion/react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  membersHeader: {
    display: "flex",
    alignItems: "center",
  },
  members: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "3%",
  },
  admin: {
    marginTop: "1%",
    marginBottom: "3%",
  },
  memberGrid: {
    "&&": {
      paddingTop: "0px",
    },
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.3em",
      height: "0.3em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
});

const Administartion = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch();
  const musicianState = useSelector((state) => state.musician.musician);
  const memberState = useSelector((state) => state.musician.members);
  const [musician, setMusician] = useState();
  const [members, setMembers] = useState();
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    dispatch(getMusician({ artistName: "prathyu" }));
    dispatch(getMusicianMembers("MUSIC-92"));
    setMusician(musicianState);
    setMembers(memberState);
  }, []);

  useEffect(() => {
    setMusician(musicianState);
  }, [musicianState]);

  useEffect(() => {
    setMembers(memberState);
    if (memberState != null && memberState.length > 0) {
      setLoading(false);
    }
  }, [memberState]);

  const override = css`
    text-align: center;
    position: relative;
    margin-top: 15%;
    margin-left: 50%;
  `;

  return (
    <div className="administration section">
      {modalShow && (
        <UserModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          members={members}
        />
      )}

      <Grid container spacing={gridSpacing}>
        <Grid className={classes.memberGrid} item xs={12} sm={6}>
          <div className={classes.admin}>
            <div className={classes.membersHeader}>
              <MuiTypography variant="h4">Administration</MuiTypography>
            </div>
          </div>

          <div className="flex form-view">
            <div className="label">StaksPay Id</div>
            {(() => {
              if (musician != undefined && musician.length > 0) {
                return (
                  <>
                    <div className="value">{musician[0].staksPayId}</div>
                  </>
                );
              }
            })()}
          </div>
          <div className="flex form-view">
            <div className="label">StaksPay Username</div>
            {(() => {
              if (musician != undefined && musician.length > 0) {
                return (
                  <>
                    <div className="value">{musician[0].userName}</div>
                  </>
                );
              }
            })()}
          </div>
          <div className="flex form-view">
            <div className="label">Artist Name (Public)</div>
            {(() => {
              if (musician != undefined && musician.length > 0) {
                return (
                  <>
                    <div className="value">{musician[0].artistName}</div>
                  </>
                );
              } else {
                return <ClipLoader color={"23C860"} size={20} />;
              }
            })()}
          </div>
          <div className="flex form-view">
            <div className="label">Facebook Link</div>
            <div className="value">
              {(() => {
                if (musician != undefined && musician.length > 0) {
                  return (
                    <>
                      {/* <a target="_blank" href={musician[0].facebookLink}>
                        {musician[0].facebookLink}
                      </a> */}
                      <Button
                        target="_blank"
                        style={{ marginLeft: "-6%" }}
                        href={musician[0].facebookLink}
                        color="primary"
                      >
                        {musician[0].facebookLink}
                      </Button>
                    </>
                  );
                }
              })()}
            </div>
          </div>
          <div className="flex form-view">
            <div className="label">Hometown</div>
            {(() => {
              if (musician != undefined && musician.length > 0) {
                return (
                  <>
                    <div className="value">{musician[0].hometown}</div>
                  </>
                );
              }
            })()}
          </div>
          <div className="flex form-view">
            <div className="label">Genres</div>
            {(() => {
              if (musician != undefined && musician.length > 0) {
                return (
                  <>
                    <div className="value">{musician[0].genres}</div>
                  </>
                );
              }
            })()}
          </div>
        </Grid>
        <Grid className={classes.memberGrid} item xs={12} sm={4}>
          <div className={classes.members}>
            <div className={classes.membersHeader}>
              <MuiTypography variant="h4">Members</MuiTypography>
            </div>
            <div>
              <Button color="primary" onClick={() => setModalShow(true)}>
                Discover
              </Button>
            </div>
          </div>
          {members &&
            members.length > 0 &&
            members.map((item) => {
              return (
                <div key={item.radaptiveId} className="flex members-list">
                  <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                  </div>
                  <div className="flex members-details">
                    <div>
                      <MuiTypography variant="body1" gutterBottom>
                        {item.artistName}
                      </MuiTypography>
                    </div>
                    <div>
                      <Button color="primary" onClick="">
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}

          <ClipLoader
            loading={loading}
            css={override}
            color={"23C860"}
            size={20}
          />
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
