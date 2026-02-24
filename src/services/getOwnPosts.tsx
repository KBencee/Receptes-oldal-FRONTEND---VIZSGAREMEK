
const API_BASE_URL = "https://cbnncff2-7114.euw.devtunnels.ms/api";

const getOwnPosts = async () => {
  const accessToken = localStorage.getItem("accessToken");
      try {
        const response = await fetch(`${API_BASE_URL}/api/OwnPosts`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch own posts");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching own posts:", error);
  return (
    []
  )
};
}

export default getOwnPosts