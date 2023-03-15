import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

const dirName = "tmp";
await $`mkdir ${dirName}`;

const spaceyDirName = "tmp 1";
await $`mkdir ${spaceyDirName}`;

const dirNames = ["tmp1", "tmp2", "tmp3"];
await $`mkdir ${dirNames}`;

const args = "arg1   arg2   arg3"; // handy tip: use 'false' for testing
await $.raw`false echo ${args}`.printCommand();
