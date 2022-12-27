import useOpenAiQuery from "./hooks/useOpenAiQuery";
import "./style.css";

function App() {
  const { query, setQuery, fetchQueryResponse, queryResponse } =
    useOpenAiQuery();

  function handleSubmit(e) {
    e.preventDefault();
    fetchQueryResponse();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>ChatGPT/OpenAI Example</h1>
      <p>Enter a query and hit the submit button for a response!</p>
      <div>
        <label>Query</label>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={5}
        />
      </div>
      <div>
        <label>Response</label>
        <textarea disabled value={queryResponse} rows={10} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;
