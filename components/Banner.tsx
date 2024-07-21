import Image from 'next/image';

interface BannerProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const Banner = ({ imageSrc, title, subtitle, description, buttonText }: BannerProps) => {
  return (
    <section>
    <div className="flex flex-col md:flex-row items-center justify-between bg-emerald-200 p-8 rounded-lg">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">{subtitle}</h2>
        <p className="text-base text-gray-600 mb-4">{description}</p>
        <button className="bg-emerald-900 text-white p-2 rounded disabled:opacity-50 shadow-2xl shadow-black">{buttonText}</button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center ">
        <Image src={imageSrc} alt={title} width={300} height={300} 
        className="object-cover rounded-tr-3xl rounded-bl-3xl [border-top-left-radius:10rem] [border-bottom-right-radius:10rem]" />
      </div>
    </div>
    </section>
  );
};

export default Banner;
