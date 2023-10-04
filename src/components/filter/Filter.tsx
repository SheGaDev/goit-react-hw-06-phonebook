import { ChangeEvent } from 'react';

type FilterProp = { filter: (text: ChangeEvent) => void };

const Filter = ({ filter }: FilterProp) => {
  return (
    <>
      <label className='mb-[24px] flex w-[360px] flex-col items-center'>
        Find contacts by name:
        <input className='w-[360px]' type='text' onChange={filter} />
      </label>
    </>
  );
};

export default Filter;
