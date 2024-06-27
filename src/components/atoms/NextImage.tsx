'use client';

import Image from 'next/image';
import { useState } from 'react';

import type { ImageProps } from 'next/image';

const NextImage = ({ src, alt, width, height, ...rest }: ImageProps) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	if (src === undefined) return null;

	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			decoding="async"
			onLoad={() => setIsLoading(false)}
			priority
			unoptimized
			style={{
				filter: isLoading ? 'blur(20px)' : 'blur(0)',
				transitionProperty:
					'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
				transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
				transitionDuration: '500ms',
				borderRadius: 18,
				backgroundColor: isLoading ? '#3182ce' : undefined,
				color: isLoading ? '#3182ce' : undefined,
				margin: '0 auto',
			}}
			{...rest}
		/>
	);
};

export default NextImage;
