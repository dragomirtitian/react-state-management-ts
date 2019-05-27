import React, { useEffect, Suspense, lazy } from 'react';
import { connect, Dispatch } from 'simpply';
import List from './List';
import { User } from './StorageEntities/users';
import { GlobalStorage, State } from './StorageEntities';
import { Joke } from './StorageEntities/jokes';

const Loading = React.memo(() => <p>Loading ...</p>);

const AnotherComponent = ({ users, jokes, dispatch, ...rest } : {
  users: User[],
  jokes: Joke[],
  dispatch: Dispatch<GlobalStorage>
}) => {
  useEffect(() => {
    (async () => {
      const res = await fetch('http://api.icndb.com/jokes/random/10');
      const json: { value: Joke[] }= await res.json();

      dispatch({
        type: 'SET_JOKES',
        payload: json.value
      });
    })();
  }, []);

  return (
    <div {...rest}>
      <p style={{ marginBottom: '2rem' }}>Local users:</p>
      <List
        style={{ marginBottom: '2rem' }}
        data={users}
        displayAttribute="name"
      />
      <p style={{ marginBottom: '2rem' }}>Chuck Norris jokes:</p>
      <Suspense fallback={<Loading />}>
        <List data={jokes} displayAttribute="joke" />
      </Suspense>
    </div>
  );
};

export default connect((state: State) => ({
  users: state.users,
  jokes: state.jokes
}))(AnotherComponent);
