// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";
import NavBanner from "../components/NavBanner";

function TradingViewWidget({ darkMode, toggleDarkMode, user, token }) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "CME_MINI:NQ1!",
          "interval": "60",
          "timezone": "America/New_York",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div>
      <div className={`h-full  ${darkMode ? "" : "dark"}`}>
        <NavBanner
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          user={user}
          token={token}
        />
        <section className="h-full min-h-screen md:ml-20 lg:ml-[200px] bg-slate-50 dark:bg-slate-customDark">
          <div className="h-screen w-full px-12 py-20">
            <div
              className="tradingview-widget-container"
              ref={container}
              style={{ height: "100%", width: "100%" }}
            >
              <div
                className="tradingview-widget-container__widget"
                style={{ height: "calc(100% - 32px)", width: "100%" }}
              ></div>
              <div className="tradingview-widget-copyright">
                <a
                  href="https://www.tradingview.com/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="blue-text">
                    Track all markets on TradingView
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
