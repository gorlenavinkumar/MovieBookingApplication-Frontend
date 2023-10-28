import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";


const Search = () => {

    const [loading, setLoading] = useState(true);
    const [num, setNum] = useState(0);
    
    console.log("Before num");
    console.log(num);

    const handleTicketChange = (event) => {
      // const { name, value } = event.target;
      setNum(event.target.value);
    };

    const HandleClick = (e, num) => {
      // setNum(num);
      setLoading(false);
    }
    console.log("After num");
    console.log(num);

    return(
      // <div class="input-group">
      //   <div class="form-outline">
      //     <input type="search" id="form1" class="form-control" />
      //     <label class="form-label" for="form1">Search</label>
      //   </div>
      //   <button type="button" class="btn btn-primary">
      //     <i class="fas fa-search"></i>
      //   </button>
      // </div>
      <div>
        <div>
          {loading && (
            <div>
            <h1>LOADING</h1>
            <label>A No.</label>
            <input id="num" key="num" name="num" onChange={(e) => handleTicketChange(e)}></input>
            {console.log("Inside:" + num)}
            <button onClick={(e) => HandleClick(e, num)}>Click Me</button>
            {console.log("Inside:" + num)}
            </div>
          )
          }
        </div>

        <div>
          {!loading && (
            <div>
            <h1>NOT LOADING</h1>
            <h1>A NO. is {num}</h1>
            </div>
          )
          }
        </div>
    </div>
    )
}

export default Search;