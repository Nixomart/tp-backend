import app from './app.js'
import './database/database.js'
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log("escuchando en: ", PORT);
})