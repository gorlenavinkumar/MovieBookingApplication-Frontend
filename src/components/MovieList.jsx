// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import MovieService from "../services/MovieService";
// import Movie from "./Movie";

// const MovieList = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isAdmin, setIsAdmin] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState(null);
//   const [newMovieAddError, setNewMovieAddError] = useState("");

//   useEffect(() => {
//     const role = sessionStorage.getItem("userType");
//     setIsAdmin(role);
//   }, [isAdmin, location]);

//   const filterArray = (data) => {
//     const filteredArray = [];

//     const arr = data.map((obj) => {
//       if (!filteredArray.some((item) => item.movieName === obj.movieName)) {
//         filteredArray.push(obj);
//       }
//     });

//     return filteredArray;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await MovieService.getMovies();
//         const uniqueArray = filterArray(response.data);
//         setMovies(uniqueArray);
//       } catch (error) {
//         console.log("catching");
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const deleteMovie = (e, movieName) => {
//     e.preventDefault();
//     MovieService.deleteMovie(movieName)
//       .then((res) => {
//         if (movies) {
//           setMovies((prevElement) => {
//             return prevElement.filter((movie) => movie.movieName !== movieName);
//           });
//         }
//       })
//       .catch((error) => {
//         if (error.response.data.message.includes("Required request header"))
//           setNewMovieAddError("You are not logged in, please login");
//       });
//   };

//   return (
//     <div classNameName="container mx-auto my-8 max-w-2xl">
//       <h2 classNameName="rounded flex justify-center text-xl font-bold mb-4 mt-8  bg-slate-600 text-white  px-6 py-2">
//         Welcome ! Book Your Movie Ticket here
//       </h2>
//       <div classNameName="flex justify-center">
//         {isAdmin === "ROLE_ADMIN" && (
//           <button
//             onClick={() => navigate("/add-movie")}
//             classNameName="flex justify-center rounded mb-6 max-w-lg bg-slate-600 text-white px-6 py-2 font-semibold"
//           >
//             Add New Released Movie
//           </button>
//         )}
//       </div>
//       <div classNameName="flex justify-center shadow border-b w-auto">
//         <table classNameName="min-w-fit">
//           <thead classNameName="bg-emerald-400">
//             <tr>
//               <th classNameName="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
//                 Pick your favourite show from below list
//               </th>
//               {isAdmin === "ROLE_ADMIN" && (
//                 <th classNameName="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
//                   Actions
//                 </th>
//               )}
//             </tr>
//           </thead>
//           {!loading && (
//             <tbody classNameName="bg-white">
//               {movies.map((movie) => (
//                 <Movie
//                   movie={movie}
//                   deleteMovie={deleteMovie}
//                   role={isAdmin}
//                   key={movie.id}
//                 ></Movie>
//               ))}
//             </tbody>
//           )}
//         </table>
//       </div>
//       {newMovieAddError && (
//         <p classNameName="mb-4 text-sm text-red-600">{newMovieAddError}</p>
//       )}
//     </div>
//   );
// };

// export default MovieList;



// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import MovieService from "../services/MovieService";
// import Movie from "./Movie";

// const MovieList = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isAdmin, setIsAdmin] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState(null);
//   const [newMovieAddError, setNewMovieAddError] = useState("");

//   useEffect(() => {
//     const role = sessionStorage.getItem("userType");
//     setIsAdmin(role);
//   }, [isAdmin, location]);

//   const filterArray = (data) => {
//     const filteredArray = [];

//     const arr = data.map((obj) => {
//       if (!filteredArray.some((item) => item.movieName === obj.movieName)) {
//         filteredArray.push(obj);
//       }
//     });

//     return filteredArray;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await MovieService.getMovies();
//         const uniqueArray = filterArray(response.data);
//         setMovies(uniqueArray);
//       } catch (error) {
//         console.log("catching");
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const deleteMovie = (e, movieName) => {
//     e.preventDefault();
//     MovieService.deleteMovie(movieName)
//       .then((res) => {
//         if (movies) {
//           setMovies((prevElement) => {
//             return prevElement.filter((movie) => movie.movieName !== movieName);
//           });
//         }
//       })
//       .catch((error) => {
//         if (error.response.data.message.includes("Required request header"))
//           setNewMovieAddError("You are not logged in, please login");
//       });
//   };

//   return (
// //     <div className="card" style="width: 18rem;">
// //   <img className="card-img-top" src="..." alt="Card image cap"></img>
// //   <div className="card-body">
// //     <h5 className="card-title">Card title</h5>
// //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //     <a href="#" className="btn btn-primary">Go somewhere</a>
// //   </div>
// // </div>

// // {/* <div className="container text-center">
// //   <div className="row">
// //     <div className="col">
// //       Column
// //     </div>
// //     <div className="col">
// //       Column
// //     </div>
// //     <div className="col">
// //       Column
// //     </div>
// //   </div>
// // </div> */}
// // <h1>HELLO</h1>

// <React.Fragment>
//   <h1>Movie List</h1>
//   <div className="container">
//   <div className="row">
//     <div className="col-sm">
//       <div className="card" style="width: 18rem">
//   <img src="..." className="card-img-top" alt="..."></img>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col-sm">
//       <div className="card" style="width: 18rem;">
//   <img src="..." className="card-img-top" alt="..."></img>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//     <div className="col-sm">
//       <div className="card" style="width: 18rem;">
//   <img src="..." className="card-img-top" alt="..."></img>
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </div>
//   </div>
// </div>
// </React.Fragment>

//   );
// };

// export default MovieList;



import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";
import Movie from "./Movie";

const MovieList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isAdmin, setIsAdmin] = useState("");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [newMovieAddError, setNewMovieAddError] = useState("");

  useEffect(() => {
    const role = sessionStorage.getItem("userType");
    setIsAdmin(role);
  }, [isAdmin, location]);

  const filterArray = (data) => {
    const filteredArray = [];

    const arr = data.map((obj) => {
      if (!filteredArray.some((item) => item.movieName === obj.movieName)) {
        filteredArray.push(obj);
      }
    });

    return filteredArray;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await MovieService.getMovies();
        const uniqueArray = filterArray(response.data);
        setMovies(uniqueArray);
      } catch (error) {
        console.log("catching");
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteMovie = (e, movieName) => {
    e.preventDefault();
    MovieService.deleteMovie(movieName)
      .then((res) => {
        if (movies) {
          setMovies((prevElement) => {
            return prevElement.filter((movie) => movie.movieName !== movieName);
          });
        }
      })
      .catch((error) => {
        if (error.response.data.message.includes("Required request header"))
          setNewMovieAddError("You are not logged in, please login");
      });
  };

  return (
    <div className="container mx-auto my-8 max-w-2xl">
      <h2 className="rounded flex justify-center text-xl font-bold mb-4 mt-8  bg-slate-600 text-white  px-6 py-2">
        Welcome ! Book Your Movie Ticket here
      </h2>
      <div className="flex justify-center">
        {isAdmin === "ROLE_ADMIN" && (
          <button
            onClick={() => navigate("/add-movie")}
            className="flex justify-center rounded mb-6 max-w-lg bg-slate-600 text-white px-6 py-2 font-semibold"
          >
            Add New Released Movie
          </button>
        )}
      </div>
      <div className="flex justify-center shadow border-b w-auto">
        <table className="min-w-fit">
          <thead className="bg-emerald-400">
            <tr>
              <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
                Pick your favourite show from below list
              </th>
              {isAdmin === "ROLE_ADMIN" && (
                <th className="text-center font-medium text-gray-500 uppercase tracking-wmovieNameer py-3 px-6">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {movies.map((movie) => (
                <Movie
                  movie={movie}
                  deleteMovie={deleteMovie}
                  role={isAdmin}
                  key={movie.id}
                ></Movie>
              ))}
            </tbody>
          )}
        </table>
      </div>
      {newMovieAddError && (
        <p className="mb-4 text-sm text-red-600">{newMovieAddError}</p>
      )}
    </div>
  );
};

export default MovieList;