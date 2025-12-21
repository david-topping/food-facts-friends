import { animated } from "react-spring";
import useFadeInOnLoad from "../../hooks/useFadeInOnLoad";

interface BannerProps {
  imageSrc?: string;
  altText?: string;
  title?: string;
}

function Banner({
  imageSrc,
  altText = "Default alt text",
  title,
}: BannerProps) {
  const fadeIn = useFadeInOnLoad();

  return (
    <animated.div style={fadeIn}>
      {imageSrc && (
        <div className="row">
          <img src={imageSrc} alt={altText} className="img-fluid mt-2" />
        </div>
      )}
      {title && (
        <div className="row">
          <h2 className="heading page-title mt-5">{title}</h2>
        </div>
      )}
    </animated.div>
  );
}

export default Banner;
