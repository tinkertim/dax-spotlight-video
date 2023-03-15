import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

const result = await $`deno eval 'console.log(1); console.error(2);'`
  .stdout("piped")
  .stderr("piped");
  
console.log(result.code); // 0
console.log(result.stdoutBytes); // Uint8Array(2) [ 49, 10 ]
console.log(result.stdout); // 1\n
console.log(result.stderr); // 2\n

const result1 = await $`deno eval 'console.log(1); console.error(2); console.log(3);'`
  .captureCombined();

console.log(result1.combined); // 1\n2\n3\n