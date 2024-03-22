export const signup = (req, res) => {
  try {
    const { fullName, username, password, confirmPassword } = req.body;
  } catch (error) {}
  console.log("signup");
};

export const login = (req, res) => {
  console.log("login");
};

export const logout = (req, res) => {
  console.log("logout");
};
