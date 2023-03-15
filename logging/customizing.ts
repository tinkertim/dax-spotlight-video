import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

$.log("Normal");
$.logError("Normal Error.");

// deno-lint-ignore no-explicit-any
$.setErrorLogger((..._args: any[]) => {
    console.info("Sorry, the error handler is on lunch break.");
    return;
});

$.logError("Error");

$.setErrorLogger(console.error);
$.logError("Normal Error Again.");