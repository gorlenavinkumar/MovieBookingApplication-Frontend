// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import '../MultiCheckbox.css'
// // import TheaterService from '../Services/TheaterService'
// import MovieService from "../services/MovieService";
// import BookedTicketDetails from "../components/BookedTicketDetails";


// const TheatreComponent = () => {

//    const navigate = useNavigate();
//    const location = useLocation();
//    const [loading, setLoading] = useState(true);

//    const tmovie = location.state && location.state.movie;

//   const index = location.state && location.state.index;

//   const loginID = sessionStorage.getItem("loginId");

//    const [obj, setObj] = React.useState({
//       loginId: loginID,
//       movieName: tmovie.movieName,
//       theatreName: tmovie.theatreName,
//       noOfTickets: 0,
//       seatNumber: []
//    });


// //    const verify = () => {
// //        console.log("In VERIFY");
// //        console.log()
// //    }

//    const handleChange = (e) => {

//       const { value, checked } = e.target;
//       const { seatNumber } = obj;
      
//     //   console.log(`${value} is ${checked}`);

      
      
//       // Case 1 : The user checks the box
//       if (checked) {
//         // if(seatNumber.length < 3){
            
//          setObj({
//             loginId: obj.loginId,
//             movieName: obj.movieName,
//             theatreName: obj.theatreName,
//             noOfTickets: obj.noOfTickets+1,
//             seatNumber: [...seatNumber, value]
//          });
//         //  console.log("in IFFFFFFF");
//         //     console.log(seatNumber);
//         //     console.log(seatNumber.length);
//         //  }

//         //  else{
//         //     console.log("in ELSEEEE");
//         //  }
//         }

//       else {
//          setObj({
//             loginId: obj.loginId,
//             movieName: obj.movieName,
//             theatreName: obj.theatreName,
//             noOfTickets: obj.noOfTickets-1,
//             seatNumber: seatNumber.filter((e) => e !== value)
//          });
//          }

//         //  verify();

//     //      if(seatNumber.length > 2){
//     //         console.log("> than 222222222222");
//     //     }
//     //   console.log(seatNumber);
//    }

//    const handleBook = async (event) => {
//       event.preventDefault();
//       console.log(JSON.stringify(obj));
//       const response = await MovieService.getSeats(obj, obj.movieName)
//          .then((response) => {
//          console.log(response);
//          console.log("In TC" + JSON.stringify(obj));
//          navigate("/BookedTicketDetails", { state: { loginId:obj.loginId, movieName: obj.movieName, theatreName: obj.theatreName, noOfTickets:obj.noOfTickets, seatNumber:obj.seatNumber} });
//         // navigate("/BookedTicketDetails", { state: { obj.movieName: obj } });
//          })
//          .catch((error) => {
//          console.log(error);
//          });
//    };


//    const verifyNewMovieReq = () => {
//     // if (moviereq.movieName === "") {
//     //   setNewMovieAddError("Please enter the movie name...");
//     //   setHasErrors(true);
//     // } else if (moviereq.theatreName === "") {
//     //   setNewMovieAddError("Please enter the theater name...");
//     //   setHasErrors(true);
//     // } else if (moviereq.noOfTicketsAvailable === 0) {
//     //   setNewMovieAddError("Please select no of tickets available...");
//     //   setHasErrors(true);
//     // } else {
//     //   setHasErrors(false);
//     // }
//     console.log("BLOCKED");
//   };

//     const [api,setApi] =useState([])
//     const [bookedSeats,setBookedSeats] =useState([])
//     const [selected,setSelected] =useState([])
//     useEffect(()=>{
//         fetch("http://localhost:8080/api/v1.0/moviebooking/seats/"+ tmovie.movieName + "/" + tmovie.theatreName + "/").then(data=>data.json()).then(val=>setApi(val));
//         fetch("http://localhost:8080/api/v1.0/moviebooking/bookedSeats/"+ tmovie.movieName + "/" + tmovie.theatreName + "/").then(data=>data.json()).then(val=>setBookedSeats(val));    
//     },[])


//    return (
//        <div>
//            {loading && (
//            <div class="seatContainer">
//                <div class="row">
//                    <div class="col-12">
//                        <div className="rounded flex justify-center">
//                        <h2 className="text-xl font-bold mb-4 mt-8  bg-slate-600 text-white  px-6 py-2">
//                            Movie: {tmovie.movieName}
//                         </h2>
                        
