import { OutgoingHttpHeaders } from 'http';
import { IObject } from '.';

//  █████╗ ██╗   ██╗████████╗██╗  ██╗
// ██╔══██╗██║   ██║╚══██╔══╝██║  ██║
// ███████║██║   ██║   ██║   ███████║
// ██╔══██║██║   ██║   ██║   ██╔══██║
// ██║  ██║╚██████╔╝   ██║   ██║  ██║
// ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝

export interface IToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface ITokenRetrieveOptions {
  tokenPath: string;
  optsGetToken: ITokenRequestOpts;
}
/**
 * @todo Fix the interface
 */
export interface ITokenRequestOpts {
  url: string;
  body: string;
  headers: IObject;
}

export interface ITokenTestRequestOpts {
  url: string;
  headers: ITokenRequestHeaders;
}
export interface ITokenRequestHeaders extends OutgoingHttpHeaders {
  authorization: string;
}
export interface IDiskToken {
  access_token?: string;
  token_type?: string;
  issance?: number;
  expires_in?: number;
  scope?: string;
  filePath?: string;
}
