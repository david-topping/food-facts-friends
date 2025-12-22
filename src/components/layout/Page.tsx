import { Box } from "@mui/material";

type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return <Box component="main">{children}</Box>;
};
