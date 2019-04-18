"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../action-types");
/**
 * Here we add all errors the the state
 * follow this function to the lib/root-reducer.js where it is added to the store
 * @param {Array} state
 * @param {Object} action
 */
const errors = (state = [], action) => {
    switch (action.type) {
        case action_types_1.GET_DATA_ERROR:
        case action_types_1.POST_DATA_ERROR:
            return [action.error, ...state];
        default:
            return state;
    }
};
exports.default = errors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFrRTtBQUVsRTs7Ozs7R0FLRztBQUNILE1BQU0sTUFBTSxHQUFHLENBQUMsUUFBZSxFQUFFLEVBQUUsTUFBVyxFQUFFLEVBQUU7SUFDaEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3JCLEtBQUssNkJBQWMsQ0FBQztRQUNwQixLQUFLLDhCQUFlO1lBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEM7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Ysa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0VUX0RBVEFfRVJST1IsIFBPU1RfREFUQV9FUlJPUiB9IGZyb20gJy4uL2FjdGlvbi10eXBlcyc7XG5cbi8qKlxuICogSGVyZSB3ZSBhZGQgYWxsIGVycm9ycyB0aGUgdGhlIHN0YXRlXG4gKiBmb2xsb3cgdGhpcyBmdW5jdGlvbiB0byB0aGUgbGliL3Jvb3QtcmVkdWNlci5qcyB3aGVyZSBpdCBpcyBhZGRlZCB0byB0aGUgc3RvcmVcbiAqIEBwYXJhbSB7QXJyYXl9IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKi9cbmNvbnN0IGVycm9ycyA9IChzdGF0ZTogYW55W10gPSBbXSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIEdFVF9EQVRBX0VSUk9SOlxuICBjYXNlIFBPU1RfREFUQV9FUlJPUjpcbiAgICByZXR1cm4gW2FjdGlvbi5lcnJvciwgLi4uc3RhdGVdO1xuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGVycm9ycztcbiJdfQ==