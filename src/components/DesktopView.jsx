import React, { useState, useEffect } from "react";

export default function DesktopView({ url, useProxy, proxyService }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    // Reset states when URL changes
    setIsLoading(true);
    setLoadError(null);
    setRetryCount(0);

    // Handle proxy URL transformation
    if (useProxy) {
      const encodedUrl = encodeURIComponent(url);
      setCurrentUrl(
        `/proxy/${proxyService}/includes/process.php?action=update&d=${encodedUrl}`
      );
    } else {
      setCurrentUrl(url);
    }
  }, [url, useProxy, proxyService]);

  const handleLoad = (event) => {
    // Check if the load was successful
    try {
      // Access iframe content to verify load
      const iframeDoc = event.target.contentDocument;
      if (iframeDoc && iframeDoc.body.innerHTML.includes("Error")) {
        handleError();
        return;
      }
    } catch (e) {
      // If we can't access the iframe content, it's probably a CORS issue
      // but the page might have loaded successfully
      console.log("Unable to verify iframe content:", e);
    }

    setIsLoading(false);
    setLoadError(null);
  };

  const handleError = () => {
    setIsLoading(false);
    if (retryCount < 2) {
      // Retry loading a couple of times
      setRetryCount((prev) => prev + 1);
      setIsLoading(true);
    } else {
      let errorMessage = "Failed to load the website. ";
      if (!useProxy) {
        errorMessage += "Try enabling proxy in settings.";
      } else {
        errorMessage +=
          "Try a different server location or check if the website is accessible.";
      }
      setLoadError(errorMessage);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          {retryCount > 0 && (
            <div className="mt-4 text-gray-600">
              Retry attempt {retryCount}/2...
            </div>
          )}
          {useProxy && (
            <div className="mt-2 text-sm text-gray-500">
              Loading through {proxyService.toUpperCase()} proxy...
            </div>
          )}
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
                setRetryCount(0);
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
      <iframe
        src={currentUrl}
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
