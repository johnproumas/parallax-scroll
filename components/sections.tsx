"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const title = "What an Awesome Title!";

const Sections = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);

  const characters = useRef([]);
  const titleRef2 = useRef(null);
  const subContRef1 = useRef(null);

  const boxesRef = useRef([]);

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(containerRef2.current, {
      background: "rgb(113 75 5)",
      scrollTrigger: {
        trigger: containerRef2.current,
        start: "top center",
        end: "+=200",
        scrub: 1,
        // markers: true,
      },
    });

    timeline
      .from(titleRef2.current, {
        x: -20,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef2.current,
          start: "top center",
          end: "+=300",
          scrub: true,
          // markers: true,
        },
      })
      .from(subContRef1.current, {
        x: 20,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef2.current,
          start: "top center",
          end: "+=300",
          scrub: true,
          // markers: true,
        },
      });

    characters.current.forEach((char, idx) => {
      timeline.from(char, {
        top: Math.floor(Math.random() * 75 - 25),
        scrollTrigger: {
          trigger: containerRef2.current,
          start: "top center+=150",
          end: "+=300",
          scrub: true,
          // markers: true,
        },
      });
    });

    boxesRef.current.forEach((box, idx) => {
      timeline.from(box, {
        opacity: 0 + idx * 0.3,
        stagger: 0.5,
        scrollTrigger: {
          trigger: containerRef2.current,
          start: "top center+=150",
          end: "+=300",
          scrub: true,
          // markers: true,
        },
      });
    });

    // timeline.to(boxesRef.current, {
    //   stagger: 0.5,
    //   scrollTrigger: {
    //     trigger: containerRef3.current,
    //     start: "top center-=100",
    //     end: "+=300",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
  }, []);

  return (
    <section className="flex flex-col w-full space-y-6">
      <div
        ref={containerRef1}
        className="h-screen w-full bg-violet-950 rounded-lg"
      ></div>
      <div
        ref={containerRef2}
        className="flex h-screen w-full bg-violet-950 rounded-lg space-x-3 p-6"
      >
        <div
          data-scroll
          data-scroll-speed="0.3"
          className="w-1/3 rounded-lg p-8 bg-gray-800"
        >
          <h2 className="text-3xl font-medium">
            {title.split("").map((char, idx) => {
              return (
                <span
                  ref={(ref) => (characters.current[idx] = ref as never)}
                  key={`${char}-${idx}`}
                  className="text-3xl font-medium relative"
                >
                  {char}
                </span>
              );
            })}
          </h2>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="w-1/3 rounded-lg p-8 bg-gray-800 space-y-3"
        >
          <h2
            ref={titleRef2}
            className="text-xl font-medium"
          >
            Awesome Title
          </h2>
          <div ref={subContRef1}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              sint, dicta eum illo placeat et doloremque soluta cum
              exercitationem maxime, ullam iure. Sint eligendi odio id iusto rem
              quis maiores! Exercitationem, necessitatibus quam?
            </p>
            <p>
              Ipsam eius, soluta debitis aspernatur assumenda ipsa? Dolor fugiat
              repellat voluptas nesciunt id, hic voluptatem molestias eos error
              nemo ab neque veniam quod incidunt provident debitis obcaecati,
              iste quos tenetur! Facilis atque vel corporis incidunt quam
              recusandae!
            </p>
          </div>
        </div>
        <div
          ref={containerRef3}
          data-scroll
          data-scroll-speed="0.7"
          className="w-1/3 rounded-lg p-8 bg-gray-800 space-y-5"
        >
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              ref={(ref) => (boxesRef.current[idx] = ref as never)}
              className="bg-indigo-900 rounded-lg size-16"
            ></div>
          ))}
        </div>
      </div>
      <div className="h-screen w-full bg-violet-950 rounded-lg"></div>
    </section>
  );
};

export default Sections;
