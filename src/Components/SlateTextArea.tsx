interface SlateTextAreaProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function SlateTextArea({
  placeholder,
  value,
  onChange,
}: SlateTextAreaProps) {
  return (
    <textarea
      className="placeholder:text-slate-600 w-full h-10 bg-slate-900 border border-slate-800 rounded-xl focus-within:outline-none p-2 font-['Inter'] text-sm text-white resize-none min-h-32"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
