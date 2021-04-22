import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Color Red',
    value: 'red',
  },
  {
    label: 'Color Blue',
    value: 'blue',
  },
  {
    label: 'Color Green',
    value: 'green',
  },
];

const TextChanger = () => {
  const [selected, setSelected] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <Dropdown
        label="Select a color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <h3 className="ui header">Output</h3>
      <div>
        <h1 className={`ui ${selected.value} header`}>{text}</h1>
      </div>
    </div>
  );
};

export default TextChanger;
