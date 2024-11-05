import React, { useState } from "react";

function App() {
  const namaLengkap = [
    {
      name: "Ryan Rumpoko",
      age: "31",
      dob: "30 Oktober 1993",
    },
    { name: "Surya Insomnia", age: "37", dob: "9 Desember 1986" },
    { name: "Andre Taulany", age: "50", dob: "17 September 1974" },
  ];
  const [values, setValues] = useState(namaLengkap[0]);
  const [count, setCount] = useState(1);
  const changeName = () => {
    if (count >= 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    setValues(namaLengkap[count]);
  };
  return (
    <div>
      <h2>Jawaban Soal No. 1 dan 2</h2>
      <p>Nama : {values.name}</p>
      <p>Umur : {values.age}</p>
      <p>Tanggal Lahir : {values.dob}</p>
      <button onClick={changeName}>Change Data</button>
    </div>
  );
}

export default App;
