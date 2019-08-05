import React from 'react';
import { IGenericFormInputProps } from '../../../../common/interfaces/iviews';

export const FormInput = (props: IGenericFormInputProps) => {
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
              type={props.type}
              placeholder={props.placeholder}
              defaultValue={props.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
