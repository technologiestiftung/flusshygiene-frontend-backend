// ██╗   ██╗██╗███████╗██╗    ██╗███████╗
// ██║   ██║██║██╔════╝██║    ██║██╔════╝
// ██║   ██║██║█████╗  ██║ █╗ ██║███████╗
// ╚██╗ ██╔╝██║██╔══╝  ██║███╗██║╚════██║
//  ╚████╔╝ ██║███████╗╚███╔███╔╝███████║
//   ╚═══╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚══════╝

import React from 'react';

import { IObject } from '../../common/interfaces';
import { Skeleton } from '../layouts/skeleton';

interface IQuestion {
  [key: string]: any;
  data: IObject;
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
  const answers: string[] = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][6] !== null) {
      answers.push(data[i][6]);
    }
  }
  console.log(answers);
  return (

    <Skeleton title={'Foo'}>
      <div className='question__body'>
        <h1>{data[1][1]}</h1>
        <p className='question__body-general-info'>
        {data[1][3]}
        </p>
        <form style={{width: '100%', float: 'left'}}>
            <div className='control'>
            {answers.map((answer: string, i: number) => {
              return (
              <div className='field is-fullwidth'>
                <label htmlFor={`answer_${i}`} className='radio' key={i} >
                  <input type='radio' className='is-fullwidth' id={`answer_${i}`} name='answer'/>
              {answer}
              </label>
              </div>
            );
            })}{(() => {
              return <br />;
              })()}
            </div>
        </form>
        <hr/>
        <p className='question__body-additional-info'>
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
