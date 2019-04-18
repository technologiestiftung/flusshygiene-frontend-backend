"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../action-types");
const responses = (state = [], action) => {
    switch (action.type) {
        case action_types_1.POST_DATA_RECEIVED:
            return [action.body, ...state];
        default:
            return state;
    }
};
exports.default = responses;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kYXRhLXJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kYXRhLXJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQXFEO0FBRXJELE1BQU0sU0FBUyxHQUFHLENBQUMsUUFBa0IsRUFBRSxFQUFFLE1BQVcsRUFBRSxFQUFFO0lBQ3RELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGlDQUFrQjtZQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQy9CO1lBQ0EsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMsQ0FBQztBQUVGLGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBPU1RfREFUQV9SRUNFSVZFRCB9IGZyb20gJy4uL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IHJlc3BvbnNlcyA9IChzdGF0ZTogb2JqZWN0W10gPSBbXSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUE9TVF9EQVRBX1JFQ0VJVkVEOlxuICAgIHJldHVybiBbYWN0aW9uLmJvZHksIC4uLnN0YXRlXTtcbiAgICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzcG9uc2VzO1xuIl19