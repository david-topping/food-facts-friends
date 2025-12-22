import { Box, Container } from "@mui/material";

type SectionVariant = "default" | "muted" | "paper" | "emphasis";

type SectionProps = {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: SectionVariant;
};

const sectionBg: Record<SectionVariant, string> = {
  default: "background.default",
  muted: "grey.100",
  paper: "background.paper",
  emphasis: "primary.main",
};

export const Section = ({ children, maxWidth = "lg", variant = "default" }: SectionProps) => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: sectionBg[variant],
        py: { xs: 4, md: 10 },
        color: variant === "emphasis" ? "primary.contrastText" : "text.primary",
      }}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
};
