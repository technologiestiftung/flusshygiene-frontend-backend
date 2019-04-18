"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("./../action-types");
const def = (state = 0, action) => {
    switch (action.type) {
        case action_types_1.DEFAULT:
            return state + 1;
        default:
            return state;
    }
};
exports.default = def;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBNEM7QUFDNUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFnQixDQUFDLEVBQUUsTUFBVyxFQUFFLEVBQUU7SUFDN0MsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssc0JBQU87WUFDWixPQUFPLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakI7WUFDQSxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsR0FBRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREVGQVVMVCB9IGZyb20gJy4vLi4vYWN0aW9uLXR5cGVzJztcbmNvbnN0IGRlZiA9IChzdGF0ZTogbnVtYmVyID0gMCwgYWN0aW9uOiBhbnkpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgREVGQVVMVDpcbiAgICByZXR1cm4gc3RhdGUgKyAxO1xuICAgIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWY7XG4iXX0=