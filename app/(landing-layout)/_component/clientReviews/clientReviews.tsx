
import Marquee from "@/components/magicui/marquee";
import { ReviewCard } from "./reviewCard";

const reviews = [
  {
    name: 'John Smith',
    username: '@johnsmith',
    body: "I love using this trip planner! It has made trip planning much easier and more organized. The AI customization feature is a game changer!",
    img: "https://avatar.vercel.sh/johnsmith",
  },
  {
    name: 'Emily Johnson',
    username: '@emilyjohnson',
    body: "This trip planner has been a lifesaver for me. I travel frequently for work, and it has made managing my trips so much easier. The dashboard with statistics is a great way to track my progress and see how much I've traveled.",
    img: "https://avatar.vercel.sh/emilyjohnson",
  },
  {
    name: 'Michael Davis',
    username: '@michaeldavis',
    body: "I cannot recommend this trip planner enough. It has all the features I need to plan my trips step by step. The AI customization is a nice touch, and the dashboard provides valuable information about my travels.",
    img: "https://avatar.vercel.sh/michaeldavis",
  },
  {
    name: 'Sarah Thompson',
    username: '@sarahthompson',
    body: "I've tried many trip planners, but this one is by far the best. The AI customization feature really understands my preferences and suggests perfect trips. The dashboard is also very informative and helps me track my travel goals.",
    img: "https://avatar.vercel.sh/sarahthompson",
  },
  {
    name: 'David Wilson',
    username: '@davidwilson',
    body: "I am amazed at how intuitive and user-friendly this trip planner is. It has made trip planning a fun and enjoyable experience. The dashboard with statistics is excellent motivation to keep exploring and traveling.",
    img: "https://avatar.vercel.sh/davidwilson",
  },
];

export const ClientReviews = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-20">
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
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/"></div>
    </div>
  );
};