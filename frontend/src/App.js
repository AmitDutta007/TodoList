// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import CreateNote from './screens/CreateNote/CreateNote';
import SingleNote from './screens/SingleNote';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
        <Route path='/login'  element={<LoginPage />} />
        <Route path='/register'  element={<RegisterPage />} />
        <Route path='/createnote' element={<CreateNote />} />
        <Route path='/note/:id' element={<SingleNote />} />
        <Route path='/mynotes' element={<MyNotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
{/* <Route path='' element={<Header/>}/>
        <Route path='' element={<Footer/>}/> */}