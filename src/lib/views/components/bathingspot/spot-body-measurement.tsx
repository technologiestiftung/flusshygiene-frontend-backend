import React from 'react';
import { IMeasurement } from '../../../common/interfaces/iviews';
import { measurementSort } from '../../../utils';

export const Measurement = (props: IMeasurement) => {
  return (
    <div className='bathingspot__body-measurement'>
      <h3>Wasserqualität {(() => {
        if (props.hasPrediction === true) {
          return (<span className='asteriks'>*</span>);
        }
        return null;
      })()}</h3>
      {(() => {
        const sortedMeasurment = props.measurements.sort(measurementSort);
        const dateOpts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return (<div>
          <p>{
            `wasserqualitaet: (NOT YET PARSED TO TEXT) ${sortedMeasurment[0].wasserqualitaetTxt}`
          }</p>
          <p>(Letzte Messung {new Date(sortedMeasurment[0].date).toLocaleDateString('de-DE', dateOpts)})</p>
        </div>);
      })()}
      {props.children}
    </div>
  );
};
