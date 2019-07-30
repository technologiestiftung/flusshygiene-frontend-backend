import React from 'react';
import { ISkeleton } from '../../common/interfaces';
import {Footer} from '../components/footer';
import {Head} from '../components/head';
import {Header} from '../components/header';

export const Skeleton = (props: ISkeleton) => (
  <html lang='de'>
    <Head
    title={props.title}
    />
  <body>
    <Header />
    <main  className='section'>{props.children}</main>
    {props.styles}
    <script
      dangerouslySetInnerHTML={{
        __html: `
        // some script
        document.addEventListener('DOMContentLoaded',function() {
          console.log('skeleton view')
        });
        `,
      }}
    />
    {props.scripts}
    <Footer />
  </body>
</html >

);
/*
// class Skeleton extends React.Component<ISkeleton> {
//   public render() {
//     return (
//       <html>
//         <head>
//           <title>{this.props.title}</title>

//         </head>
//         <body>
//           <main>{this.props.children}</main>
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//               // some script
//               document.addEventListener('DOMContentLoaded',function() {
//                 console.log('skeleton view')
//               });
//               `,
//             }}
//           />
//         </body>
//       </html >
//     );
//   }
// }

// export = Skeleton;
*/
