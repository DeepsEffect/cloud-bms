/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

export const ButtonPrimary = ({ content, size }) => {
  return (
    <Button
      size={size}
      className="flex text-sm items-center bg-primary-500 transition-colors"
    >
      {content}
    </Button>
  );
};

export default ButtonPrimary;
