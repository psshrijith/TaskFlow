type EmptyStateProps = {
  title: string;
  description: string;
};

const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center">
      <div className="mb-4 text-5xl">📋</div>

      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-2 max-w-sm text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;