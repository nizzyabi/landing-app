import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";

export default function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl md:pb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400  text-center font-sans font-bold">
          self improvement. gamified.
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm text-center">
          level up your life, win rewards, and compete against others. 
        </p>
        <Input
          type="text"
          placeholder="hi@manuarora.in"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
