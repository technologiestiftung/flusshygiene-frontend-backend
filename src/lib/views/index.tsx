// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

import React from 'react';
import Skeleton from './layouts/skeleton';

interface IIndex {
  title?: string;
}
const Styles = () => (
  <React.Fragment>
    <link rel="stylesheet" type="text/css" href="assets/css/index.css"/>
  </React.Fragment>
);

const Scripts = () => (
  <React.Fragment>
  <script src="assets/js/index.bundle.js"></script>
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
        <div className="message"></div>
        <button className="button">press me</button>
      </Skeleton>
);
export default index;

// class Index extends React.Component<IIndex> {
//   // can only be used to initilize things no reactive things work
//   public state = {
//     count: 0,
//   };

//   // does not work
//   public handleClick = () => {
//     let count = this.state.count;
//     count++;
//     // tslint:disable-next-line:no-console
//     console.log(count);
//     this.setState({count});
//   }
//   public render() {
//     return (
//       <Skeleton
//       title={this.props.title}
//       styles={<Styles />}
//       scripts={<Scripts />}
//       >
//         <h1>{this.props.title}</h1>
//         <p>{this.state.count}</p>
//         <button onClick={this.handleClick}></button>
//       </Skeleton>
//     );
//   }
// }

// export = Index;
