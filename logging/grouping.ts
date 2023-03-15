import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

$.log("Mercury");
$.logGroup();
$.logLight("Venus");
$.logGroup();
$.logStep("Earth");
$.logGroup();
$.logWarn("Mars");
$.logGroup();
$.logError("Saturn");

$.logGroupEnd();
$.logGroupEnd();
$.logGroupEnd();
$.logGroupEnd();

$.logError("Gotcha!");
