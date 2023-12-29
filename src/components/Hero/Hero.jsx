import { useState } from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";
import Button from "../../utils/Button";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "His Life will forever be Changed",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Book2,
    title: "Who's there",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Hero({ handleOrderPopup }) {
  const [imageId, setImageId] = useState(Book1);
  const [title, setTitle] = useState("His life will forever be changed");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deserunt culpa iusto asperiores suscipit tempora provident atque ipsum officiis cumque."
  );

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'
      style={bgImage}
    >
      <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          {/* text-content-section */}
          <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
            <h1
              data-aos='zoom-out'
              data-aos-duration='500'
              className='text-5xl sm:text-6xl lg:text-7xl font-bold'
            >
              {title}
              <p
                data-aos='slide-up'
                data-aos-duration='500'
                data-aos-delay='100'
                className='bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary'
              >
                by anonymous
              </p>
            </h1>
            <p
              data-aos='slide-up'
              data-aos-duration='500'
              data-aos-delay='100'
              className='text-sm'
            >
              {description}
            </p>
            <Button handleOrderPopup={handleOrderPopup}>Order Now</Button>
          </div>
          {/* image-content-section */}
          <div className='min-h-[450px] flex justify-center items-center relative order-1 sn:order-2'>
            {/* main image */}
            <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center'>
              <img
                data-aos='zoom-in'
                data-aos-once='true'
                src={imageId}
                alt=''
                className='w-[300px] h-[300px] sm:[h-450px] sm:[w-450px] sm:scale-125 object-contain mx-auto'
              />
            </div>
            {/* other image list */}
            <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 rounded-full'>
              {ImageList.map(({ id, img, title, description }) => (
                <img
                  src={img}
                  key={id}
                  className='max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200'
                  onClick={() => {
                    setImageId(img);
                    setDescription(description);
                    setTitle(title);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
