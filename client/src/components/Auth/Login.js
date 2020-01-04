import React from "react";
import { GraphQLClient } from "graphql-request";
import { GoogleLogin } from "react-google-login";

import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const ME_QUERY = `{
  me {
    _id
    name
    email
    picture
  }
}`;

const Login = ({ classes }) => {
  const onSuccess = async googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log("id Token: ", idToken);

    const client = new GraphQLClient("http://localhost:4000/graphql", {
      headers: { authorization: idToken }
    });
    const data = await client.request(ME_QUERY);
    console.log("Request data: ", data);
  };

  return (
    <GoogleLogin
      clientId="590895874432-abbr2epn42hnmr22o19426usa5oegjrf.apps.googleusercontent.com"
      onSuccess={onSuccess}
      isSignedIn={true}
    />
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
