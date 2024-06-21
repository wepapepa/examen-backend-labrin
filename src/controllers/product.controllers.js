import * as service from '../services/product.services.js';

export const getAll = async (req, res, next) => {
    try {
        const { page, limit, name, sort, } = req.query;
        const response = await service.getAll(page, limit, name, sort);
        const nextLink = response.hasNextPAge ? `http://localhost:8080/products?page=${response.nextPage}` : null;
        const prevLink = response.hasNextPAge ? `http://localhost:8080/products?page=${response.nextPage}` : null;
        res.status(200).json({
            status: 'success',
            payload: response.docs,
            totalPages: response.totalPages,
            prevPage: response.prevPage,
            nextPage: response.nextPage,
            hasPrevPage: response.hasPrevPage,
            hasNextPage: response.hasNextPAge,
            prevLink,
            nextLink
        });
    } catch (error) {
        next(error.message);
    }
};

export const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await service.getById(id);
        if (!response) res.status(404).json({ msg: "Producto no encontrado :c" });
        else res.status(200).json(response);
    } catch (error) {
        next(error.message);
    }
};

export const create = async (req, res, next) => {
    try {
        const newProd = await service.create(req.body);
        if (!newProd) res.status(404).json({ msg: "Error al crear el producto :c" });
        else res.status(200).json(newProd);
    } catch (error) {    
        next(error.message);
    }
};

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prodUpd = await service.update(id, req.body);
        if (!prodUpd) res.status(404).json({ msg: "Error al actualizar el producto :c" });
        else res.status(200).json(prodUpd);
    } catch (error) {    
        next(error.message);
    }
};

export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prodDel = await service.remove(id);
        if (!prodDel) res.status(404).json({ msg: "Error al borrar el producto :c" });
        else res.status(200).json({ msg: `Product id: ${id} borrado` });
    } catch (error) {   
        next(error.message);
    }
};


