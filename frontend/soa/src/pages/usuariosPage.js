import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { axios } from "../services/axios";
import Alert from "react-bootstrap/Alert";

export default function Usuarios() {
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSelect, setUsuarioSelect] = useState({
    nombre:"",
    apellidoPaterno:"",
    apellidoMaterno:"",
    usuario:"",
    password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //*funciones axios
  const insertUsuario = async () => {
    await axios
      .post("usuarios/", usuarioSelect)
      .then(
        (response) => setUsuarios(usuarios.concat(response.data)),
        OpenCloseModalInsert(),
        setUsuarioSelect(null)
      );
    <Alert  variant="success">
      Se ha insertado este usuario con exito!
    </Alert>;
  };
  const editUsuario = async () => {
    await axios
      .put("usuarios/" + usuarioSelect.idUsuario, usuarioSelect)
      .then((response) => {
        var dataNueva = usuarios;
        dataNueva.map((usuarios) => {
          if (usuarioSelect.idUsuario === usuarios.idUsuario) {
            usuarios.nombre = usuarioSelect.nombre;
            usuarios.apellidoPaterno = usuarioSelect.apellidoPaterno;
            usuarios.apellidoMaterno = usuarioSelect.apellidoMaterno;
            usuarios.usuario = usuarioSelect.usuario;
            usuarios.password = usuarioSelect.password;
          }
        });
        setUsuarios(dataNueva);
        setUsuarioSelect(null);
        OpenCloseModalEdit();
      });
  };
  const deleteUsuario = async () => {
    await axios.delete("usuarios/" + usuarioSelect.idUsuario).then((response) => {
      setUsuarios(usuarios.filter((usuarios) => usuarios.idUsuario !== usuarioSelect.idUsuario));
      setUsuarioSelect(null);
      OpenCloseModalDelete();
    });
  };
  //*hook efectos de la pagina
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("usuarios")
        .then((response) => {
          setUsuarios(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);


  //*Funciones Modales
  const selectUsuario = (usuario, caso) => {
    setUsuarioSelect(usuario);
    caso === "Editar" ? OpenCloseModalEdit() : OpenCloseModalDelete();
  };
  const OpenCloseModalInsert = () => {
    setModalInsert(!modalInsert);
  };
  const OpenCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };
  const OpenCloseModalDelete = () => {
    setModalDelete(!modalDelete);
  };



  return (
    <>
      <div>
        
        <div className="menu">
          <h1 style={{ textAlign: "center" }}>Usuarios</h1>
          <Button
            style={{}}
            variant="primary"
            onClick={() => OpenCloseModalInsert()}
          >
            Nuevo Usuario
          </Button>
        </div>
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Usuario</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuarios) => (
                <tr key={usuarios.idUsuario}>
                  <td>{usuarios.idUsuario}</td>
                  <td>{usuarios.nombre}</td>
                  <td>{usuarios.apellidoPaterno}</td>
                  <td>{usuarios.apellidoMaterno}</td>
                  <td>{usuarios.usuario}</td>
                  <td>{usuarios.password}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => selectUsuario(usuarios, "Editar")}
                    >
                      Editar
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                      variant="danger"
                      onClick={() => selectUsuario(usuarios, "Eliminar")}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Modal show={modalInsert} onHide={OpenCloseModalInsert}>
        <Modal.Header>
          <Modal.Title> Insertar Nuevo Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="nombre" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control name="apellidoPaterno" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control name="apellidoMaterno" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control name="usuario" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => insertUsuario()}>
            Guardar
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="secondary" onClick={OpenCloseModalInsert}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalEdit} onHide={() => OpenCloseModalEdit()}>
        <Modal.Header>
          <Modal.Title>Editar Un Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
              value={usuarioSelect && usuarioSelect.nombre}
              name="nombre" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido Paterno</Form.Label>
              <Form.Control
              value={usuarioSelect && usuarioSelect.apellidoPaterno}
              name="apellidoPaterno" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control 
              value={usuarioSelect && usuarioSelect.apellidoMaterno}
              name="apellidoMaterno" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
              value={usuarioSelect && usuarioSelect.usuario}
              name="usuario" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control 
              value={usuarioSelect && usuarioSelect.password}
              name="password" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => editUsuario()}>
            Guardar
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="secondary" onClick={() => OpenCloseModalEdit()}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalDelete} onHide={() => OpenCloseModalDelete()}>
        <Modal.Header>
          <Modal.Title>Eliminar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta seguro de que desea eliminar este Usuario?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => deleteUsuario()}>
            Confirmar
          </Button>
          <Button variant="secondary" onClick={() => OpenCloseModalDelete()}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


