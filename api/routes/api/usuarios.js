const router = require("express").Router();
const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const jwt = require("jwt-simple");

const diskstorage = multer.diskStorage({
  destination: "storage/img-perfil",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-upp-" + file.originalname);
  },
});

const fileUpload = multer({
  storage: diskstorage,
}).single("image");

router.post("/register", fileUpload, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errores: errors.array() });
  }

  const { nombre, apellidoPaterno, apellidoMaterno, usuarioU, password } =
    req.body;

  const newUsuario = {
    nombre: nombre,
    apellidoPaterno: apellidoPaterno,
    apellidoMaterno: apellidoMaterno,
    usuarioU: usuarioU,
    password: bcrypt.hashSync(password, 10),
    fotoUsuario: "1629341595619-upp-WallpaperPC.png",
  };

  const usuario = await User.create(newUsuario);
  res.json(usuario);
});

router.post("/login", async (req, res) => {
  const usuario = await User.findOne({
    where: { usuarioU: req.body.usuarioU },
  });
  if (usuario) {
    const equals = bcrypt.compareSync(req.body.password, usuario.password);
    if (equals) {
      const Token = createToken(User);
      res.json({ auth: true, jwt: Token, usuario });
    } else {
      res.json({ error: "error en usuario/contrasena" });
    }
  } else {
    res.json({ error: "error en usuario/contrasena" });
  }
});

const createToken = (usuario) => {
  const payload = {
    id_Usuario: usuario.id_Usuario,
    createdAt: moment().unix(),
    expiredAt: moment().add(50, "minutes").unix(),
  };
  return jwt.encode(payload, "arriba la octogloriosa");
};

router.delete("/:id_Usuario", async (req, res) => {
  await User.destroy({
    where: { idUsuario: req.params.id_Usuario },
  });
  res.json({ sucess: "Usuario Eliminado con Exito" });
});

router.put("/:id_Usuario", async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  await User.update(req.body, {
    where: { idUsuario: req.params.id_Usuario },
  });
  res.json({ sucess: "Usuario actualizado con exito" });
});

router.get("/", async (req, res) => {
  const usuarios = await User.findAll();
  res.json(usuarios);
});

router.get("/users/:id_Usuario", async (req, res) => {
  const usuario = await User.findOne({
    where: { id_Usuario: req.params.id_Usuario },
  });
  res.json(usuario);
});

module.exports = router;
