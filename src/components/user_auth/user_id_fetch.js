import AuthAPI from "./axios_auth";

const userID = AuthAPI.get("/auth/users/me").then((response) => {
  //   console.log(response.data.id);
  localStorage.setItem("user_id", response.data.id);
  console.log(localStorage.getItem("user_id"));
});

export default userID;
