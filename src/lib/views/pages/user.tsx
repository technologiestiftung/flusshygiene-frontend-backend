import React from 'react';
import { IUserProps } from '../../common/interfaces';
import { Button } from '../components/button';
import { Skeleton } from '../layouts/skeleton';

const user = (props: IUserProps) => {

  return (
    <Skeleton
      title={props.title}
      isLoggedin={props.isLoggedin}
    >
      <section>
        <img src={props.userProfile.picture} alt='The users profile picture' />
        <h1>{props.userProfile.nickname}</h1>
        <div><h2>Email:</h2>
          <ul>
            {props.userProfile.emails.map((mail, i) => {
              return (
                <li key={i}>{mail.value}</li>
              );
            })}
          </ul>
          <div>
            <h2>ID: {props.userProfile.id}</h2>
          </div>
          <Button
            text={'Password zurücksetzen'}
            url={'/user/password-reset'}
            additionalClassNames={'is-small'}
          />
        </div>
      </section>
    </Skeleton>
  );
};

export default user;
