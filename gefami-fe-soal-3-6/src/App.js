import React, { useState, useEffect } from "react";

function App() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const result = await response.json();
      setValues(result);
    }
    fetchData();
  }, []);
  const deleteFunction = (id) => {
    let index = 0;
    const array = values;
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) index = i;
    }
    array.splice(index, 1);
    setValues([...array]);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {values &&
            values.length !== 0 &&
            values.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <button onClick={() => deleteFunction(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
