import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddNewMovie from "./components/AddNewMovie";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import UpdateMovie from "./components/UpdateMovie";
import TheaterList from "./components/TheaterList";
import Login from "./components/Login";
import Registration from "./components/Registration";
// import BookTicket from "./components/BookTicket";
import ResetPassword from "./components/ResetPassword";
import Homepage from "./components/Homepage";
import TheatreComponent from "./components/TheatreComponent";
import BookedTicketDetails from "./components/BookedTicketDetails";
import Search from "./components/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route exact path="/" element={<Homepage />} />
          {/* <Route path="/movieList" element={<MovieList />} /> */}
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/theater-list" element={<TheaterList />} />
          {/* <Route path="/book-ticket" element={<BookTicket />} /> */}
          <Route path="/add-movie" element={<AddNewMovie />} />
          {/* <Route path="/edit-movie/:movieName" element={<UpdateMovie />} /> */}
          <Route path="/TheatreComponent" element={<TheatreComponent />} />
          <Route path="/BookedTicketDetails" element={<BookedTicketDetails />} />
          <Route path="/Search" element={<Search />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
