import * as React from 'react';

interface BranchProps {
  if: boolean | string | number | object | Function;
}

// TODO: Add babel plugin, to compile it to {ifValue ? <>First</> : <>Second</>} without wrapper component
export const Branch: React.FC<BranchProps> = ({ if: value, children }) => {
  const [thenBranch, elseBranch] = React.Children.toArray(children);
  const result = value ? thenBranch : elseBranch;
  return <>{result}</> || <></>;
};
