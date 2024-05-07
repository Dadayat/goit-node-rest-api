import contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import crypto from "node:crypto";
import { createContactSchema } from "../schemas/contactsSchemas.js";
import validateBody from "../helpers/validateBody.js";

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await contactsService.listContacts();
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

export const getOneContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactsService.getContactById(id);
    if (!contact) {
      throw HttpError(404);
    }
    res.status(200).send(contact);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await contactsService.removeContact(id);
    if (!contact) {
      throw HttpError(404);
    }
    res.status(200).send(contact);
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res) => {
  try {
    const { error, value } = createContactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const newContact = await contactsService.addContact(value); // Викликаємо функцію addContact з даними з req.body
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

export const updateContact = (req, res) => {};
