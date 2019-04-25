// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

import React from 'react';

import { TrafficLightColorNames } from '../../common/enums';
import { IObject } from '../../common/interfaces';
import { QuestFormPagination } from '../components/questionnaire/quest-pagination';
import { Skeleton } from '../layouts/skeleton';

interface IQuestion {
  [key: string]: any;
  data: IObject;
  qId: number;
  lastId: number;
  questionId: string;
}

const questionnaire = (props: IQuestion) => {
  const { data, questionId } = props;
  console.log('qid', props.qId);
  console.log('last id', props.lastId);
  // const weight: number | null = data[1][0];
  // const heading1: string | null = data[1][1];
  // const adminInfo: string | null = data[1][2];
  // const allgemeineInfo: string | null = data[1][3];
  // const frage: string | null = data[1][4];
  // const zusatzinfosZurFrage: string | null = data[1][5];
  // const antwortoption: string | null = data[1][6];
  // const zusatzinfosZuAntwortoption: string | null = data[1][7];
  // const reportWeiter: string | null = data[1][8];
  // const ampelcodierung: string | null = data[1][9];
  // const umsetzungswahrscheinlichkeit: string | null = data[1][10];
  // const infrastrukturOderVerhandlung: string | null = data[1][11];
  // console.log('data in question', data);

  interface IAnswer {
    text: string;
    colorText: string;
    additionalText: string;
  }

  const answers: IAnswer[] = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][6] !== null) {
      const datum: IAnswer = {
        additionalText: data[i][7],
        colorText: data[i][9],
        text: data[i][6],
      };
      answers.push(datum);
    }
  }
  // console.log(answers);

  const FormScript = () => (
    <React.Fragment>
      <script src='/assets/js/questionnaire-form.js'></script>
    </React.Fragment>
  );

  return (

    <Skeleton
    title={`Standortbewertung Frage ${props.qId} von ${props.lastId + 1}`}
    scripts={<FormScript />}
    >
      <div className='questions__body section'>
        <h1>{data[1][1]}</h1>
        <p className='questions__body-general-info'>
          {data[1][3]}
        </p>
        <div className='questions__body-nav columns'>
          <div className='column'>
            {/* <QuestNav
              next={props.qId === props.lastId ? undefined : props.qId + 1}
              previous={props.qId - 1 === 0 ? undefined : props.qId - 1}
            /> */}
          </div>
        </div>
        <div className='questions__body-progress'>
          <div className='column'>
            <progress className='progress'
              value={`${props.qId}`}
              max={`${props.lastId}`}
            >{`${props.qId} von ${props.lastId}`}</progress>
          </div>
        </div>
        <h2 className='questions__body-question-head'>Frage:</h2>
        <div className='questions__body-question'>
          <div className=''>
            <p>
              {data[1][4]}
            </p>
          </div>
          {/* <div className='column'>
            {(() => {
              const defaultClassName = 'questions__body-question-tlight';
              if (data[1][9] === TrafficLightColorNames.green) {
                return (<div className={`${defaultClassName}--green`}>{data[1][9]}</div>);
              } else if (data[1][9] === TrafficLightColorNames.orange) {
                return (<div className={`${defaultClassName}--orange`}>{data[1][9]}</div>);
              } else if (data[1][9] === TrafficLightColorNames.red) {
                return (<div className={`${defaultClassName}--red`}>{data[1][9]}</div>);
              } else {
                return (<div className={`${defaultClassName}`}>{data[1][9]}</div>);
              }
            })()
            }
          </div> */}
        </div>
        <hr />
        <form id='the-form' method='post'
        className='questions__form'>
        <input type='hidden' name='targeturl' value='' />
          <div className='control'>
            {answers.map((answer: IAnswer, i: number) => {
              let messageModifier = '';
              if (answer.colorText === TrafficLightColorNames.red) {
                messageModifier = 'is-danger';
              } else if (answer.colorText === TrafficLightColorNames.orange) {
                messageModifier = 'is-warning';

              } else if (answer.colorText === TrafficLightColorNames.green) {
                messageModifier = 'is-success';
              } else {
                messageModifier = 'is-dark';
              }
              const value: {qId: number, questionId: string} = {qId: i, questionId};
              return (
                <div key={i} className='field'>
                  <input

                  type='radio'
                  className=''
                  id={`answer--${i}`}
                  name='answer'
                  value={JSON.stringify(value)}
                  required

                  />
                  <label htmlFor={`answer--${i}`} className='radio' key={i} >
                    {answer.text}
                  </label>
                  {(() => {
                    return <br />;
                  })()}
                  <div className={`answer__add--${i}`}>
                    <div className={`message ${messageModifier}`}>
                      {/* <div className='message-header'>
                          <p>{answer.colorText}</p>
                          </div> */}
                      <div className='message-body'>
                        {/* <p> */}
                        {answer.additionalText}
                        {/* </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        <hr />
        <div className='columns'>
          <div className='column is-is-fullwidth'>
            <QuestFormPagination
            qId= {props.qId}
            lastId={props.lastId}
            />
          </div>
        </div>
        </form>
        {/* <div className='questions__body-additional-info-answer columns'>
          {answers.map((answer: IAnswer, i: number) => {
            return (
              <p key={i} className={`column is-full-width answer__additional-text--${i}`}>{answer.additionalText}</p>
            );
          })}
        </div> */}
        <div className='columns'>
          <div className='column'>
            <div className='message  is-info is-small'>
              {/* <div className='message-header'>
                <p>Zusatz-Informationen zur Frage</p>
              </div> */}
              <div className='message-body'>
                <p className='questions__body-additional-info-question'>
                  {data[1][5]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
          // some script
          document.addEventListener('DOMContentLoaded',function() {
            const pagiantionLinks = document.querySelectorAll(
              'a.pagination-link, a.pagination-next, a.pagination-previous'
              );
            console.log('hello form', pagiantionLinks);
          });
          `,
        }}
      /> */}
    </Skeleton>

  );
};
export default questionnaire;
