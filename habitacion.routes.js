import { Router } from 'express';
import * as habitacionCtrl from '../controllers/habitacion.controller.js';
import { verifyToken, isAdmin } from '../middleware/auth.middleware.js';

const router = Router();

// Ruta para obtener todas las habitaciones (pública o para recepcionistas)
router.get('/', verifyToken, habitacionCtrl.getAllHabitaciones);

// Ruta para obtener una habitación por ID (pública o para recepcionistas)
router.get('/:id', verifyToken, habitacionCtrl.getHabitacionById);

// --- Rutas protegidas solo para Administradores ---

// Ruta para crear una nueva habitación
router.post('/', [verifyToken, isAdmin], habitacionCtrl.createHabitacion);

// Ruta para actualizar una habitación
router.put('/:id', [verifyToken, isAdmin], habitacionCtrl.updateHabitacion);

// Ruta para eliminar una habitación
router.delete('/:id', [verifyToken, isAdmin], habitacionCtrl.deleteHabitacion);

export default router;