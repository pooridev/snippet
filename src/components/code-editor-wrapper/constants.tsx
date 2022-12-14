import { JSIcon } from '@components/icons'

const initialTabs: Array<{ label: string; icon: JSX.Element; code: string }> = [
  {
    icon: <JSIcon />,
    label: 'app.js',
    code: `console.log("hello world")`,
  },
]

export { initialTabs }
