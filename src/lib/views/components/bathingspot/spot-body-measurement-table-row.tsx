import React from 'react';
import { IMeasurementableRow } from '../../../common/interfaces';

export const MeasurementTableRow = (props: IMeasurementableRow) => (
  <tr>
      <th>{props.rowKey}</th><td>{props.rowValue}</td>
  </tr>
);
