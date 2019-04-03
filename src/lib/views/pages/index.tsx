// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

import React from 'react';
import {Item} from '../components/item';
import {Skeleton} from '../layouts/skeleton';

interface IIndex {
  title?: string;
  spots: string[];
}
const Styles = () => (
  <React.Fragment>
    <link rel='stylesheet' type='text/css' href='assets/css/extra.css'/>
  </React.Fragment>
);

const Scripts = () => (
  <React.Fragment>
  <script src='assets/js/extra.js'></script>
  </React.Fragment>
);
// this is only for initial state.
// does not work as a reacitve app
// react is only for temaplting
const state = {
    count: 0,
  };

const index = (props: IIndex) => (
        <Skeleton
      title={props.title}
      styles={<Styles />}
      scripts={<Scripts />}
      >
        <h1>{props.title}</h1>
        <p>{state.count}</p>
        <p>{props.spots}</p>

        {
          props.spots.map((str) => {
          return <Item str={str} />;
        })
        }

        <div className='message'></div>
        <button className='button'>press me</button>
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
