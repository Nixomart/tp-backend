import TransactionModel from "../models/Transaction.model.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await TransactionModel.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error en getTransactions" });
  }
};
export const addTransaction = async (req, res) => {
  try {
    const { monedaOrigen, cantidadOrigen, monedaDestino, emailCliente } =
      req.body;
    let calculo;
    // calculo
    switch (monedaOrigen) {
      case "ARS":
        switch (monedaDestino) {
          case "ARS":
            calculo = cantidadOrigen;

            break;
          case "USD":
            calculo = cantidadOrigen * 0.004;
            break;
          case "BTC":
            calculo = cantidadOrigen * 0.000008;

          case "BRL":
            calculo = cantidadOrigen * 0.02;
            break;
          default:
            res.status(400).json({
              message:
                "hubo un problema en la conversion revisa si las monedas estan disponibles",
            });
        }
        break;
      case "USD":
        switch (monedaDestino) {
          case "ARS":
            calculo = cantidadOrigen * 400;
            break;
          case "USD":
            calculo = cantidadOrigen;
            break;
          case "BTC":
            calculo = cantidadOrigen * 0.000037;
            break;
          case "BRL":
            calculo = cantidadOrigen * 4.91;
            break;
          default:
            res.status(400).json({
              message:
                "hubo un problema en la conversion revisa si las monedas estan disponibles",
            });
        }
        break;
      case "BTC":
        switch (monedaDestino) {
          case "ARS":
            calculo = cantidadOrigen * 8618542;
            break;
          case "USD":
            calculo = cantidadOrigen * 27214;
            break;
          case "BTC":
            calculo = cantidadOrigen;
            break;
          case "BRL":
            calculo = cantidadOrigen * 133.757;
            break;
          default:
            res.status(400).json({
              message:
                "hubo un problema en la conversion revisa si las monedas estan disponibles",
            });
        }
        break;
      case "BRL":
        switch (monedaDestino) {
          case "ARS":
            calculo = cantidadOrigen * 91;
            break;
          case "USD":
            calculo = cantidadOrigen * 0.2;
            break;
          case "BTC":
            calculo = cantidadOrigen * 0.0000075;
            break;
          case "BRL":
            calculo = cantidadOrigen;
            break;
          default:
            res.status(400).json({
              message:
                "hubo un problema en la conversion revisa si las monedas estan disponibles",
            });
        }
        break;
      default:
        res.status(400).json({
          message:
            "hubo un problema en la conversion revisa si las monedas estan disponibles",
        });
    }
    await TransactionModel.create({
      sourceCurrency: monedaOrigen,
      sourceQuantity: cantidadOrigen,
      currencyToConvert: monedaDestino,
      customerEmail: emailCliente,
      result: calculo,
    });
    res.status(200).json({
      result: calculo,
    });
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(400).json({
      message: "hubo en agregar una trnassacion, fijate si agregaste todos los campos",
    });
  }
};

export const getTransactionsByEmail = async (req, res) => {
  try {
    const {email} = req.params
    const transactions = await TransactionModel.find({customerEmail: email})
    res.status(200).json(transactions)
  } catch (error) {
   console.log(error);   
   res.status(400).json({message: 'hubo un error al traer transaccion por email'})
  }
};
export const getTransactionsX = async(req, res) =>{
  try {
    const {origin, destination } = req.params
    const transactions = await TransactionModel.find({sourceCurrency: origin, currencyToConvert: destination})
    res.status(200).json(transactions)
  } catch (error) {
    res.status(400).json({message: 'No existen transaccion con esas monedas'})
  }
}