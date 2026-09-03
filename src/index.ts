//! The public surface of @buddy/ui.
//
// Everything a buddy app renders, and nothing about which agent it watches. A
// consuming app supplies the sessions and the theme; the components here draw
// them.

// The shapes core sends over the Tauri bridge, mirrored in TypeScript.
export type {
  SessionState,
  TaskKind,
  TaskStatus,
  Task,
  SessionSnapshot,
  AlertKind,
  Alert,
  UsageSeverity,
  Usage,
  Update,
  TranscriptDetail,
  AppConfig,
  DisplayInfo,
} from './types'
export { UPDATE_EVENT, CONFIG_EVENT, CRAZY_LEVELS, HIDE_MODES } from './types'

// Widget-sizing and input hooks.
export { useNotchLayout, reportHoverRects, visibleRects, NOTCH_EVENT } from './useNotch'
export type { NotchLayout, HoverRect } from './useNotch'
export { useCursor, sessionAtPoint, CURSOR_EVENT } from './useCursor'
export type { CursorPosition } from './useCursor'
// A module of sizing utilities rather than a hook: morph timing, the shadow
// pad, and the window-size arithmetic the panel resizes itself by.
export * from './useWidgetSize'

// Formatting shared by every row and popover.
export * from './format'

// The row itself, and the pieces it is assembled from.
export type { SessionViewProps } from './views/SessionView'
export { DotRow } from './views/dotRow/DotRow'
export { NamedDotRow } from './views/dotRow/NamedDotRow'
export { CollapsedPill } from './views/dotRow/CollapsedPill'
export { NotchFlanks } from './views/dotRow/NotchFlanks'
export { NotchPanel, stateLabel, rowAtPoint } from './views/dotRow/NotchPanel'
export type { RowTarget } from './views/dotRow/NotchPanel'
export { RowDetail, RowDetailSlot } from './views/dotRow/RowDetail'
export { SessionEntry } from './views/dotRow/SessionEntry'
export { SessionFields, useNow, useSessionDetail } from './views/dotRow/SessionFields'
export type { FieldName } from './views/dotRow/SessionFields'
export { SessionPopover } from './views/dotRow/SessionPopover'
export { StateCounts } from './views/dotRow/StateCounts'
export { UsageMeter } from './views/dotRow/UsageMeter'
export { UsagePopover } from './views/dotRow/UsagePopover'

// Heat drives the crazy-mode animation; an app that does not use it can ignore
// this, but the row imports it either way.
export { deriveHeat, isCalm } from './views/dotRow/heat'
export type { Heat } from './views/dotRow/heat'
