interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
}

export default function FormInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  minLength,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-200 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        placeholder={placeholder}
        required={required}
        minLength={minLength}
      />
    </div>
  );
}
