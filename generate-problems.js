import { writeFileSync } from "fs";

const NUM_LINES_IN_CODE_SEG = 10000;

for (let size = 1; size < 25; size = Math.ceil(size * 1.2)) {
  let file = [
    "---",
    "title: Test",
    "---",
    "",
    'import Component from "../components/Component.astro";',
  ];
  for (let i = 0; i < size; i++) {
    file.push("", "<Component code={`");
    for (let j = 0; j < NUM_LINES_IN_CODE_SEG; j++) {
      file.push(crypto.randomUUID());
    }
    file.push("`} />", "");
  }
  writeFileSync(`src/pages/test-${size}.mdx`, file.join("\n"));
}
