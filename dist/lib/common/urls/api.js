"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrls = () => {
    const baseUrl = process.env.NODE_ENV === 'development' ? `http://localhost${process.env.POSTGRES_EXPRESS_PORT}` : '';
    const apiMount = 'api/v1';
    const apiPath = `${baseUrl}/${apiMount}`;
    return {
        apiMount,
        apiPath,
        baseUrl,
    };
};
