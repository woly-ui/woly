import * as React from 'react';

type MessageFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form: React.FC<MessageFormProps> = ({
  handleSubmit,
  children,
}) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleSubmit) {
      handleSubmit(event);
    }
  };

  return <form onSubmit={onSubmit}>{children}</form>;
};
