import React, { useState } from "react";
import {
  MdDevicesOther,
  MdDesktopMac,
  MdTabletMac,
  MdPhoneIphone,
  MdBuild,
} from "react-icons/md";
import DesktopView from "./components/DesktopView";
import FullView from "./components/FullView";
import MobileView from "./components/MobileView";
import TabletView from "./components/TabletView";
import InputColor from "react-input-color";
import "./App.css";

function App() {
  const [view, setView] = useState("full");
  const [url, setUrl] = useState("https://danielhjermitslev.com/");
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [iconColor, setIconColor] = useState("");
  const [error, setError] = useState(null);
  const [useProxy, setUseProxy] = useState(false);
  const [proxyService, setProxyService] = useState("us"); // Default to US server

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    setError(null); // Clear any previous errors
  };

  const validateAndFormatUrl = (inputUrl) => {
    try {
      // Add https if no protocol specified
      if (!/^https?:\/\//i.test(inputUrl)) {
        inputUrl = "https://" + inputUrl;
      }
      const urlObj = new URL(inputUrl);
      return urlObj.toString();
    } catch (e) {
      setError("Please enter a valid URL");
      return false;
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const formattedUrl = validateAndFormatUrl(event.target.value);
      if (formattedUrl) {
        setUrl(formattedUrl);
      }
    }
  };

  const handleColorChange = (value) => {
    setColor(value.hex);
  };

  const handleBgColorChange = (value) => {
    setBgColor(value.hex);
  };

  const handleBorderColorChange = (color) => {
    setBorderColor(color.hex);
  };

  const handleIconColorChange = (color) => {
    setIconColor(color.hex);
  };

  const handleToggleSettings = () => {
    setSettingsVisible(!settingsVisible);
  };

  const getProxiedUrl = (url) => {
    const encodedUrl = encodeURIComponent(url);
    return `/proxy/${proxyService}/includes/process.php?action=update&d=${encodedUrl}`;
  };

  const handleUrlLoad = (url) => {
    // First try direct loading
    if (!useProxy) {
      return url;
    }
    // If proxy is enabled, use proxy service
    return getProxiedUrl(url);
  };

  const toggleProxy = () => {
    setUseProxy(!useProxy);
  };

  let content;
  switch (view) {
    case "desktop":
      content = (
        <DesktopView
          url={url}
          useProxy={useProxy}
          proxyService={proxyService}
        />
      );
      break;
    case "tablet":
      content = (
        <TabletView url={url} useProxy={useProxy} proxyService={proxyService} />
      );
      break;
    case "mobile":
      content = (
        <MobileView url={url} useProxy={useProxy} proxyService={proxyService} />
      );
      break;
    case "full":
      content = (
        <FullView url={url} useProxy={useProxy} proxyService={proxyService} />
      );
      break;
    default:
      content = (
        <DesktopView
          url={url}
          useProxy={useProxy}
          proxyService={proxyService}
        />
      );
  }

  return (
    <div
      className="h-full w-full flex flex-col"
      style={{ backgroundColor: bgColor }}
    >
      <header>
        <nav
          className="navbar z-90 bg-gray-900 text-white py-2 px-4 flex items-center justify-between"
          style={{ backgroundColor: color }}
        >
          <div className="navbar-left flex items-center">
            <img src="/viewport-logo.png" alt="ViewPort" className="h-5 mr-2" />
          </div>
          <div className="navbar-middle flex items-center">
            <div className="navbar-buttons flex items-center gap-4">
              <button
                title="Desktop view"
                className={`navbar-button flex items-center gap-2 ${
                  view === "desktop" ? "active" : ""
                }`}
                style={{
                  backgroundColor: color,
                  borderColor: borderColor,
                  color: iconColor,
                }}
                onClick={() => handleViewChange("desktop")}
              >
                <MdDesktopMac />
                {/* Desktop */}
              </button>
              <button
                title="Tablet view"
                className={`navbar-button flex items-center gap-2 ${
                  view === "tablet" ? "active" : ""
                }`}
                style={{
                  backgroundColor: color,
                  borderColor: borderColor,
                  color: iconColor,
                }}
                onClick={() => handleViewChange("tablet")}
              >
                <MdTabletMac />
                {/* Tablet */}
              </button>
              <button
                title="Mobile view"
                className={`navbar-button flex items-center gap-2 ${
                  view === "mobile" ? "active" : ""
                }`}
                style={{
                  backgroundColor: color,
                  borderColor: borderColor,
                  color: iconColor,
                }}
                onClick={() => handleViewChange("mobile")}
              >
                <MdPhoneIphone />
                {/*  Mobile */}
              </button>
              <button
                title="View all devices"
                className={`navbar-button flex items-center gap-2 ${
                  view === "full" ? "active" : ""
                }`}
                style={{
                  backgroundColor: color,
                  borderColor: borderColor,
                  color: iconColor,
                }}
                onClick={() => handleViewChange("full")}
              >
                <MdDevicesOther />
                {/*  Full */}
              </button>
            </div>
          </div>
          <div className="navbar-right flex items-center">
            <button
              className={`px-4 py-2 rounded-md bg-transparent text-sm font-medium ${
                settingsVisible
                  ? "bg-gray-900 text-gray-400"
                  : "bg-gray-900 text-gray-400"
              } ${
                settingsVisible && "border-2 border-green-500 animate-pulse"
              }`}
              onClick={handleToggleSettings}
            >
              <MdBuild />
            </button>
            <div
              className={`settings-menu ${
                settingsVisible ? "" : "hidden"
              } bg-gray-900`}
            >
              <div className="settings-menu-item">
                <label htmlFor="url-input">Website URL:</label>
                <input
                  type="text"
                  id="url-input"
                  className="border-gray-300 rounded-md w-full px-3 py-2 leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter website URL"
                  onKeyDown={handleKeyDown}
                  value={url}
                  onChange={handleUrlChange}
                />
                {error && (
                  <div className="text-red-500 text-sm mt-1">{error}</div>
                )}
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="use-proxy"
                    checked={useProxy}
                    onChange={toggleProxy}
                    className="mr-2"
                  />
                  <label htmlFor="use-proxy">
                    Use Proxy (for restricted sites)
                  </label>
                </div>
                {useProxy && (
                  <select
                    value={proxyService}
                    onChange={(e) => setProxyService(e.target.value)}
                    className="mt-2 w-full p-2 rounded-md"
                  >
                    <option value="us">US Server (Fastest for Americas)</option>
                    <option value="eu">EU Server (Fastest for Europe)</option>
                    <option value="asia">Asia Server (Fastest for Asia)</option>
                  </select>
                )}
              </div>
              <div className="settings-menu-item">
                <label>Navbar Color:</label>
                <InputColor
                  initialValue={color}
                  onChange={handleColorChange}
                  placement="left"
                />
                <label>Background Color:</label>
                <InputColor
                  initialValue={bgColor}
                  onChange={handleBgColorChange}
                  placement="left"
                />
                <label>Border Color:</label>
                <InputColor
                  initialValue={borderColor}
                  onChange={handleBorderColorChange}
                  placement="left"
                />
                <label>Icon Color:</label>
                <InputColor
                  initialValue={iconColor}
                  onChange={handleIconColorChange}
                  placement="left"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>{content}</main>
    </div>
  );
}

export default App;
