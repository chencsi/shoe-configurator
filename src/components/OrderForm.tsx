import { useForm } from "react-hook-form";
import Box from "./Box";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
function OrderForm() {
  const title = "Ordering";
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
      console.log("Order:", data);
      alert("Order placed successfully");
    }, 3000);
  };

  return (
    <Box title={title}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="block font-semibold mb-1">Full name</label>
          <input
            {...register("fullName", { required: "Full name is required" })}
            type="text"
            placeholder="e.g. John Doe"
            className="w-full px-4 py-2 border border-zinc-300 outline-none focus:ring-1 focus:shadow ring-blue-500 rounded-lg"
          />
          {errors.fullName && (
            <p className="text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Email address</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "The provided email address is invalid" },
            })}
            type="email"
            placeholder="email@example.com"
            className="w-full px-4 py-2 border border-zinc-300 outline-none focus:ring-1 focus:shadow ring-blue-500 rounded-lg"
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
              className="w-full px-3 py-2 font-semibold bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 cursor-pointer flex flex-row gap-3 justify-center items-center"
            >
              <LoaderCircle className="animate-spin" />
              <span>Processing...</span>
            </button>) :
            (<button
              type="submit"
              className="w-full px-3 py-2 font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              <span>Place order</span>
            </button>)
        }
      </form>
    </Box>
  );
}

export default OrderForm;