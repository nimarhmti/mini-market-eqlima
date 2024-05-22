"use client";
import { useState, useEffect } from "react";
const url = process.env.NEXT_PUBLIC_BASE_URL + "/prices";
interface valuesModel {
  buyPrice: number | null;
  sellPrice: number | null;
}
interface dataStreamModel {
  value: valuesModel;
  isLoading: boolean;
  isError: boolean;
}
const initialValue: dataStreamModel = {
  value: {
    buyPrice: null,
    sellPrice: null,
  },
  isLoading: true,
  isError: false,
};
export const SseServices = () => {
  const [dataStream, setData] = useState<dataStreamModel>(initialValue);
  useEffect(() => {
    //set loading true
    setData((pre) => ({
      ...pre,
      isLoading: true,
    }));
    const sse = new EventSource(url, {
      // withCredentials: true,
    });
    function getRealtimeData(data: valuesModel) {
      setData((pre) => ({
        ...pre,
        value: data,
        isLoading: false,
      }));
    }
    sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data));
    sse.onerror = () => {
      setData((pre) => ({
        ...pre,
        isLoading: false,
        isError: true,
      }));
      sse.close();
    };
    return () => {
      sse.close();
      setData((pre) => ({
        ...pre,
        isLoading: false,
        isError: false,
      }));
    };
  }, []);
  return dataStream;
};
