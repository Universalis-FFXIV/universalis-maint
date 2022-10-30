import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Universalis - Maintenance</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          Universalis is currently under extended maintenance, following a server failure.
        </p>
        <p class="my-6">
          Please wait patiently while service availability is restored.
        </p>
        <div class="mt-6">
          <p>
            Links:
          </p>
          <ul class="list-disc list-inside">
            <li><a class="text-blue-600 visited:text-purple-600" href="https://github.com/Universalis-FFXIV" target="_blank">GitHub</a></li>
            <li><a class="text-blue-600 visited:text-purple-600" href="https://discord.gg/JcMvMxD" target="_blank">Discord</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
