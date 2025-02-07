import React, { useState, useEffect } from 'react';
import { fetchForms, createForm, updateForm, deleteForm } from '../api';
import FormBuilder from '../components/FormBuilder';
import FormList from '../components/FormList';

const AdminDashboard = () => {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  // Fetch all forms on component mount
  useEffect(() => {
    const fetchAllForms = async () => {
      const response = await fetchForms();
      setForms(response.data);
    };
    fetchAllForms();
  }, []);

  // Handle form save (Create or Update)
  const handleFormSave = async (form) => {
    if (form._id) {
      await updateForm(form._id, form);
    } else {
      const response = await createForm(form);
      setForms([...forms, response.data]);
    }
    setSelectedForm(null);  // Clear form selection after save
  };

  // Handle form delete
  const handleFormDelete = async (id) => {
    await deleteForm(id);
    setForms(forms.filter((form) => form._id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <FormList forms={forms} onEdit={setSelectedForm} onDelete={handleFormDelete} />
      <FormBuilder form={selectedForm} onSave={handleFormSave} />
    </div>
  );
};

export default AdminDashboard;
