import React from 'react';

// import { WaterqualityStateText } from '../../common/enums';
import { RouteNames } from '../../common/enums';
import { IBathingspot } from '../../common/interfaces';
import { SpotBodyAddonList } from '../components/bathingspot/spot-body-addon-list';
import { SpotBodyFigure } from '../components/bathingspot/spot-body-figure';
import { SpotBodyLocation } from '../components/bathingspot/spot-body-location';
import { Measurement } from '../components/bathingspot/spot-body-measurement';
import { MeasurementTable } from '../components/bathingspot/spot-body-measurement-table';
import { SpotHeader } from '../components/bathingspot/spot-header';
import { Map } from '../components/map';
import { Skeleton } from '../layouts/skeleton';
interface IBathingspotProps {
  spot: IBathingspot;
}
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
  // const str = JSON.stringify(props.spot);

  return (
    <Skeleton title={nameLong} >
      <Map str='Maps' />
      <SpotHeader nameLong={nameLong} water={water} district={district} />
      <div className='bathingspot__body'>
        <SpotBodyFigure
          image={image}
          nameLong={nameLong}
          name={name}
          imageAuthor={undefined}
        />

        <SpotBodyLocation
          nameLong={nameLong}
          street={street}
          postalCode={postalCode}
          city={city}
          website={website}
          longitude={longitude}
          latitude={latitude}
        />

        <Measurement
        measurements={measurements}
        hasPrediction={hasPrediction}
        >
          <MeasurementTable measurements={measurements} />
          {(() => {
            if (hasPrediction === true) {
              return (
                <div className='bathingspot__body-prediction'>
                  <p>
                    <img src='https://via.placeholder.com/32' alt='prediction icon' />
                  {/*tslint:disable-next-line: max-line-length*/}
                    <span className='asteriks'>*</span> Die hier angezeigte Bewertung wird unterstützt durch eine neuartige tagesaktuelle Vorhersagemethode. <a href={`/${RouteNames.info}`}>Erfahren Sie mehr&nbsp;&raquo;</a>
                  </p>
                </div>
              );
            }
            return null;
          })()}
          <div className='bathingspot__body-addon'>
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
          </div>
        </Measurement>
      </div>

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
    </Skeleton >
  );
};

export default bathingspot;
