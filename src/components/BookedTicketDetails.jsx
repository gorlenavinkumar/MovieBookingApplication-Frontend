// import React from "react";
// import "../index.css";



// const BookedTicketDetails = ( {bookedTicket} ) => {

//   console.log("In BTD");
//   console.log(JSON.stringify(bookedTicket));

//   return (
//     <div className="container mx-auto my-8 max-w-lg">
//       <div className="flex justify-center">
//         <h6 className="flex justify-center rounded mb-6 max-w-lg bg-slate-600 text-white px-6 py-2 font-semibold">
//           Congratulations {bookedTicket.username}! Your Booking Confirmed
//         </h6>
//       </div>
//       <div className="flex justify-center shadow border-b w-auto">
//         <table className="min-w-fit">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
//                 Booking Details :
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="text-left px-6 py-4 whitespace-nowrap">
//                 <ul className="list-disc list-inside text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer hover:font-extrabold">
//                   <li>Movie: {bookedTicket.movieName}</li>
//                   <li>Theater: {bookedTicket.theatreName}</li>
//                   <li>Number of Tickets Booked: {bookedTicket.noOfTickets}</li>
//                   <li className="whitespace-normal">
//                     Seat number Allocated: {bookedTicket.seatNumber.join(", ")}
//                   </li>
//                 </ul>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BookedTicketDetails;




import React from "react";
import "../index.css";
import { useLocation, useNavigate } from "react-router-dom";



const BookedTicketDetails = (bookedTicket) => {

  const navigate = useNavigate();
  const location = useLocation();

  console.log("In BTD");
  console.log(JSON.stringify(bookedTicket));

  const username = location.state.loginId;
  const movieName = location.state.movieName;
  const theatreName = location.state.theatreName;
  const noOfTickets = location.state.noOfTickets;
  const seatNumber = location.state.seatNumber;
  // const tmovie = location.state.movieName;

  console.log("In tmovie");
  console.log(username);
  console.log(movieName);
  console.log(theatreName);
  console.log(noOfTickets);
  console.log(seatNumber);

  return (
    <div className="container mx-auto my-8 max-w-lg">
      <div className="flex justify-center">
        <h6 className="flex justify-center rounded mb-6 max-w-lg bg-slate-600 text-white px-6 py-2 font-semibold">
          Congratulations {username}! Your Booking Confirmed
        </h6>
      </div>
      <div className="flex justify-center shadow border-b w-auto">
        <table className="min-w-fit">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
                Booking Details :
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left px-6 py-4 whitespace-nowrap">
                <ol className="list-disc list-inside text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer hover:font-extrabold">
                  <li>Movie: {movieName}</li>
                  <li>Theater: {theatreName}</li>
                  <li>Number of Tickets Booked: {noOfTickets}</li>
                  <li className="whitespace-normal">
                    Seat number Allocated: {seatNumber.join(", ")}
                  </li>
                </ol>
              </td>
            </tr>
          </tbody>
        
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/homepage")}
              className="rounded max-w-lg text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 mx-auto"
            >
              Back
            </button>
          </div>
            </table>
      </div>
    </div>
  );
};

export default BookedTicketDetails;
