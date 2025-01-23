import React, { useState } from "react";

export default function DesktopView({ url }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const handleLoad = () => {
    setIsLoading(false);
    setLoadError(null);
  };

  const handleError = () => {
    setIsLoading(false);
    setLoadError(
      "Failed to load the website. Please check the URL and try again."
    );
  };

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      {loadError && (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-red-500 text-center max-w-md">
            <p className="mb-4">{loadError}</p>
            <button
              onClick={() => {
                setIsLoading(true);
                setLoadError(null);
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
      <iframe
        src={url}
        className="inline-block desktop-frame border-0 m-0 p-0 overflow-hidden z-50 bg-white"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          display: isLoading ? "none" : "block",
          backgroundColor: "white",
        }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        referrerPolicy="no-referrer"
      />
    </>
  );
}
