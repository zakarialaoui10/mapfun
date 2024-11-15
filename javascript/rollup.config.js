import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import terser from "@rollup/plugin-terser";
const banner = `
/*
  Project: mapfun
  Author: Zakaria Elalaloui
  Date : ${new Date()}
*/
`;
const output = [
  {
    file: `dist/mapfun.mjs`,
    format: "es",
    banner,
    exports: "named",
  },
  {
    file: `dist/mapfun.js`,
    format: "umd",
    name: "Mapfun",
    banner,
    exports: "named",
  },
  {
    file: `dist/mapfun.min.js`,
    format: "umd",
    name: "Mapfun",
    banner,
    exports: "named",
    plugins: [
      terser({
        output: {
          comments: (node, { type, value }) =>
            type === "comment2" && value.includes("Author"),
        },
      }),
    ],
  },
];
export default {
  input: "src/index.js",
  output,
  plugins: [
    resolve(),
    commonjs(),
  ],
};
