// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

module.exports = {
  presets: [
    "@expo/next-adapter/babel",
    "@babel/preset-react",
    "babel-preset-expo",
    "@babel/preset-env",
  ],
  env: {
    development: {
      plugins: ["@babel/plugin-transform-react-jsx"],
    },
  },
};
