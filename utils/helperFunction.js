export const handleLogout = () => {
  localStorage.removeItem("access");
  alert("log out successful");
};

import specimen from "./specimen";
export const getSpecimen = () => {
  return specimen;
};
