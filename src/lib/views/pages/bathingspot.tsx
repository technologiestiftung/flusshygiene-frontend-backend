import React from 'react';

import { IObject } from '../../common/interfaces';
import { Map } from '../components/map';
import { Skeleton } from '../layouts/skeleton';
interface IBathingspot {
  spot: IObject;
}
const bathingspot = (props: IBathingspot) => {

  const { nameLong, water } = props.spot;
  const str = JSON.stringify(props.spot);

  return (
    <Skeleton
      title='foo'
    >
      <Map str='Maps' />
      <h1>{nameLong}</h1>
      {(() => {
        if (nameLong !== water) {
          return <h2>{water}</h2>;
        }
        return null;
      })()}

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
