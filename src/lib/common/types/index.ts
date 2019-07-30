import {Request, Response} from 'express';
import { IApiUrlObject } from './../interfaces';

export type TApiUrls = () => IApiUrlObject;

export type AsyncRoute = (request: Request, response: Response) => Promise<void>;

/**
 * A default async function. Accepts any kind of argument
 * @argument {any|undefiend} args Any kind of argument
 * @returns {Promise<void>} does not return anything
 */
export type AsyncFunc = (args?: any) => Promise <void>;
