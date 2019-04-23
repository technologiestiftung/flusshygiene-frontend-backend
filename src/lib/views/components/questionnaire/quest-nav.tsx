import { isFlowBaseAnnotation } from '@babel/types';
import React from 'react';
import { RouteNames } from '../../../common/enums';
import { Button } from '../button';
interface IQuestNavProps {
  next: number | undefined;
  previous: number | undefined;
}
export const QuestNav = (props: IQuestNavProps) => (
  <div className='questions__navigation container is-fullwidth is-mobile'>
    <Button
      text={'Vorherige Frage'}
      additionalClassNames={'is-pulled-left questions_navigation-button--backward'}
      url={props.previous !== undefined ? `/${RouteNames.questionnaire}/${props.previous}` : ''}

      disabled={
        (() => {
          if (props.previous === undefined) {
            return true;
          } else {
            return false;
          }
        })()

      }
    /><Button
      additionalClassNames={'is-pulled-right questions_navigation-button--forward'}
      text={props.next !== undefined ? 'Nächste Frage' : 'Zur Auswertung'}
      url={(() => {
        if (props.next === undefined) {
          return `/${RouteNames.report}`;
        }
        return `/${RouteNames.questionnaire}/${props.next}`;
      })()}
    />
  </div>
);
