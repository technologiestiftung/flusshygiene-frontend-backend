import 'babel-polyfill'; // needed for ie11 should be the first things
import 'whatwg-fetch'; // needed for ie11 should be the first things
import { triggerDefault } from './redux-store/lib/action-creators';
import store from './redux-store/store';

//  ██████╗██╗     ██╗███████╗███╗   ██╗████████╗
// ██╔════╝██║     ██║██╔════╝████╗  ██║╚══██╔══╝
// ██║     ██║     ██║█████╗  ██╔██╗ ██║   ██║
// ██║     ██║     ██║██╔══╝  ██║╚██╗██║   ██║
// ╚██████╗███████╗██║███████╗██║ ╚████║   ██║
//  ╚═════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝

const ws: WebSocket = new WebSocket(`ws://${location.hostname}:${process.env.PARCEL_WS_PORT}`);

function clickHandle(event: Event) {

   ws.send(JSON.stringify(store.getState()));
   store.dispatch(triggerDefault());
   // tslint:disable-next-line:no-console
   // console.log(store.getState());
   event.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
   // tslint:disable-next-line:no-console
   // console.log('embedded script frontend in index view bunded with parcel and reload foo');

   const button = document.querySelector('.button');
   if (button !== null) {
      button.addEventListener('click', clickHandle);
   }
   // tslint:disable-next-line:no-console
   if (ws !== null) {
      // console.log(ws);
      ws.onopen = () => {
         ws.send('connection open');
      };
      ws.onmessage = (message) => {
         // tslint:disable-next-line:no-console
         console.log(message);
         const target = document.querySelector('.message');
         if ( target !== null) {
            target.innerHTML = message.data;
         }
      };
   }
});
