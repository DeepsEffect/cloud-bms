/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Spinner,
} from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useRole from "../../hooks/useRole";

const ApartmentCard = ({ room }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [role, isLoading] = useRole();

  if (isLoading) {
    return <Spinner />;
  }
  const handleAgreement = (_id) => {
    if (role === "admin") {
      toast.error("Admin can't agreement :3");
      return;
    }
    if (!user) {
      return navigate("/login");
    }

    const agreementData = {
      userId: _id,
      userName: user.displayName,
      userEmail: user.email,
      floor_no: room.floor_no,
      block_name: room.block_name,
      apartment_no: room.apartment_no,
      rent: room.rent,
      status: "pending",
      agreementDate: new Date(),
    };
    // console.log(agreementData);
    axiosSecure
      .post("/agreement", agreementData)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("agreement added successfully");
        }
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      });
  };

  return (
    <Card className="mt-6 lg:w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          className="object-cover object-center h-full w-full"
          src={room.image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <section className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:font-bold">
          <h2 color="blue-gray" className="mb-2 ">
            Floor No:{" "}
            <span className="ml-2 mr-3 rounded-full bg-orange-100 px-2 py-0.5 text-orange-900">
              {room.floor_no}
            </span>
          </h2>
          <h2 color="blue-gray" className="mb-2 ">
            Block Name:{" "}
            <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
              {room.block_name}
            </span>
          </h2>
          <h2 color="blue-gray" className="mb-2 ">
            Apartment:{" "}
            <span className="ml-2 mr-3 rounded-full bg-accent-100 px-2 py-0.5 text-accent-900">
              {room.apartment_no}
            </span>
          </h2>
          <h2 color="blue-gray" className="mb-2 ">
            Rent:{" "}
            <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
              ${room.rent}
            </span>
          </h2>
        </section>
      </CardBody>
      <CardFooter className="pt-0 w-full">
        <Button
          onClick={() => handleAgreement(room._id)}
          size="sm"
          className="w-full text-sm bg-primary-500 hover:bg-secondary"
        >
          Agreement
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ApartmentCard;
