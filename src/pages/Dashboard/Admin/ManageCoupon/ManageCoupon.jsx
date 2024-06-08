import { IconButton, Spinner, Tooltip } from "@material-tailwind/react";
import DashboardTitle from "../../Common/DashboardTitle/DashboardTitle";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ManageCoupon = () => {
  const TABLE_HEAD = ["Coupons Code", "Discount", "Description", "Action"];

  // get all the coupons
  const axiosSecure = useAxiosSecure();
  const {
    data: coupons = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/coupons`);
      return data;
    },
  });
  // console.log(coupons);

  // remove coupon
  const handleRemoveCoupon = (_id) => {
    // console.log(_id);
    axiosSecure
      .delete(`/coupon/${_id}`)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          toast.success("Coupon deleted successfully");
          refetch();
        }
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <DashboardTitle
        title={"total coupons"}
        coupons={true}
        measure={coupons}
        refetch={refetch}
      />
      {/* table */}
      <section className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md h-full w-full overflow-scroll lg:overflow-hidden">
        <table className="w-full min-w-max table-auto text-left ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, idx) => (
                <th
                  key={idx}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <div
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {coupons?.map(({ code, discount, desc, _id }) => (
              //   index
              <tr key={_id} className="even:bg-blue-gray-50/50 overflow-hidden">
                <td className="p-4">
                  <div color="blue-gray" className="font-normal">
                    {code}
                  </div>
                </td>
                <td className="p-4">
                  <div color="blue-gray" className="font-normal">
                    {discount}%
                  </div>
                </td>
                <td className="p-4">
                  <Tooltip content={desc}>
                    <div color="blue-gray" className="font-normal">
                      {desc?.length > 70 ? <>{desc?.slice(75)}...</> : desc}
                    </div>
                  </Tooltip>
                </td>
                <td className="p-4">
                  <Tooltip content="delete coupon">
                    <IconButton
                      onClick={() => handleRemoveCoupon(_id)}
                      className="bg-red-600"
                    >
                      <MdDelete className="text-xl" />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ManageCoupon;
