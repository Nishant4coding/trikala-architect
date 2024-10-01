import image from '@/assets/aesehi.png';

const TransparentTextOverlay = () => {
  return (
    <div className="relative h-screen bg-cover bg-center flex justify-center items-center font-[Roboto]" style={{ backgroundImage: `url(${image})` }}>
      <div className="flex justify-center items-center bg-white w-full">
        <h1 className="text-[250px] font-bold text-transparent bg-clip-text bg-center bg-cover bg-no-repeat p-4" style={{
          backgroundImage: `url(${image})`,
          WebkitTextStroke: '2px white'
          // backgroundSize: 'cover'
        }}>
          ARCHITECT
        </h1>
      </div>
    </div>
  );
};

export default TransparentTextOverlay;
