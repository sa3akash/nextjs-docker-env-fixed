import Client from "@/components/client";


export const dynamic = "force-dynamic";

export default function Home() {
  const SERVER_ENV = process.env.SERVER_ENV;
  const KEY_NAME = process.env.KEY_NAME;
  return (
    <main>
      <Client SERVER_ENV={SERVER_ENV} KEY_NAME={KEY_NAME}/>
    </main>
  );
}
