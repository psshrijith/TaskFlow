import type { ReactNode } from "react";

type EditableTextProps = {
  value: string;
  label: string;
  isEditing: boolean;
  onChange: (value: string) => void;
  renderValue: (value: string) => ReactNode;
  inputClassName?: string;
};

const EditableText = ({
  value,
  label,
  isEditing,
  onChange,
  renderValue,
  inputClassName = "",
}: EditableTextProps) => {
  if (!isEditing) return renderValue(value);

  return (
    <>
      <label className="sr-only" htmlFor={label}>
        {label}
      </label>
      <input
        autoFocus
        id={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`w-full rounded-lg border border-white/30 bg-zinc-900 px-3 py-2 text-white outline-none focus:border-white focus:ring-2 focus:ring-white/20 ${inputClassName}`}
      />
    </>
  );
};

export default EditableText;
