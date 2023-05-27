import { useContext } from "react";
import { UserContext } from "../context/userContext";

// import axios from "axios";

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);

  // console.log(userData);

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await axios.get("/users/profile", {
  //         withCredentials: true,
  //       });
  //       setUser(response.data.user);
  //     } catch (error) {
  //       console.log("Failed to fetch user profile.");
  //     }
  //   };

  //   fetchUserProfile();
  // }, []);

  return (
    <div className="w-full flex flex-col items-center mx-auto mt-4">
      <h1 className="text-2xl">Profile</h1>
      {userData ? (
        <div className="pt-2 mt-2 border-t-2 border-black items-center flex flex-col">
          <p>Full Name: {userData.fullName}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
