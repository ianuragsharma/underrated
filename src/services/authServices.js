import axios from "axios";

const loginService = async (
  email,
  password,
  setUser,
  navigate,
  setEncodedToken,
  showToast,
  location
) => {
  try {
    const { data } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    setUser(data.foundUser);
    localStorage.setItem("token", data.encodedToken);
    setEncodedToken(data.encodedToken);
    navigate(location.state?.from?.pathname ?? "/", { replace: true });
    showToast(
      "success",
      `Welcome back ${data.foundUser.firstName} ${data.foundUser.lastName}`
    );
  } catch (error) {
    showToast("error", "Email or password is incorrect");
  }
};

const signupService = async (
  email,
  firstName,
  lastName,
  password,
  setUser,
  navigate,
  showToast,
  setEncodedToken,
  location
) => {
  try {
    const { data } = await axios.post("/api/auth/signup", {
      email,
      firstName,
      lastName,
      password,
    });
    setUser(data.createdUser);
    localStorage.setItem("token", data.encodedToken);
    setEncodedToken(data.encodedToken);
    navigate(location.state?.from?.pathname ?? "/", { replace: true });
    showToast(
      "success",
      `Welcome to ezBuy ${data.createdUser.firstName} ${data.createdUser.lastName}`
    );
  } catch (error) {
    error.response.status === 422
      ? showToast("error", "Email already Exist")
      : showToast("error", error);
  }
};
export { loginService, signupService };
