import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./ga";

export function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}
