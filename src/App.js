import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// routing
import Routes from "routes";

// defaultTheme
import themes from "themes";

// project imports
import NavigationScroll from "layout/NavigationScroll";
import axios from "axios";

import { ICMS_USER_KEY } from "appConstants";

// ==============================|| APP ||============================== //

axios.interceptors.request.use((req) => {
  if (!req.url.includes("auth")) {
    const icmsUser = JSON.parse(localStorage.getItem(ICMS_USER_KEY) || "{}");
    let token = "";
    if (icmsUser && Object.keys(icmsUser).length > 0) {
      token = `${icmsUser.type} ${icmsUser.accessToken}`;
    }
    req.headers.Authorization = token;
  }
  return req;
});

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
