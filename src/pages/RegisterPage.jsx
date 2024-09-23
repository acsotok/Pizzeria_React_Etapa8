import { useState } from "react"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {

    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [confirmContraseña, setConfirmar] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const validarDatos = (e) =>{
        e.preventDefault();
       
        if (!email.trim() || !contraseña.trim() || !confirmContraseña.trim()){
            setError(true);
            return
        }
        if (validarLength(`password`, contraseña, 6)) 
            return
        if (verificarEmail()) 
            return

        setError(false);
        setEmail("")
        setContraseña("")
        setConfirmar("")
        alert("Registro exitoso")
        navigate("/")
    }

    const validarLength = (contraseña, value, long) => {
        if (value.length < long){
            alert(`El ${contraseña} debe tener al menos ${long} caracteres`)
            return true;
        }
        return false;
    }

    const verificarEmail = () => {
        if(contraseña !== confirmContraseña){
            alert(`Las contraseñas no coinciden, inténtalo de nuevo`)
        return true;
        }
        return false
    }
    

    return(
        <>
            <h3 className="registro">¡Regístrate en nuestra página para obtener descuentos!</h3>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p>Todos los campos son obligatorios</p> : null}
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="text"
                        name = "email"
                        className="form-control"
                        placeholder="Ingresa tu email"
                        onChange={(e) => (setEmail(e.target.value))}
                        value={email}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        type="password"
                        name = "contraseña"
                        className="form-control"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => (setContraseña(e.target.value))}
                        value={contraseña}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label>Confirmar Contraseña</label>
                    <input 
                        type="password"
                        name = "confirmContraseña"
                        className="form-control"
                        placeholder="Confirma tu contraseña"
                        onChange={(e) => (setConfirmar(e.target.value))}
                        value={confirmContraseña}
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" >Enviar</button>
            </form>
        </>
    )
}

export default RegisterPage