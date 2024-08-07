import { enqueueSnackbar } from "notistack";

export const validateSignup = (formData) => {
  const errors = [];

  if (!formData.username.trim()) {
    errors.push("Username is required.");
  }
  if (!formData.email.trim()) {
    errors.push("Valid email is required.");
  }
  if (!formData.password || formData.password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }
  if (formData.password !== formData.confirmPassword) {
    errors.push(" Password doesn't match, Please try again.");
  }
  errors.forEach((error) => enqueueSnackbar(error, { variant: "error" }));
  return errors.length === 0;
};

export const validateLogin = (formData) => {
  const errors = [];

  if (!formData.username.trim()) {
    errors.push("Username is required.");
  }
  if (!formData.password || formData.password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }
  errors.forEach((error) => enqueueSnackbar(error, { variant: "error" }));
  return errors.length === 0;
};
