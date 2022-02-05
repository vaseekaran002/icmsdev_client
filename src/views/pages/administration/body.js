import React from "react";
import PropTypes from "prop-types";

import Administartion from "./administration";
import Contracts from "./contract/index";
import Invoices from "./invoice/index";

import { Divider, Typography } from "@mui/material";

const Body = ({ administration, members, contracts, invoices }) => {
  return (
    <>
      <Administartion administration={administration} members={members} />
      <Divider />
      <Contracts contracts={contracts} />

      <Invoices invoices={invoices} />
    </>
  );
};

Body.propTypes = {
  administration: PropTypes.object,
  members: PropTypes.array,
  contracts: PropTypes.array,
  invoices: PropTypes.array,
};

export default Body;
