import React from 'react';

function App() {
  return (
    <div className="container">
      <h3>tracker</h3>
      <form
        action="#"
        className="form"
      >
        <input
          placeholder="Enter tracker name"
          type="text"
          name="new-tracker"
          id="new-tracker"
          className="input"
        />
        <button
          className="button"
          type="submit"
          name="add-tracker"
        >
          <i className="material-icons icon">play_circle</i>
        </button>
      </form>
    </div>
  );
}

export default App;
