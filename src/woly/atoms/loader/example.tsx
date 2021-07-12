import React from 'react';
import { ListContainer, ListItem } from 'ui';
import { StateCallback } from 'lib/playground';

export const loadUsers = async ({ value, change }: StateCallback) => {
  change({ ...value, loading: true });

  const response = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (response) => response.json() as Promise<User[]>,
  );
  setTimeout(() => {
    change({
      data: response,
      loading: false,
    });
  }, 1500);
};

interface User {
  id: number;
  name: string;
}

interface UsersListProps {
  data: User[];
}

export const UsersList = ({ data }: UsersListProps) => (
  <ListContainer priority="primary" style={{ width: '100%' }}>
    {data.map(({ id, name }) => (
      <ListItem key={id} as="li" text={name} />
    ))}
  </ListContainer>
);
