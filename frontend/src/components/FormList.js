import React from 'react';

const FormList = ({ forms, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Forms</h2>
      <ul>
        {forms.map((form) => (
          <li key={form._id}>
            <span>{form.title}</span>
            <button onClick={() => onEdit(form)}>Edit</button>
            <button onClick={() => onDelete(form._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
