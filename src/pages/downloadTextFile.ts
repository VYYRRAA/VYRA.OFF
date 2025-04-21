
interface ApplicationForm {
  name: string;
  age: string;
  email: string;
  country: string;
  instagram: string;
  twitter: string;
  onlyfans: string;
  telegram: string;
  tiktok: string;
  youtube: string;
  facebook: string;
  threads: string;
  socials: string;
  contentStyle: string;
}
const downloadApplicationAsText = (data: ApplicationForm & { id: string | number }) => {
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
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const downloadId = `vyra_application_${data.id}.txt`;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = downloadId;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(a.href);
  }, 1000);
};
export default downloadApplicationAsText;
