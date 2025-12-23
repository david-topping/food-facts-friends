import { Box, Container } from "@mui/material";

type SectionVariant = "default" | "light" | "main" | "dark";

type SectionProps = {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: SectionVariant;
};

const sectionBg: Record<SectionVariant, string> = {
  default: "background.default",
  light: "secondary.light",
  main: "secondary.main",
  dark: "primary.main",
};

const sectionText: Record<SectionVariant, string> = {
  default: "text.primary",
  light: "text.primary",
  main: "text.primary",
  dark: "primary.contrastText",
};

export const Section = ({ children, maxWidth = "lg", variant = "default" }: SectionProps) => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: sectionBg[variant],
        color: sectionText[variant],
        py: { xs: 4, md: 10 },
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
};
