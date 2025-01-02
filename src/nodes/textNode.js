// textNode.js

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [dimensions, setDimensions] = useState({ width: 200, height: 80 });
  const [handles, setHandles] = useState([]);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    // Adjust height
    const lineCount = inputText.split('\n').length;
    const newHeight = Math.max(80, lineCount * 20);
    setDimensions({ ...dimensions, height: newHeight });

    // Parse for variables using regex
    const variableMatches = [...inputText.matchAll(/\{\{(\w+)\}\}/g)];
    setHandles(
      variableMatches.map((match) => ({
        id: match[1], // Use the variable name as the ID
        position: Position.Left,
      }))
    );
  };

  return (
    <div
      style={{
        width: dimensions.width,
        height: dimensions.height,
        border: '1px solid black',
        borderRadius: '8px',
        padding: '10px',
      }}
    >
      <div>
        <strong>Text Node</strong>
      </div>
      <textarea
        value={text}
        onChange={handleTextChange}
        style={{
          width: '100%',
          height: 'calc(100% - 20px)',
          resize: 'none',
          border: 'none',
          outline: 'none',
        }}
      />
      {/* Render handles dynamically */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={handle.position}
          id={`${id}-${handle.id}`}
        />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: '50%' }}
      />
    </div>
  );
};





// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input 
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }
