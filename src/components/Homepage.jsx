import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MovieService from "../services/MovieService";

const Homepage = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const [isAdmin, setIsAdmin] = useState("");

    const navigate = useNavigate();
    const [newMovieAddError, setNewMovieAddError] = useState("");
    const [showAlert, setShowAlert] = useState(false);


    function handleDelete(e, movieName) {
        if(window.confirm("Are you sure you want to delete the movie?")){
            deleteMovie(e, movieName);
        }
    }

    function handleCancelDelete() {
        setShowAlert(false);
    }

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
        const role = sessionStorage.getItem("userType");
        setIsAdmin(role);
    }, [isAdmin]);


    useEffect(() => {
        console.log("USeeefect");
        const fetchData = async () => {
            setLoading(true);
            try {
                console.log("USEEFFECT");
                const response = await MovieService.getMovies();
                const uniqueArray = filterArray(response.data);
                setMovies(uniqueArray);
                console.log(response.data);

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



    const listTheaters = (e, movieName) => {
        e.preventDefault();
        navigate("/theater-list", { state: { movieName: movieName } });
      };



    return (
        <React.Fragment>

            <div className="container mx-auto my-8">
                <div className="grid grid-cols-4 gap-4" >

                    {movies.map((movie) => (
                        <div className="rounded card bg-blue-300 my-4 mx-3 py-2 px-4" style={{ width: '250px', 'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)' }} >
                            <div className="card-image">
                            
                            <img src= {movie.imageUrl} className="card-img-top" alt="Movie Poster" height="250px" width="250px" />
                            </div>
                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxV56qU1oHiLwKYyEST5kqgMbjSejIUDex3m__BVOC&s" className="card-img-top" alt="..." height="250px" width="250px" /> */}
                            
                            <div className="card-body">
                                <h5 className="card-title font-bold flex justify-center">{movie.movieName}</h5>
                                
                                
                                {isAdmin !== "ROLE_ADMIN" && (
                                    <button className=" rounded btn btn bg-green-400 px-6 mx-16" style={{ 'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)' }}  onClick={(e, movieName) => listTheaters(e, movie.movieName)}>Book</button>
                                )}
                                
                                {isAdmin === "ROLE_ADMIN" && (
                                    <>
                                    <button className=" rounded btn btn bg-green-400 px-6 mx-3" style={{ 'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)' }}  onClick={(e, movieName) => listTheaters(e, movie.movieName)}>Book</button>
                                    <button className=" rounded btn btn bg-green-400 px-5 mx-3" style={{ 'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)' }} onClick={(e, movieName) => handleDelete(e, movie.movieName)}>Delete</button>
                                    </>
                                
                                )}
                                

                                

                            </div>
                        </div>
                    ))}


                {isAdmin === "ROLE_ADMIN" && (
                    <div className="rounded card bg-blue-300 my-4 mx-3 py-2 px-4" style={{ width: '250px', 'boxShadow': '0 4px 8px 0 rgba(0,0,0,0.2)' }} >

                    
                        <div className="card-body">
                            <button onClick={() => navigate("/add-movie")}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKEGNc70jZpXygWJ0DQ4GPu1CR52u3pygKC25mKo&s" className="card-img-top" alt="..." height="250px" width="250px" /> </button>
                        </div>
                    
                    </div>
                )}
                </div>

            </div>



        </React.Fragment>
    );

    return (
        <button className="btn btn">Click</button>
    );
}

export default Homepage;