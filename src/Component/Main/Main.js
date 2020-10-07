import React, { useEffect, useState } from 'react';
// import Link from "react-router-dom";

import {
    Link
  } from "react-router-dom";

const Main = () => {
    const [details,setDetails] =useState([])
    useEffect(()=> {
      fetch(`https://volunteer123.herokuapp.com/showallvolunteer`)
      .then(res => res.json())
      .then(data => setDetails(data))
    },[])
    
    return (
        <div>

        <div>
            <h1 style={{textAlign: "center"}}>I GROW BY HELPING PEOPLE IN NEED.</h1>

            
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
<label for="inputPassword5">Search</label>
        </div>
        {
            details.map(showimg =><div>
                <Link to={"/godetails/" + showimg._id}>
                <div class="card" style={{width: "18rem"}}>
          <img src={showimg.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{showimg.name}</h5>
          </div>
        </div>
                </Link>
                
                </div> )
        }

        




        </div>
    );
};

export default Main;