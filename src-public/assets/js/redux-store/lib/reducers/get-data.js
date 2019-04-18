"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../action-types");
const data = (state = [], action) => {
    switch (action.type) {
        case action_types_1.GET_DATA_RECEIVED:
            return [action.body.data];
        default:
            return state;
    }
};
exports.default = data;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXQtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFvRDtBQUNwRCxNQUFNLElBQUksR0FBRyxDQUFDLFFBQWtCLEVBQUUsRUFBRSxNQUFXLEVBQUUsRUFBRTtJQUNqRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxnQ0FBaUI7WUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUI7WUFDQSxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0VUX0RBVEFfUkVDRUlWRUQgfSBmcm9tICcuLi9hY3Rpb24tdHlwZXMnO1xuY29uc3QgZGF0YSA9IChzdGF0ZTogb2JqZWN0W10gPSBbXSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0VUX0RBVEFfUkVDRUlWRUQ6XG4gICAgcmV0dXJuIFthY3Rpb24uYm9keS5kYXRhXTtcbiAgICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiJdfQ==