import { Layout } from '@components/Layout';
import { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

// const data = [
//   { name: 1, uv: 12500, pv: 2400, amt: 2400 },
//   { name: 2, uv: 15200, pv: 2400, amt: 2400 },
//   { name: 3, uv: 12005, pv: 2400, amt: 2400 },
//   { name: 4, uv: 51200, pv: 2400, amt: 2400 },
//   { name: 5, uv: 120055, pv: 2400, amt: 2400 },
//   { name: 6, uv: 125500, pv: 2400, amt: 2400 },
//   { name: 7, uv: 15200, pv: 2400, amt: 2400 },
//   { name: 8, uv: 15200, pv: 2400, amt: 2400 },
//   { name: 9, uv: 1200, pv: 2400, amt: 2400 },
//   { name: 10, uv: 51200, pv: 2400, amt: 2400 },
// ];
const data = [];

export default function Home() {
  return (
    <Layout title='ホーム'>
      <div>
        <div className='py-5'>
          <h2 className='font-bold text-3xl border-b border-gray my-2'>アプリのリンク一覧</h2>
          <div className='flex'>
            <div className='flex-1 border rounded border-gray mx-4 py-2 px-2'>
              <a href='http://typingx0.net/sushida/' target='_blank'>
                <p className='text-center'>寿司打</p>
              </a>
            </div>
            <div className='flex-1 border rounded border-gray mx-4 py-2 px-2'>
              <a href='https://www.e-typing.ne.jp/member/' target='_blank'>
                <p className='text-center'>e-typing</p>
              </a>
            </div>
            <div className='flex-1 border rounded border-gray mx-4 py-2 px-2'>
              <a href='https://typing.tanonews.com/' target='_blank'>
                <p className='text-center'>タイピング速度測定</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='py-5'>
          <h2 className='font-bold text-3xl border-b border-gray'>直近10回の成績</h2>
        </div>
        {data.length ? (
          <div className='flex justify-items-stretch'>
            <div className='mx-auto'>
              <LineChart
                width={720}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 80,
                  bottom: 20,
                  left: 20,
                }}
              >
                <Line type='monotone' dataKey='uv' stroke='#8884d8' />
                <XAxis dataKey='name' label={{ value: '回数', position: 'bottom' }} />
                <YAxis type='number' domain={['dataMin', 'dataMax']} />
                <Tooltip />
              </LineChart>
            </div>
          </div>
        ) : (
          <div className='text-4xl'>No Data</div>
        )}
      </div>
    </Layout>
  );
}

const Hoge: FC = () => {
  return <div></div>;
};
