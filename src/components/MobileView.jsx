import React from "react";

export default function MobileView({ url, useProxy, proxyService }) {
  const currentUrl = useProxy
    ? `/proxy/${proxyService}/includes/process.php?action=update&d=${encodeURIComponent(
        url
      )}`
    : url;

  return (
    <center>
      <div className="p-24 h-screen rounded-lg scale-90">
        <iframe
          width={332}
          height={568}
          src={currentUrl}
          className="inline-block mobile-frame border-0 m-0 p-0 overflow-hidden rounded-lg z-50 bg-white"
          style={{ backgroundColor: "white" }}
        />
      </div>
    </center>
  );
}
