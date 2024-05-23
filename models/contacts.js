
import mongoose from "mongoose";
import { mongooseError } from '../helpers/mongooseError.js';

const { Schema, model } = mongoose;
const contactShema = new Schema(
    {
        name: {
          type: String,
          required: [true, 'Set name for contact'],
        },
        email: {
          type: String,
        },
        phone: {
          type: String,
        },
        favorite: {
          type: Boolean,
          default: false,
        },
      },
      {
        versionKey: false,
        timestamps: true,
      }
    
);

contactShema.post('save', mongooseError);


export const Contact = model('contact', contactSchema);