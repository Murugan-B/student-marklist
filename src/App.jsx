import { useState } from "react";
import "./App.css"; 

function App() {
  const [marks, setMarks] = useState(Array(5).fill(""));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, value) => {
    const newMarks = [...marks];
    newMarks[index] = value;
    setMarks(newMarks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2>Student Marklist</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form">
          {marks.map((mark, index) => (
            <div key={index} className="input-group">
              <label>Subject {index + 1} Marks:</label>
              <input
                type="number"
                value={mark}
                onChange={(e) => handleChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((mark, index) => (
              <tr key={index}>
                <td>Subject {index + 1}</td>
                <td>{mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
