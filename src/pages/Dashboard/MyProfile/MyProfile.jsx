import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

/* eslint-disable react/prop-types */
const MyProfile = () => {
  const [role] = useRole();
  const { user, loading } = useAuth();
  return (
    <div>
      {/* profile info */}
      <section className="h-60 bg-accent-400 p-4 flex flex-col lg:flex-row gap-4">
        <img className="w-64 object-cover" src={user?.photoURL} alt="user" />
        <div>
          <h2 className="font-bold text-text-50 text-2xl font-heading">
            {user?.displayName}
            <span>
              <i>({role})</i>
            </span>
          </h2>
          <h2 className="font-bold text-text-50 text-xl">{user?.email}</h2>
          <p className="font-bold text-text-50 text-xl">Agreement: </p>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
