import React from 'react';
import { IObject } from '../../../common/interfaces';
import { measurementSort } from '../../../common/utils';
import {MeasurementTableRow} from './spot-body-measurement-table-row';
interface IMeasurementable {
  measurements: IObject[];
}
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
      rowValue={`${sortedMeasurement[0].tempTxt.replace('.', ',') } °C`}
    />}
      {<MeasurementTableRow
      rowKey='Coliforme Bakterien'
      rowValue={`${sortedMeasurement[0].cb} pro 100 ml`}
    />}
  </tbody>
  </table>
); };
