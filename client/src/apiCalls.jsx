export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    const response = await fetch("http://localhost:3500/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userCredentials),
    });

    const data = await response.json();
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
