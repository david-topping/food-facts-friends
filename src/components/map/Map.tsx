import { Box, Link } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { appConfig } from "../../config/appConfig";

type props = {
  center: { lat: number; lng: number };
  zoom?: number;
};

export const Map = ({ center, zoom = 14 }: props) => {
  const googleMapsUrl = `https://www.google.com/maps?q=${center.lat},${center.lng}`;

  return (
    <Box>
      <Link
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={{ display: "block" }}
      >
        <Box
          sx={{
            height: 360,
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <LoadScript googleMapsApiKey={appConfig.googleMapsApiKey}>
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={center}
              zoom={zoom}
              options={{
                disableDefaultUI: true,
              }}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </Box>
      </Link>
    </Box>
  );
};
