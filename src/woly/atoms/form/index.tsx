import * as React from 'react';

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (onSubmit) {
        onSubmit(event);
      }
    },
    [onSubmit],
  );

  return <form onSubmit={handleSubmit}>{children}</form>;
};
