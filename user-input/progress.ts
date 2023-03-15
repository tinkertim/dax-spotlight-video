import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

const pb1 = $.progress("Processing Items (I)");

// Show that we're working
try {
  await $`sleep 1`.quiet();
} finally {
  pb1.finish();
}

// Tasks are evenly distributed loads that take the same time
const items = [0, 1, 2];
const pb2 = $.progress("Processing Items(II)", {
  length: items.length,
});
await pb2.with(async () => {
  for (const item of items) {
    await $`echo Async Task: ${item}; sleep 1`;
    pb2.increment(); // or use pb.position(val)
  }
});
