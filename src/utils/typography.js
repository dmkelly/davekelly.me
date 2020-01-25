import Typography from "typography"
import Theme from "typography-theme-github"
import CodePlugin from "typography-plugin-code"

Theme.plugins = [new CodePlugin()]

const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale