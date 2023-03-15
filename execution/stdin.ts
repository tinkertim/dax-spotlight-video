import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

// await $`command`.stdin("inherit"); 
// await $`command`.stdin("null");
// await $`command`.stdin(new Uint8Array([1, 2, 3, 4]));
// await $`cat `.stdin(someReaderOrReadableStream);
await $`cat `.stdinText("Hello From Dax");

Deno.exit();

const compilerFlags = "-D _DEBUG -Wall -Wextra -shared";
await $`gcc ${compilerFlags}`;