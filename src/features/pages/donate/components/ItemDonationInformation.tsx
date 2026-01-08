import { Stack, Typography } from "@mui/material";

type ItemDonationInformationProps = {
  title?: string;
  description: string;
};

export function ItemDonationInformation({
  title = "Before donating",
  description,
}: ItemDonationInformationProps) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      textAlign="center"
      sx={{
        mx: "auto",
      }}
    >
      <Typography variant="h4" fontWeight={600}>
        {title}
      </Typography>

      <Typography color="text.secondary">{description}</Typography>
    </Stack>
  );
}
