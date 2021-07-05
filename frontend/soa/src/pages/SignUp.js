import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Registrarse</h3>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Contrasena</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Fotografia del perfil</label>
                    <input type="file" className="form-control"  />
                </div>

                <div className="form-group">
                    <label>Acta de Nacimiento</label>
                    <input type="file" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>INE/IFE</label>
                    <input type="file" className="form-control" placeholder="Enter password" />
                </div>
                
                <div className="form-group">
                    <label>CURP</label>
                    <input type="file" className="form-control" placeholder="Enter password" />
                </div>
                
                <div className="form-group">
                    <label>Comprobante de domicilio</label>
                    <input type="file" className="form-control" placeholder="Enter password" />
                </div>
                
                <div className="form-group">
                    <label>Numero de tarjeta</label>
                    <input type="text" className="form-control" placeholder="**** **** **** ****" />
                </div>

                <div className="form-group">
                    <label>Fecha</label>
                    <input type="text" className="form-control" placeholder="00/00" />
                </div>

                <div className="form-group">
                    <label>CVV</label>
                    <input type="text" className="form-control" placeholder="***" />
                </div>
                
                
                

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Acepta los terminos y condiciones?</label>
                    </div>
                </div>

               
               

                <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                <p className="forgot-password text-right">
                    Ya estas registrado <a href="#">Inicia Sesion?</a>
                </p>
            </form>
        );
    }
}