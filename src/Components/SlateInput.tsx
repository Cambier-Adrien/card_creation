interface SlateInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SlateInput({
  placeholder,
  value,
  onChange,
}: SlateInputProps) {
  return (
    <input
      className="placeholder:text-slate-600 w-full h-10 bg-slate-900 border border-slate-800 rounded-xl focus-within:outline-none p-2 font-['Inter'] text-sm text-white"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
