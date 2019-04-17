// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

import React from 'react';

import {QuestIntro} from '../components/questionnaire/quest-intro';
import { Skeleton } from '../layouts/skeleton';
interface IQuestionnaire {
  [key: string]: any;
}

const questionnaire = (props: IQuestionnaire) => (
  <Skeleton title={props.title}>
    <QuestIntro />
  </Skeleton>
);
export default questionnaire;

