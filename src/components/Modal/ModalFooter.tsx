type ModalFooterProps = {
  setIsOpenModal: (isOpen: boolean) => void;
  handleCreateTask: () => void;
  disabled: boolean;
};
const ModalFooter = ({
  setIsOpenModal,
  handleCreateTask,
  disabled
}: ModalFooterProps) => {

  return (
    <div className="flex items-center justify-end gap-3 border-t border-gray-800 bg-gray-950 px-2 py-4">
      <button
        type="button"
        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition hover:bg-gray-900 hover:text-white"
        onClick={() => setIsOpenModal(false)}
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={handleCreateTask}
        disabled={disabled}
        className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-200 disabled:bg-gray-700 cursor-not-allowed">
        Create task
      </button>
    </div>
  );
};

export default ModalFooter;
