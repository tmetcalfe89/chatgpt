import { useState } from "react";

export default function useOpenAiQuery() {
  const [query, setQuery] = useState("");
  const [queryResponse, setQueryResponse] = useState(null);

  async function fetchQueryResponse() {
    const fetchResponse = await fetch("/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });
    const data = await fetchResponse.json();
    setQueryResponse(data.response);
  }

  return {
    query,
    setQuery,
    fetchQueryResponse,
    queryResponse,
  };
}
