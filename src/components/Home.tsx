import Box from "./Box";

function Home() {
  return (
    <div className="py-10 space-y-10">
      <div className="space-y-3 text-center">
        <h1 className="text-6xl font-black">Cipő Konfigurátor</h1>
        <p className="text-lg text-zinc-600">Tervezd meg egyedi cipődet és rendeld meg most!</p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Box>Előnézet</Box>
        <div className="space-y-5">
          <Box>Konfigurátor</Box>
          <Box>Rendelés</Box>
        </div>
      </div>
    </div>
  )
}

export default Home;