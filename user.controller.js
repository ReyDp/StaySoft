import Usuario from '../models/Usuario.model.js';

/**
 * @description Crea un nuevo usuario. Solo accesible por administradores.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const createUser = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    // Validar que se proporcione una contraseña
    if (!password) {
      return res.status(400).json({ message: 'La contraseña es obligatoria para crear un usuario.' });
    }

    const passwordHash = await Usuario.encryptPassword(password);

    const nuevoUsuario = new Usuario({
      nombre,
      email,
      passwordHash,
      rol: rol || 'recepcionista', // Por defecto, si no se especifica, será recepcionista
    });

    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json({ message: 'Usuario creado exitosamente', user: usuarioGuardado });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'El email ya está registrado.' });
    }
    res.status(400).json({ message: 'Error al crear el usuario', error: error.message });
  }
};

/**
 * @description Obtiene todos los usuarios. Solo accesible por administradores.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await Usuario.find().select('-passwordHash'); // No devolver el hash de la contraseña
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
};

/**
 * @description Obtiene un usuario por su ID. Solo accesible por administradores.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getUserById = async (req, res) => {
  try {
    const user = await Usuario.findById(req.params.id).select('-passwordHash');
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
  }
};

/**
 * @description Actualiza un usuario existente por su ID. Solo accesible por administradores.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const updateUser = async (req, res) => {
  try {
    const { password, ...restOfBody } = req.body;
    let updateData = { ...restOfBody };

    if (password) {
      updateData.passwordHash = await Usuario.encryptPassword(password);
    }

    const userUpdated = await Usuario.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).select('-passwordHash');

    if (!userUpdated) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.status(200).json({ message: 'Usuario actualizado exitosamente', user: userUpdated });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'El email ya está registrado por otro usuario.' });
    }
    res.status(400).json({ message: 'Error al actualizar el usuario', error: error.message });
  }
};

/**
 * @description Elimina un usuario por su ID. Solo accesible por administradores.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const deleteUser = async (req, res) => {
  try {
    const userDeleted = await Usuario.findByIdAndDelete(req.params.id);

    if (!userDeleted) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.status(200).json({ message: 'Usuario eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
};