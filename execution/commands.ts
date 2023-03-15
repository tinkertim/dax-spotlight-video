import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

const greeting = await $`echo 'Hello From Dax!'`.text();
console.log(greeting);

const results = await $`echo '{ "home": 1, "visitors": 0 }'`.json();
console.log(results.home);

const output = await $`echo Hello && echo From && echo Dax`.lines();
console.table(output);

// Output before executing
await $`echo foo-bar`.printCommand();
await $`echo bar-foo`;

$.setPrintCommand(true);
await $`echo bar-foo && echo foo-bar`;
await $`echo foo-bar && echo bar-foo`;
$.setPrintCommand(false);

await Promise.all([
    $`sleep 1 ; echo 1`,
    $`sleep 2 ; echo 2`,
    $`sleep 3 ; echo 3`,
]);

await $.withRetries({
    count: 300,
    delay: "2s",
    action: async () => {
        await $`true && false`;
    },
    quiet: false
});


