import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"


export const ProfilePage = () => {
  const {user} = useContext(UserContext)
  const [email, setEmail] = useState("")

  if (!user.token){
    return <Navigate to="/login" />
  }
  return (
    <div className="profile-page" >
        <div className="containerP ">
          <h2 style={{ textAlign: 'center', color:"rgb(40, 130, 199)", marginTop:"10px" }}>Bienvenido!!!</h2>
          <br />
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="staticEmail2" className="form-label">Ingresa tu correo electrónico</label>
              <input 
                type="text"
                name = "email"
                className="form-control"
                placeholder="Ingresa tu email"
                onChange={(e) => (setEmail(e.target.value))}
                value={email} 
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ maxWidth: '150px', marginTop: '20px' }}
              >
                Cerrar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}
