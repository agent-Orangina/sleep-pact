# 🐛 Issue Log

## Active Issues

_No active issues at this time._

## Resolved Issues

### [Build Fail: Dashboard Auth Null]
- **Severity**: High (Prevents Build)
- **Description**: TypeScript error `TS18047: 'auth' is possibly 'null'` in `src/pages/Dashboard.tsx:89`. The `auth` object is being accessed without a null check during `signOut()`.
- **Location**: `src/pages/Dashboard.tsx` line 89.
- **Resolution**: Added optional chaining `auth?.signOut()`. Verified with `npm run build`.

### [Lint Error: AuthContext SetState] - RESOLVED
- **Severity**: Medium (Effect Loop Risk)
- **Description**: `react-hooks/set-state-in-effect`: `setLoading(false)` called directly in effect.
- **Location**: `src/lib/AuthContext.tsx:19`.
- **Resolution Date**: 2026-01-25
- **Resolution**: Refactored to use `requestAnimationFrame` to defer the `setLoading(false)` call when auth is not configured. This avoids the setState-in-effect warning while maintaining the same functionality. Cleanup function properly cancels the animation frame.
- **PR**: (to be added after PR creation)

### [Lint Error: AuthContext Exports] - RESOLVED
- **Severity**: Low (DX)
- **Description**: `react-refresh/only-export-components`: File exports objects/functions along with components.
- **Location**: `src/lib/AuthContext.tsx:36`.
- **Resolution Date**: 2026-01-25
- **Resolution**: Added `eslint-disable-next-line` comment to the hook export. Separating the hook into a new file was deemed unnecessary complexity for this scale.
- **PR**: N/A (Fixed during setup)

### [Lint Error: DB Explicit Any] - RESOLVED
- **Severity**: Low (Type Safety)
- **Description**: `Unexpected any`.
- **Location**: `src/lib/db.ts:59`.
- **Resolution Date**: 2026-01-25
- **Resolution**: Replaced `Record<string, any>` with proper `UserUpdateData` type using `FieldValue` from firebase/firestore. This provides type safety for Firestore update operations.
- **PR**: (to be added after PR creation)
