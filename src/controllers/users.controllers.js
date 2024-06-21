import * as service from '../services/user.services.js';

export const getById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const item = await service.getByIdUser(id);
        if(!item) throw new Error("Usuario no encontrado :c");
        res.json(item);
    } catch (error) {
        next(error);
    }
};

export const getByEmail = async (req, res, next) => {
    try{
        const { email } = req.params;
        const item = await service.getByEmailUser(email);
        if (!item) throw new Error("Usuario no encontrado :c");
        res.json(item);
    } catch (error) {
        next(error);
    }
};

export const getAll = async (req, res, next) => {
    try{
        const { page, limit } = req.query;
        const response = await service.getAllUsers(page, limit);
        res.json(response);
    } catch (error) {
        next(error);
    }
};

export const create = async (req, res, next) => {
    try{
        const user = { ...req.body };
        const newUser = await service.createUser(user);
        if (!newUser) throw new Error("Error de validación! :c");
        else res.json({
            data: newUser,
        });
    } catch (error) {
        next(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock } = req.body;
        let item = await getByIdUser(id);
        if (!item) throw new Error("Usuario no encontrado :c");

        const userUpdated = await service.updateUser(id, {
            name,
            description,
            price,
            stock
        });

        res.json({
            msg: "Usuario actualizado correctamente :)",
            data: userUpdated
        });
    } catch(error) {
        next(error);
    }
};

export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.deleteUser(id);
        res.json({
            msg: "Usuario eliminado correctamente :)",
        });
    } catch(error) {
        next(error);
    }
};