import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = "https://cbnncff2-7114.euw.devtunnels.ms";

const ProfileHeadBar = () => {
  const { data: user } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await fetch(API_BASE_URL+"/api/Auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch user");
      return res.json();
    },
  });
  return (
    <div className="headBar profileHeadBar">
      <h1 className="profileName">{user?.username}'s recipes</h1>
      {/* <img src={user?.profileImageUrl} alt={user?.username} className="profileImage"/> */}
    </div>
  );
};

export default ProfileHeadBar;
