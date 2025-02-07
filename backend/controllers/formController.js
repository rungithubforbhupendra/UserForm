const Form = require('../models/formModel');

// Create a new form
const createForm = async (req, res) => {
  try {
    const form = new Form(req.body);
    const savedForm = await form.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create form', error });
  }
};

// Get all forms
const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch forms', error });
  }
};

// Get a single form by ID
const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch form', error });
  }
};

// Update a form
const updateForm = async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update form', error });
  }
};

// Delete a form
const deleteForm = async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete form', error });
  }
};

module.exports = { createForm, getForms, getFormById, updateForm, deleteForm };
