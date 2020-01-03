import React from "react";
import UsersInfo from "./UsersInfo";
import AdminPage from "./AdminPage";

const adminUser = () => {
  return (
    <>
      <UsersInfo />
      <p>--------- 분기선 ---------</p>
      <AdminPage />
    </>
  );
};

export default adminUser;
