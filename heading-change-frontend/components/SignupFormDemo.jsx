"use client";
import React, { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { Loader2Icon } from "lucide-react";

export default function SignupFormDemo() {
  const [heading, setHeading] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // 🔄 better variable name

  // fetch heading from DB
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:39491/api/operation");
        if (res.data.result && res.data.result.length > 0) {
          setHeading(res.data.result[0].sentence);
        }
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEditing) return;

    try {
      await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/operation`, {
        sentence: heading,
      });

      setIsEditing(false); // turn editing off after save
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-2xl bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Admin Heading Manage
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Change your heading based on your preference
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {loading ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <Textarea
            placeholder="Type your heading here."
            className="mb-2"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            disabled={!isEditing} // ✅ now works as expected
          />
        )}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="h-10 w-full rounded-md bg-gray-300 text-black font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isEditing} // ✅ disable if already editing
          >
            Edit &rarr;
          </button>

          <button
            type="submit"
            className="h-10 w-full rounded-md bg-black text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isEditing} // ✅ disable if not editing
          >
            Save &rarr;
          </button>
        </div>
      </form>
    </div>
  );
}
