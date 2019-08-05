import React from 'react';
import { IButtonProps } from '../../common/interfaces/iviews';

/**
 * A simple button for all occasions
 * @param {IButtonProps} props IButtonProps
 */
export const Button = (props: IButtonProps) => (
  <button className={props.additionalClassNames !== undefined ? `button ${props.additionalClassNames}` : 'button'}
    disabled={props.disabled}
    type={props.type}
  >{(() => {
    if (props.url !== undefined && (props.disabled === false || props.disabled === undefined)) {
      return <a href={props.url}>{props.text}</a>;
    }
    return <span>{props.text}</span>;
  })()}</button>
);
