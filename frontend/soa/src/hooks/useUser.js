import { useCallback, useContext,useState } from 'react';
import Context from "../context/UserContext";
import loginService from "../services/login";

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);
  const [state,setState] = useState({loading:false,error:false});
  
  
  const login = useCallback(({usuarioU, password}) => {
      setState({loading: true, error:false});
      loginService({
        usuarioU,
        password,
      }).then((jwt) => {
        window.sessionStorage.setItem('jwt', jwt.jwt);
        window.sessionStorage.setItem('idUsuario', jwt.usuario.idUsuario);
        window.sessionStorage.setItem('nombre', jwt.usuario.nombre);
        window.sessionStorage.setItem('apellidoPaterno', jwt.usuario.apellidoPaterno);
        window.sessionStorage.setItem('apellidoMaterno',jwt.usuario.apellidoMaterno);
        window.sessionStorage.setItem('usuarioU',jwt.usuario.usuarioU);
        window.sessionStorage.setItem('fotoUsuario',jwt.usuario.fotoUsuario);
        setState({loading: false, error:false});
        console.log("jwt")
        setJWT("jwt");
      })
      .catch((err,jwt) => {
        window.sessionStorage.clear();
        setState({loading: false, error:true});
        console.error(err)
      })
    },[setJWT])

  const logout = useCallback(() => {
    window.sessionStorage.clear();
    setJWT(null);
  }, [setJWT]);

  return {
    token:  jwt,
    isLoggedIn: Boolean(jwt),
    isLoginLoading : state.loading,
    isLoginError : state.error,
    login,
    logout,
  };
}
