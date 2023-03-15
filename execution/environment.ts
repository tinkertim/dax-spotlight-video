import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

await $`echo "Dax is:" $Dax`.env("Dax", "awesome");

await $`echo "Dax is:" $Dax`;

await $`echo "Dax is:" $Dax`.env("Dax", "Awesome-r!").exportEnv();
await $`echo "Dax is:" $Dax`;
