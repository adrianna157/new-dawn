import { withVuetify } from 'storybook-addon-vuetify3/dist/decorators'

export const decorators = [
  withVuetify
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}