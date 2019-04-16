import React from 'react';

interface IMeasurementableRow {
  rowKey: string;
  rowValue: string;
}
export const MeasurementTableRow = (props: IMeasurementableRow) => (
  <tr>
      <th>{props.rowKey}</th><td>{props.rowValue}</td>
  </tr>
);
