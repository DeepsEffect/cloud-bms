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
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <section className="grid grid-cols-2 text-center">
          <h2 color="blue-gray" className="mb-2 ">
            Floor No: {room.floor_no}
          </h2>
          <h2 color="blue-gray" className="mb-2 ">
            Block Name: {room.block_name}
          </h2>
          <h2 color="blue-gray" className="mb-2 ">
            Apartment No: {room.apartment_no}
          </h2>
          <h2 color="blue-gray" className="mb-2 ">
            Rent: ${room.rent}
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
