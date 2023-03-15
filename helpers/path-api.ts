// deno-lint-ignore-file no-unused-vars
import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

const ref1 = $.path("./deno-tmp");

ref1.isDir(); 
ref1.mkdir();

ref1.isRelative(); // true
const absPath = ref1.resolve(); // resolve the path to be absolute

const textFile = ref1.join("file.txt");

// Ways to instantiate path references
const pathRelative = $.path("./relative");
const pathAbsolute = $.path("/tmp");
const pathFileUrl = $.path(new URL("file:///tmp")); // converts to /tmp
const pathStringFileUrl = $.path("file:///tmp"); // converts to /tmp
const pathImportMeta = $.path(import.meta); // the path for the current module

