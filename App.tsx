import * as React from 'react';
import { useState } from 'react';

import './style.css';

export default function App() {
  const [data, setData] = useState();
  const [age, setAge] = useState();
  const cousers = [
    {
      id: 1,
      name: 'Html,css',
    },
    {
      id: 2,
      name: 'Javascript',
    },
    {
      id: 3,
      name: 'ReactJs',
    },
  ];
  const [checked, setChecked] = useState();
  const [checkedBox, setCheckedBox] = useState([]);
  // Xu ly two way biding voi input
  const postDataForm = () => {
    console.log('Input', {
      data,
      age,
    });
    console.log('Radio', {
      id: checked,
    });
    console.log('checkbox', {
      id: checkedBox,
    });
  };
  // Xu ly gui two way biding checkedbox
  const handleCheckedBox = (id) => {
    setCheckedBox((prev) => {
      console.log('id', id);
      let isChecked = checkedBox.includes(id);
      console.log('isChecked', isChecked);
      if (isChecked) {
        return checkedBox.filter((item) => item !== id);
      } else {
        console.log('else', [...prev, id]);
        return [...prev, id];
      }
    });
  };
  return (
    <div className="wrapper">
      <div className="bt7 bt">
        <h1>Bài tập two way biding với Radio</h1>
        <label>Chọn đi</label>
        <br></br>
        {cousers.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              checked={checked === item.id}
              onChange={() => setChecked(item.id)}
            ></input>
            {item.name}
          </div>
        ))}
        <button onClick={postDataForm}>Submit</button>
      </div>
      <div className="bt8 bt">
        <h1>Bài tập two way biding với Radio</h1>
        <label>Chọn đi</label>
        <br></br>
        {cousers.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={checkedBox.includes(item.id)}
              onChange={() => handleCheckedBox(item.id)}
            ></input>
            {item.name}
          </div>
        ))}
        <button onClick={postDataForm}>Submit</button>
      </div>
    </div>
  );
}
