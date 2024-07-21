import Image from 'next/image';

interface CountdownSectionProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  days: number;
  hours: number;
  minutes: number;
  buttonText: string;
}

const CountdownSection = ({
  imageSrc,
  altText,
  title,
  description,
  days,
  hours,
  minutes,
  buttonText,
}: CountdownSectionProps) => {
  return (
    <div className="bg-emerald-200 text-white flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <Image src={imageSrc} alt={altText} width={500} height={300} />
      </div>
      <div className="md:w-1/2 mt-8 p-8 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <div className="flex justify-center md:justify-start mb-4">
          <div className="bg-white text-gray-900 p-2 rounded-lg mx-1 flex flex-col">
            <span className="text-2xl font-bold">{days}</span>
            <span>Days</span>
          </div>
          <div className="bg-white text-gray-900 p-2 rounded-lg mx-1 flex flex-col">
            <span className="text-2xl font-bold">{hours}</span>
            <span>Hours</span>
          </div>
          <div className="bg-white text-gray-900 p-2 rounded-lg mx-1 flex flex-col">
            <span className="text-2xl font-bold">{minutes}</span>
            <span>Minutes</span>
          </div>
        </div>
        <button className="bg-green-700 text-white p-3 rounded disabled:opacity-50">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CountdownSection;
