import { useEffect, useState } from 'react';

export function useImageLoad({ src, srcSet }: { src?: string; srcSet?: string }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!src && !srcSet) {
      return;
    }

    setFailed(false);

    const image = new Image();
    image.src = src ?? '';
    image.srcset = srcSet ?? '';

    const onLoad = () => {
      setFailed(false);
    };

    const onError = () => {
      setFailed(true);
    };

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);

    return () => {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [src, srcSet]);

  return failed;
}
