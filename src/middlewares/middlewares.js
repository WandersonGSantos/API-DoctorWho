const mongoose = require("mongoose");
const Doctor = require("../models/DoctorModels");

const validarId = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Id invalido" });
    return;
  }
  next();
};

try {
  const doctor = await Doctor.findById(id);
  if (!doctor) {
    return res.status(404).send({ msg: "Personagem não encontrado" });
  }
  res.doctor = doctor;
} catch (err) {
  return res.status(500).send({ error: err });
}

module.exports = { validarId };
