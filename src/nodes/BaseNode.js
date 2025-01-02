// src/nodes/BaseNode.js
import React from 'react';
import { Handle, position } from 'reactflow';

export const BaseNode = ({ id, data, label, handles }) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', padding: '10px', borderRadius: '8px' }}>
      <div>
        <strong>{label}</strong>
      </div>
      <div>
        {Object.keys(data).map((key) => (
          <div key={key} style={{ marginBottom: '5px' }}>
            <label>
              {key}:
              <input
                type="text"
                value={data[key]}
                onChange={(e) => data.updateField(id, key, e.target.value)}
                style={{ marginLeft: '5px' }}
              />
            </label>
          </div>
        ))}
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};
