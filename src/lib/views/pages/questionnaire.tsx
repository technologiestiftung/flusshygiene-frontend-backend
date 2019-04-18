// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

import React from 'react';

import { Button } from '../components/button-cta';
import {QuestIntro} from '../components/questionnaire/quest-intro';
import { Skeleton } from '../layouts/skeleton';
interface IQuestionnaire {
  [key: string]: any;
}

const questionnaire = (props: IQuestionnaire) => (
  <Skeleton title={props.title}>
    <QuestIntro />
    <Button text={'Bewertung beginnen…'} />
  </Skeleton>
);
export default questionnaire;

