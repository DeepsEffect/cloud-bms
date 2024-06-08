import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const CouponModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmitCoupon = (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const discount = form.discount.value;
    const desc = form.desc.value;
    const dataAdded = new Date();
    const couponData = { code, discount, desc, dataAdded };
    console.log(couponData);
    // send coupon data to the backend
    axiosSecure
      .post("/coupon", couponData)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Coupon added successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} className="bg-accent-600">
        Open Dialog
      </Button>
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative m-4 lg:w-2/5 lg:min-w-[40%] lg:max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
          >
            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900  justify-center">
              Add Coupon
            </div>
            <form
              onSubmit={handleSubmitCoupon}
              className="space-y-6 lg:w-3/4 mx-auto"
            >
              <div className="relative w-full p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                <Input
                  type="test"
                  name="code"
                  variant="static"
                  placeholder="Coupon Code"
                />
                <Input
                  type="number"
                  name="discount"
                  variant="static"
                  placeholder="Coupon Discount"
                />
                <Textarea
                  type="text"
                  name="desc"
                  variant="static"
                  placeholder="Coupon Description"
                  maxLength={200}
                />
              </div>
              <div className="flex items-center justify-center p-4 shrink-0 text-blue-gray-500">
                <button
                  onClick={handleClose}
                  className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponModal;
