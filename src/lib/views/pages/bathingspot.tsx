import React from 'react';

// import { WaterqualityStateText } from '../../common/enums';
import { IBathingspot } from '../../common/interfaces';
import { measurementSort } from '../../common/utils';
import { SpotBodyAddonList } from '../components/bathingspot/spot-body-addon-list';
import { SpotBodyFigure } from '../components/bathingspot/spot-body-figure';
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

  } = props.spot;
  const str = JSON.stringify(props.spot);

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
        <div className='bathingspot__body-location'>
          <h3>Anschrift</h3>
          <p>{nameLong}</p>
          <p>{street}</p>
          <p>{postalCode} {city}</p>
          {(() => {
            if (website.length > 0) {
              // const reg = /^(http|https?)\:\/\//g;
              return <p><a href={`${website}`}>{website.replace(/^https?\:\/\//g, '').replace(/\/$/, '')}</a></p>;
            }
            return null;
          })()}
          <p>
            <a href={`https://maps.google.com/maps?daddr=${longitude},${latitude}`}>Route Berechnen</a>
          </p>
        </div>
        <div className='bathingspot__body-measurement'>
          <h3>Wasserqualität</h3>
          {(() => {
            const sortedMeasurment = measurements.sort(measurementSort);
            //   (a, b) => {
            //   return (new Date(a.date) as unknown as number) - (new Date(b.date) as unknown as number);
            // }
            // );
            const dateOpts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return (<div>
              <p>{
                `wasserqualitaet: (NOT YET PARSED TO TEXT) ${sortedMeasurment[0].wasserqualitaetTxt}`
              }</p>
              <p>(Letzte Messung {new Date(sortedMeasurment[0].date).toLocaleDateString('de-DE', dateOpts)})</p>
            </div>);
          })()}
          <MeasurementTable measurements={measurements} />
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
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
        // some script
        document.addEventListener('DOMContentLoaded',function() {
          console.log(JSON.parse('${str}'))
        });
        `,
        }}
      />
    </Skeleton >
  );
};

export default bathingspot;
