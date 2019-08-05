import React from 'react';
import { IMeasurementableRow } from '../../../common/interfaces/iviews';

export const MeasurementTableRow = (props: IMeasurementableRow) => (
  <tr>
      <th>{props.rowKey}</th><td>{props.rowValue}</td>
  </tr>
);
