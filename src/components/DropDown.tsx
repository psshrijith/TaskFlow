import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
};

const Dropdown = ({
  label,
  options,
  value,
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(
    (option) => option.value === value
  );

  const hasLabel = label.trim().length > 0;

  return (
    <div className={`relative flex flex-col ${hasLabel ? "gap-2" : "gap-0"}`}>
      {hasLabel && (
        <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
          {label}
        </label>
      )}

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        {...(!hasLabel ? { "aria-label": "Select an option" } : {})}
        onClick={() => setIsOpen((previous) => !previous)}
        className={`flex w-full items-center justify-between rounded-xl border bg-white/3 px-4 py-3 text-sm text-gray-200 transition hover:bg-white/5 focus:outline-none focus:ring-2 ${isOpen ? "border-white/30 ring-white/10" : "border-white/10 focus:border-white/30 focus:ring-white/10"}`}
      >
        <span>{selectedOption?.label ?? "Select an option"}</span>

        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-xs text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={label}
          className="absolute left-0 top-full z-50 mt-2 max-h-52 w-full overflow-y-auto rounded-xl border border-white/10 bg-zinc-900/95 p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${option.value === value ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
            >
              {option.label}
              {option.value === value && (
                <FontAwesomeIcon icon={faCheck} className="text-xs text-gray-300" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
