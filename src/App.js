import './styles/App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [text, setText] = useState('');
  const [radio, setRadio] = useState('1');
  const [checkbox, setCheckbox] = useState([false, false, false]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const index = Number(event.target.value) - 1;
    const newCheckbox = [...checkbox];
    newCheckbox[index] = event.target.checked;
    setCheckbox(newCheckbox);
  };

  return (
    <div className="container">
      <h1>React Controlled Forms</h1>
      <div className="row">
        <div className="col md-6">
          <h3>Controlled Form</h3>
          <form>
            <label htmlFor="text" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="text"
              rows="3"
              name="text"
              value={text}
              onChange={handleTextChange}
            ></textarea>
            <label className="form-check-label" htmlFor="radio">
              Default radio
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="1"
                id="radio1"
                name="radio"
                checked={radio === '1'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="radio1">
                Radio 1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="2"
                id="radio2"
                name="radio"
                checked={radio === '2'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="radio2">
                Radio 2
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="3"
                id="radio3"
                name="radio"
                checked={radio === '3'}
                onChange={handleRadioChange}
              />
              <label className="form-check-label" htmlFor="radio3">
                Radio 3
              </label>
            </div>
            <label className="form-check-label" htmlFor="checkbox">
              Default checkbox
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="1"
                id="checkbox1"
                name="checkbox"
                checked={checkbox[0]}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="checkbox1">
                Checkbox 1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="2"
                id="checkbox2"
                name="checkbox"
                checked={checkbox[1]}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="checkbox2">
                </label>
              </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="3"
                id="checkbox3"
                name="checkbox"
                checked={checkbox[2]}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="checkbox3">
                Checkbox 3
              </label>
            </div>
          </form>
        </div>
        <div className="col md-6">
          <h3>Preview</h3>
          <div className="card">
            <div className="card-body">
              <p>{text}</p>
              <p>Selected radio: {radio}</p>
              <p>Selected checkboxes: {checkbox.filter(Boolean).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
