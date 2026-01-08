import { Stack, Typography, Box } from "@mui/material";

type EventSectionProps = {
  title: string;
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
};

export function EventSection({ title, subtitle, description, children }: EventSectionProps) {
  return (
    <Stack spacing={4} alignItems="center">
      <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ maxWidth: 720 }}>
        {subtitle && (
          <Typography variant="overline" letterSpacing={1.2}>
            {subtitle}
          </Typography>
        )}

        <Typography variant="h5" fontWeight={600}>
          {title}
        </Typography>

        <Typography>{description}</Typography>
      </Stack>

      {children && <Box sx={{ width: "100%", maxWidth: 900 }}>{children}</Box>}
    </Stack>
  );
}
