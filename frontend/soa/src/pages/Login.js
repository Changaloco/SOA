import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Iniciar Sesion</h3>

                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="Ingrese correo electronico" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingrese contrasena" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Iniciar Sesion</button>
                <p className="forgot-password text-right">
                    ¿Olvidaste la <a href="#">contraseña?</a>
                </p>
            </form>
        );
    }
}