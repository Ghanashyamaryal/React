import React from "react";
import { useContext } from "react";
import Contextapi from "../contextapi/Contextapi";

function Profile(){
    const {user} = useContext(Contextapi)
    return(
        <>
        <h2>welcome {user.name} to our website</h2>
        </>
    )
}
export default Profile