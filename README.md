# @buddy/ui

The shared React surface of a [buddy](https://github.com/norbertsuski/claude-buddy)
widget: the dot row that shows one dot per agent session, the popovers behind
each row, the usage meter, and the sizing hooks the floating panel resizes
itself by.

Pairs with [buddy-core](https://github.com/norbertsuski/buddy-core), which owns
the Rust side. This package knows nothing about which agent produced a session —
it renders `SessionSnapshot` values and leaves their origin to the app.

## Styling

Import the stylesheet once, in the app's entry point:

```ts
import '@buddy/ui/styles.css'
```

Without it the row renders unstyled — the components carry no inline colours
by design.

## Theming

Every component takes its colours from CSS custom properties and carries no
colour literals. An app supplies its own palette, so the same row can look like
Claude Code in one widget and like Cursor in another while the layout stays
shared.

## Consuming it

```json
"dependencies": {
  "@buddy/ui": "github:norbertsuski/buddy-ui#v0.1.0"
}
```

Not published to npm. A git dependency pins by tag the same way the Rust half
does, and needs no registry account. npm runs `prepare` on a git install, which
builds `dist/` — the repo does not commit it.

For local development against a sibling clone, alias it in your app's Vite
config rather than using `npm link`, which `npm ci` wipes:

```ts
resolve: {
  alias: process.env.BUDDY_UI_LOCAL
    ? { '@buddy/ui': path.resolve(__dirname, '../buddy-ui/src') }
    : {},
}
```

HMR then crosses the package boundary, because Vite treats the aliased path as
source, and Vitest picks the alias up from the same config. Mirror it in
`tsconfig` `paths` too, or `tsc --noEmit` will resolve the published `.d.ts`
while Vite resolves your working copy and the two will disagree silently.

## Tests

```bash
npm test
```

217 tests across 14 files, jsdom via Vitest.

## Licence

MIT
