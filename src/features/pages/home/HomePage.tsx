import { Page } from "../../../components/layout/Page";
import { Section } from "../../../components/layout/Section";
import homeHero from "../../../assets/images/hero/home_hero.webp";
import logo from "../../../assets/images/brand/logo.webp";
import { HeroImage } from "../../../components/hero/HeroImage";
import { HOME_CONTENT } from "../../../content/home.content";
import { HomeHeroIntro } from "./components/HeroIntro";
import { FindUs } from "./components/FindUs";
export const HomePage = () => {
  return (
    <Page>
      <HeroImage image={homeHero} />

      <Section variant="default" maxWidth="md">
        <HomeHeroIntro title={HOME_CONTENT.title} subText={HOME_CONTENT.subText} logo={logo} />
      </Section>

      <Section variant="dark" maxWidth="xl">
        <FindUs coordinates={{ lat: 55.83, lng: -3.22 }} />
      </Section>

      <Section variant="light">
        <HomeHeroIntro title={HOME_CONTENT.title} subText={HOME_CONTENT.subText} logo={logo} />
      </Section>
    </Page>
  );
};
