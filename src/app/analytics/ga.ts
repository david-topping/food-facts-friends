import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

export const initGA = () => {
  if (!GA_ID) {
    console.warn("GA ID not set");
    return;
  }

  ReactGA.initialize(GA_ID);
};

export const trackPageView = (path: string) => {
  if (!GA_ID) return;

  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string
) => {
  if (!GA_ID) return;

  ReactGA.event({
    action,
    category,
    label,
  });
};
