import React from 'react';

interface RangeProps {
  value: {
    from: number;
    to: number;
  };
  placeholder: string;
}

export const RangeCell: React.FC<RangeProps> = ({ value, placeholder }) => (
  <span>
    from {value.from || placeholder} to {value.to || placeholder}
  </span>
);
