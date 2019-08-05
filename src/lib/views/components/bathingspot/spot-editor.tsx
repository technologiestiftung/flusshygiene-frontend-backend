import React from 'react';
import { ISpotEditor } from '../../../common/interfaces/iviews';
import { FormInput } from './editor-form-fields/spot-editor-form-input';
import { FormInputNumber } from './editor-form-fields/spot-editor-form-input-number';
import { FormInputText } from './editor-form-fields/spot-editor-form-input-text';

export const BathingspotEditor = (props: ISpotEditor) => {
  return (
    <div>
      <button className='button is-small'>Editieren</button>
      <form action='' method='post'>
        <FormInput
          label={'Name'}
          placeholder={'Name der Badestelle'}
          type={'text'}
          name={props.spot !== undefined ? props.spot.name : ''}
        />

        <FormInput
          label={'Name (lang)'}
          placeholder={'Langer Name der Badstelle'}
          type={'text'}
          name={props.spot !== undefined ? props.spot.nameLong : ''}
        />
        <FormInput
          label={'Gewässer'}
          placeholder={'Name des Gewässers'}
          type={'text'}
          name={props.spot !== undefined ? props.spot.water : ''}
        />
        <FormInput
          label={'Distrikt'}
          placeholder={'Name des Distrikts'}
          type={'text'}
          name={props.spot !== undefined ? props.spot.district : ''}
        />
        <FormInput
          label={'Straße'}
          placeholder={'Straßenname'}
          type={'text'}
          name={props.spot !== undefined ? props.spot.street : ''}
        />

        <FormInput
          label={'Postleitzahl'}
          placeholder={'Postleitzahl der Adresse'}
          type={'number'}
          name={
            props.spot !== undefined ? props.spot.postalCode.toString() : ''
          }
        />
        <FormInput
          label={'Stadt'}
          placeholder={'Stdat der Adresse'}
          type={'text'}

          name={props.spot !== undefined ? props.spot.city : ''}
        />
        <FormInput
          label={'Zuständiges Gesundheitsamt'}
          placeholder={'Name des Gesundheitsamtes'}
          type={'text'}

          name={props.spot !== undefined ? props.spot.healthDepartment : ''}
        />
        <FormInput
          label={'Gesundheitsamt Zusatz'}
          placeholder={'Gesundheitsamte Zusatztext'}
          type={'text'}
          name={
            props.spot !== undefined ? props.spot.healthDepartmentAddition : ''
          }
        />
        <FormInput
          label={'Gesundheitsamt Straße'}
          placeholder={'Gesundheitsamte Straßenname'}
          type={'text'}
          name={
            props.spot !== undefined ? props.spot.healthDepartmentStreet : ''
          }
        />

        <FormInput
          label={'Gesundheitsamt Postleitzahl'}
          placeholder={'Postleitzahl der Adresse des Gesundheitsamtes'}
          type={'number'}
          name={
            props.spot !== undefined
              ? props.spot.healthDepartmentPostalCode.toString()
              : ''
          }
        />
        <FormInput
          label={'Gesundheitsamt Stadt'}
          placeholder={'Gesundheitsamt Stadt'}
          type={'text'}
          name={props.spot !== undefined ? props.spot.healthDepartmentCity : ''}
        />
        <FormInput
          label={'Gesundheitsamt Stadt'}
          placeholder={'Gesundheitsamt Stadt'}
          type={'email'}
          name={props.spot !== undefined ? props.spot.healthDepartmentMail : ''}
        />
        {/* <div className='field is-horizontal'>
          <div className='field-label is-normal'>
            <label className='label'>Name</label>
          </div>
          <div className='field-body'>
            <div className='field'>
              <div className='control'>
                <input className='input' type='text' placeholder='Name der Badestelle' />
              </div>
            </div>
          </div>
        </div> */}
        <button type='submit'>Speichern</button>
      </form>
    </div>
  );
};
