import type { ShoeCustomization } from "../types/shoe";
import Box from "./Box";

interface ShoePreviewProps {
  customization: ShoeCustomization;
}

function ShoePreview({ customization }: ShoePreviewProps) {
  const title = "Előnézet";

  return (
    <Box title={title}>
      <pre>{JSON.stringify(customization, null, 2)}</pre>
    </Box>
  )
}

export default ShoePreview;