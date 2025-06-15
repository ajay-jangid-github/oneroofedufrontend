// src/components/InputField.jsx
const InputField = ({ label, type, value, onChange, error, name }) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
