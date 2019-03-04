import React from 'react';

interface ISkeleton {
  title?: string;
  children?: React.ReactNode;
  styles?: React.ReactNode;
  scripts?: React.ReactNode;
}

export default (props: ISkeleton) => (
  <html>
  <head>
    <title>{props.title}</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
  </head>
  <body>
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
  </body>
</html >

);

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
