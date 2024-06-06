/* eslint-disable react/prop-types */
const MyProfile = ({role}) => {
  return (
    <div>
      {/* profile info */}
      <section className="min-h-80 bg-accent-400">
        {role === "member" ? <h2>role:{role}</h2> : <p>user</p>}
      </section>
    </div>
  );
};

export default MyProfile;
