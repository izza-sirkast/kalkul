import BasicCalculator from "@/components/calculator/BasicCalculator";
import Link from "next/link";
import { headers } from "next/headers";

export default function Home() {
  const headerList = headers()
  const pathName = headerList.get('x-pathname')
  console.log(pathName)

  return (
    <main>
      <section className="flex w-full py-5 justify-center">
        <BasicCalculator />
      </section>
    </main>
  );
}
