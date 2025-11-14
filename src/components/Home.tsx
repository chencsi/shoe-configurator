import Box from "./Box";

function Home() {
  return (
    <div className="py-10 space-y-10">
      <div className="space-y-3 text-center">
        <h1 className="text-6xl font-black">Cipő Konfigurátor</h1>
        <p className="text-lg text-zinc-600">Tervezd meg egyedi cipődet és rendeld meg most!</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <Box title="Előnézet">
        </Box>
        <div className="space-y-10">
          <Box title="Testreszabás">
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-lg font-semibold">Felső színe</p>
                <div className="grid grid-cols-2 gap-3">
                  {["fehér", "fekete", "barna"].map(color => (
                    <div key={color} className="flex flex-row items-center gap-3 border border-zinc-300 rounded-2xl p-3">
                      <div className="h-15 w-15 border border-2 border-zinc-300 rounded-full" />
                      <p className="text-xl">{color}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Talp színe</p>
                <div className="grid grid-cols-2 gap-3">
                  {["fehér", "fekete", "barna"].map(color => (
                    <div key={color} className="flex flex-row items-center gap-3 border border-zinc-300 rounded-2xl p-3">
                      <div className="h-15 w-15 border border-2 border-zinc-300 rounded-full" />
                      <p className="text-xl">{color}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Box>
          <Box title="Rendelés">
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Home;