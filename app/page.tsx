import PurpleShine from "@/components/PurpleShine";
import SpotlightShine from "@/components/SpotlightShine";
import { FaArrowRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
  return (
    <main>
      <section className="w-full min-h-screen flex justify-center items-center bg-my-primary relative">
        <SpotlightShine />
        <div className="absolute -bottom-[50%] left-[36%] z-10">
          <span className="opacity-40">
            <PurpleShine />
          </span>
          <PurpleShine />
        </div>

        <div className="w-fit flex flex-col items-center gap-5 max-w-[1200px]">
          <div className="p-[0.5px] shadow-[0_0_65px_1px] shadow-my-purple rounded-full bg-gradient-to-r from-my-purple via-white to-my-purple">
            <button
              className="group px-3 py-1 bg-gradient-to-r from-my-blue-purple to-my-blue-purple-light text-white font-medium relative z-20 flex items-center gap-1 rounded-full
            "
            >
              Begin your journey: reach out today{" "}
              <GoArrowRight className="group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          <h1 className="text-white text-8xl font-bold text-center">
            Crafting Your Digital Identity
          </h1>

          <p className="text-xl text-slate-400">
            Not just a developer - Here's your complete solution partner
          </p>

          <button className="flex items-center gap-1 group bg-white text-my-primary relative z-20 px-4 py-3 rounded-full font-medium text-lg">
            Contact Now
            <GoArrowRight className="group-hover:translate-x-1 transition-all text-my-purple " />
          </button>
        </div>
      </section>
    </main>
  );
}
