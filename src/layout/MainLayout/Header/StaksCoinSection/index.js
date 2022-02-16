// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { Avatar, ButtonBase, Tooltip } from "@mui/material";

// third-party

// project imports

// assets
import {
  IconShoppingCartDiscount,
  IconShoppingCartPlus,
  IconCoin,
  IconGift,
} from "@tabler/icons";
import { shouldForwardProp } from "@mui/system";

// styles
const AvatarStyle = styled(Avatar, { shouldForwardProp })(({ theme }) => ({
  ...theme.typography.commonAvatar,
  ...theme.typography.mediumAvatar,
  transition: "all .2s ease-in-out",
  background: theme.palette.custom.dark,
  color: theme.palette.custom.light,
  '&[aria-controls="menu-list-grow"],&:hover': {
    background: theme.palette.custom.light,
    color: theme.palette.custom.dark,
  },
}));

const ButtonBaseStyle = styled(ButtonBase, { shouldForwardProp })(
  ({ theme }) => ({
    borderRadius: "12px",
    marginLeft: 16,
    [theme.breakpoints.down("md")]: {
      marginLeft: 8,
    },
  })
);

const StaksCoinSection = () => {
  const theme = useTheme();

  return (
    <>
      <Tooltip title="Buy Stakscoin" arrow>
        <ButtonBase
          sx={{
            borderRadius: "12px",
            [theme.breakpoints.down("md")]: {
              ml: 1.5,
            },
          }}
        >
          <AvatarStyle variant="rounded" aria-haspopup="true" color="inherit">
            <IconShoppingCartDiscount stroke={1.5} size="1.3rem" />
          </AvatarStyle>
        </ButtonBase>
      </Tooltip>
      <Tooltip title="Sell Stakscoin" arrow>
        <ButtonBaseStyle>
          <AvatarStyle variant="rounded" aria-haspopup="true" color="inherit">
            <IconShoppingCartPlus stroke={1.5} size="1.3rem" />
          </AvatarStyle>
        </ButtonBaseStyle>
      </Tooltip>

      <Tooltip title="Gift" arrow>
        <ButtonBaseStyle>
          <AvatarStyle variant="rounded" aria-haspopup="true" color="inherit">
            <IconGift stroke={1.5} size="1.3rem" />
          </AvatarStyle>
        </ButtonBaseStyle>
      </Tooltip>

      <Tooltip title="Coin" arrow>
        <ButtonBaseStyle>
          <AvatarStyle variant="rounded" aria-haspopup="true" color="inherit">
            <IconCoin stroke={1.5} size="1.3rem" />
          </AvatarStyle>
        </ButtonBaseStyle>
      </Tooltip>
    </>
  );
};

export default StaksCoinSection;
