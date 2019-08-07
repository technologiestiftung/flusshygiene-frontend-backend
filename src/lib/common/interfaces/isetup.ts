import { IObject } from '.';

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
