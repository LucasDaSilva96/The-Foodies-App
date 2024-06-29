'use client';

const Path = (props: any) => (
  <path
    fill='#000'
    stroke='rgb(217 119 6)'
    strokeWidth='2'
    strokeLinecap='round'
    {...props}
  />
);

type MenuToggleProps = {
  toggle: () => void;
  isOPen: boolean;
};

export const MenuToggle = ({ toggle, isOPen }: MenuToggleProps) => (
  <button className='z-50  absolute top-[20px] right-4' onClick={toggle}>
    <svg width='23' height='18' viewBox='0 0 23 18'>
      <Path
        d='M 2 2.5 L 20 2.5'
        className='top'
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path d='M 2 9.423 L 20 9.423' opacity='1' className='middle' />
      <Path
        d='M 2 16.346 L 20 16.346'
        className='bottom'
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
