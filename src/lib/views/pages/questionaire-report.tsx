import React from 'react';

import { RouteNames } from '../../common/enums';
import { IQuestionFile } from '../../common/interfaces/isetup';
import { IReport } from '../../common/interfaces/iviews';
import { sessionAnswerGet } from '../../sessions';
import { Skeleton } from '../layouts/skeleton';

const report = (props: IReport) => {
  return (
    <Skeleton
      title={props.title}
      isLoggedin={props.isLoggedin}
      >
      <ul className='report__list'>
        {props.questions.map((ele: IQuestionFile, i: number) => {
          return (<li key={i} className='report__list-item'>
            <a href={`/${RouteNames.questionnaire}/${ele.qId}`}>
              <div className='report__list-item-question'>
                Frage: {ele.questionId} -- {ele.data![1][4]}
              </div>
            </a>

            {(() => {
              if (props.answers !== undefined && ele.qId !== undefined) {
                const answer = sessionAnswerGet(ele.qId, props.answers);
                if (answer !== undefined) {
                  return (<div className='report__list-item-answer'>
                    Antwort: {ele.data![answer.aId + 1][6]}
                  </div>);
                }
              }
              return undefined;
            })()}

          </li>);
        })}
      </ul>
    </Skeleton>
  );
};

export default report;
