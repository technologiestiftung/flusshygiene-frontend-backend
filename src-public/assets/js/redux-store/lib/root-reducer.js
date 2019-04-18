"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const default_1 = __importDefault(require("./reducers/default"));
const error_1 = __importDefault(require("./reducers/error"));
const get_data_1 = __importDefault(require("./reducers/get-data"));
const post_data_response_1 = __importDefault(require("./reducers/post-data-response"));
const reducers = redux_1.combineReducers({
    data: get_data_1.default,
    def: default_1.default,
    errors: error_1.default,
    responses: post_data_response_1.default,
});
exports.default = reducers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC1yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vdC1yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaUNBQXdDO0FBQ3hDLGlFQUFxQztBQUNyQyw2REFBc0M7QUFDdEMsbUVBQXVDO0FBQ3ZDLHVGQUFzRDtBQUN0RCxNQUFNLFFBQVEsR0FBRyx1QkFBZSxDQUFDO0lBQy9CLElBQUksRUFBSixrQkFBSTtJQUNKLEdBQUcsRUFBSCxpQkFBRztJQUNILE1BQU0sRUFBTixlQUFNO0lBQ04sU0FBUyxFQUFULDRCQUFTO0NBRVYsQ0FBQyxDQUFDO0FBQ0gsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGRlZiBmcm9tICcuL3JlZHVjZXJzL2RlZmF1bHQnO1xuaW1wb3J0IGVycm9ycyBmcm9tICcuL3JlZHVjZXJzL2Vycm9yJztcbmltcG9ydCBkYXRhIGZyb20gJy4vcmVkdWNlcnMvZ2V0LWRhdGEnO1xuaW1wb3J0IHJlc3BvbnNlcyBmcm9tICcuL3JlZHVjZXJzL3Bvc3QtZGF0YS1yZXNwb25zZSc7XG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGRhdGEsXG4gIGRlZixcbiAgZXJyb3JzLFxuICByZXNwb25zZXMsXG5cbn0pO1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnM7XG4iXX0=