import {Request, Response} from 'express';
import { IApiUrlObject } from './../interfaces';

export type TApiUrls = () => IApiUrlObject;

export type AsyncRoute = (request: Request, response: Response) => Promise<void>;
