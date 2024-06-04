/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

const ApartmentCard = ({ room }) => {
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
