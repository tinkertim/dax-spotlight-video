import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

// Change the CWD for the current process.
$.cd("/tmp");

// Synchronous sleep in human-friendly terms
await $.sleep(100); // ms
await $.sleep("1.5s");
//await $.sleep("1m30s");

console.log(await $.which("deno")); // outputs the path to deno executable
console.log(await $.commandExists("deno"));
console.log($.commandExistsSync("deno"));

await $.withRetries({
  count: 2,
  delay: "1s",
  action: async () => {
    await $.sleep("1s");
  },
  quiet: false,
});

$.stripAnsi("\u001B[4mHello World\u001B[0m");

console.log($.dedent`
    This line will appear without any indentation.
      * This list will appear with 2 spaces more than previous line.
      * As will this line.

    Empty lines (like the one above) will not affect the common indentation.
`);
