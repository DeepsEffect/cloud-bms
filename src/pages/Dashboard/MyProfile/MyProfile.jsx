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
    return <Spinner />;
  }
  return (
    <div>
      {/* profile info */}
      <section className="lg:h-60 bg-accent-400 p-4 flex flex-col lg:flex-row gap-4">
        <img
          className="max-h-40 lg:max-h-full lg:w-64 object-cover"
          src={user?.photoURL}
          alt="user"
        />
        <div>
          <h2 className="font-bold text-text-50 text-2xl font-heading">
            {user?.displayName}
            <span>
              <i>({role})</i>
            </span>
          </h2>
          <h2 className="font-bold text-text-50 text-xl">{user?.email}</h2>
        </div>
      </section>
      {role === "user" || role === "member" ? (
        <AgreementInfo />
      ) : (
        <AdminProfile />
      )}
    </div>
  );
};

export default MyProfile;
