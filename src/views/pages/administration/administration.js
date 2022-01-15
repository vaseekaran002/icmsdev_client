import React from 'react';
import PropTypes from 'prop-types';

import MuiTypography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import './style.css';

const Administartion = ({administration, members}) => {

    return (
        <>
          <MuiTypography variant="h4" gutterBottom>
              Administration
          </MuiTypography>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={8}>
              {administration && 
                <>
                  <div>
                    <span>StaksPay Id</span> {administration.staksPayId}
                  </div>
                  <div>
                    <span>StaksPay Username</span> {administration.userName}
                  </div>
                  <div>
                    <span>Artist Name (Public)</span> {administration.artistName}
                  </div>
                  <div>
                    <span>Facebook Link</span> <a target="_blank" href={administration.facebookLink}>{administration.facebookLink}</a>
                  </div>
                  <div>
                    <span>Hometown</span> {administration.hometown}
                  </div>
                  <div>
                    <span>Genres</span> {administration.genres}
                  </div>
                </>
              } 
            </Grid>
            <Grid item xs={12} sm={4}>
            <div className="flex">
              <div>
                <MuiTypography variant="h5" gutterBottom>
                    Members
                </MuiTypography>
              </div>
              <div>
                <a href="#">Discover</a>
              </div>
            </div>
              {members && members.length > 0 && 
                members.map(item => {
                  return (
                    <div className="members-container"> 
                      <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                      </div>
                      <div className="flex">
                        <div>
                          <MuiTypography variant="h5" gutterBottom>
                              {item.artistName}
                          </MuiTypography>
                        </div>
                        <div>
                          <a href={item.artistName}>Manage</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Grid>
          </Grid>
          
        </>
    );
}

Administartion.propTypes = {
  administration: PropTypes.object,
  members: PropTypes.array
};

export default Administartion;