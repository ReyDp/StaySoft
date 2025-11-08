import { Schema, model } from 'mongoose';

/**
 * @typedef {'libre' | 'ocupada' | 'mantenimiento' | 'limpieza'} EstadoHabitacion
 */

const estadoValidos = ['libre', 'ocupada', 'mantenimiento', 'limpieza'];

const HabitacionSchema = new Schema(
  {
    numero: {
      type: String,
      required: [true, 'El número de la habitación es obligatorio.'],
      unique: true,
      trim: true,
    },
    tipo: {
      type: String,
      required: [true, 'El tipo de habitación es obligatorio.'],
      trim: true,
    },
    descripcion: {
      type: String,
      required: [true, 'La descripción es obligatoria.'],
    },
    estado: {
      type: String,
      required: [true, 'El estado de la habitación es obligatorio.'],
      enum: {
        values: estadoValidos,
        message: 'El estado "{VALUE}" no es válido.',
      },
      default: 'libre',
    },
    tarifaHora: {
      type: Number,
      required: [true, 'La tarifa por hora es obligatoria.'],
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('Habitacion', HabitacionSchema);