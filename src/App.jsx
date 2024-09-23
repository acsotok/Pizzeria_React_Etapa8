
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import PizzaPage from './pages/PizzaPage'
import { ProfilePage } from './pages/ProfilePage'
import { NotFoundPage } from './pages/NotFoundPage'
import Navbar from './components/Navbar'
import { useContext } from 'react';
import { UserContext } from './context/UserContext';


function App() {
  const {user} = useContext(UserContext)
  const token = user.token

  return (
     <>
        <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={<HomePage />}
            />
            <Route 
              path='/login' 
              element={!token ? <LoginPage /> : <Navigate to="/" />}
              />
            <Route 
              path='/register' 
              element={!token ? <RegisterPage /> : <Navigate to="/" />}
            />
            <Route 
              path='/cart' 
              element={<CartPage />}
            />
            <Route 
              path='/pizza/:id' 
              element={<PizzaPage />}
            />
            <Route 
              path='/profile' 
              element={token ? <ProfilePage /> : <Navigate to="/login" />}
            />
            <Route 
              path='*' 
              element={<NotFoundPage />}
            />
            <Route 
              path='/404' 
              element={<NotFoundPage />}
            />
          </Routes>
        <Footer />
      </>
  )
}

export default App
