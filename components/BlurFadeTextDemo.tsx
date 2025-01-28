import { BlurFade } from "@/components/ui/blur-fade";

export function BlurFadeTextDemo() {
  return (
    <section id="header">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
          Hello World 👋
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView className="text-center">
        <span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
          Nice to meet you
        </span>
      </BlurFade>
    </section>
  );
}
