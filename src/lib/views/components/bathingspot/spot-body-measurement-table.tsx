import React from 'react';
import { IMeasurementable } from '../../../common/interfaces/iviews';
import { measurementSort } from '../../../utils';
import {MeasurementTableRow} from './spot-body-measurement-table-row';

export const MeasurementTable = (props: IMeasurementable) => {
  const sortedMeasurement = props.measurements.sort(measurementSort);
  return (
  <table className='bathingspot__measurement-table'>
  <tbody>
    {<MeasurementTableRow
      rowKey='Sichttiefe'
      rowValue={`${sortedMeasurement[0].sichtTxt} cm`}
    />}
    {<MeasurementTableRow
      rowKey='Escherichia coli'
      rowValue={`${sortedMeasurement[0].ecoTxt} pro 100 ml`}
    />}
      {<MeasurementTableRow
      rowKey='Intestinale Enterokokken'
      rowValue={`${sortedMeasurement[0].enteTxt} pro 100 ml`}
    />}
      {<MeasurementTableRow
      rowKey='Wassertemperatur'
      rowValue={(() => {
        if (sortedMeasurement[0].tempTxt !== null) {
          return `${sortedMeasurement[0].tempTxt.replace('.', ',') } °C`;
        } else {
          return '';
        }
      })()}
    />}
      {<MeasurementTableRow
      rowKey='Coliforme Bakterien'
      rowValue={`${sortedMeasurement[0].cb} pro 100 ml`}
    />}
  </tbody>
  </table>
); };
