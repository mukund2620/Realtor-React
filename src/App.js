import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import ForgotPassword from "./pages/ForgotPassword"
import SignUp from "./pages/SignUp"
import PrivateRoute from "./components/PrivateRoute";
import Offers from "./pages/Offers"
import Header from "./components/Header"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreateListings from "./pages/CreateListings";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";

function App() {
  return (
    <>
    <Router>
      <Header/>

      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path="/profile" element={<PrivateRoute />}>

          <Route path ="/profile" element={<Profile/>} />

        </Route>
        
        <Route path ="sign-in" element={<SignIn/>}></Route>
        <Route path ="sign-up" element={<SignUp/>}></Route>
        <Route path ="forgot-password" element={<ForgotPassword/>}></Route>
        <Route path ="/category/:categoryName/:listingId" element={<Listing/>}></Route>
        <Route path ="offers" element={<Offers/>}></Route>
        
        <Route path="create-listing" element={<PrivateRoute/>}>
          <Route path ="/create-listing" element={<CreateListings/>} />
        </Route>
        <Route path="edit-listing" element={<PrivateRoute/>}>
          <Route path ="/edit-listing/:listingId" element={<EditListing/>} />
        </Route>
      </Routes>
    </Router>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="dark"
    />
    </>
  );
}

export default App;
