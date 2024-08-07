const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const EditProfileMutation = async ({
  username,
  email,
  currentPassword,
  newPassword,
}) => {
  try {
    const response = await fetch(BASE_URL + "/api/users/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, currentPassword, newPassword }),
      credentials: "include",
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || "Network response was not ok");
    }
    return responseData;
  } catch (error) {
    throw new Error(error.message || " Error while updating profile");
  }
};

export default EditProfileMutation;
