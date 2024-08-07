const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const LogoutMutation = async () => {
  try {
    const response = await fetch(BASE_URL + "/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || "Network response was not ok");
    }
    return responseData;
  } catch (error) {
    throw new Error(error.message || "Error logging out");
  }
};

export default LogoutMutation;
