import { forwardRef, useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';

type ChakraImageProps = {
  src: string;
  alt: string;
  [key: string]: unknown;
};

const ChakraImage = (
  { src, alt, ...rest }: ChakraImageProps,
  ref: React.RefObject<HTMLImageElement>,
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    ref.current?.complete && setIsLoading(false);
  }, [ref]);

  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      transitionProperty="color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      transitionDuration="500ms"
      filter={isLoading ? 'blur(20px)' : 'blur(0)'}
      backgroundColor={isLoading ? '#3182ce' : undefined}
      color={isLoading ? '#3182ce' : undefined}
      loading="lazy"
      decoding="async"
      onLoad={() => setIsLoading(false)}
      {...rest}
    />
  );
};

export default forwardRef(
  ChakraImage as React.ForwardRefRenderFunction<HTMLImageElement, ChakraImageProps>,
);
