import { cn } from "../../../lib/utils";
import Marquee from "@/components/ui/marquee";
import image1 from '@/assets/Digit.png'; // Ensure the path to the image is correct
import image2 from '@/assets/aesehi.png'; // Ensure the path to the image is correct
import image3 from '@/assets/hero3.png'; // Ensure the path to the image is correct
import image4 from '@/assets/hero4.png'; // Ensure the path to the image is correct
import Sections from "../Section";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ",
    img: image1,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ",
    img: image2,
  },
  {
    name: "John",
    username: "@john",
    body: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ",
    img: image3,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ",
    img: image4,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ",
    img: image1,
  },
  {
    name: "James",
    username: "@james",
    body: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ",
    img: image2,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (

    <figure
      className={cn(
        "relative lg:w-[20vw] lg:h-[20vh] h-[20vh] w-[60vw]  cursor-pointer overflow-hidden  p-4 bg-cover bg-center",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "shadow-md "
      )}
      style={{ backgroundColor: "white" }}
    >


      <div className="flex flex-row items-center gap-[2vw]">
        <img className="h-12 w-12 rounded-full" src={img} alt={name} />
        <div className="">
          <div className="text-xl font-medium text-black">{name}</div>
          <p className="text-gray-500">{username}</p>
        </div>
      </div>
      <div>

        <p className="mt-2 text-gray-700">{body}</p>
      </div>

    </figure>
  );
};

const Testimonials = () => {
  return (
    <Sections className="relative flex h-full w-full flex-col items-center justify-center ">
      <div className="flex lg:flex-row flex-col lg:gap-[20vh]">
        <h1 className="text-6xl md:text-6xl lg:text-9xl font-custom text-left">
          What Our Clients have to say
        </h1>
        <span className="w-[40vh]">Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, </span>
      </div>
      <div className="relative w-[100vw]">
        <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient z-10"></div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </Sections>
  );
};

export default Testimonials;
