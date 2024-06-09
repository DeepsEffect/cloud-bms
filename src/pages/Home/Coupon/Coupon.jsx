import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
const Coupon = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    toast.success('text copied')
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    // <!-- component -->
    <div className="lg:mt-10">
      <div className="bg-gradient-to-br from-primary-600 to-accent-600 text-white text-center py-10 px-20 rounded-lg shadow-md relative">
        <h2 className="max-w-lg mx-auto mb-4 rounded-lg text-xl">
          Summer sale offer!
        </h2>
        <h3 className=" text-xl lg:text-2xl font-semibold mb-4">
          20% off if you apply the coupon below!
        </h3>
        <div className="flex items-center space-x-2 mb-6">
          <span
            id="cpnCode"
            className="border-dashed border text-white px-4 py-2 rounded-l"
          >
            could-stinger
          </span>
          <CopyToClipboard text="could-stinger" onCopy={handleCopy}>
            <span className="border border-white bg-white text-primary-600 px-4 py-2 rounded-r cursor-pointer">
              {copied ? "Copied!" : "Copy Code"}
            </span>
          </CopyToClipboard>
        </div>
        <p className="text-sm">Valid Till: 4Dec, 2024</p>

        <div className="lg:w-12 lg:h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
        <div className="lg:w-12 lg:h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
      </div>
    </div>
  );
};

export default Coupon;
