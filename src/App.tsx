import React, { useState } from 'react';
import { connect, Dispatch } from 'simpply';
import List from './List';
import { User } from './StorageEntities/users';
import { GlobalStorage, State } from './StorageEntities';

const App = ({ users, dispatch, ...rest }: { users: User[], dispatch: Dispatch<GlobalStorage> } & JSX.IntrinsicElements['div']) => {
  const [user, setUser] = useState('');

  return (
    <div {...rest}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '2rem'
        }}
      >
        <label style={{ marginRight: '1rem' }}>Add user:</label>
        <input
          style={{
            height: '2rem',
            border: '1px solid #eee',
            marginRight: '1rem',
            padding: '0 .75rem'
          }}
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <button
          style={{
            background: '#333',
            color: '#fff',
            border: 'none',
            height: '2rem',
            padding: '0 1rem'
          }}
          onClick={() => {
            dispatch({
              type: 'ADD_USER',
              payload: {
                name: user
              }
            });
            setUser('');
          }}
        >
          Add
        </button>
      </div>
      <List data={users} displayAttribute="name" />
    </div>
  );
};

export default connect((state: State) => ({
  users: state.users
}))(App);
