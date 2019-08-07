import React from 'react';

import { RouteNames } from '../../common/enums';
import { IBathingspotProps } from '../../common/interfaces/iviews';
import { SpotBodyAddonList } from '../components/bathingspot/spot-body-addon-list';
import { SpotBodyFigure } from '../components/bathingspot/spot-body-figure';
import { SpotBodyLocation } from '../components/bathingspot/spot-body-location';
import { Measurement } from '../components/bathingspot/spot-body-measurement';
import { MeasurementTable } from '../components/bathingspot/spot-body-measurement-table';
import { BathingspotEditor } from '../components/bathingspot/spot-editor';
import { SpotHeader } from '../components/bathingspot/spot-header';
import { Map } from '../components/map';
import { Skeleton } from '../layouts/skeleton';

const Styles = () => (
  <React.Fragment>
    <link rel='stylesheet' type='text/css' href='/assets/css/map.css' />
  </React.Fragment>
);

const Scripts = () => (
  <React.Fragment>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/1.2.0-beta.1/mapbox-gl.js'></script>
    <script src='/assets/js/map.js'></script>
    <script src='/assets/js/bathingspot.js'></script>
  </React.Fragment>
);

const bathingspot = (props: IBathingspotProps) => {
  const {
    nameLong,
    water,
    image,
    district,
    street,
    name,
    postalCode,
    city,
    website,
    latitude,
    longitude,
    measurements,
    cyanoPossible,
    lifeguard,
    disabilityAccess,
    hasDisabilityAccesableEntrence,
    restaurant,
    snack,
    parkingSpots,
    bathrooms,
    disabilityAccessBathrooms,
    bathroomsMobile,
    dogban,
    hasPrediction,
  } = props.spot;

  return (
    <Skeleton
      title={nameLong}
      isLoggedin={props.isLoggedin}
      styles={<Styles />}
      scripts={<Scripts />}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.mapData = [${JSON.stringify(props.spot)}];
        // document.addEventListener('DOMContentLoaded',function() {
        //   console.log('index view');
        // });
        `,
        }}
      />

      {(() => {
        // if (props.isLoggedin === true) {
        return (
          <div>
            <div className='bathingspot__controls'>
              <button className='button is-small' id='edit-spot'>
                Basisdaten Editieren
              </button>
              <button className='button is-small is-hidden' id='edit-spot-save'>
                Speichern
              </button>
              <button
                className='button is-small is-hidden'
                id='edit-spot-cancel'
              >
                Abbrechen
              </button>
            </div>
            <BathingspotEditor spot={props.spot} />
          </div>
        );
        // }
      })()}
      <Map str='Maps' />
      <SpotHeader nameLong={nameLong} water={water} district={district} />
      <section className='bathingspot__body section'>
        <SpotBodyFigure
          image={image}
          nameLong={nameLong}
          name={name}
          imageAuthor={undefined}
        />

        <SpotBodyLocation
          nameLong={nameLong}
          street={street}
          postalCode={postalCode !== null ? postalCode.toString() : ''}
          city={city}
          website={website}
          longitude={longitude}
          latitude={latitude}
        />

        <Measurement measurements={measurements} hasPrediction={hasPrediction}>
          <MeasurementTable measurements={measurements} />
          {(() => {
            if (hasPrediction === true) {
              return (
                <div className='bathingspot__body-prediction'>
                  <p>
                    <img
                      src='https://via.placeholder.com/32'
                      alt='prediction icon'
                    />
                    {/*tslint:disable-next-line: max-line-length*/}
                    <span className='asteriks'>*</span> Die hier angezeigte
                    Bewertung wird unterstützt durch eine neuartige
                    tagesaktuelle Vorhersagemethode.{' '}
                    <a href={`/${RouteNames.info}`}>
                      Erfahren Sie mehr&nbsp;&raquo;
                    </a>
                  </p>
                </div>
              );
            }
            return null;
          })()}
          <section className='bathingspot__body-addon section'>
            <h3>Weitere Angaben zur Badesstelle</h3>
            <SpotBodyAddonList
              cyanoPossible={cyanoPossible}
              lifeguard={lifeguard}
              disabilityAccess={disabilityAccess}
              hasDisabilityAccesableEntrence={hasDisabilityAccesableEntrence}
              restaurant={restaurant}
              snack={snack}
              parkingSpots={parkingSpots}
              bathrooms={bathrooms}
              disabilityAccessBathrooms={disabilityAccessBathrooms}
              bathroomsMobile={bathroomsMobile}
              dogban={dogban}
            />
          </section>
        </Measurement>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        // some script
        document.addEventListener('DOMContentLoaded',function() {
          console.log(JSON.parse('${JSON.stringify(props.spot)}'))
        });
        `,
        }}
      />
    </Skeleton>
  );
};

export default bathingspot;
