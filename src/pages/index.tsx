import classNames from 'classnames';
import { ImageWrapper } from '@/components/imageWrapper';
import MyDropdown from '@/components/myDropdown';
import useSWR from 'swr';
const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());
export default function Home() {
  const a = 1;
  const { data, error } = useSWR(`/api/hello`, fetcher);
  if (error) return `An error has occurred.`;
  if (!data) return `Loading...`;
  return (
    <div
      className={`text-green-50 text-lg ${
        a ? `text-red-400` : `text-blue-400`
      }`}
    >
      {JSON.stringify(data)}
      <div className="flex flex-row">
        <div className="w-1/5"></div>
        <ImageWrapper
          className="w-1/3"
          src={`https://lmg.jj20.com/up/allimg/611/010913163107/130109163107-7-1200.jpg`}
          alt={`example`}
        ></ImageWrapper>
        <MyDropdown></MyDropdown>
      </div>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 uppercase">
        <div className="w-10 sm:w-2 md:w-5 lg:w-20 h-10 bg-black rounded-full flex flex-col justify-center items-center">
          <p>12</p>
        </div>
        <div className="col-start-3">2</div>
        <div>3</div>
        <div>4</div>
        <div className="row-start-1 col-start-2 col-span-1">5</div>
      </div>
    </div>
  );
}
// export async function getServerSideProps() {
//   // Fetch data from external API

//   // Pass data to the page via props
//   return { props: { env: process.env.KK_SS } };
// }
