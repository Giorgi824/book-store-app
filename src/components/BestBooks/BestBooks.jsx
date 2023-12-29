import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";
import Button from "../../utils/Button";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
];
function BestBooks({ handleOrderPopup }) {
  return (
    <div className='py-10'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            Trending Books
          </p>
          <h1 className='text-3xl font-bold'>Best Books</h1>
          <p className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            laudantium. Iste placeat modi a asperiores itaque ipsa. Beatae
            voluptas porro nemo temporibus! Ipsa sit soluta sint, veritatis
            tenetur dolores incidunt.
          </p>
        </div>
        {/* card section */}
        <div className='flex gap-5 flex-wrap justify-center items-center'>
          {booksData.map(({ id, img, title, rating, author }) => (
            <div
              data-aos='zoom-in'
              key={id}
              className='rounded-2xl flex flex-col justify-center items-center bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group grow-1 min-w-[200px] mt-8 p-2'
            >
              <div className='-translate-y-7'>
                <img
                  src={img}
                  className='max-w-[100px] block max-auto transform group-hover:scale-105 duration-300 shadow-md rounded-md'
                />
              </div>
              <div className=''>
                <div className='w-full flex items-center justify-center'>
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div>
                <div className='flex flex-col gap-3 justify-center items-center text-center mt-3'>
                  <h1 className='text-xl font-bold'>{title}</h1>
                  {/* <p>{desc}</p> */}
                  <Button handleOrderPopup={handleOrderPopup}>Order Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestBooks;
