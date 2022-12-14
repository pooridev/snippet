export type TabData = { label: string; icon: JSX.Element | null; code: string }

export type TabProps = {
  tabData: Pick<TabData, 'icon' | 'label'> | null
  onRemove: () => void
  onAddTab: () => void
}
