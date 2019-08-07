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
            {(() => {
              if (props.type === 'checkbox') {
                return (
                  <label className='checkbox'>
                    <input
                      type={props.type}
                      checked={
                        typeof props.name === 'boolean' ? props.name : false
                      }
                    />
                    {/* {props.placeholder} */}
                  </label>
                );
              } else {
                return (
                  <input
                    className='input'
                    type={props.type}
                    placeholder={props.placeholder}
                    defaultValue={(() => {
                      if (props.name === undefined || props.name === null) {
                        return '';
                      } else if (typeof props.name === 'number') {
                        return props.name.toString();
                      } else if (typeof props.name === 'string') {
                        return props.name;
                      } else {
                        return '';
                      }
                    })()}
                  />
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
