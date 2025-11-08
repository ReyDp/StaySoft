import { Router } from 'express';
import * as userCtrl from '../controllers/user.controller.js';
import { verifyToken, isAdmin } from '../middleware/auth.middleware.js';

const router = Router();

// Rutas protegidas para la gestión de usuarios (solo administradores)

// Crear un nuevo usuario (por un administrador)
router.post('/', [verifyToken, isAdmin], userCtrl.createUser);

// Obtener todos los usuarios
router.get('/', [verifyToken, isAdmin], userCtrl.getAllUsers);

// Obtener un usuario por ID
router.get('/:id', [verifyToken, isAdmin], userCtrl.getUserById);

// Actualizar un usuario por ID
router.put('/:id', [verifyToken, isAdmin], userCtrl.updateUser);

// Eliminar un usuario por ID
router.delete('/:id', [verifyToken, isAdmin], userCtrl.deleteUser);

export default router;