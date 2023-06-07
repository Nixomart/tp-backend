import TicketModel from "../models/Ticket.model.js";
export const saveTicket = async (req, res) => {
  try {
    const { price, category, dateSold, viewer } = req.body;
    await TicketModel.create({
      price: price,
      category: category,
      dateSold: dateSold,
      viewer: viewer,
    });
    res.status(200).json({ message: "Ticket Guardado con exito!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al Guardar el Ticket!" });
  }
};
export const listTickets = async (req, res) => {
  try {
    const Tickets = await TicketModel.find().populate("viewer");
    res.status(200).json(Tickets);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al mostrar Ticketes!" });
  }
};

export const getTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const Ticket = await TicketModel.findById(id);
    res.status(200).json(Ticket);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al mostrar Ticket!" });
  }
};

export const getTicketsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const tickets = await TicketModel.find({ category: category });
    res.status(200).json(tickets);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al mostrar Tickets!" });
  }
};

export const editTicket = async (req, res) => {
  try {
    const { price, category, dateSold, viewer } = req.body;
    const { id } = req.params;
    await TicketModel.findByIdAndUpdate(id, {
      price: price,
      category: category,
      dateSold: dateSold,
      viewer: viewer,
    }).populate('viewer');
    res.status(200).json({ message: "Ticket Editado con exito!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al editar Ticket!" });
  }
};
export const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    await TicketModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Ticket elimando con exito!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Hubo un error al eliminar Ticket!" });
  }
};
