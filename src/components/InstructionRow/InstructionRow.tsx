import { Stack, Typography } from "@mui/material";

type InstructionRowProps = {
  label: string;
  children: React.ReactNode;
};

export function InstructionRow({ label, children }: InstructionRowProps) {
  return (
    <Stack direction="row" spacing={1}>
      <Typography color="text.secondary" minWidth={120}>
        {label}:
      </Typography>
      <Typography fontWeight={600}>{children}</Typography>
    </Stack>
  );
}
