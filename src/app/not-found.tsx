"use client";
import Container from "@/components/Container";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <Container className="flex-col gap-y-4">
      <div className="flex flex-col gap-y-2 items-center">
        <h2 className="text-gray-600 font-light text-5xl">Page not found</h2>
        <h4 className="text-slate-800 font-semibold text-6xl">404</h4>
      </div>
      <button
        onClick={() => router.back()}
        className="bg-slate-800 text-gray-100 font-semibold rounded-md w-28 py-2 shadow-md shadow-white/25 cursor-pointer active:bg-slate-900 hover:bg-slate-700 transition-all duration-300"
      >
        Go Back
      </button>
    </Container>
  );
}
