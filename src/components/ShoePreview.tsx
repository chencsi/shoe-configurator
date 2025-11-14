import type { ShoeCustomization } from "../types/shoe";
import Box from "./Box";

interface ShoePreviewProps {
  customization: ShoeCustomization;
}

function ShoePreview({ customization }: ShoePreviewProps) {
  const title = "Előnézet";

  return (
    <Box title={title}>
      <div className="relative">
        <img src="/sole.png" className="absolute inset-0" alt="sole" />
        <img src="/top.png" className="relative" alt="top" />

        <div
          className="absolute inset-0"
          style={{
            backgroundColor: customization.top.color,
            opacity: 0.5,
            WebkitMaskImage: "url(/top.png)",
            maskImage: "url(/top.png)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: customization.sole.color,
            opacity: 0.5,
            WebkitMaskImage: "url(/sole.png)",
            maskImage: "url(/sole.png)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      </div>
    </Box>
  )
}

export default ShoePreview;