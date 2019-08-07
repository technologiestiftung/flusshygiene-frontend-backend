import React from 'react';
import { IGenericFormInputProps } from '../../../../common/interfaces/iviews';

export const FormInputFile = (props: IGenericFormInputProps) => {
  return (
    // <fieldset disabled={readOnly === true ? true : false}>
    <div className='field is-horizontal'>
      <div className='field-label is-normal'>
        <label className='label'>{props.label}</label>
      </div>
      <div className='field-body'>
        <div className='field'>
          <div className='control'>
            <div className='file'>
              <label className='file-label'>
                <input className='file-input' type={props.type} name='resume' />
                <span className='file-cta'>
                  <span className='file-icon'>
                    <i className='fas fa-upload'></i>
                  </span>
                  <span className='file-label'>{props.name}</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
