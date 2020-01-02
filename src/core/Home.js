import React from "react";
import { Link } from "react-router-dom";

export default () => <>
    <Link to={{ pathname: "/signin" }}>sign in</Link>
    <Link to={{ pathname: "/signup" }}>sign up</Link>
</>;