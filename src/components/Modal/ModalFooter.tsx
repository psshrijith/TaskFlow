type ModalFooterProps = {
  setIsOpenModal: (isOpen: boolean) => void;
  handleCreateTask: () => void;
  disabled: boolean;
};
const ModalFooter = ({
  setIsOpenModal,
  handleCreateTask,
  disabled,
}: ModalFooterProps) => {

  return (
    <div className="flex items-center justify-end gap-3 border-t border-white/10 bg-zinc-950/95 px-6 py-4 sm:px-8">
      <button
        type="button"
        className="rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-gray-400 transition hover:border-white/10 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
        onClick={() => setIsOpenModal(false)}
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={handleCreateTask}
        disabled={disabled}
        className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-950 shadow-sm shadow-white/10 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-500 disabled:shadow-none"
      >
        Create task
      </button>
    </div>
  );
};

export default ModalFooter;
