import React, { useState, useEffect, useCallback } from "react";
import Iframe from "react-iframe";

export default function FullView({ url, useProxy, proxyService }) {
  const [iframeUrls, setIframeUrls] = useState([url, url, url]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const newUrls = inputValue
      ? [inputValue, inputValue, inputValue]
      : [url, url, url];
    setIframeUrls(newUrls);
  }, [inputValue, url]);

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const getProxiedUrl = (url) => {
    return useProxy
      ? `/proxy/${proxyService}/includes/process.php?action=update&d=${encodeURIComponent(
          url
        )}`
      : url;
  };

  return (
    <div className="flex items-center justify-center -mt-16 h-screen scale-box">
      <div className="flex justify-center gap-8">
        {iframeUrls.map((iframeUrl, index) => (
          <Iframe
            key={index}
            url={getProxiedUrl(iframeUrl)}
            width={index === 0 ? 1280 : index === 1 ? 480 : 300}
            height={index === 0 ? 840 : index === 1 ? 738 : 558}
            className={`inline-block border-common m-0 p-0 overflow-hidden z-50 bg-white
              ${index === 0 ? "desktop-border" : ""}
              ${index === 1 ? "tablet-border" : ""}
              ${index === 2 ? "iphone-border" : ""}
            `}
            onLoad={() => setLoading(false)}
            style={{
              visibility: loading ? "hidden" : "visible",
              backgroundColor: "white",
            }}
          />
        ))}
      </div>
    </div>
  );
}
