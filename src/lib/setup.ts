import fs from 'fs';
import path from 'path';
import util from 'util';
import { IQuestionFile } from './common/interfaces/isetup';

const readDirAsync = util.promisify(fs.readdir);
// const readFileAsync = util.promisify(fs.readFile);

/**
 * Setup the questions from the JSON files located in PEOJECT_ROOT/data
 */
export const setupQuestions: () => Promise<
  IQuestionFile[] | undefined
> = async () => {
  try {
    const dataPath = path.resolve(__dirname, '../../data/dist-json');
    const dataFiles = await readDirAsync(dataPath, 'utf8');
    const filteredFileNames = dataFiles.filter(
      (file) => path.extname(file) === '.json',
    );
    // need to pad the names with only one digit in numbering
    // const emptyelement: IQuestionFile = {
    //   data: undefined,
    //   dataStr: '',
    //   filename: '',
    //   id: undefined,
    //   parentFolder: '',
    //   questionId: '',
    //   weight: 0,

    // };

    const files: IQuestionFile[] = [];
    // files.push(emptyelement);
    filteredFileNames.forEach((ele: string) => {
      const file: IQuestionFile = {
        data: undefined,
        dataStr: '',
        filename: ele,
        parentFolder: dataPath,
        qId: 0,
        questionId: '',
        weight: 0,
      };
      file.questionId = ele
        .replace(/-(\d{1})\./, '-0$1.')
        .split('-')[1]
        .slice(0, -1);
      file.weight = parseInt(ele.split('gew')[1], 10);
      files.push(file);
    });
    files.sort((a: IQuestionFile, b: IQuestionFile) => {
      if (a.questionId < b.questionId) {
        return -1;
      }
      if (a.questionId > b.questionId) {
        return 1;
      }
      return 0;
    });
    let id = 1;
    for (const file of files) {
      file.qId = id++;

      file.dataStr = fs.readFileSync(
        `${file.parentFolder}/${file.filename}`,
        'utf8',
      );
      file.data = JSON.parse(file.dataStr);
    }
    /**
     * Don't want to work with a 0 based index. Easier for routes.
     */

    return files;
  } catch (error) {
    if (process.env.NODE_ENV === 'develpoment') {
      throw error;
    } else {
      console.error(error);
      return undefined;
    }
  }
};

// const test = async () => {
//   await setupQuestions();
// };

// test();
