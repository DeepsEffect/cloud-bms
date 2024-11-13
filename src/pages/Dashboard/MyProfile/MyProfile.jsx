import { Spinner } from "@material-tailwind/react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import AdminProfile from "../Admin/AdminProfile/AdminProfile";
import AgreementInfo from "./AgreementInfo/AgreementInfo";

/* eslint-disable react/prop-types */
const MyProfile = () => {
  const [role] = useRole();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Profile Info */}
      <section className="lg:h-60 bg-accent-600 p-4 flex flex-col lg:flex-row gap-6 items-center lg:items-start shadow-md">
        <img
          className="h-40 w-40 lg:w-64 lg:h-full object-cover rounded-md"
          src={user?.photoURL || "/path/to/default-image.jpg"} // Fallback image if user has no photo
          alt="user profile"
        />
        <div>
          <h2 className="text-2xl font-bold text-text-50 font-heading">
            {user?.displayName}
            {role && (
              <span className="text-lg text-blue-gray-200 italic ml-2">
                ({role})
              </span>
            )}
          </h2>
          <p className="text-xl text-text-50">{user?.email}</p>
        </div>
      </section>

      {/* Role-based Component Rendering */}
      <section>
        {role && <AgreementInfo />}
        {role === "admin" && <AdminProfile />}
      </section>
    </div>
  );
};

export default MyProfile;
