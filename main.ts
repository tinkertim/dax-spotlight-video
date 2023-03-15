import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

await $`grep localhost /etc/hosts`;

const result = await $`grep localhost /etc/hosts`.lines();

console.dir(result);

$.log("Hello from Dax!");

