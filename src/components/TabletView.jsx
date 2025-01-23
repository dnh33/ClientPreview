import React from "react";
import Iframe from "react-iframe";

export default function TabletView({ url, useProxy, proxyService }) {
  const currentUrl = useProxy
    ? `/proxy/${proxyService}/includes/process.php?action=update&d=${encodeURIComponent(
        url
      )}`
    : url;

  return (
    <center>
      <div className="rounded-xl -mt-2 scale-90 h-screen">
        <Iframe
          url={currentUrl}
          width="740px"
          height="860px"
          className="inline-block tablet-frame rounded-xl border-0 m-0 p-0 overflow-hidden z-50 bg-white"
          styles={{ backgroundColor: "white" }}
        />
      </div>
    </center>
  );
}
