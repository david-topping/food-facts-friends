import { Typography } from "@mui/material";
import { Page } from "../../../components/layout/Page";
import { Section } from "../../../components/layout/Section";
import homeHero from "../../../assets/images/hero/home_hero.jpg";
import { HeroImage } from "../../../components/hero/HeroImage";
import { HOME_CONTENT } from "../../../content/home.content";

export const HomePage = () => {
  return (
    <Page>
      <HeroImage image={homeHero} />

      <Section variant="default" maxWidth="xl">
        <Typography variant="h2">{HOME_CONTENT.title}</Typography>

        <Typography>{HOME_CONTENT.subText}</Typography>
      </Section>
    </Page>
  );
};
