import { ReactNode } from 'react';

interface TextBodyProps {
  children: ReactNode;
}

const TextBody = ({ children }: TextBodyProps) => {
  return <p className="text-base text-gray-700 text-center">{children}</p>;
};

export default TextBody;
