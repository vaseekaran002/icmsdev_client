import React from 'react';
import PropTypes from 'prop-types';

import MuiTypography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import './style.css';

const Administartion = ({administration, members}) => {

    return (
        <div className="administration section">
          <MuiTypography variant="h4" gutterBottom>
              Administration
          </MuiTypography>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={8} className="admin-form-view">
              {administration && 
                <>
                  <div className="flex form-view">
                    <div className="label">StaksPay Id</div> 
                    <div className="value">{administration.staksPayId}</div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">StaksPay Username</div> 
                    <div className="value">{administration.userName}</div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">Artist Name (Public)</div> 
                    <div className="value">{administration.artistName}</div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">Facebook Link</div> 
                    <div className="value">
                      <a target="_blank" href={administration.facebookLink}>{administration.facebookLink}</a>
                    </div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">Hometown</div> 
                    <div className="value">{administration.hometown}</div>
                  </div>
                  <div className="flex form-view">
                    <div className="label">Genres</div> 
                    <div className="value">{administration.genres}</div>
                  </div>
                </>
              } 
            </Grid>
            <Grid item xs={12} sm={4}>
            <div className="flex members-section">
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
                          <a href={item.artistName}>Manage</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Grid>
          </Grid>
          
        </div>
    );
}

Administartion.propTypes = {
  administration: PropTypes.object,
  members: PropTypes.array
};

export default Administartion;