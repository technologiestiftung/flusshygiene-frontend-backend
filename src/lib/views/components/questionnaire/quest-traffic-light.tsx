import React from 'react';
import { TrafficLightColorNames } from '../../../common/enums';

interface IQuestTrafficLightIcon {
  colorText: string;
}
export const QuestTrafficLightIcon = (props: IQuestTrafficLightIcon) => {
  const defaultClassName = 'icon__traffic-light';

  return (
    <div className={'icon__traffic-light-container column is-1'}>
      {(() => {
        if (props.colorText === TrafficLightColorNames.green) {
          return (
            <span
              className={`${defaultClassName} ${defaultClassName}--green`}
            ></span>
          );
        } else if (props.colorText === TrafficLightColorNames.orange) {
          return (
            <span
              className={`${defaultClassName} ${defaultClassName}--orange`}
            ></span>
          );
        } else if (props.colorText === TrafficLightColorNames.red) {
          return (
            <span
              className={`${defaultClassName} ${defaultClassName}--red`}
            ></span>
          );
        } else {
          return <span className={`${defaultClassName}`}></span>;
        }
      })()}
    </div>
  );
};
