import UserDaoMongoDB from "../daos/mongodb/user.dao.js";
const userDao = new UserDaoMongoDB();

export const getByIdUser = async (id) => {
    try {
        const user = await userDao.getById(id);
        if (!user) return false;
        else return user;
    } catch (error) {
        console.log(error);
    }
};

export const getByEmailUser = async (email) => {
    try {
        const user = await userDao.getByEmail(email);
        if (!user) return false;
        else return user;
    } catch (error) {
        console.log(error); 
    }
};

export const createUser = async (obj) => {
    try {
        const newUser = await userDao.create(obj);
        if (!newUser) throw new Error("Error de validación! :c");
        else return newUser;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (id, obj) => {
    try {
        let item = await userDao.getById(id);
        if (!item) {
            throw new Error("Usuario no encontrado :c");
        } else {
            const userUpdated = await userDao.update(id, obj);
            return userUpdated;
        }
    }
}