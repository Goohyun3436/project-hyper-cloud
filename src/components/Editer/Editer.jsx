import styled from 'styled-components';
import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editer = () => {
  const [value, setValue] = useState('');
  const editerRef = useRef(null);

  const conso = () => {
    console.log(editerRef.current);
  };

  return (
    <div>
      <ReactQuill theme='snow' ref={editerRef} value={value} onChange={setValue} />
      <button onClick={conso}>hi</button>
    </div>
  );
};

export default Editer;
