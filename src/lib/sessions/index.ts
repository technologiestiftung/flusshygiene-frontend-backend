import { IAnswerFormData } from '../common/interfaces';

export const sessionAnswerSorter = (answers: IAnswerFormData[]) => {
  return answers.sort((a, b) => a.qId - b.qId);
};

/**
 *
 * @param {IAnswerFormData} answer The answer to set or add
 * @param {IAnswerFormData[]} answers The list of answers already given
 * @returns {IAnswerFormData[]} Updated array of answer objects.
 */
export const sessionAnswerSet = (
  answer: IAnswerFormData,
  answers: IAnswerFormData[] | undefined,
): IAnswerFormData[] => {
  let answerExists = false;
  let updatedAnswers: IAnswerFormData[] = [];
  if (answers !== undefined) {
    updatedAnswers = answers.map((ele) => {
      if (ele.qId === answer.qId) {
        ele.aId = answer.aId;
        answerExists = true;
      }
      return ele;
    });
  }
  if (answerExists === false) {
    updatedAnswers.push(answer);
  }
  return sessionAnswerSorter(updatedAnswers);
};

type SessionAnswerGetFunc = (qId: number, answers: IAnswerFormData[]) => IAnswerFormData | undefined;

/**
 * @param {number} qId The qId to get
 * @param {IAnswerFormData[]} answers The answers to filter
 * @returns {IAnswerFormData|undefined} The desired answer or undefined if it does not exist.
 */
export const sessionAnswerGet: SessionAnswerGetFunc = (
  qId: number,
  answers: IAnswerFormData[]|undefined,
): IAnswerFormData | undefined => {
  if (answers === undefined) {
    console.log('answers is undefined');
    return undefined;
  }
  console.log('answers is defined');
  const answer = answers.filter((ele) => {
    console.log('answer filter ele.qid', typeof ele.qId);
    console.log('answer filter qId', typeof qId);
    console.log('answer filter ele.qid',  ele.qId);
    console.log('answer filter qId',  qId);
    if (ele.qId === qId) {
      return true;
   }
    return false;
  });
  console.log(answer);
  if (answer.length === 0) {
    return undefined;
  }
  return answer[0];
};
