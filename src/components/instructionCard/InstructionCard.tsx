import { Box, Paper, Stack, Typography } from "@mui/material";

type InstructionCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

export function InstructionCard({ icon, title, children }: InstructionCardProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        flex: 1,
        p: 3,
        borderRadius: 2,
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box color="primary.main">{icon}</Box>
          <Typography variant="h6">{title}</Typography>
        </Stack>

        <Stack spacing={1}>{children}</Stack>
      </Stack>
    </Paper>
  );
}
