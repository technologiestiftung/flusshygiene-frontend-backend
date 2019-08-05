import React from 'react';
import { IFormInputProps } from '../../../../common/interfaces/iviews';

export const FormInputNumber = (props: IFormInputProps) => {
  return (
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>{props.label}</label>
      </div>
      <div className='field-body'>
        <div className='field'>
          <div className='control'>
            <input
              className='input'
              type='number'
              placeholder={props.placeholder}
              defaultValue={props.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
