import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFormById, submitResponse } from '../api';

const FormSubmissionPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});

  // Fetch form by ID when the page loads
  useEffect(() => {
    const getForm = async () => {
      const response = await fetchFormById(id);
      setForm(response.data);
    };
    getForm();
  }, [id]);

  // Handle input changes
  const handleChange = (field, value) => {
    setResponses({ ...responses, [field]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    await submitResponse({ formId: id, responses });
    alert('Form submitted successfully!');
  };

  if (!form) return <p>Loading form...</p>;

  return (
    <div>
      <h1>{form.title}</h1>
      {form.fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input
            type={field.type}
            onChange={(e) => handleChange(field.label, e.target.value)}
            required={field.required}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormSubmissionPage;
