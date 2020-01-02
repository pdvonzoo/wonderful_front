import React from "react";
import { Link } from "react-router-dom";
import Map from "../map/Map";

export default () => <>
    <Link to={{ pathname: "/signin" }}>sign in</Link>
    <Link to={{ pathname: "/signup" }}>sign up</Link>
    <Map />
</>;