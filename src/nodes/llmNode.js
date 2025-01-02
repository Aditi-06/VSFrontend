// llmNode.js
import React from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: '30%' } }, // Input Handle for "system" at 30% height
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: '70%' } }, // Input Handle for "prompt" at 70% height
    { type: 'source', position: Position.Right, id: 'response' }, // Output Handle for "response" on the right
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      label="LLM" 
      handles={handles}
    />
  );
};






// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }
