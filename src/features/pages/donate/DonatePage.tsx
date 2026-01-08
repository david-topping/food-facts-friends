import { Page } from "../../../components/layout/Page";
import { HeroText } from "../../../components/hero/HeroText";
import { DONATE_CONTENT } from "../../../content/donate.content";
import { Section } from "../../../components/layout/Section";
import Reveal from "../../../components/animation/Reveal";
import { FinancialDonation } from "./components/FinancialDonation";
import { ItemDonation } from "./components/ItemDonation";
import { ItemDonationInformation } from "./components/ItemDonationInformation";

// TODO: update this ;)
export const DonatePage = () => {
  return (
    <Page>
      <HeroText title={DONATE_CONTENT.hero.title} subtitle={DONATE_CONTENT.hero.subTitle} />

      <Section>
        <Reveal>
          <FinancialDonation content={DONATE_CONTENT.financialDonation} />
        </Reveal>
      </Section>

      <Section variant="dark">
        <Reveal direction="left">
          <ItemDonation content={DONATE_CONTENT.itemDonation} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <ItemDonationInformation description={DONATE_CONTENT.itemDonation.beforeDonating} />
        </Reveal>
      </Section>
    </Page>
  );
};
