import BasicCalculator from "@/components/calculator/BasicCalculator";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex w-full py-5 justify-center">
        <BasicCalculator />
      </section>
    </main>
  );
}
