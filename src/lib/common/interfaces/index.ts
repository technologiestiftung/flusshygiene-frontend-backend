export interface IApiUrlObject {
  apiMount: string;
  apiPath: string;
  baseUrl: string;
}

/**
 * Interface of the simple literal object with any string keys.
 */
export interface IObject {
  [key: string]: any;
}

// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

export interface IIndex {
  title?: string;
  spots: IObject[];
}
export interface IItem {
  str: string;
}

export interface ISpotCard {
  title: string;
  water: string;
  id: number;
  image: string;
  hasPrediction: boolean;

}
export interface IHead {
  title?: string;

}

export interface ISkeleton {
  title?: string;
  children?: React.ReactNode;
  styles?: React.ReactNode;
  scripts?: React.ReactNode;
}
