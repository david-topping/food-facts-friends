import { Stack, Typography, Box } from "@mui/material";

type OpeningHour = {
  day: string;
  time: string;
};

type OpeningHoursProps = {
  hours: readonly OpeningHour[];
};

export function OpeningHours({ hours }: OpeningHoursProps) {
  return (
    <Stack spacing={1}>
      {hours.map(({ day, time }) => (
        <Box
          key={day}
          display="flex"
          justifyContent="space-between"
          sx={{
            py: 1,
          }}
        >
          <Typography fontWeight={500}>{day}</Typography>
          <Typography>{time}</Typography>
        </Box>
      ))}
    </Stack>
  );
}
