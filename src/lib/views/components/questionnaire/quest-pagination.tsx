import React from 'react';
import { RouteNames } from '../../../common/enums';

interface IQuestFormPagiantion {
  qId: number;
  lastId: number;
}
export const QuestFormPagination = (props: IQuestFormPagiantion) => {
  return (
    <nav
      className='pagination is-small'
      role='navigation'
      aria-label='pagination'
    >
      {(() => {
        const previous: number | undefined =
          props.qId - 1 === 0 ? undefined : props.qId - 1;
        const disabled: boolean = previous === undefined ? true : false;
        if (disabled === true) {
          return <a className='pagination-previous'>Vorherige Frage</a>;
        } else {
          return (
            <a
              className='pagination-previous'
              href={
                previous !== undefined
                  ? `/${RouteNames.questionnaire}/${previous}`
                  : ''
              }
            >
              Vorherige Frage
            </a>
          );
        }
      })()}
      {(() => {
        const next: number | undefined =
          props.qId === props.lastId + 1 ? undefined : props.qId + 1;
        const disabled: boolean = next === undefined ? true : false;
        if (disabled === true) {
          return (
            <a className='pagination-next' href={`/${RouteNames.report}`}>
              Zur Auswertung
            </a>
          );
        } else {
          return (
            <a
              className='pagination-next'
              href={
                next !== undefined ? `/${RouteNames.questionnaire}/${next}` : ''
              }
            >
              Nächste Frage
            </a>
          );
        }
      })()}
      <ul className='pagination-list'>
        <li>
          <a
            className={(() => {
              if (props.qId === 1) {
                return `pagination-link is-current`;
              } else {
                return 'pagination-link';
              }
            })()}
            href={`/${RouteNames.questionnaire}/${1}`}
            aria-label='Gehe zu Frage 1'
          >
            1
          </a>
        </li>
        {(() => {
          if (props.qId < 4) {
            return undefined;
          } else {
            return (
              <li>
                <span className='pagination-ellipsis'>&hellip;</span>
              </li>
            );
          }
        })()}
        {(() => {
          if (props.qId - 1 < 2) {
            return undefined;
          } else {
            return (
              <li>
                <a
                  className='pagination-link'
                  aria-label={`Gehe zu Frage ${props.qId}`}
                  href={`/${RouteNames.questionnaire}/${props.qId - 1}`}
                >
                  {props.qId - 1}
                </a>
              </li>
            );
          }
        })()}
        {(() => {
          if (props.qId < 2 || props.qId > props.lastId - 2) {
            return undefined;
          } else {
            return (
              <li>
                <a
                  className='pagination-link is-current'
                  aria-label={`Seite ${props.qId}`}
                  aria-current='page'
                >
                  {props.qId}
                </a>
              </li>
            );
          }
        })()}
        {(() => {
          if (props.qId < props.lastId) {
            return (
              <li>
                <a
                  className='pagination-link'
                  aria-label={`Gehe zu Frage ${props.qId + 1}`}
                  href={`/${RouteNames.questionnaire}/${props.qId + 1}`}
                >
                  {props.qId + 1}
                </a>
              </li>
            );
          } else {
            return undefined;
          }
        })()}
        {(() => {
          if (props.qId < 2 || props.qId < props.lastId - 1) {
            return (
              <li>
                <a
                  className='pagination-link'
                  aria-label={`Gehe zu Frage ${props.qId + 2}`}
                  href={`/${RouteNames.questionnaire}/${props.qId + 2}`}
                >
                  {props.qId + 2}
                </a>
              </li>
            );
          } else {
            return undefined;
          }
        })()}

        {(() => {
          if (props.qId === props.lastId) {
            return (
              <li>
                <a
                  className='pagination-link is-current'
                  aria-label={`Aktuelle Frage ${props.qId}`}
                >
                  {props.qId}
                </a>
              </li>
            );
          }
          return undefined;
        })()}
        {(() => {
          if (props.qId >= props.lastId - 2) {
            return undefined;
          } else {
            return (
              <li>
                <span className='pagination-ellipsis'>&hellip;</span>
              </li>
            );
          }
        })()}
        {(() => {
          const isCurrentClass =
            props.qId === props.lastId + 1 ? 'is-current' : '';
          return (
            <li>
              <a
                className={`pagination-link ${isCurrentClass}`}
                aria-label={`Gehe zu Frage ${props.lastId + 1}`}
                href={`/${RouteNames.questionnaire}/${props.lastId + 1}`}
              >
                {props.lastId + 1}
              </a>
            </li>
          );
        })()}
      </ul>
    </nav>
  );
};
