const authFrormReducer = (state, { type, payload }) => {
  switch (type) {
    case "FIRST_NAME":
      return { ...state, firstName: payload };
    case "LAST_NAME":
      return { ...state, lastName: payload };
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "CONFIRM_PASSWORD":
      return { ...state, confirmPassword: payload };

    default:
      throw new Error("Action type not found");
  }
};
export { authFrormReducer };
