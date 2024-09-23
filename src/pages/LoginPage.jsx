import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
  const {setUser} = useContext(UserContext)
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      setUser({ userName, password, token: true });
      navigate('/profile');
    }
  };

  return (
    <div className="Login">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Usuario</label>
          <input 
            type="text" 
            className="form-control"
            placeholder="Ingresa tu usuario"
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="La contraseña debe tener al menos 6 caracteres"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;