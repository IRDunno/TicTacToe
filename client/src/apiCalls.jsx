import { LoginStart, LoginSuccess, LoginFailure } from "./context/AuthActions";
import { toast } from "react-toastify";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch(LoginStart());

  try {
    const response = await fetch("http://localhost:3500/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userCredentials),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(LoginSuccess(data));
      toast.success("User Logged In");
    } else {
      const data = await response.json();
      dispatch(LoginFailure(data.message));
      toast.error("Invalid Credentials");
    }
  } catch (error) {
    dispatch(LoginFailure(error));
    toast.error(error);
  }
};
