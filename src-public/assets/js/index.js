"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("babel-polyfill"); // needed for ie11 should be the first things
require("whatwg-fetch"); // needed for ie11 should be the first things
const action_creators_1 = require("./redux-store/lib/action-creators");
const store_1 = __importDefault(require("./redux-store/store"));
//  ██████╗██╗     ██╗███████╗███╗   ██╗████████╗
// ██╔════╝██║     ██║██╔════╝████╗  ██║╚══██╔══╝
// ██║     ██║     ██║█████╗  ██╔██╗ ██║   ██║
// ██║     ██║     ██║██╔══╝  ██║╚██╗██║   ██║
// ╚██████╗███████╗██║███████╗██║ ╚████║   ██║
//  ╚═════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝
const ws = new WebSocket(`ws://${location.hostname}:${process.env.PARCEL_WS_PORT}`);
function clickHandle(event) {
    ws.send(JSON.stringify(store_1.default.getState()));
    store_1.default.dispatch(action_creators_1.triggerDefault());
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
            if (target !== null) {
                target.innerHTML = message.data;
            }
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBCQUF3QixDQUFDLDZDQUE2QztBQUN0RSx3QkFBc0IsQ0FBQyw2Q0FBNkM7QUFDcEUsdUVBQW1FO0FBQ25FLGdFQUF3QztBQUV4QyxpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUU5QyxNQUFNLEVBQUUsR0FBYyxJQUFJLFNBQVMsQ0FBQyxRQUFRLFFBQVEsQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBRS9GLFNBQVMsV0FBVyxDQUFDLEtBQVk7SUFFOUIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxnQ0FBYyxFQUFFLENBQUMsQ0FBQztJQUNqQyxzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMxQixDQUFDO0FBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNoRCxzQ0FBc0M7SUFDdEMsMkZBQTJGO0lBRTNGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakQsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDaEQ7SUFDRCxzQ0FBc0M7SUFDdEMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2QsbUJBQW1CO1FBQ25CLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2QsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQztRQUNGLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QixzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xELElBQUssTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDbkIsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2xDO1FBQ0osQ0FBQyxDQUFDO0tBQ0o7QUFDSixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnOyAvLyBuZWVkZWQgZm9yIGllMTEgc2hvdWxkIGJlIHRoZSBmaXJzdCB0aGluZ3NcbmltcG9ydCAnd2hhdHdnLWZldGNoJzsgLy8gbmVlZGVkIGZvciBpZTExIHNob3VsZCBiZSB0aGUgZmlyc3QgdGhpbmdzXG5pbXBvcnQgeyB0cmlnZ2VyRGVmYXVsdCB9IGZyb20gJy4vcmVkdXgtc3RvcmUvbGliL2FjdGlvbi1jcmVhdG9ycyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9yZWR1eC1zdG9yZS9zdG9yZSc7XG5cbi8vICDilojilojilojilojilojilojilZfilojilojilZcgICAgIOKWiOKWiOKVl+KWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl+KWiOKWiOKWiOKVlyAgIOKWiOKWiOKVl+KWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl1xuLy8g4paI4paI4pWU4pWQ4pWQ4pWQ4pWQ4pWd4paI4paI4pWRICAgICDilojilojilZHilojilojilZTilZDilZDilZDilZDilZ3ilojilojilojilojilZcgIOKWiOKWiOKVkeKVmuKVkOKVkOKWiOKWiOKVlOKVkOKVkOKVnVxuLy8g4paI4paI4pWRICAgICDilojilojilZEgICAgIOKWiOKWiOKVkeKWiOKWiOKWiOKWiOKWiOKVlyAg4paI4paI4pWU4paI4paI4pWXIOKWiOKWiOKVkSAgIOKWiOKWiOKVkVxuLy8g4paI4paI4pWRICAgICDilojilojilZEgICAgIOKWiOKWiOKVkeKWiOKWiOKVlOKVkOKVkOKVnSAg4paI4paI4pWR4pWa4paI4paI4pWX4paI4paI4pWRICAg4paI4paI4pWRXG4vLyDilZrilojilojilojilojilojilojilZfilojilojilojilojilojilojilojilZfilojilojilZHilojilojilojilojilojilojilojilZfilojilojilZEg4pWa4paI4paI4paI4paI4pWRICAg4paI4paI4pWRXG4vLyAg4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWd4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWd4pWa4pWQ4pWd4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWd4pWa4pWQ4pWdICDilZrilZDilZDilZDilZ0gICDilZrilZDilZ1cblxuY29uc3Qgd3M6IFdlYlNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzOi8vJHtsb2NhdGlvbi5ob3N0bmFtZX06JHtwcm9jZXNzLmVudi5QQVJDRUxfV1NfUE9SVH1gKTtcblxuZnVuY3Rpb24gY2xpY2tIYW5kbGUoZXZlbnQ6IEV2ZW50KSB7XG5cbiAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoc3RvcmUuZ2V0U3RhdGUoKSkpO1xuICAgc3RvcmUuZGlzcGF0Y2godHJpZ2dlckRlZmF1bHQoKSk7XG4gICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgLy8gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgIC8vIGNvbnNvbGUubG9nKCdlbWJlZGRlZCBzY3JpcHQgZnJvbnRlbmQgaW4gaW5kZXggdmlldyBidW5kZWQgd2l0aCBwYXJjZWwgYW5kIHJlbG9hZCBmb28nKTtcblxuICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbicpO1xuICAgaWYgKGJ1dHRvbiAhPT0gbnVsbCkge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGUpO1xuICAgfVxuICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgIGlmICh3cyAhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2cod3MpO1xuICAgICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgICAgd3Muc2VuZCgnY29ubmVjdGlvbiBvcGVuJyk7XG4gICAgICB9O1xuICAgICAgd3Mub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG4gICAgICAgICBpZiAoIHRhcmdldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9IG1lc3NhZ2UuZGF0YTtcbiAgICAgICAgIH1cbiAgICAgIH07XG4gICB9XG59KTtcbiJdfQ==