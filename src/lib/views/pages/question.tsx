// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

import React from 'react';

import { TrafficLightColorNames } from '../../common/enums';
import { IObject } from '../../common/interfaces';
import { QuestNav } from '../components/questionnaire/quest-nav';
import { QuestTrafficLightIcon } from '../components/questionnaire/quest-traffic-light';
import { Skeleton } from '../layouts/skeleton';

interface IQuestion {
  [key: string]: any;
  data: IObject;
  qId: number;
  lastId: number;
}

const questionnaire = (props: IQuestion) => {
  const { data } = props;
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
  }

  const answers: IAnswer[] = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][6] !== null) {
      const datum: IAnswer = {
        colorText: data[i][9],
        text: data[i][6],
      };
      answers.push(datum);
    }
  }
  // console.log(answers);
  return (

    <Skeleton title={`Standortbewertung Frage ${props.qId} von ${props.lastId + 1}`}>
      <div className='questions__body section'>
        <h1>{data[1][1]}</h1>
        <p className='questions__body-general-info'>
          {data[1][3]}
        </p>
        <div className='questions__body-nav columns'>
          <div className='column'>
            <QuestNav
              next={props.qId === props.lastId ? undefined : props.qId + 1}
              previous={props.qId - 1 < 0 ? undefined : props.qId - 1}
            />
          </div>
        </div>
        <div className='questions__body-progress'>
          <div className='column'>
            <progress className='progress'
              value={`${props.qId + 1}`}
              max={`${props.lastId + 1}`}
            >{`${props.qId + 1} von ${props.lastId + 1}`}</progress>
          </div>
        </div>
        <h2 className='questions__body-question-head columns'>Frage:</h2>
        <div className='questions__body-question columns'>
          <div className='column'>
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
        <form className='questions__form columns'>
          <div className='column'>
            <div className='control'>
              {answers.map((answer: IAnswer, i: number) => {
                return (
                  <div className='field is-fullwidth'>
                    <QuestTrafficLightIcon
                      colorText={answer.colorText} />
                    <label htmlFor={`answer_${i}`} className='radio' key={i} >
                      <input type='radio' className='is-fullwidth' id={`answer_${i}`} name='answer' />
                      {answer.text}
                    </label>
                  </div>
                );
              })}
              {(() => {
                return <br />;
              })()}
            </div>
          </div>
        </form>
        <hr />
        <p className='questions__body-additional-info columns'>
          {data[1][5]}
        </p>
      </div>
      <table>
        <thead>
          <tr>
            {(() => {
              return data[0].map((heading: string, i: number) => (<th>{i}-{heading}</th>));
            })()}
          </tr>
        </thead>
        <tbody>
          <tr>
            {(() => {
              return data[1].map((ele: string) => (<td>{ele}</td>));
            })()}
          </tr>
        </tbody>
      </table>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
          // some script
          document.addEventListener('DOMContentLoaded',function() {
            console.log(JSON.parse('${JSON.stringify(props.data)}'))
          });
          `,
        }}
      /> */}
    </Skeleton>

  );
};
export default questionnaire;
