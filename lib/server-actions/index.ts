"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vuvjackxzpmndmoapvgb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dmphY2t4enBtbmRtb2FwdmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyMjU1NDgsImV4cCI6MjAzODgwMTU0OH0.J5Hfe3eXLTYpzNvETmTTbQ93P81_irxG21fa5tWoUJI"
);

const tgBotToken = "7399879482:AAFoynZgIrfcrIuYvE9taTpizvIXLLlwE70";

const tgChatId = "1125625176";

export const postSubmission = async (data: any) => {
  console.log(data);
  const res = await supabase.from("formSumbission").insert(data);

  console.log(res);
};

export const getSubmissions = async () => {
  const { data, error } = await supabase.from("formSumbission").select("*");

  if (error) console.error("Error fetching data:", error);

  return data;
};

export const sendTelegramMessage = async (message: string) => {
  await fetch(
    `https://api.telegram.org/bot${tgBotToken}/sendMessage?chat_id=${tgChatId}&text=${message}`
  );
};
