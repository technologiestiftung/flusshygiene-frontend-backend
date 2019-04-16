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

export interface IBathingspot {

  id: number;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  hasPrediction: boolean;
  detailId: number;
  oldId: number;
  measuringPoint: string;
  name: string;
  nameLong: string;
  nameLong2: string;
  water: string;
  district: string;
  street: string;
  postalCode: string;
  city: string;
  healthDepartment: string;
  healthDepartmentAddition: string;
  healthDepartmentStreet: string;
  healthDepartmentPostalCode: number;
  healthDepartmentCity: string;
  healthDepartmentMail: string;
  healthDepartmentPhone: string;
  waterRescueThroughDLRGorASB: boolean;
  waterRescue: string;
  lifeguard: boolean;
  hasDisabilityAccesableEntrence: boolean;
  disabilityAccess: boolean;
  disabilityAccessBathrooms: boolean;
  restaurant: boolean;
  snack: boolean;
  parkingSpots: boolean;
  cyanoPossible: boolean;
  bathrooms: boolean;
  bathroomsMobile: boolean;
  dogban: boolean;
  website: string;
  lastClassification: string;
  image: string;
  apiEndpoints: string;
  state: string;
  location: object;
  area: object;
  latitude: number;
  longitude: number;
  elevation: number;
  user: IObject;
  predictions: IObject[];
  models: IObject[];
  measurements: IObject[];
  rawModelData: IObject[];
  region: IObject;
}
