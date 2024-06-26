
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

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
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const ClientReviews = () => {
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