import React, {useState, useRef} from "react";



function Registration(){
    const fname = useRef("");
    const lname = useRef("");

    const fname_color = useRef();

    const submitDetails = ()=>{
        console.log(fname.current.value)
        console.log(lname.current.value)
        console.log(lname.current.focus())
        fname_color.current.style.color="blue";
    }
    return(
        <React.Fragment>
            <h1>User Registration</h1>
            <div ref={fname_color}>First Name : <input ref={fname} type="text" name="fname" /></div>
            <div>Last Name : <input ref={lname} type="text" name="lname" /></div>
            <div><input onClick={submitDetails} type="button" value="Save Details" /></div>
        </React.Fragment>
    );

}

export default Registration;