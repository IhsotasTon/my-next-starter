import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import classNames from 'classnames';
import { ImageWrapper } from '@/components/imageWrapper';
import MyDropdown from '@/components/myDropdown';
export default function Home() {
  const a = true;
  return (
    <div
      className={classNames(
        `text-green-50 text-lg`,
        a ? `text-red-400` : `text-blue-400`,
      )}
    >
      100
      <div className="flex flex-row">
        <div className="w-1/5"></div>
        <ImageWrapper
          className="w-1/3"
          src={`https://lmg.jj20.com/up/allimg/611/010913163107/130109163107-7-1200.jpg`}
          alt={`example`}
        ></ImageWrapper>
        <MyDropdown></MyDropdown>
      </div>
    </div>
  );
}
