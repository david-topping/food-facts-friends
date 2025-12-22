import { Box, Typography } from "@mui/material";
import { FOOTER_CONTENT } from "../../../content/footer.content";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 6,
        px: 2,
        bgcolor: "primary.main",
        borderTop: 1,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="primary.contrastText">
        {FOOTER_CONTENT.copyright(new Date().getFullYear())}
      </Typography>

      <Typography variant="body2" color="primary.contrastText" sx={{ mt: 1, opacity: 0.85 }}>
        {FOOTER_CONTENT.charityNumber}
      </Typography>
    </Box>
  );
}
