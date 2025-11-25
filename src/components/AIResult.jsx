import React from 'react';

/**
 * AIResult — styled card for suggestion
 */
export default function AIResult({ result }) {
  if (!result) return null;

  const { doctorName, specialty, confidence, notes } = result;

  return (
    <div className="ai-card">
      <div className="ai-card-left">
        <div className="avatar">{doctorName ? doctorName.split(' ').map(s => s[0]).slice(0,2).join('') : 'DR'}</div>
      </div>
      <div className="ai-card-body">
        <div className="ai-row">
          <div className="ai-title">{doctorName}</div>
          <div className="ai-confidence">{(confidence * 100).toFixed(0)}%</div>
        </div>
        <div className="ai-specialty">{specialty}</div>
        {notes ? <div className="ai-notes">{notes}</div> : null}
      </div>
    </div>
  );
}
