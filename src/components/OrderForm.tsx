import { useForm } from "react-hook-form";
import Box from "./Box";
import { useState } from "react";
function OrderForm() {
  const title = "Rendelés";
  const [processing, setProcessing] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ fullName: string; email: string }>();

  const onSubmit = (data: { fullName: string; email: string }) => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      console.log("Megrendelés:", data);
      alert("Rendelés leadva");
    }, 3000);
  };

  return (
    <Box title={title}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="block font-semibold mb-1">Teljes név</label>
          <input
            {...register("fullName", { required: "A teljes név megadása kötelező" })}
            type="text"
            placeholder="Pl. Kovács Béla"
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg"
          />
          {errors.fullName && (
            <p className="text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">E-mail cím</label>
          <input
            {...register("email", {
              required: "Az e-mail megadása kötelező",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "A megadott e-mail cím érvénytelen" },
            })}
            type="email"
            placeholder="email@pelda.hu"
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg"
          />
          {errors.email && (
            <p className="text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {
          processing ?
            (<button
              disabled
              type="button"
              className="w-full px-3 py-2 font-semibold bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 cursor-pointer"
            >
              Feldolgozás...
            </button>) :
            (<button
              type="submit"
              className="w-full px-3 py-2 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Rendelés leadása

            </button>)
        }
      </form>
    </Box>
  );
}

export default OrderForm;