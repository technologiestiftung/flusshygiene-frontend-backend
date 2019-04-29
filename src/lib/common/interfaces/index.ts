import { ButtonPropsType } from '../enums';
/**
 * @property {string} apiMount The mount point for the postgres api e.g. /api/v1/
 * @property {string} apiPath The path to call e.g. bathingspot/ID
 * @property {string} baseUrl The baseurl e.g. http://localhost:5004 in developement
 */
export interface IApiUrlObject {
  apiMount: string;
  apiPath: string;
  baseUrl: string;
}

/**
 * Interface for the answer object passed to the backend via POST method
 * @property {number} aId The ID (index) of the answer.
 * It references the element in the array of possible answers for the question.
 * @property {string} questionId The ID for the question derived from the xlsx file in the format 01.1.2
 * @property {number} qId The ID (index) for the questions list in app.locals
 */
export interface IAnswerFormData {
  aId: number;
  questionId: string;
  qId: number;
}
/**
 * Interface of the simple literal object with any string keys.
 * @property {key: string} Takes any kind of property
 */
export interface IObject {
  [key: string]: any;
}

// ███████╗███████╗████████╗██╗   ██╗██████╗
// ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
// ███████╗█████╗     ██║   ██║   ██║██████╔╝
// ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝
// ███████║███████╗   ██║   ╚██████╔╝██║
// ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝

/**
 * @property {string} filename The original file name
 * @property {number|undefined} qId A unique id for that question
 * @property {string} questionId The id added in form of 01.1.2
 * @property {number} weight The weight of the question for the analysis
 * @property {string} dataStr The content of the file (these are text files)
 * @property {string} parentFolder The absolut file syste, path to the parent folder
 * @property {IObject|undefined} data The actual data
 */
export interface IQuestionFile {
  filename: string;
  questionId: string;
  weight: number;
  dataStr: string;
  parentFolder: string;
  data: IObject | undefined;
  qId: number | undefined;
}

// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

/**
 * interface for the index page
 * @property {string} title optional
 * @property {IObject} spots an array of bathingspots comming from the api
 */
export interface IIndex {
  title?: string;
  spots: IObject[];
  url: string;
}

/**
 * @property {string} str This is a generic item dev thing
 */
export interface IItem {
  str: string;
}

/**
 * @property {string} title
 * @property {string} water
 * @property {number} id
 * @property {string} image
 * @property {boolean} hasPrediction
 */
export interface ISpotCard {
  title: string;
  water: string;
  id: number;
  image: string;
  hasPrediction: boolean;

}

/**
 * @property {string} [title] optional
 */
export interface IHead {
  title?: string;

}

/**
 *
 *   @property {string} [title]
 *   @property {React.ReactNode} [children]
 *   @property {React.ReactNode} [styles]
 *   @property {React.ReactNode} [scripts]
 */
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
/**
 * @property {IBathingspot} spot
 */
export interface IBathingspotProps {
  spot: IBathingspot;
}
/**
 * @property {string} title
 * @property {IQuestionFile[]} questions
 * @property {IAnswerFormData[] | undefined} answers
 */
export interface IReport {
  title: string;
  questions: IQuestionFile[];
  answers: IAnswerFormData[] | undefined;
}

/**
 *
 * @property {string} text
 * @property {string} colorText
 * @property {string} additionalText
 */
export interface IAnswer {
  text: string;
  colorText: string;
  additionalText: string;
}

/**
 * @property {IAnswerFormData | undefined} previousAnswer
 * @property {IObject} data
 * @property {number} qId
 * @property {number} lastId
 * @property {string} questionId
 */
export interface IQuestion {
  previousAnswer: IAnswerFormData | undefined;
  data: IObject;
  qId: number;
  lastId: number;
  questionId: string;
}

/**
 * Interface for the class Button props
 * @property text: string;
 * @property url?: string;
 * @property type?: enum ButtonPropsType; button, submit, reset or undefined
 * @property disabled?: boolean;
 */
export interface IButtonProps {
  /**
   * the text for the button
   */
  text: string;
  url?: string;
  type?: ButtonPropsType;
  disabled?: boolean;
  additionalClassNames?: string;
}

/**
 * @property {boolean} cyanoPossible
 * @property {boolean} lifeguard
 * @property {boolean} disabilityAccess
 * @property {boolean} hasDisabilityAccesableEntrence
 * @property {boolean} restaurant
 * @property {boolean} snack
 * @property {boolean} parkingSpots
 * @property {boolean} bathrooms
 * @property {boolean} disabilityAccessBathrooms
 * @property {boolean} bathroomsMobile
 * @property {boolean} dogban
 */
export interface ISpotBodyAddonList {
  cyanoPossible: boolean;
  lifeguard: boolean;
  disabilityAccess: boolean;
  hasDisabilityAccesableEntrence: boolean;
  restaurant: boolean;
  snack: boolean;
  parkingSpots: boolean;
  bathrooms: boolean;
  disabilityAccessBathrooms: boolean;
  bathroomsMobile: boolean;
  dogban: boolean;
}
/**
 *   @property {string} image
 *   @property {string} text
 */
export interface ISpotBodyAddonListItem {
  image: string;
  text: string;
}

/**
 * @property {string} image
 * @property {string} nameLong
 * @property {string} name
 * @property {string} [imageAuthor]
 */
export interface ISpotBodyFigure {
  image: string;
  nameLong: string;
  name: string;
  imageAuthor?: string;
}

/**
 * @property {React.ReactNode} [children]
 * @property {string} nameLong
 * @property {string} street
 * @property {string} postalCode
 * @property {string} city
 * @property {string} website
 * @property {number} longitude
 * @property {number} latitude
 *
 */
export interface ISpotBodyLocation {
  children?: React.ReactNode;
  nameLong: string;
  street: string;
  postalCode: string;
  city: string;
  website: string;
  longitude: number;
  latitude: number;

}

/**
 * @property {string} rowKey
 * @property {string} rowValue
 */
export interface IMeasurementableRow {
  rowKey: string;
  rowValue: string;
}

/**
 * @property {IObject[]} measurements
 */
export interface IMeasurementable {
  measurements: IObject[];
}

/**
 * @property {IObject[]}  measurements
 * @property {boolean}  hasPrediction
 * @property {React.ReactNode} [children]
 */
export interface IMeasurement {
  measurements: IObject[];
  hasPrediction: boolean;
  children?: React.ReactNode;
}

/**
 * @property {React.ReactNode} [children]
 *
 */
export interface ISpotBody {
  children?: React.ReactNode;
}

/**
 * @property {string} nameLong
 * @property {string} district
 * @property {string} [water]
 */
export interface ISpotHeader {
  nameLong: string;
  district: string;
  water?: string;
}
