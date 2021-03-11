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
      <ul className="list">
        <li className="item">
          <span className="tracker-title">Lorem, ipsum dolor.</span>
          <span className="tracker-time m1">01:15:56</span>
          <button className="button m1" type="button">
            <i className="material-icons icon black">
              pause_circle_outline
            </i>
          </button>
          <button className="button m1" type="button">
            <i className="material-icons icon red">
              remove_circle_outline
            </i>
          </button>
        </li>
        <li className="item">
          <span className="tracker-title">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
          <span className="tracker-time m1">100:25:15</span>
          <button className="button m1" type="button">
            <i className="material-icons icon black">
              play_circle_outline
            </i>
          </button>
          <button className="button m1" type="button">
            <i className="material-icons icon red">
              remove_circle_outline
            </i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
