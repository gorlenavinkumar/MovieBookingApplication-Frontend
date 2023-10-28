// //import React from 'react';
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import MovieService from "../services/MovieService";

// const TheaterList = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isAdmin, setIsAdmin] = useState("");
//   const [theaterList, setTheaterList] = useState([]);
//   const tmovie = location.state.movie;
//   const movieName = tmovie.movieName;

//   // console.log("theaterList:");
//   // console.log(theaterList);

//   useEffect(() => {
//     const role = sessionStorage.getItem("userType");
//     setIsAdmin(role);
//   }, [isAdmin, location]);
//   const [loading, setLoading] = useState(true);
//   //const loading = false;

//   // if (!movie) {
//   //   return <navigate to="/" />;
//   // }

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await MovieService.getMoviesByMovieName( movieName );
//           //tmovie.movieName
//         setTheaterList(response.data);
//         // console.log("RESPONSE:");
//         // console.log(response.data);
//       } catch (error) {
//         console.log("catching");
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const bookTicket = (e, index, movie) => {
//     e.preventDefault();
//     const bookticketUrL = "/book-ticket";
//     if (sessionStorage.getItem("token") == null) {
//       //window.history.pushState("/book-ticket"); //how to solve thisssssss
//       navigate("/login", {
//         state: { url: bookticketUrL, movie: movie, index: index },
//       });
//     } else {
//       navigate("/book-ticket", { state: { movie: movie, index: index } });
//     }
//   };

//   return (
//     <div className="container mx-auto my-20 max-w-2xl">
//       <div className="flex justify-center">
//         <h4 className="flex justify-center rounded mb-6 max-w-lg bg-slate-600 text-white px-6 py-2 font-semibold">
//           Ticket Availability for selected movie : {movieName}
//         </h4>
//       </div>
//       <div className="flex justify-center shadow border-b w-auto">
//         <table className="w-full table-auto">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
//                 Theater Name
//               </th>
//               <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
//                 Available Seat
//               </th>
//               <th className="text-left font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
//                 Booking Open?
//               </th>
//               {isAdmin === "ROLE_USER" && (
//               <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
//                 Actions
//               </th>
//               )}
//             </tr>
//           </thead>
//           {/* <tbody className="bg-white divide-y divide-gray-200">
//             {
//                 <tr>
//                   <td className="py-3 px-6 text-center" > {movie.theatreName} </td>
//                   <td className="py-3 px-6 text-center" > {movie.noOfTicketsAvailable}</td>
//                   <td className="py-3 px-6 text-center" > {movie.ticketsStatus}</td>
//                   <td className="py-3 px-6 text-center" >
//                    <button onClick={"/"} className="btn btn-info text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">Book ticket </button> 
//                   </td>
//                 </tr>
//               }
//           </tbody> */}
//           <tbody className="bg-white divide-y divide-gray-200">
//             {theaterList.map((movie, index) => (
//               <tr key={index}>
//                 <td className="py-3 px-6 text-center"> {movie.theatreName} </td>
//                 <td className="py-3 px-6 text-center">
//                   {movie.noOfTicketsAvailable}
//                 </td>
//                 <td className="py-3 px-6 text-center"> {movie.ticketsStatus}</td>
//                 {isAdmin === "ROLE_USER" && (
//                 <td className="py-3 px-6 text-center">
//                   {movie.noOfTicketsAvailable > 0 && (
//                     <button
//                       onClick={(e) => bookTicket(e, index, movie)}
//                       className="btn btn-info text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
//                     >
//                       Book ticket
//                     </button>
//                   )}
//                 </td>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="flex justify-center">
//         <button
//           onClick={() => navigate("/movieList")}
//           className="rounded mt-8 max-w-lg text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 mx-auto"
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TheaterList;




//import React from 'react';
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";

const TheaterList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState("");
  const [theaterList, setTheaterList] = useState([]);
  // const tmovie = location.state.movie;
  // console.log(tmovie);
  // const movieName = tmovie.movieName;
  const movieName = location.state.movieName;

  // console.log("theaterList:");
  // console.log(theaterList);

  useEffect(() => {
    const role = sessionStorage.getItem("userType");
    setIsAdmin(role);
  }, [isAdmin, location]);
  const [loading, setLoading] = useState(true);
  //const loading = false;

  // if (!movie) {
  //   return <navigate to="/" />;
  // }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await MovieService.getMoviesByMovieName( movieName );
          //tmovie.movieName
        setTheaterList(response.data);
        // console.log("RESPONSE:");
        // console.log(response.data);
      } catch (error) {
        console.log("catching");
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const bookTicket = (e, index, movie) => {
    e.preventDefault();
    const bookticketUrL = "/TheatreComponent";

    // const totalNoOfTickects = prompt("Please enter the no. of Tickets");
    // console.log(typeof(totalNoOfTickects));
    // console.log("-----------------------------");
    // console.log(parseInt(typeof(totalNoOfTickects)));
    // if (totalNoOfTickects == null || totalNoOfTickects == "" || totalNoOfTickects == 0) {
    //   alert("Please enter correct no. of tickets");
    // }
    // else{

    

    if (sessionStorage.getItem("token") == null) {
      //window.history.pushState("/book-ticket"); //how to solve thisssssss
      navigate("/login", {
        state: { url: bookticketUrL, movie: movie, index: index },
      });
    } else {
      navigate("/TheatreComponent", { state: { movie: movie, index: index } });
    }
  // }
  };

  return (
    <div className="container mx-auto my-20 max-w-2xl">
      <div className="flex justify-center">
        <h4 className="flex justify-center rounded mb-6 max-w-lg bg-slate-600 text-white px-6 py-2 font-semibold">
          Ticket Availability for selected movie : {movieName}
        </h4>
      </div>
      <div className="flex justify-center shadow border-b w-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
                Theater Name
              </th>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
                Available Seat
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
                Booking Status
              </th>
              {isAdmin !== "ROLE_ADMIN" && (
              <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
                Actions
              </th>
              )}
            </tr>
          </thead>
          {/* <tbody className="bg-white divide-y divide-gray-200">
            {
                <tr>
                  <td className="py-3 px-6 text-center" > {movie.theatreName} </td>
                  <td className="py-3 px-6 text-center" > {movie.noOfTicketsAvailable}</td>
                  <td className="py-3 px-6 text-center" > {movie.ticketsStatus}</td>
                  <td className="py-3 px-6 text-center" >
                   <button onClick={"/"} className="btn btn-info text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">Book ticket </button> 
                  </td>
                </tr>
              }
          </tbody> */}
          <tbody className="bg-white divide-y divide-gray-200">
            {theaterList.map((movie, index) => (
              <tr key={index}>
                <td className="py-3 px-6 text-center"> {movie.theatreName} </td>
                <td className="py-3 px-6 text-center">
                  {movie.noOfTicketsAvailable}
                </td>
                <td className="py-3 px-6 text-center"> {movie.ticketsStatus}</td>
                {isAdmin !== "ROLE_ADMIN" && (
                <td className="py-3 px-6 text-center">
                  {movie.noOfTicketsAvailable > 0 && (
                    <button
                      onClick={(e) => bookTicket(e, index, movie)}
                      className="btn btn-info text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
                    >
                      Book ticket
                    </button>
                  )}
                </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/homepage")}
          className="rounded mt-8 max-w-lg text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 mx-auto"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TheaterList;
