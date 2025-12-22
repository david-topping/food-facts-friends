import { Typography, Stack, Box, Slide } from "@mui/material";
import { Page } from "../../../components/layout/Page";
import { Section } from "../../../components/layout/Section";
import homeHero from "../../../assets/images/hero/home_hero.webp";
import logo from "../../../assets/images/logo.webp";
import { HeroImage } from "../../../components/hero/HeroImage";
import { HOME_CONTENT } from "../../../content/home.content";

export const HomePage = () => {
  return (
    <Page>
      <HeroImage image={homeHero} />

      <Section variant="default" maxWidth="md">
        <Stack direction="row" spacing={4} alignItems="center" justifyContent="space-between">
          <Slide direction="right" in={true} timeout={600}>
            <Box maxWidth={600}>
              <Typography variant="h2" gutterBottom>
                {HOME_CONTENT.title}
              </Typography>
              <Typography color="text.secondary">{HOME_CONTENT.subText}</Typography>
            </Box>
          </Slide>

          <Slide direction="left" in={true} timeout={600}>
            <Box
              component="img"
              src={logo}
              alt="Food Facts Friends logo"
              sx={{
                width: { xs: 140, md: 180 },
                height: "auto",
                flexShrink: 0,
              }}
            />
          </Slide>
        </Stack>
      </Section>
    </Page>
  );
};
