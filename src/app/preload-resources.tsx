"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preconnect(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
    crossOrigin: "",
  });
  ReactDOM.prefetchDNS(`${process.env.NEXT_PUBLIC_BASE_URL}`);

  return null;
}
