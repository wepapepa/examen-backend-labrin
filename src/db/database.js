import mongoose, { connection } from "mongoose";

const connectionString = '';

export const initMongoDB = async() => {
    try{
        await mongoose.connect(connectionString);
        console.log('Conectado correctamente a la base de datos de MongoDB :D');
    } catch(error){
        console.log(`ERROR => ${error}`);
    }
}