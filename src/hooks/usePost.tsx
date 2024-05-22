"use client";
import { useState, useCallback } from "react";
import axios from "axios";
import { api } from "@/app/axios";

export default function usePost(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const makeRequest = useCallback(
    async (requestData: any) => {
      setIsLoading(true);
      setError(null);
      console.log(requestData);
      try {
        const response = await api.post(url, requestData);
        setData(response.data);
      } catch (err: any) {
        setError(err);
      }
      setIsLoading(false);
    },
    [url]
  );

  return { makeRequest, data, isLoading, error };
}
