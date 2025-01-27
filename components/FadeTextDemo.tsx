import { FadeText } from "@/components/ui/fade-text";

export function FadeTextDemo() {
  return (
    <div className="flex flex-col space-y-8 text-center">
      <FadeText
        className="text-4xl font-bold text-black dark:text-white"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="Complete the discovery basecamp"
      />
      <FadeText
        className="text-4xl font-bold text-black dark:text-white"
        direction="right"
        framerProps={{
          show: { transition: { delay: 0.4 } },
        }}
        text="Get graduated"
      />
      <FadeText
        className="text-4xl font-bold text-black dark:text-white"
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.6 } },
        }}
        text="Join the club"
      />
      <FadeText
        className="text-4xl font-bold text-black dark:text-white"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Start your journey as a builder 💅"
      />
    </div>
  );
}
