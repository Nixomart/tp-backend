import ViewerModel from "../models/Viewer.model.js";

export const saveViewer = async (req, res) => {
  try {
    const { dni, email, name, surname } = req.body;
    await ViewerModel.create({
      dni: dni,
      name: name,
      surname: surname,
      email: email,
    });
    res.status(200).json({ message: "Espectador Guardado con exito!" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Hubo un error al Guardar el Espectador!" });
  }
};
export const listViewers = async (req, res) => {
  try {
    const viewers = await ViewerModel.find();
    res.status(200).json(viewers);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al mostrar Espectadores!" });
  }
};

export const getViewer = async (req, res) => {
  try {
    const { id } = req.params;
    const viewer = await ViewerModel.findById(id);
    res.status(200).json(viewer);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al mostrar Espectador!" });
  }
};

export const editViewer = async (req, res) => {
  try {
    const { name, surname, dni, email } = req.body;
    const {id} = req.params
    await ViewerModel.findByIdAndUpdate(id, {
      dni: dni,
      email: email,
      name: name,
      surname: surname,
    });
    res.status(200).json({ message: "Espectador Editado con exito!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al editar Espectador!" });
  }
};
export const deleteViewer = async (req, res) => {
  try {
    const { id } = req.params;
    await ViewerModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Espectador elimando con exito!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al eliminar Espectador!" });
  }
};
