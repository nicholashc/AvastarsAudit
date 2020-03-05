import React from "react";
import Layout from "../layout";

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location} title={"AvastarsAudit"}>
      <h1>This is a one-page website!</h1>
      <a href="https://avastars-audit-draft.now.sh/">Click here to go back.</a>
    </Layout>
  );
};

export default NotFoundPage;
