import { Stack, Typography, Paper, Divider, Box } from "@mui/material";

type ItemDonationProps = {
  content: {
    title: string;
    note: string;
    categories: readonly {
      title: string;
      items: readonly string[];
    }[];
    beforeDonating: string;
  };
};

export function ItemDonation({ content }: ItemDonationProps) {
  return (
    <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h2" align="center">
          {content.title}
        </Typography>

        <Typography align="center" maxWidth={720}>
          {content.note}
        </Typography>
      </Stack>

      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 1000,
          p: { xs: 3, md: 5 },
          borderRadius: 3,
        }}
      >
        <Stack spacing={4}>
          {content.categories.map((category, index) => (
            <Box key={category.title}>
              <Typography variant="h5" gutterBottom>
                {category.title}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                {category.items.map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    sx={{
                      backgroundColor: "action.hover",
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 1,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>

              {index < content.categories.length - 1 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
}
