"use client";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HeroSection() {
  const [heading, setHeading] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:39491/api/operation");
        if (res.data.result && res.data.result.length > 0) {
          setHeading(res.data.result[0].sentence);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    const interval = setInterval(fetchData, 1000); // Fetch every 5s

    return () => clearInterval(interval);
  }, [heading]);

  const words = heading.split(" ");
  const total = words.length;

  const start = words.slice(0, Math.floor(total / 3));
  const middle = words.slice(
    Math.floor(total / 3),
    Math.floor((2 * total) / 3)
  );
  const end = words.slice(Math.floor((2 * total) / 3));

  return (
    <div className="bg-gradient-to-b from-[#fae2e2] pl-20 pr-20 to-[#f0cfad] min-h-screen flex justify-between p-5">
      <div className="flex flex-col gap-2 p-7 max-w-[600px]">
        <h1 className="text-3xl font-bold">
          <span className="text-black">{start.join(" ")} </span>
          <span className="text-yellow-700">{middle.join(" ")} </span>
          <span className="text-black">{end.join(" ")}</span>
        </h1>

        <p className="text-sm text-gray-500">
          Powerful Al solutions that go beyond mere data sorting and
          exploration. Use our array of Al enabled solutions that understand
          your business and recommend the optimal way forward.
        </p>
        <div>
          <button className="bg-[#FFBD59] text-white text-[8px]  rounded-sm h-8 w-20">
            Get Started
          </button>
        </div>
      </div>

      <div>
        <Image
          src="/wireframe.png"
          alt="img"
          height={300}
          width={100}
          className="h-[400px] w-[300px]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
