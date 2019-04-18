"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("./action-types");
const ajax_request_1 = __importDefault(require("./ajax-request"));
const middleware = (store) => (next) => (action) => {
    next(action);
    const req = ajax_request_1.default(next);
    switch (action.type) {
        case action_types_1.GET_DATA:
            // tslint:disable-next-line:no-console
            console.log(action_types_1.GET_DATA, store);
            req();
            break;
        case action_types_1.POST_DATA:
            req({
                async: true,
                body: action.body,
                method: 'POST',
                url: `${location.hostname}:${process.env.PARCEL_WS_PORT}`,
            });
            break;
        default:
            break;
    }
};
exports.default = middleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpREFBcUQ7QUFFckQsa0VBQXFDO0FBS3JDLE1BQU0sVUFBVSxHQUFnQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsTUFBTSxHQUFHLEdBQUcsc0JBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyx1QkFBUTtZQUNYLHNDQUFzQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0IsR0FBRyxFQUFFLENBQUM7WUFDTixNQUFNO1FBQ1IsS0FBSyx3QkFBUztZQUNaLEdBQUcsQ0FBQztnQkFDRixLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7YUFDMUQsQ0FBQyxDQUFDO1lBQ0gsTUFBTTtRQUNSO1lBQ0EsTUFBTTtLQUNQO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0VUX0RBVEEsIFBPU1RfREFUQSB9IGZyb20gJy4vYWN0aW9uLXR5cGVzJztcblxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9hamF4LXJlcXVlc3QnO1xuXG4vLyB0aGlzIGlzIG5vdCBzdHJvbmdseSB0eXBlZFxuLy8gIG5lZWRzIHNvbWUgbG92ZVxuZXhwb3J0IHR5cGUgSU1pZGRsZXdhcmUgPSAoc3RvcmU6IGFueSkgPT4gKG5leHQ6IGFueSkgPT4gKGFjdGlvbjogYW55KSA9PiBhbnk7XG5jb25zdCBtaWRkbGV3YXJlOiBJTWlkZGxld2FyZSA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgbmV4dChhY3Rpb24pO1xuICBjb25zdCByZXEgPSByZXF1ZXN0KG5leHQpO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfREFUQTpcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhHRVRfREFUQSwgc3RvcmUpO1xuICAgICAgcmVxKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFBPU1RfREFUQTpcbiAgICAgIHJlcSh7XG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBib2R5OiBhY3Rpb24uYm9keSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVybDogYCR7bG9jYXRpb24uaG9zdG5hbWV9OiR7cHJvY2Vzcy5lbnYuUEFSQ0VMX1dTX1BPUlR9YCxcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWlkZGxld2FyZTtcbiJdfQ==