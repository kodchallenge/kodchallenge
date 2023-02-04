import React, { FC } from 'react'
import { KcFooter } from '../components/footers';
import { KcHeader } from '../components/headers';

export type KcLayoutProps = {
  children: React.ReactNode;
  overlay?: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const KcLayout = (props: KcLayoutProps): JSX.Element => {
  return (
    <>
      {props.overlay}
      <div className='lg:w-4/5 md:w-11/12 px-5 m-auto relative z-10'>
        {!props.hideHeader && <KcHeader />}
        <main>
          {props.children}
        </main>
        {!props.hideFooter && <KcFooter />}
      </div>
    </>
  )
}

export default KcLayout