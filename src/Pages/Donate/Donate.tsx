import Banner from "../../components/Banner/Banner";
import DonateBanner from "../../assets/images/banners/donate_banner.jpg";
import IconCardGrid from "../../components/IconCardGrid/IconCardGrid";
import { donationOptions } from "./DonationOptions";

function Donate() {
  return (
    <>
      <Banner
        imageSrc={DonateBanner}
        altText="Supporters Banner"
        title="How You Can Help"
      />
      <IconCardGrid donationOptions={donationOptions} />
    </>
  );
}

export default Donate;
