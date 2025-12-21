import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeInfo from "../../components/HomeInfo/HomeInfo";
import OurLocation from "../../components/OurLocation/OurLocation";
import CommunityHubMessage from "../../components/InfoMessage/InfoMessage";
import Banner from "../../components/Banner/Banner";

import homeBanner from "../../assets/images/banners/home_banner.jpg";
import useFadeInOnLoad from "../../hooks/useFadeInOnLoad";
import { communityMessageText, homeInfoCardText } from "./HomeText";
import { animated } from "react-spring";

const Home: React.FC = () => {
  const fadeIn = useFadeInOnLoad();
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <Banner imageSrc={homeBanner} altText="Home Banner" />

      <Container className="mt-4">
        <animated.div style={fadeIn}>
          <Row>
            <Col>
              <CommunityHubMessage text={communityMessageText} />
            </Col>
          </Row>
        </animated.div>

        <animated.div style={fadeIn}>
          <Row className="mt-4">
            <Col>
              <HomeInfo cardData={homeInfoCardText} />
            </Col>
          </Row>
        </animated.div>

        <animated.div style={fadeIn}>
          <Row className="mt-4">
            <Col>
              <OurLocation
                center={{ lat: 55.82806634557245, lng: -3.2227402445162725 }}
                zoom={14}
                googleMapsApiKey={googleMapsApiKey}
                mapId="74ab8317d68dac1c"
              />
            </Col>
          </Row>
        </animated.div>
      </Container>
    </>
  );
};

export default Home;
