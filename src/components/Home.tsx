import ColorSelector from "./ColorSelector";
import OrderForm from "./OrderForm";
import ShoePreview from "./ShoePreview";

function Home() {
  return (
    <div className="py-10 space-y-10">
      <div className="space-y-3 text-center">
        <h1 className="text-6xl font-black">Cipő Konfigurátor</h1>
        <p className="text-lg text-zinc-600">Tervezd meg egyedi cipődet és rendeld meg most!</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <ShoePreview />
        <div className="space-y-10">
          <ColorSelector />
          <OrderForm />
        </div>
      </div>
    </div>
  )
}

export default Home;