//                        <h2 className="text-xl font-bold mb-4 mt-8  bg-slate-600 text-white  px-6 py-2">
//                            Theatre: {tmovie.theatreName}
//                         </h2>
//                         </div>
//                    </div>
//                </div>
//                <div class="row">
//                    <div class="col-12">
//                        <ul>

//                            {
//                                api.map((i) => {
//                                    // <div key={i}>
//                                    console.log("out");
//                                    if (bookedSeats.includes(i)) {
//                                     //    console.log("in if");
//                                        return (
//                                            <div key={i}>
//                                                <li>
//                                                    <label class="seatContainer">{i}
//                                                        <input name="checkbox" id="checkedContainer" type="checkbox" checked={true} value={i} ></input>
//                                                        <span class="checkmark"></span>
//                                                    </label>
//                                                </li>
//                                            </div>)
//                                    }
//                                    else {
//                                     //    console.log("in else");
//                                        return (
//                                            <div key={i}>
//                                                <li>
//                                                    <label class="seatContainer">{i}
//                                                        <input name="checkbox" id={i} type="checkbox" value={i} onChange={handleChange} onMouseOver={verifyNewMovieReq} ></input>
//                                                        <span class="checkmark"></span>
//                                                    </label>
//                                                </li>
//                                            </div>)
//                                    }
//                                }

//                                )
//                            }



//                        </ul>
//                    </div>
//                </div>


//                <div className="flex justify-center text-xl">Selected seats : <p className="font-semibold">  {obj.seatNumber.join(',')} </p></div>
//                <div className="flex justify-center text-xl">Total Tickets : <p className="font-semibold">  {obj.noOfTickets}  </p> </div>

//                <div className="flex justify-center text-xl">            
//                <button
//                    onClick={handleBook}
//                    className="rounded mr-4 text-white font-semibold bg-green-600 hover:bg-green-800 py-2 px-6">
//                    Book
//                </button>
//                </div>

//            </div>
//            )}

//            <div>
//                {!loading && (
//                    <div className="bg-white">
//                        <BookedTicketDetails bookedTicket={obj}></BookedTicketDetails>

//                        <div className="flex justify-center">
//                            <button
//                                onClick={() => navigate("/homepage")}
//                                className="rounded max-w-lg text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 mx-auto"
//                            >
//                                Back
//                            </button>
//                        </div>
//                    </div>
//                )}
//            </div>

//        </div>

//       );
// };

// export default TheatreComponent; 

// // import React from 'react';

// // function TheaterComponent() {
// //   function handleClick(event) {
// //     console.log(event); 
// //     console.log(event.target); // logs the button element that was clicked
// //     console.log(event.target.value);
// //   }

// //   return (
// //     <button value='Yes' onClick={handleClick}>Click me</button>
// //   );
// // }

// // export default TheaterComponent; 




import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../MultiCheckbox.css'
import MovieService from "../services/MovieService";
import BookedTicketDetails from "../components/BookedTicketDetails";


