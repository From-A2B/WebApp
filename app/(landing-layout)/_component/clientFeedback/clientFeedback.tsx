'use client';

import Marquee from '@/components/magicui/marquee';
import { GetRandomFeedBackAction } from '@/features/feedback/get/getRandomFeedback.action';
import useNotify from '@/hook/useNotify';
import { Center, Loader } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { ReviewCard } from './reviewCard';

export const ClientReviews = () => {
  const { ErrorNotify } = useNotify();

  const { data: feedbacks, error } = useQuery({
    queryKey: ['randomFeedback'],
    queryFn: async () => {
      const { data: feedbackData, serverError } = await GetRandomFeedBackAction(
        {
          take: 20,
        }
      );

      if (!feedbackData || serverError) {
        ErrorNotify({
          message: 'An error occurred while fetching feedbacks.',
        });
        return [];
      }

      return feedbackData;
    },
  });

  if (error || !feedbacks) {
    return (
      <Center>
        <Loader size="xl" mt="xl" />
      </Center>
    );
  }

  const firstRow = feedbacks.slice(0, feedbacks.length / 2);
  const secondRow = feedbacks.slice(feedbacks.length / 2);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((feedback) => (
          <ReviewCard
            key={feedback.id}
            img="https://avatar.vercel.sh/emilyjohnson"
            name={feedback.user?.name}
            message={feedback.message}
            createAt={feedback.createdAt}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((feedback) => (
          <ReviewCard
            key={feedback.id}
            img="https://avatar.vercel.sh/emilyjohnson"
            name={feedback.user?.name}
            message={feedback.message}
            createAt={feedback.createdAt}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/"></div>
    </div>
  );
};
