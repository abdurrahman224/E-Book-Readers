import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      setProfile(JSON.parse(storedUser));
    }
  }, []);

  if (!profile) {
    return <p className="text-center text-xl mt-10">Please Login</p>;
  }
// const handleLogout = () => {
//   localStorage.removeItem("userProfile");
//   auth.signOut();
// };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg mt-10">
     
       <h3 className="mt-4 text-xl font-medium text-center py-4">{profile.name || "Unknown"}</h3>
   

      <div className="flex flex-col items-center py-4">
        <img
          src={profile.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full shadow-md"
        />

        
        <p className="text-gray-600 py-6 ">{profile.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
