import { RequestBuilder } from "https://deno.land/x/dax@0.28.0/mod.ts";

const requestBuilder = new RequestBuilder()
  .header("X-Example-Header", "Test Value")
  .header("EXAMPLE_HEADER", "Test Value");

const res = await requestBuilder
  .url("https://api.weather.gov/") // Thanks, weather.gov folks!
  .timeout("10s")
  .json();

console.log(res);
console.log(res.status);