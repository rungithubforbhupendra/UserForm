// import React, { useState } from 'react';

// const FormBuilder = ({ form, onSave }) => {
//   const [title, setTitle] = useState(form?.title || '');
//   const [fields, setFields] = useState(form?.fields || []);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const addField = (type) => {
//     setFields([
//       ...fields,
//       {
//         _id: Date.now(),
//         label: '',
//         type,
//         options: type === 'dropdown' || type === 'radio' ? [{ label: '', value: '' }] : [],
//         required: false,
//       },
//     ]);
//   };

//   const handleFieldChange = (index, key, value) => {
//     const updatedFields = [...fields];
//     updatedFields[index][key] = value;
//     setFields(updatedFields);
//   };

//   const handleOptionChange = (fieldIndex, optionIndex, key, value) => {
//     const updatedFields = [...fields];
//     updatedFields[fieldIndex].options[optionIndex][key] = value;
//     setFields(updatedFields);
//   };

//   const addOption = (fieldIndex) => {
//     const updatedFields = [...fields];
//     updatedFields[fieldIndex].options.push({ label: '', value: '' });
//     setFields(updatedFields);
//   };

//   const handleSave = async () => {
//     if (!title.trim() || fields.length === 0) {
//       setError('Form title and at least one field are required.');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       await onSave({ _id: form?._id, title, fields });
//       alert('Form saved successfully!');
//     } catch (err) {
//       setError('Failed to save form. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Form Builder</h2>
//       <input
//         type="text"
//         placeholder="Form Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }}
//       />
//       <div>
//         <button onClick={() => addField('text')}>Add Text Field</button>
//         <button onClick={() => addField('checkbox')}>Add Checkbox</button>
//         <button onClick={() => addField('radio')}>Add Radio Button</button>
//         <button onClick={() => addField('dropdown')}>Add Dropdown</button>
//       </div>

//       {fields.map((field, index) => (
//         <div key={field._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
//           <input
//             type="text"
//             placeholder="Field Label"
//             value={field.label}
//             onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
//             style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
//           />
//           <span>Type: {field.type}</span>
//           <div>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={field.required}
//                 onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
//               />
//               Required
//             </label>
//           </div>
//           {(field.type === 'dropdown' || field.type === 'radio') && (
//             <div style={{ marginTop: '10px' }}>
//               <h4>Options</h4>
//               {field.options.map((option, optionIndex) => (
//                 <div key={optionIndex} style={{ display: 'flex', marginBottom: '8px' }}>
//                   <input
//                     type="text"
//                     placeholder="Option Label"
//                     value={option.label}
//                     onChange={(e) => handleOptionChange(index, optionIndex, 'label', e.target.value)}
//                     style={{ marginRight: '5px', padding: '6px', flex: 1 }}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Option Value"
//                     value={option.value}
//                     onChange={(e) => handleOptionChange(index, optionIndex, 'value', e.target.value)}
//                     style={{ marginRight: '5px', padding: '6px', flex: 1 }}
//                   />
//                 </div>
//               ))}
//               <button onClick={() => addOption(index)}>Add Option</button>
//             </div>
//           )}
//         </div>
//       ))}

//       <button onClick={handleSave} disabled={loading}>
//         {loading ? 'Saving...' : 'Save Form'}
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default FormBuilder;












// import React, { useState } from 'react';

// const FormBuilder = ({ form, onSave }) => {
//   const [title, setTitle] = useState(form?.title || '');
//   const [fields, setFields] = useState(form?.fields || []);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const addField = (type) => {
//     setFields([
//       ...fields,
//       { _id: Date.now(), label: '', type, options: [], required: false },
//     ]);
//   };

//   const handleFieldChange = (index, key, value) => {
//     const updatedFields = [...fields];
//     updatedFields[index][key] = value;
//     setFields(updatedFields);
//   };

//   const handleSave = async () => {
//     if (!title.trim() || fields.length === 0) {
//       setError('Form title and at least one field are required.');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       await onSave({ _id: form?._id, title, fields });
//       alert('Form saved successfully!');
//     } catch (err) {
//       setError('Failed to save form. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Form Builder</h2>
//       <input
//         type="text"
//         placeholder="Form Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <div>
//         <button onClick={() => addField('text')}>Add Text Field</button>
//         <button onClick={() => addField('checkbox')}>Add Checkbox</button>
//         <button onClick={() => addField('radio')}>Add Radio Button</button>
//         <button onClick={() => addField('dropdown')}>Add Dropdown</button>
//       </div>
//       {fields.map((field, index) => (
//         <div key={field._id} style={{ marginBottom: '10px' }}>
//           <input
//             type="text"
//             placeholder="Field Label"
//             value={field.label}
//             onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
//           />
//           <span>{field.type}</span>
//           {field.type === 'dropdown' || field.type === 'radio' ? (
//             <button onClick={() => handleFieldChange(index, 'options', ['Option 1', 'Option 2'])}>
//               Add Options
//             </button>
//           ) : null}
//         </div>
//       ))}
//       <button onClick={handleSave} disabled={loading}>
//         {loading ? 'Saving...' : 'Save Form'}
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default FormBuilder;


















import React, { useState } from 'react';

const FormBuilder = ({ form, onSave }) => {
  const [title, setTitle] = useState(form?.title || '');
  const [fields, setFields] = useState(form?.fields || []);

  const addField = (type) => {
    setFields([...fields, { label: '', type, options: [], required: false }]);
  };

  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handleSave = () => {
    onSave({ _id: form?._id, title, fields });
  };

  return (
    <div>
      <h2>Form Builder</h2>
      <input
        type="text"
        placeholder="Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <button onClick={() => addField('text')}>Add Text Field</button>
        <button onClick={() => addField('checkbox')}>Add Checkbox</button>
        <button onClick={() => addField('radio')}>Add Radio Button</button>
        <button onClick={() => addField('dropdown')}>Add Dropdown</button>
      </div>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Field Label"
            value={field.label}
            onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
          />
          <span>{field.type}</span>
        </div>
      ))}
      <button onClick={handleSave}>Save Form</button>
    </div>
  );
};

export default FormBuilder;
