import SupportersGallery from "../../components/ImageGallery/ImageGallery";
import supportersBanner from "../../assets/images/banners/supporters_banner.jpg";
import Banner from "../../components/Banner/Banner";

function Supporters() {
  const logos = Object.values(
    import.meta.glob("/src/assets/supporters-logos/*.png", { eager: true })
  ) as { default: string }[];

  return (
    <>
      <Banner
        imageSrc={supportersBanner}
        altText="Supporters Banner"
        title="Our Supporters Gallery"
      />

      <SupportersGallery logos={logos} />
    </>
  );
}

export default Supporters;
