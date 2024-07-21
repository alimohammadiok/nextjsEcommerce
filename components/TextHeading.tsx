import { ReactNode } from 'react';

interface TextHeadingProps {
  children: ReactNode;
}

const TextHeading = ({ children }: TextHeadingProps) => {
  return <h2 className="text-l text-gray-900 text-center">{children}</h2>;
};

export default TextHeading;
