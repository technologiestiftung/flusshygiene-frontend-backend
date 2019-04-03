import React from 'react';
import {Footer} from '../components/footer';
import {Head} from '../components/head';
import {Header} from '../components/header';
interface ISkeleton {
  title?: string;
  children?: React.ReactNode;
  styles?: React.ReactNode;
  scripts?: React.ReactNode;
}

export const Skeleton = (props: ISkeleton) => (
  <html lang='de'>
    <Head
    title={props.title}
    />
  <body>
    <Header />
    <main>{props.children}</main>
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
