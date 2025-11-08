import Habitacion from '../models/Habitacion.model.js';

/**
 * @description Crea una nueva habitación en la base de datos.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const createHabitacion = async (req, res) => {
  try {
    const nuevaHabitacion = new Habitacion(req.body);
    const habitacionGuardada = await nuevaHabitacion.save();
    res.status(201).json(habitacionGuardada);
  } catch (error) {
    // Manejo de error de duplicidad (número de habitación)
    if (error.code === 11000) {
      return res.status(409).json({ message: 'El número de habitación ya existe.' });
    }
    res.status(400).json({ message: 'Error al crear la habitación', error: error.message });
  }
};

/**
 * @description Obtiene todas las habitaciones de la base de datos.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getAllHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.status(200).json(habitaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las habitaciones', error: error.message });
  }
};

/**
 * @description Obtiene una habitación por su ID.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getHabitacionById = async (req, res) => {
  try {
    const habitacion = await Habitacion.findById(req.params.id);
    if (!habitacion) {
      return res.status(404).json({ message: 'Habitación no encontrada.' });
    }
    res.status(200).json(habitacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la habitación', error: error.message });
  }
};

/**
 * @description Actualiza una habitación existente por su ID.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const updateHabitacion = async (req, res) => {
  try {
    const habitacionActualizada = await Habitacion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // `new: true` devuelve el documento actualizado
    );

    if (!habitacionActualizada) {
      return res.status(404).json({ message: 'Habitación no encontrada.' });
    }

    res.status(200).json(habitacionActualizada);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'El número de habitación ya existe.' });
    }
    res.status(400).json({ message: 'Error al actualizar la habitación', error: error.message });
  }
};

/**
 * @description Elimina una habitación por su ID.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteHabitacion = async (req, res) => {
  try {
    const habitacionEliminada = await Habitacion.findByIdAndDelete(req.params.id);

    if (!habitacionEliminada) {
      return res.status(404).json({ message: 'Habitación no encontrada.' });
    }

    res.status(200).json({ message: 'Habitación eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la habitación', error: error.message });
  }
};