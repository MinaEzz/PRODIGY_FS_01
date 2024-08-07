const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const LoginMutation = async ({ username, password }) => {
  try {
    const response = await fetch(BASE_URL + "/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || "Network response was not ok");
    }
    return responseData;
  } catch (error) {
    throw new Error(error.message || " Error while logging in");
  }
};

export default LoginMutation;
