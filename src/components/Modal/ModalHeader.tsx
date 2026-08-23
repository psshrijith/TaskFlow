type ModalHeaderProps = {
  setIsOpenModal: (isOpen: boolean) => void;
};

const ModalHeader = ({ setIsOpenModal }: ModalHeaderProps) => (
  <div className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
    <div>
      <h2 className="text-lg font-semibold text-white">Create task</h2>
      <p className="mt-1 text-sm text-gray-500">
        Add a new task to your workspace.
      </p>
    </div>

    <button
      type="button"
      className="flex h-8 w-8 items-center justify-center rounded-lg text-xl text-gray-500 transition hover:bg-gray-800 hover:text-white"
      onClick={() => setIsOpenModal(false)}
    >
      ×
    </button>
  </div>
);

export default ModalHeader;
