interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
      />
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
};