const TheatreComponent = () => {

   const navigate = useNavigate();
   const location = useLocation();
   const [loading, setLoading] = useState(false);


   const [newMovieAddError, setNewMovieAddError] = useState("");
  const [hasErrors, setHasErrors] = useState(false);

   const tmovie = location.state && location.state.movie;

  const index = location.state && location.state.index;

//   const totalNoOfTickects = location.state && location.state.totalNoOfTickects;
    const [totalNoOfTickects, setTotalNoOfTickects] = useState(0);

  const loginID = sessionStorage.getItem("loginId");

   const [obj, setObj] = React.useState({
      loginId: loginID,
      movieName: tmovie.movieName,
      theatreName: tmovie.theatreName,
      noOfTickets: 0,
      seatNumber: []
   });



   const submitNoOfSeats = (e) => {
       console.log("IN submitNoOfSeats---------------");
    // totalNoOfTickects = e.target.value;
    setTotalNoOfTickects(e.target.value);
    setLoading(true);
   }


//    const verify = () => {
//        console.log("In VERIFY");
//        console.log()
//    }

   const handleChange = (e) => {

      const { value, checked } = e.target;
      const { seatNumber } = obj;
      
    //   console.log(`${value} is ${checked}`);

      
      
      // Case 1 : The user checks the box
      if (checked) {
        // if(seatNumber.length < 3){
            
         setObj({
            loginId: obj.loginId,
            movieName: obj.movieName,
            theatreName: obj.theatreName,
            noOfTickets: obj.noOfTickets+1,
            seatNumber: [...seatNumber, value]
         });
        //  console.log("in IFFFFFFF");
        //     console.log(seatNumber);
        //     console.log(seatNumber.length);
        //  }

        //  else{
        //     console.log("in ELSEEEE");
        //  }
        }

      else {
         setObj({
            loginId: obj.loginId,
            movieName: obj.movieName,
            theatreName: obj.theatreName,
            noOfTickets: obj.noOfTickets-1,
            seatNumber: seatNumber.filter((e) => e !== value)
         });
         }

        //  verify();

    //      if(seatNumber.length > 2){
    //         console.log("> than 222222222222");
    //     }
    //   console.log(seatNumber);
   }

   const handleBook = async (event) => {
      event.preventDefault();
      console.log(JSON.stringify(obj));
      const response = await MovieService.getSeats(obj, obj.movieName)
         .then((response) => {
         console.log(response);
         console.log("In TC" + JSON.stringify(obj));
         navigate("/BookedTicketDetails", { state: { loginId:obj.loginId, movieName: obj.movieName, theatreName: obj.theatreName, noOfTickets:obj.noOfTickets, seatNumber:obj.seatNumber} });
        // navigate("/BookedTicketDetails", { state: { obj.movieName: obj } });
         })
         .catch((error) => {
         console.log(error);
         });
   };


//    const verifyNewMovieReq = () => {
//     console.log("BLOCKED");
//   };

    const [api,setApi] =useState([])
    const [bookedSeats,setBookedSeats] =useState([])
    const [selected,setSelected] =useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/api/v1.0/moviebooking/seats/"+ tmovie.movieName + "/" + tmovie.theatreName + "/").then(data=>data.json()).then(val=>setApi(val));
        fetch("http://localhost:8080/api/v1.0/moviebooking/bookedSeats/"+ tmovie.movieName + "/" + tmovie.theatreName + "/").then(data=>data.json()).then(val=>setBookedSeats(val));    
    },[])


    const verifyNewMovieReq = () => {
        if (obj.noOfTickets != totalNoOfTickects) {
          setNewMovieAddError("Please select " + totalNoOfTickects +" seats...");
          setHasErrors(true);     
        } else {
          setHasErrors(false);
        }
      };


   return (
       <div>
           {loading && (
           <div className="seatContainer">
               <div className="row">
                   <div className="col-12">
                       <div className="rounded flex justify-center">
                       <h2 className="text-xl font-bold mb-4 mt-8  bg-slate-600 text-white  px-6 py-2">
                           Movie: {tmovie.movieName}
                        </h2>
                        
                       <h2 className="text-xl font-bold mb-4 mt-8  bg-slate-600 text-white  px-6 py-2">
                           Theatre: {tmovie.theatreName}
                        </h2>
                        </div>
                   </div>
               </div>
               <div class="row">
                   <div class="col-12">
                       <ul>
                           {
                               api.map((i) => {
                                   // <div key={i}>
                                //    console.log("out");

                                   if(obj.noOfTickets == totalNoOfTickects){
                                       console.log("IN IF------------------");
                                       console.log(obj.noOfTickets);
                                   if (bookedSeats.includes(i)) {
                                    //    console.log("in if");
                                       return (
                                           <div key={i}>
                                               <li>
                                                   <label className="seatContainer">{i}
                                                       <input className="rounded" name="checkbox" id="checkedContainer" type="checkbox" checked={true} value={i} ></input>
                                                       <span className="rounded checkmark"></span>
                                                   </label>
                                               </li>
                                           </div>)
                                   }
                                   else if (obj.seatNumber.includes(i)) {
                                    //    console.log("in else");
                                       return (
                                           <div key={i}>
                                               <li>
                                                   <label className="seatContainer">{i}
                                                       <input className="rounded" name="checkbox" id={i} type="checkbox" value={i}
                                                       onChange = {(event) => {
                                                        handleChange(event); 
                                                        setHasErrors(false);
                                                        setNewMovieAddError("");}}></input>
                                                       <span className="rounded checkmark"></span>
                                                   </label>
                                               </li>
                                           </div>)
                                   }

                                   else {
                                    //    console.log("in else");
                                       return (
                                           <div key={i}>
                                               <li>
                                                   <label className="seatContainer">{i}
                                                       <input className="rounded" name="checkbox" id={i} type="checkbox" value={i} disabled="disabled"
                                                       onChange = {(event) => {
                                                        handleChange(event); 
                                                        setHasErrors(false);
                                                        setNewMovieAddError("");}}></input>
                                                       <span className="rounded checkmark"></span>
                                                   </label>
                                               </li>
                                           </div>)
                                   }
                                }
                                else{
                                    console.log("IN ELSE------------------")
                                    if (bookedSeats.includes(i)) {
                                        //    console.log("in if");
                                           return (
                                               <div key={i}>
                                                   <li>
                                                       <label className="seatContainer">{i}
                                                           <input className="rounded" name="checkbox" id="checkedContainer" type="checkbox" checked={true} value={i}></input>
                                                           <span className="rounded checkmark"></span>
                                                       </label>
                                                   </li>
                                               </div>)
                                       }
                                       else {
                                        //    console.log("in else");
                                           return (
                                               <div key={i}>
                                                   <li>
                                                       <label className="seatContainer">{i}
                                                           <input className="rounded" name="checkbox" id={i} type="checkbox" value={i} enabled="enabled"
                                                           onChange = {(event) => {
                                                            handleChange(event); 
                                                            setHasErrors(false);
                                                            setNewMovieAddError("");}}></input>
                                                           <span className="rounded checkmark"></span>
                                                       </label>
                                                   </li>
                                               </div>)
                                       }
                                }
                               }
                               )
                           }
                       </ul>
                   </div>
               </div>


               <div className="flex justify-center text-xl">Selected seats : <p className="font-semibold">  {obj.seatNumber.join(',')} </p></div>
               <div className="flex justify-center text-xl">Total Tickets : <p className="font-semibold">  {obj.noOfTickets}  </p> </div>


                {newMovieAddError && (
                    <p className="flex justify-center mb-4 text-sm text-red-600 py-2 px-6">{newMovieAddError}</p>
                )}
                {!hasErrors && (       
               <div className="flex justify-center text-xl">            
               <button
                    disabled={hasErrors}
                    onMouseOver={verifyNewMovieReq}
                   onClick={handleBook}
                   className="rounded mr-4 text-white font-semibold bg-green-600 hover:bg-green-800 py-2 px-6">
                   Book
               </button>
               </div>
                )}

           </div>
           )}



            {!loading && (


            <div className="rounded card bg-blue-200 my-10 mx-auto py-20 px-20" style={{ width: '500px', 'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)' }} >
            <div className="card-body">
    

    


                <div>
                 <p>Please select no. of Seats you want to book:</p>
                 <ul>
                  <input type="radio" id="1" name="RadioButton" value="1" onClick={submitNoOfSeats} />
                  <label for="RadioButton">1</label><br />
                  <input type="radio" id="2" name="RadioButton" value="2" onClick={submitNoOfSeats} />
                  <label for="RadioButton">2</label><br />
                  <input type="radio" id="3" name="RadioButton" value="3" onClick={submitNoOfSeats} />
                  <label for="RadioButton">3</label><br />
                   <input type="radio" id="4" name="RadioButton" value="4" onClick={submitNoOfSeats} />
                  <label for="RadioButton">4</label><br />
                  <input type="radio" id="5" name="RadioButton" value="5" onClick={submitNoOfSeats} />
                  <label for="RadioButton">5</label><br />
                  <input type="radio" id="6" name="RadioButton" value="6" onClick={submitNoOfSeats} />
                  <label for="RadioButton">6</label><br />
                  <input type="radio" id="7" name="RadioButton" value="7" onClick={submitNoOfSeats} />
                  <label for="RadioButton">7</label><br />
                  <input type="radio" id="8" name="RadioButton" value="8" onClick={submitNoOfSeats} />
                  <label for="RadioButton">8</label><br />
                  <input type="radio" id="9" name="RadioButton" value="9" onClick={submitNoOfSeats} />
                  <label for="RadioButton">9</label><br />
                   <input type="radio" id="10" name="RadioButton" value="10" onClick={submitNoOfSeats} />
                  <label for="RadioButton0">10</label><br />
                  </ul>
                 </div>

                 </div>
            </div>
            )}


       </div>

      );
};

export default TheatreComponent; 

