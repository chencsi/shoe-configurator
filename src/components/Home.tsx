import { useState } from "react";
import ColorSelector from "./ColorSelector";
import OrderForm from "./OrderForm";
import ShoePreview from "./ShoePreview";
import type { OrderData, ShoeCustomization } from "../types/shoe";
import { soleOptions, topOptions } from "../data/shoeOptions";
import Box from "./Box";
import { Sparkles } from "lucide-react";
import emailjs from '@emailjs/browser';

function Home() {
  const [customization, setCustomization] = useState<ShoeCustomization>({
    sole: soleOptions[0],
    top: topOptions[0],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleOrderSubmit = async (formData: OrderData) => {
    setIsSubmitting(true);

    try {
      const templateParams = {
        customer_name: formData.customerName,
        customer_email: formData.customerEmail,
        sole_color: customization.sole.name,
        top_color: customization.top.name,
        to_email: import.meta.env.VITE_RECIPIENT_EMAIL,
        time: new Date().toLocaleString('hu-HU', { timeZone: 'Europe/Budapest' }),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Order sent successfully:', templateParams);
      setOrderSuccess(true);

    } catch (error) {
      console.error('Order submission error:', error);
      alert('An error occurred while submitting your order. Please try again.');
    } finally {
      setIsSubmitting(false); 
    }
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Order Successful!
            </h2>
            <p className="text-gray-600 mb-6">
            Thank you for your order! We will contact you shortly.
            </p>
            <button
            onClick={() => {
              setOrderSuccess(false);
              setCustomization({
              sole: soleOptions[0],
              top: topOptions[0],
              });
            }}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
            New Order
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 space-y-10">
      <div className="space-y-3 text-center">
        <h1 className="text-5xl md:text-6xl font-black">Shoe Configurator</h1>
        <p className="md:text-lg text-zinc-600">Design your custom shoe and order it now!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-0">
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
          <OrderForm
            onSubmit={handleOrderSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;