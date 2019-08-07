import React from 'react';
import { ISpotEditor } from '../../../common/interfaces/iviews';
import { FormInput } from './editor-form-fields/spot-editor-form-input';

export const BathingspotEditor = (props: ISpotEditor) => {
  return (
    <div>
      <button className='button is-small'>Editieren</button>
      <form action='' method='post'>
        <FormInput
          label={'Name'}
          placeholder={'Name der Badestelle'}
          type={'text'}
          name={props.spot.name}
        />

        <FormInput
          label={'Name (lang)'}
          placeholder={'Langer Name der Badstelle'}
          type={'text'}
          name={props.spot.nameLong}
        />
        <FormInput
          label={'Latitude'}
          placeholder={'Latitude'}
          type={'number'}
          name={props.spot.latitude}
        />
        <FormInput
          label={'Longitude'}
          placeholder={'Longitude'}
          type={'number'}
          name={props.spot.longitude}
        />
        <FormInput
          label={'Elevation'}
          placeholder={'Elevation'}
          type={'number'}
          name={props.spot.elevation}
        />
        <FormInput
          label={'Region'}
          placeholder={'Region'}
          type={'text'}
          name={props.spot.region}
        />
        <FormInput
          label={'Webseite'}
          placeholder={'Url der Webseite'}
          type={'text'}
          name={props.spot.website}
        />
        <FormInput
          label={'Bild'}
          placeholder={'Url des Bildes'}
          type={'text'}
          name={props.spot.image}
        />
        <FormInput
          label={'API endpoints'}
          placeholder={'Url einer API zur Abfrage von Daten'}
          type={'text'}
          name={props.spot.apiEndpoints}
        />
        <FormInput
          label={'Letzte Klassifizierung'}
          placeholder={'Letzte Klassifizierung'}
          type={'text'}
          name={props.spot.lastClassification}
        />
        <FormInput
          label={'Gewässer'}
          placeholder={'Name des Gewässers'}
          type={'text'}
          name={props.spot.water}
        />
        <FormInput
          label={'Distrikt'}
          placeholder={'Name des Distrikts'}
          type={'text'}
          name={props.spot.district}
        />

        <FormInput
          label={'Straße'}
          placeholder={'Straßenname'}
          type={'text'}
          name={props.spot.street}
        />

        <FormInput
          label={'Postleitzahl'}
          placeholder={'Postleitzahl der Adresse'}
          type={'number'}
          name={props.spot.postalCode}
        />
        <FormInput
          label={'Stadt'}
          placeholder={'Stdat der Adresse'}
          type={'text'}
          name={props.spot.city}
        />
        <FormInput
          label={'Zuständiges Gesundheitsamt'}
          placeholder={'Name des Gesundheitsamtes'}
          type={'text'}
          name={props.spot.healthDepartment}
        />
        <FormInput
          label={'Gesundheitsamt Zusatz'}
          placeholder={'Gesundheitsamte Zusatztext'}
          type={'text'}
          name={props.spot.healthDepartmentAddition}
        />
        <FormInput
          label={'Gesundheitsamt Straße'}
          placeholder={'Gesundheitsamte Straßenname'}
          type={'text'}
          name={props.spot.healthDepartmentStreet}
        />

        <FormInput
          label={'Gesundheitsamt Postleitzahl'}
          placeholder={'Postleitzahl der Adresse des Gesundheitsamtes'}
          type={'number'}
          name={props.spot.healthDepartmentPostalCode}
        />
        <FormInput
          label={'Gesundheitsamt Stadt'}
          placeholder={'Gesundheitsamt Stadt'}
          type={'text'}
          name={props.spot.healthDepartmentCity}
        />
        <FormInput
          label={'Gesundheitsamt Email'}
          placeholder={'Gesundheitsamt Email'}
          type={'email'}
          name={props.spot.healthDepartmentMail}
        />
        <FormInput
          label={'Gesundheitsamt Telefon'}
          placeholder={'Gesundheitsamt Telefon'}
          type={'text'}
          name={props.spot.healthDepartmentPhone}
        />
        <FormInput
          label={'Wasserrettung durch DLRG'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.waterRescueThroughDLRGorASB}
        />
        <FormInput
          label={'Wasserrettung'}
          placeholder={'Wasserrettung'}
          type={'text'}
          name={props.spot.waterRescue}
        />
        <FormInput
          label={'Rettungschwimmer'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.lifeguard}
        />
        <FormInput
          label={'Barrierefreier Eingang'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.hasDisabilityAccesableEntrence}
        />
        <FormInput
          label={'Barrierefreie'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.disabilityAccess}
        />
        <FormInput
          label={'Barrierefreie Toiletten'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.disabilityAccessBathrooms}
        />
        <FormInput
          label={'Restaurant'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.restaurant}
        />
        <FormInput
          label={'Snack'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.snack}
        />
        <FormInput
          label={'Parkplätze'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.parkingSpots}
        />
        <FormInput
          label={'Cyanobaktieren möglich'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.cyanoPossible}
        />
        <FormInput
          label={'Toiletten'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.bathrooms}
        />
        <FormInput
          label={'Mobile Toiletten'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.bathroomsMobile}
        />
        <FormInput
          label={'Hundeverbot'}
          placeholder={''}
          type={'checkbox'}
          name={props.spot.dogban}
        />

        {/* <FormInput
          label={'Status'}
          placeholder={'???'}
          type={'text'}
          name={props.spot.state}
        /> */}
        {/* <FormInput
          label={'location'}
          placeholder={'???'}
          type={'text'}
          name={props.spot.location}
        />
                <FormInput
          label={'area'}
          placeholder={'???'}
          type={'text'}
          name={props.spot.area}
        /> */}

        <button type='submit'>Speichern</button>
      </form>
    </div>
  );
};
