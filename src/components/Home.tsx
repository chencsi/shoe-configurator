import { useState } from "react";
import ColorSelector from "./ColorSelector";
import OrderForm from "./OrderForm";
import ShoePreview from "./ShoePreview";
import type { ShoeCustomization } from "../types/shoe";
import { soleOptions, topOptions } from "../data/shoeOptions";
import Box from "./Box";

function Home() {
  const [customization, setCustomization] = useState<ShoeCustomization>({
    sole: soleOptions[0],
    top: topOptions[0],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  return (
    <div className="py-10 space-y-10">
      <div className="space-y-3 text-center">
        <h1 className="text-6xl font-black">Shoe Configurator</h1>
        <p className="text-lg text-zinc-600">Design your custom shoe and order it now!</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <ShoePreview customization={customization} />
        <div className="space-y-10">
          <Box title="Customization">
            <ColorSelector
              title="Top color"
              options={topOptions}
              selectedId={customization.top.id}
              onSelect={(option) =>
                setCustomization({ ...customization, top: option })
              }
            />
            <ColorSelector
              title="Sole Color"
              options={soleOptions}
              selectedId={customization.sole.id}
              onSelect={(option) =>
                setCustomization({ ...customization, sole: option })
              }
            />
          </Box>
          <OrderForm />
        </div>
      </div>
    </div>
  )
}

export default Home;