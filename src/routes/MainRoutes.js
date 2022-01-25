import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

// dashboard routing
const DashboardDefault = Loadable(
  lazy(() => import("views/dashboard/Default"))
);

// utilities routing
const UtilsTypography = Loadable(
  lazy(() => import("views/utilities/Typography"))
);
const UtilsColor = Loadable(lazy(() => import("views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("views/utilities/Shadow")));
const UtilsMaterialIcons = Loadable(
  lazy(() => import("views/utilities/MaterialIcons"))
);
const UtilsTablerIcons = Loadable(
  lazy(() => import("views/utilities/TablerIcons"))
);

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));
const Administration = Loadable(
  lazy(() => import("views/pages/administration"))
);
const Role = Loadable(lazy(() => import("views/pages/role")));
const CreateRole = Loadable(lazy(() => import("views/pages/role/CreatRole")));
const EditRole = Loadable(lazy(() => import("views/pages/role/EditRole")));

const Tenant = Loadable(lazy(() => import("views/pages/tenant")));
const CreateTenant = Loadable(
  lazy(() => import("views/pages/tenant/CreateTenant"))
);
const EditTenant = Loadable(
  lazy(() => import("views/pages/tenant/EditTenant"))
);

const Metadata = Loadable(lazy(() => import("views/pages/metadata/index")));
const CreateMetadata = Loadable(
  lazy(() => import("views/pages/metadata/CreateMetadata"))
);
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "/dashboard",
      element: <DashboardDefault />,
    },
    {
      path: "/utils/util-typography",
      element: <UtilsTypography />,
    },
    {
      path: "/utils/util-color",
      element: <UtilsColor />,
    },
    {
      path: "/utils/util-shadow",
      element: <UtilsShadow />,
    },
    {
      path: "/icons/tabler-icons",
      element: <UtilsTablerIcons />,
    },
    {
      path: "/icons/material-icons",
      element: <UtilsMaterialIcons />,
    },
    {
      path: "/sample-page",
      element: <SamplePage />,
    },
    {
      path: "/administration",
      element: <Administration />,
    },
    {
      path: "/role",
      element: <Role />,
    },
    {
      path: "/create-role",
      element: <CreateRole />,
    },
    {
      path: "/role/edit-role/:name",
      element: <EditRole />,
    },
    {
      path: "/tenant",
      element: <Tenant />,
    },
    {
      path: "/create-tenant",
      element: <CreateTenant />,
    },
    {
      path: "/metadata",
      element: <Metadata />,
    },
    {
      path: "/create-tenant",
      element: <CreateTenant />,
    },
    {
      path: "/tenant/edit-tenant/:name",
      element: <EditTenant />,
    },
    { path: "/create-metadata", element: <CreateMetadata /> },
  ],
};

export default MainRoutes;
