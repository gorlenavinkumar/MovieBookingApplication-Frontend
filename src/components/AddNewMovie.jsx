import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";

const AddMovie = () => {
  const navigate = useNavigate();

  // const [movie, setMovie] = useState({
  //   movieName: "",
  //   theaters: [{ theatreName: "", availableSeat: "", ticketsStatus: "" }],
  // });

  const [moviereq, setMovieReq] = useState({
    movieName: "",
    theatreName: "",
    noOfTicketsAvailable: 0,
    totalSeats: 0,
    ticketsStatus: "AVAILABLE",
    imageUrl:"",
  });
  const [newMovieAddError, setNewMovieAddError] = useState("");
  const [hasErrors, setHasErrors] = useState(false);

  // const handleChange = (event, index) => {
  //   const { name, value } = event.target;
  //   const theaters = [...movie.theaters];
  //   theaters[index] = { ...theaters[index], [name]: value };
  //   setMovie({ ...movie, theaters });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovieReq({ ...moviereq, [name]: value });
    setHasErrors(false);
    setNewMovieAddError("");
  };

  // const handleAddTheater = () => {
  //   setMovie({
  //     ...movie,
  //     theaters: [...movie.theaters, { theatreName: "", availableSeat: "", ticketsStatus: "" }],
  //   });
  // };
  const handleAddTheater = (event) => {
    // setMovieReq({
    //   ...moviereq,
    //   theatreName: "",
    //   noOfTicketsAvailable: 0,
    //   ticketsStatus: "",
    // });
    setMovieReq({
      ...moviereq,
      theatreName: event.target.value,
    });
    setHasErrors(false);
    setNewMovieAddError("");
  };

  // const handleRemoveTheater = (index) => {
  //   const theaters = [...movie.theaters];
  //   theaters.splice(index, 1);
  //   setMovie({ ...movie, theaters });
  // };
  const handleRemoveTheater = () => {
    setMovieReq({
      ...moviereq,
      theatreName: "",
      noOfTicketsAvailable: 0,
      ticketsStatus: "",
      imageUrl:"",
    });
  };
  const verifyNewMovieReq = () => {
    if (moviereq.movieName === "") {
      setNewMovieAddError("Please enter the Movie name...");
      setHasErrors(true);
    } else if (moviereq.theatreName === "") {
      setNewMovieAddError("Please enter the Theater name...");
      setHasErrors(true);
    } else if (moviereq.noOfTicketsAvailable === 0 || moviereq.noOfTicketsAvailable === "") {
      setNewMovieAddError("Please select No. of Seats available...");
      setHasErrors(true);
    } else if (moviereq.noOfTicketsAvailable > 250) {
      setNewMovieAddError("Total no. of Seats should no exceed 250...");
      setHasErrors(true);
    } else if ((moviereq.noOfTicketsAvailable % 10) !== 0) {
      setNewMovieAddError("No. of Seats should be multiples of 10...");
      setHasErrors(true);     
    } else {
      setHasErrors(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //const firstTheater = movie.theaters[0];

    // const updatedMovieReq = {
    //   movieName: movie.movieName,
    //   theatreName: firstTheater.theatreName,
    //   noOfTicketsAvailable: firstTheater.availableSeat,
    //   ticketsStatus: firstTheater.ticketsStatus,
    // };
    console.log("submitted the movie Req...");
    MovieService.saveMovie(moviereq)
      .then((response) => {
        navigate("/homepage");
      })
      .catch((error) => {
        if (error.response.data.message.includes("JWT expired"))
          setNewMovieAddError("Session Logged out please login again");
        else if (
          error.response.data.message.includes("Required request header")
        )
          setNewMovieAddError("You are not logged in, please login");
        else setNewMovieAddError("some error occur, contact Admin");
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setMovieReq({
      movieName: "",
      theatreName: "",
      noOfTicketsAvailable: "",
      ticketsStatus: "",
      imageUrl:"",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>
      <form>
        <div className="container mb-4 border-4 rounded">
          <label
            htmlFor="movieName"
            className="block font-medium mt-2 mb-2 ml-3"
          >
            Movie Name
          </label>
          {/* <input
            type="text"
            id="movieName"
            name="movieName"
            value={movie.movieName}
            onChange={(event) =>
              setMovie({ ...movie, movieName: event.target.value })
            }
            className="w-4/5 p-2 border border-gray-300 rounded ml-3 mb-4"
          /> */}
          <input
            type="text"
            id="movieName"
            name="movieName"
            value={moviereq.movieName}
            onChange={handleChange}
            className="w-4/5 p-2 border border-gray-300 rounded ml-3 mb-4"
            required
          />
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col">
            {/* {movie.theaters.map((theater, index) => ( */}
            <div className="mb-4 border-4 rounded">
              <div>
                <label
                  htmlFor={`theatreName`}
                  className="block font-medium mb-1 mt-2 ml-3"
                >
                  Theater Name
                </label>
                {/* <input
                    type="text"
                    id={`theatreName-${index}`}
                    name="theatreName"
                    value={theater.theatreName}
                    onChange={(event) => handleChange(event, index)}
                    className="w-4/5 p-1 border border-gray-300 rounded ml-3"
                  /> */}
                <input
                  type="text"
                  id={`theatreName`}
                  name="theatreName"
                  value={moviereq.theatreName}
                  onChange={(event) =>
                    // setMovieReq({
                    //   ...moviereq,
                    //   theatreName: event.target.value,
                    // })
                    handleAddTheater(event)
                  }
                  className="w-4/5 p-1 border border-gray-300 rounded ml-3"
                />
              </div>
              <div>
                <label
                  htmlFor={`availableSeat`}
                  className="block font-medium mb-1 mt-2 ml-3"
                >
                  Available Seats
                </label>
                {/* <input
                    type="text"
                    id={`noOfTicketsAvailable-${index}`}
                    name="noOfTicketsAvailable"
                    value={theater.availableSeat}
                    onChange={(event) => handleChange(event, index)}
                    className="w-4/5 p-1 border border-gray-300 rounded ml-3 mb-1"
                  /> */}
                <input
                  type="text"
                  id={`availableSeat`}
                  name="availableSeat"
                  value={moviereq.noOfTicketsAvailable}
                  onChange={(event) => {
                    setMovieReq({
                      ...moviereq,
                      noOfTicketsAvailable: event.target.value,
                      totalSeats: event.target.value,
                    });
                    setHasErrors(false);
                    setNewMovieAddError("");
                  }}
                  className="w-4/5 p-1 border border-gray-300 rounded ml-3 mb-1"
                />
              </div>
              <div>
                <label
                  htmlFor={`PosterUr`}
                  className="block font-medium mb-1 mt-2 ml-3"
                >
                 Movie Poster
                </label>
                {/* <input
                    type="text"
                    id={`noOfTicketsAvailable-${index}`}
                    name="noOfTicketsAvailable"
                    value={theater.availableSeat}
                    onChange={(event) => handleChange(event, index)}
                    className="w-4/5 p-1 border border-gray-300 rounded ml-3 mb-1"
                  /> */}
                <input
                  type="text"
                  id={`imageUrl`}
                  name="PosterUrl"
                  value={moviereq.imageUrl}
                  onChange={(event) => {
                    setMovieReq({
                      ...moviereq,
                      imageUrl: event.target.value
                    });
                    setHasErrors(false);
                    setNewMovieAddError("");
                  }}
                  className="w-4/5 p-1 border border-gray-300 rounded ml-3 mb-1"
                />
              </div>
              <h6>
                <small class="text-muted">*No. of Seats should be multiples of 10</small>
                <br />
                <small class="text-muted">*Total no. of Seats should no exceed 250</small>
              </h6>

              {/* <div>
                <label
                  htmlFor={`ticketsStatus`}
                  className="block font-medium mb-1 mt-2 ml-3"
                >
                  Booking Status
                </label> */}
                {/* <select
                    id={`ticketsStatus-${index}`}
                    name="ticketsStatus"
                    value={theater.ticketsStatus}
                    onChange={(event) => handleChange(event, index)}
                    className="w-4/5 p-1 border border-gray-300 rounded ml-3 mb-2">
                      <option value="BOOK ASAP">BOOK ASAP</option>
                      <option value="SOLD OUT">SOLD OUT</option>
                  </select> */}
                {/* <select
                  id={`ticketsStatus`}
                  name="ticketsStatus"
                  value={moviereq.ticketsStatus}
                  onChange={(event) =>
                    setMovieReq({
                      ...moviereq,
                      ticketsStatus: event.target.value,
                    })
                  }
                  className="w-4/5 p-1 border border-gray-300 rounded ml-3 mb-2"
                >
                  <option value="">Select...</option>
                  <option value="AVAILABLE">AVAILABLE</option>
                  <option value="BOOK ASAP">BOOK ASAP</option>
                  <option value="SOLD OUT">SOLD OUT</option>
                </select> */}

                {/* {theater.ticketsStatus && <p>You selected: {theater.ticketsStatus}</p>} */}
              {/* </div> */}
            </div>
            {/* ))} */}
          </div>
        </div>

        {/*  <button
          type="button"
          onClick={handleAddTheater}
          className="block rounded-md bg-yellow-200 mb-4 text-blue-600 hover:text-blue-800 py-1 px-4"
        >Add Theater
        </button> */}
        {newMovieAddError && (
          <p className="mb-4 text-sm text-red-600">{newMovieAddError}</p>
        )}
        {!hasErrors && (
          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              disabled={hasErrors}
              onMouseOver={verifyNewMovieReq}
              onClick={handleSubmit}
              className="rounded mr-4 text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
            >
              Save
            </button>
            <button
              onClick={reset}
              className="rounded ml-4 text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
            >
              Clear
            </button>
            <button
              onClick={() => navigate("/homepage")}
              className="rounded text-white font-semibold bg-violet-500 hover:bg-violet-700 py-2 px-6"
            >
              Back
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddMovie;
