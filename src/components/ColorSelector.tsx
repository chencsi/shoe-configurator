import Box from "./Box";

function ColorSelector() {
  const title = "Testreszabás";

  return (
    <Box title={title}>
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
  )
}

export default ColorSelector;