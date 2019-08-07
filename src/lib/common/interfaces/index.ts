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
