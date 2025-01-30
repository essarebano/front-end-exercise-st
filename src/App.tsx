// @TODO: BONUS: implement a custom useFetch hook that returns { loading, error, data }
// import { useFetch } from "./hooks/useFetch";
import "./App.css";

function App() {
  // @TODO: fetch the results
  // Make a POST request with the body { q: "searchstring" } to "https://api.sailthru.com/templates"

  // @TODO: When the input field changes, update the fetch request
  function handleSearch() {}

  return (
    <>
      <h1>Templates</h1>

      <form>
        <div className="label">Search for templates</div>
        <input type="search" placeholder="Sail" />
      </form>

      {/* @TODO: There's a problem with the API, search for "gold", it will error, display a banner with the error message */}

      {/* @TODO: Show a loading state and only display the results once loaded */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Labels</th>
            <th>Last updated</th>
          </tr>
        </thead>
        <tbody>{/* @TODO: show data here */}</tbody>
      </table>
    </>
  );
}

export default App;
