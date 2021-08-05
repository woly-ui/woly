import { nanoid } from 'nanoid';
import { useState } from 'react';

export function useUniqueID() {
  const [uniqueId] = useState(() => nanoid());
  return uniqueId;
}
