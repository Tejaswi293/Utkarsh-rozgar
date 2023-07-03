import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import DisplayFormDataInTable from './WorkerHistoryComponents/DisplayFormDataInTable';
function WorkerHistory() {
  return (
    <div className="WorkerHistory">
    <h1>Worker History</h1>
      <DisplayFormDataInTable />
    </div>
  );
}
export default WorkerHistory;