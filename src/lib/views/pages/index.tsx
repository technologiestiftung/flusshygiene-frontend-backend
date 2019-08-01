// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

import React from 'react';

import { IIndexProps } from '../../common/interfaces';
import { Card } from '../components/bathingspot/card';
import { Map } from '../components/map';
import { Skeleton } from '../layouts/skeleton';

const Styles = () => (
  <React.Fragment>
    <link rel='stylesheet' type='text/css' href='assets/css/extra.css' />
    <link rel='stylesheet' type='text/css' href='assets/css/map.css' />
  </React.Fragment>
);

const Scripts = () => (
  <React.Fragment>
    <script src='assets/js/extra.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/mapbox-gl/1.2.0-beta.1/mapbox-gl.js'></script>
    <script src='assets/js/map.js'></script>
  </React.Fragment>
);
// this is only for initial state.
// does not work as a reacitve app
// react is only for temaplting
// const state = {
//     count: 0,
//   };

const index = (props: IIndexProps) => (
  <Skeleton
    title={props.title}
    isLoggedin={props.isLoggedin}
    styles={<Styles />}
    scripts={<Scripts />}>
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.mapData = ${JSON.stringify(props.spots)};
        // document.addEventListener('DOMContentLoaded',function() {
        //   console.log('index view');
        // });
        `,
      }}
    />
    <Map str={'This is the map component'} />
    <div className='index section'>
      <h1>Übersicht Badegewässer</h1>
      <p>Bei den mit <span className='asteriks'>*</span> ausgezeichneten
    Badestellen wird die Bewertung durch ein Vorhersagemodel unterstützt.</p>
    {/* {console.log(props.spots)} */}
      <ul className='index__bathingspot-list'>
        {
          props.spots.map((obj, i) => {
            return <Card
              title={obj.name}
              water={obj.water}
              id={obj.id}
              image={obj.image}
              hasPrediction={obj.hasPrediction}
              isUserLoggedIn={props.isLoggedin}
              key={i} />;
          })
        }
      </ul>
    </div>
    {/* <div className='message'></div> */}
    {/* <button className='button'>press me</button> */}
  </Skeleton>
);
export default index;

// export class Index extends React.Component<IIndex> {
//   // can only be used to initilize things no reactive things work
//   public state = {
//     count: 5,
//   };

//   public render() {
//     return (
//       <Skeleton
//       title={this.props.title}
//       styles={<Styles />}
//       scripts={<Scripts />}
//       >
//       Fooooooo
//         <h1>{this.props.title}</h1>
//         <p>{this.state.count}</p>
//         <p>{this.props.spots[0]}</p>

//         {
//           this.props.spots.map((str) => {
//           return <Item str={str} />;
//         })
//         }

//         <div className='message'></div>
//         <button className='button'>press me</button>
//       </Skeleton>
//     );
//   }
// }

// export = Index;
