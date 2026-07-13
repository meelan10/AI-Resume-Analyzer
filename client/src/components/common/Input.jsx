function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
      />
    </div>
  );
}

export default Input;