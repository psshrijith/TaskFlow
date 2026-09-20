import React from "react";

type LoaderProps = {
  message?: string;
  fullScreen?: boolean;
};


const LOADER_GIF = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" stroke="%23ffffff" stroke-width="8" stroke-dasharray="164.93361431346415 56.97787143782138" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"/></circle><circle cx="50" cy="50" r="20" stroke="%236366f1" stroke-width="6" stroke-dasharray="80 30" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="360 50 50;0 50 50" keyTimes="0;1"/></circle></svg>`;

const Loader: React.FC<LoaderProps> = ({
  message = "Loading...",
  fullScreen = false,
}) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="relative flex items-center justify-center p-3 rounded-2xl bg-white/[0.04] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md">
        <img
          src={LOADER_GIF}
          alt="Loading animation"
          className="h-14 w-14 select-none drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        />
      </div>

      {message && (
        <p className="text-sm font-medium tracking-wide text-gray-400 animate-pulse">
          {message}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-zinc-950/90 backdrop-blur-md text-white">
        {content}
      </div>
    );
  }

  return (
    <div className="flex min-h-[40vh] w-full items-center justify-center py-16">
      {content}
    </div>
  );
};

export default Loader;
