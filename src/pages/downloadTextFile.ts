
// Instead of downloading a text file, we'll upload the text to Supabase as a row in the new application_files table.

import { supabase } from "@/integrations/supabase/client";

/**
 * Given the complete application data and its row id,
 * stores a text version of the application to Supabase (to the `application_files` table).
 */
const saveApplicationAsTextToDb = async (
  data: any & { id: string | number }
): Promise<{ error?: any }> => {
  // Format text file content
  const lines = [
    `Application ID: ${data.id}`,
    `Name: ${data.name}`,
    `Age: ${data.age}`,
    `Email: ${data.email}`,
    `Country: ${data.country}`,
    `Instagram: ${data.instagram}`,
    `Twitter: ${data.twitter}`,
    `OnlyFans: ${data.onlyfans}`,
    `Telegram: ${data.telegram}`,
    `TikTok: ${data.tiktok}`,
    `YouTube: ${data.youtube}`,
    `Facebook: ${data.facebook}`,
    `Threads: ${data.threads}`,
    `Other Socials: ${data.socials}`,
    `Content Style: ${data.contentStyle}`,
  ];
  const file_content = lines.join("\n");

  // Upload to Supabase using the custom type definition
  const { error } = await supabase
    .from("application_files")
    .insert([
      {
        application_id: Number(data.id),
        file_name: `vyra_application_${data.id}.txt`,
        file_content,
      },
    ]);
    
  return { error };
};

export default saveApplicationAsTextToDb;
