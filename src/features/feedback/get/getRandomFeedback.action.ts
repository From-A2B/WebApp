"use server";

import { action } from "@/lib/server-actions/safe-actions";
import { z } from "zod";
import { GetRandomFeedbackQuery } from "./getRamdomFeedback.query";

const GetRandomFeedBackSchema = z.object({
  take: z.number().default(50)
});

export const GetRandomFeedBackAction = action(GetRandomFeedBackSchema, async ({take}) => {

  const feedback = await GetRandomFeedbackQuery({take})

  return feedback;

});