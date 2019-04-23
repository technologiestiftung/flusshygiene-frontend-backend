// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

import React from 'react';

import { RouteNames } from '../../common/enums';
import { Button } from '../components/button';
import {QuestIntro} from '../components/questionnaire/quest-intro';
import { Skeleton } from '../layouts/skeleton';
interface IQuestionnaire {
  [key: string]: any;
}

const questionnaire = (props: IQuestionnaire) => (
  <Skeleton title={props.title}>
    <QuestIntro />
    <Button
    text={'Bewertung beginnen…'}
    url={`/${RouteNames.questionnaire}/0`}
    />
  </Skeleton>
);
export default questionnaire;
