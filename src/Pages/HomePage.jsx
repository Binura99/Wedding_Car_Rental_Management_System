import HomePageImage from '../Photo/Home_Page_Image.jpg';
import ArrowRight from '../Photo/Arrow_Right.svg';

export const Home = () => {
  return (
    <div className="flex w-full h-screen fixed items-center justify-center bg-black mt-[-64px]">

        <div className="bg-black bg-center items-center justify-center">
            <img src={HomePageImage} alt="homepageimage" className='opacity-40 blur-[1px] justify-center items-center bg-center '/>
        </div>

        <div className='items-center flex flex-col absolute gap-6 justify-center md:mt-[80px]'>
          <div className='flex text-5xl '>
            <h1 className='text-center text-white font-AlegreyaSansSC font-bold'>
              WELCOME 
              <span className='font-AlegreyaSansSC font-thin'> TO </span> 
              LUXURY WEDDING CARS
            </h1>
          </div>

          <div className='flex flex-col gap-2 text-xs'>
            <p className='text-center text-white max-w-[800px] mx-9 font-lexendG hidden md:flex'>
              your premier destination for luxury car rentals for weddings and special events. We believe that every couple deserves the very best on their wedding day, and that's why we offer an unparalleled selection of premium vehicles that will make your special day unforgettable.
            </p>

            <p className='text-center text-white max-w-[800px] mx-9 font-lexendG hidden md:flex'>
              Our commitment to excellence doesn't end with our fleet of luxury cars. We pride ourselves on providing exceptional customer service, with a team of dedicated professionals who will go above and beyond to ensure your wedding transportation is flawless. From the moment you contact us to the moment we drop you off at your final destination, we will be there every step of the way to make sure everything runs smoothly.
            </p>
          </div>

          <div className='flex text-white justify-center text-center'>
            <p className='font-Lobster text-3xl'>Your dream wedding deserves a 
            <span className='font-Lobster text-[#CCB195]'> dream car </span> <br />
            book yours today</p>
          </div>

          <div className='flex w-full items-center justify-center'>
            <p className='text-lg text-white opacity-50 mt-4 text-center'>
              Let us help you make your wedding unforgettable - with our rental cars
            </p>
          </div>

          <div className='flex flex-row '>
            <button 
            // onSubmit={}
            className='font-lexendG font-medium text-white text-center gap-3 whitespace-nowrap flex w-full my-2 bg-[#CCB195] rounded-3xl p-3 items-center justify-center hover:bg-[#caaa88]/80 cursor-pointer'>
              Book Now
              <img src={ArrowRight} alt="arrow right" className='h-[16px]' />
            </button>
            
          </div>

        </div>
    </div>
  )
}