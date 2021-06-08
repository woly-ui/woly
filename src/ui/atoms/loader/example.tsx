import React from 'react';
import { Button, ListContainer, ListItem, Loader, Text } from 'ui';

interface User {
  id: number;
  name: string;
}

interface ExampleState {
  loading: boolean;
  data: User[] | null;
}

const initialState: ExampleState = {
  loading: false,
  data: null,
};

export const ExampleDataFetching = () => {
  const [{ loading, data }, setExampleState] = React.useState<ExampleState>(initialState);

  const handleClick = () => {
    const loadUsers = async () => {
      setExampleState((current) => ({ ...current, loading: true }));

      const response = await fetch('https://jsonplaceholder.typicode.com/users').then(
        (response) => response.json() as Promise<User[]>,
      );
      setTimeout(() => {
        setExampleState({
          data: response,
          loading: false,
        });
      }, 1500);
    };

    loadUsers();
  };

  const reset = () => {
    setExampleState(initialState);
  };

  if (loading) {
    return (
      <div style={{ width: 300 }}>
        <Loader
          variant="primary"
          description={<Text weight="medium">Fetching users, please wait</Text>}
        />
      </div>
    );
  }

  if (!data) {
    return <Button variant="primary" text="Fetch users" onClick={handleClick} />;
  }

  return (
    <React.Fragment>
      <ListContainer variant="primary" style={{ width: '100%' }}>
        {data.map(({ id, name }) => (
          <ListItem key={id} as="li" text={name} />
        ))}
      </ListContainer>
      <Button text="Reset" onClick={reset} />
    </React.Fragment>
  );
};
