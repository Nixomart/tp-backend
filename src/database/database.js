import { connect } from "mongoose";

(async () => {
    try {
      const db = await connect("mongodb://localhost:27017/pyswtp");
      console.log("connect to: ", db.connection.name);
    } catch (err) {
      console.log(err);
    }
  })();