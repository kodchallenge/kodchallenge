module.exports = {
  extends: ["custom/next"],
  // disable "cannot be used as a JSX component." error
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/jsx-no-literals": "off",
      },
    },
  ],
};
