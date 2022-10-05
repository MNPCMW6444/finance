import Box from "@mui/material/Box";
import NeurobicaLogoAsset from "./logo512c.png";

export default function NeurobicaLogo({ height, width }: any) {
  return (
    <Box
      component="img"
      alt="Neurobica Logo"
      src={NeurobicaLogoAsset}
      width={width}
      height={height}
    />
  );
}
