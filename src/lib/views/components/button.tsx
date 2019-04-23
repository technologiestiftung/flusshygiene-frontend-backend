import React from 'react';

/**
 * @property button = 'button',
 * @property submit = 'submit',
 * @property reset = 'reset',
 */
enum ButtonPropsType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

/**
 * Interface for the class Button props
 * @property text: string;
 * @property url?: string;
 * @property type?: enum ButtonPropsType; button, submit, reset or undefined
 * @property disabled?: boolean;
 */
interface IButtonProps {
  /**
   * the text for the button
   */
  text: string;
  url?: string;
  type?: ButtonPropsType;
  disabled?: boolean;
  additionalClassNames?: string;

}
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
