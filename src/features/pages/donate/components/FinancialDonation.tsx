import { Stack, Typography, Paper, Button, Divider } from "@mui/material";
import { InstructionCard } from "../../../../components/instructionCard/InstructionCard";
import { InstructionRow } from "../../../../components/InstructionRow/InstructionRow";

type FinancialDonationProps = {
  content: {
    title: string;
    methods: readonly {
      id: string;
      title: string;
      icon: React.ElementType;
      rows?: readonly {
        label: string;
        value: string;
      }[];
      content?: readonly {
        type: "text" | "strong";
        value: string;
      }[];
    }[];
    actions: readonly {
      label: string;
      variant: "contained" | "outlined";
      href: string;
    }[];
  };
};

export function FinancialDonation({ content }: FinancialDonationProps) {
  return (
    <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h2" align="center">
          {content.title}
        </Typography>
      </Stack>

      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 900,
          p: { xs: 3, md: 5 },
          borderRadius: 3,
        }}
      >
        <Stack spacing={4}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            {content.methods.map((method) => {
              const Icon = method.icon;

              return (
                <InstructionCard key={method.id} icon={<Icon />} title={method.title}>
                  {method.rows?.map((row) => (
                    <InstructionRow key={row.label} label={row.label}>
                      {row.value}
                    </InstructionRow>
                  ))}

                  {method.content?.map((item, index) => (
                    <Typography key={index} fontWeight={item.type === "strong" ? 600 : undefined}>
                      {item.value}
                    </Typography>
                  ))}
                </InstructionCard>
              );
            })}
          </Stack>

          <Divider />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            {content.actions.map((action) => (
              <Button key={action.label} variant={action.variant} size="large" href={action.href}>
                {action.label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
