import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

const res = await $.request("https://api.weather.gov");
$.log(res.statusText, res.status);
