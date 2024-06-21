import mongoose from "mongoose";

const connectionString = 'mongodb+srv://admin:admin101012@examen-backend.fkuvtyw.mongodb.net/dbexamen?retryWrites=true&w=majority&appName=Examen-backend';

export const initMongoDB = async() => {
    try{
        await mongoose.connect(connectionString);
        console.log('Conectado correctamente a la base de datos de MongoDB :D');
    } catch(error){
        console.log(`ERROR => ${error}`);
    }
}

//initMongoDB()