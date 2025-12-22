import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { APP_ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: APP_ROUTES.map(({ path, element }) => ({
      path,
      element,
    })),
  },
]);
