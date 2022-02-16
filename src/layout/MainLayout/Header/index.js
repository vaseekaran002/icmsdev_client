import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";

// project imports
import LogoSection from "../LogoSection";
import SearchSection from "./SearchSection";
import ProfileSection from "./ProfileSection";
import NotificationSection from "./NotificationSection";

// assets
import { IconMenu2 } from "@tabler/icons";
import StaksCoinSection from "./StaksCoinSection";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const useStyles = makeStyles({
  mainHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeader: {
    display: "inline-flex",
    alignItems: "center",
  },
  centerAlign: {
    alignItems: "center",
  },
});

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      {/* logo & toggler button */}
      <Box className={classes.mainHeader}>
        <Box className={classes.subHeader}>
          <Box
            className={classes.centerAlign}
            sx={{
              width: 228,
              display: "flex",
              [theme.breakpoints.down("md")]: {
                width: "auto",
              },
            }}
          >
            <ButtonBase sx={{ borderRadius: "8px", overflow: "hidden" }}>
              <Avatar
                variant="rounded"
                sx={{
                  ...theme.typography.commonAvatar,
                  ...theme.typography.mediumAvatar,
                  transition: "all .2s ease-in-out",
                  background: theme.palette.custom.dark,
                  color: theme.palette.custom.light,
                  "&:hover": {
                    background: theme.palette.custom.light,
                    color: theme.palette.custom.dark,
                  },
                }}
                onClick={handleLeftDrawerToggle}
                color="inherit"
              >
                <IconMenu2 stroke={1.5} size="1.3rem" />
              </Avatar>
            </ButtonBase>
            <Box
              component="span"
              sx={{
                display: { xs: "none", md: "block", textAlign: "center" },
                flexGrow: 1,
              }}
            >
              <LogoSection />
            </Box>
          </Box>

          {/* header search */}
          <SearchSection />
        </Box>
        {/* header stak coins, profile and notifications */}
        <Box className={classes.subHeader}>
          <StaksCoinSection />
          {/* <NotificationSection /> */}
          <ProfileSection />
        </Box>
      </Box>
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
