type ModalHeaderProps = {
  setIsOpenModal: (isOpen: boolean) => void;
};

const ModalHeader = ({ setIsOpenModal }: ModalHeaderProps) => (
  <div className="flex items-start justify-between border-b border-white/10 bg-white/[0.02] px-6 py-6 sm:px-8">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Task workspace</p>
      <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">Create task</h2>
      <p className="mt-1 text-sm text-gray-500">
        Add a new task to your workspace.
      </p>
    </div>

    <button
      type="button"
      aria-label="Close create task modal"
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-xl leading-none text-gray-500 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
      onClick={() => setIsOpenModal(false)}
    >
      ×
    </button>
  </div>
);

export default ModalHeader;
