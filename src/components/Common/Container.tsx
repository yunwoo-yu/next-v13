import React, { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto max-w-[2520px] px-4 py-6 sm:px-2 md:px-10 xl:px-20">{children}</div>;
};

export default Container;
