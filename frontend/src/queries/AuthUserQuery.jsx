const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const AuthUserQuery = async () => {
  try {
    const response = await fetch(BASE_URL + "/api/auth/me", {
      method: "GET",
      credentials: "include",
    });
    const responseData = await response.json();
    if (responseData.data === null) return null;
    if (!response.ok) {
      throw new Error(responseData.message || "Failed to authenticate user");
    }
    return responseData;
  } catch (error) {
    throw new Error(error.message || "Error fetching user data");
  }
};

export default AuthUserQuery;
