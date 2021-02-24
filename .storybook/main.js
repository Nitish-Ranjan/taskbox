module.exports = {
  "stories": [
    "../src/app/**/*.stories.mdx",
    "../src/app/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-actions', 
    '@storybook/addon-notes',
    '@storybook/addon-knobs'
  ]
}