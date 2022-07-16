import React, { FC, useRef, useState } from 'react';
import Image, { ImageLoader } from 'next/image';
import classNames from 'classnames';

type Props = {
  className: string;
  src: string;
  alt: string;
};
export const ImageWrapper: FC<Props> = ({ src, className, alt, ...props }) => {
  const container = useRef(null);
  return (
    <div className={classNames(`${className} relative`)} ref={container}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        onLoad={({ target }) => {
          const { naturalWidth, naturalHeight } = target as HTMLImageElement;
          if (container.current) {
            (container.current[`style`][`height`] as string) = `${
              container.current[`clientWidth`] / (naturalWidth / naturalHeight)
            }px`;
          }
        }}
        {...props}
      />
    </div>
  );
};
