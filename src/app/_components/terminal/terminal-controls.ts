type ShortcutEvent = Pick<
  KeyboardEvent,
  "key" | "code" | "ctrlKey" | "altKey" | "metaKey" | "repeat" | "isComposing"
>

export function isTerminalShortcut(event: ShortcutEvent): boolean {
  return (
    event.ctrlKey &&
    !event.altKey &&
    !event.metaKey &&
    !event.repeat &&
    !event.isComposing &&
    (event.code === "Backquote" || event.key === "`")
  )
}

export function listenForTerminalControls(
  scope: Window,
  actions: { toggle: () => void; open: () => void }
) {
  const onKeyDown = (event: KeyboardEvent) => {
    if (!isTerminalShortcut(event)) return
    event.preventDefault()
    actions.toggle()
  }
  const onMessage = (event: MessageEvent) => {
    if (event.origin !== scope.location.origin) return
    if (!event.source) return
    const action = event.data?.type
    if (
      action !== "split-view-toggle-terminal" &&
      action !== "split-view-open-terminal"
    )
      return
    const trusted = Array.from(scope.document.querySelectorAll("iframe")).some(
      (frame) => frame.contentWindow === event.source
    )
    if (!trusted) return
    if (action === "split-view-toggle-terminal") actions.toggle()
    else actions.open()
  }
  scope.addEventListener("keydown", onKeyDown, true)
  scope.addEventListener("message", onMessage)
  return () => {
    scope.removeEventListener("keydown", onKeyDown, true)
    scope.removeEventListener("message", onMessage)
  }
}

export function forwardTerminalShortcut(scope: Window) {
  if (scope.parent === scope) return () => {}
  const onKeyDown = (event: KeyboardEvent) => {
    if (!isTerminalShortcut(event)) return
    event.preventDefault()
    scope.parent.postMessage(
      { type: "split-view-toggle-terminal" },
      scope.location.origin
    )
  }
  scope.addEventListener("keydown", onKeyDown, true)
  return () => scope.removeEventListener("keydown", onKeyDown, true)
}
