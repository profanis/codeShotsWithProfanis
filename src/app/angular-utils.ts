import { ɵgetLContext } from '@angular/core';

/**
 * Flags associated with an LView (saved in LView[FLAGS])
 *
 * This enum has been copied from angular/packages/core/src/render3/interfaces/view.ts and should be manually kept in sync with the source.
 */
export const enum LViewFlags {
  /** The state of the init phase on the first 2 bits */
  InitPhaseStateIncrementer = 0b00000000001,
  InitPhaseStateMask = 0b00000000011,

  /**
   * Whether or not the view is in creationMode.
   *
   * This must be stored in the view rather than using `data` as a marker so that
   * we can properly support embedded views. Otherwise, when exiting a child view
   * back into the parent view, `data` will be defined and `creationMode` will be
   * improperly reported as false.
   */
  CreationMode = 1 << 2,

  /**
   * Whether or not this LView instance is on its first processing pass.
   *
   * An LView instance is considered to be on its "first pass" until it
   * has completed one creation mode run and one update mode run. At this
   * time, the flag is turned off.
   */
  FirstLViewPass = 1 << 3,

  /** Whether this view has default change detection strategy (checks always) or onPush */
  CheckAlways = 1 << 4,

  /** Whether there are any i18n blocks inside this LView. */
  HasI18n = 1 << 5,

  /** Whether or not this view is currently dirty (needing check) */
  Dirty = 1 << 6,

  /** Whether or not this view is currently attached to change detection tree. */
  Attached = 1 << 7,

  /** Whether or not this view is destroyed. */
  Destroyed = 1 << 8,

  /** Whether or not this view is the root view */
  IsRoot = 1 << 9,

  /**
   * Whether this moved LView was needs to be refreshed. Similar to the Dirty flag, but used for
   * transplanted and signal views where the parent/ancestor views are not marked dirty as well.
   * i.e. "Refresh just this view". Used in conjunction with the HAS_CHILD_VIEWS_TO_REFRESH
   * flag.
   */
  RefreshView = 1 << 10,

  /** Indicates that the view **or any of its ancestors** have an embedded view injector. */
  HasEmbeddedViewInjector = 1 << 11,

  /** Indicates that the view was created with `signals: true`. */
  SignalView = 1 << 12,

  /**
   * Indicates that this LView has a view underneath it that needs to be refreshed during change
   * detection. This flag indicates that even if this view is not dirty itself, we still need to
   * traverse its children during change detection.
   */
  HasChildViewsToRefresh = 1 << 13,

  /**
   * This is the count of the bits the 1 was shifted above (base 10)
   */
  IndexWithinInitPhaseShift = 14,

  /**
   * Index of the current init phase on last 21 bits
   */
  IndexWithinInitPhaseIncrementer = 1 << IndexWithinInitPhaseShift,

  // Subtracting 1 gives all 1s to the right of the initial shift
  // So `(1 << 3) - 1` would give 3 1s: 1 << 3 = 0b01000, subtract 1 = 0b00111
  IndexWithinInitPhaseReset = (1 << IndexWithinInitPhaseShift) - 1,
}

// Below are constants for LView indices to help us look up LView members
// This const has been copied from angular/packages/core/src/render3/interfaces/view.ts and should be manually kept in sync with the source.
export const FLAGS = 2;

export function isDirty<T>(component: T): boolean {
  const lView = ɵgetLContext(component)?.lView;
  if (lView == null) {
    throw new Error(`LView is not defined.`);
  }
  return (lView[FLAGS] & LViewFlags.Dirty) === LViewFlags.Dirty;
}

export function isTraversal<T>(component: T): boolean {
  const lView = ɵgetLContext(component)?.lView;
  if (lView == null) {
    throw new Error(`LView is not defined.`);
  }
  console.log(lView[FLAGS]);
  return (
    (lView[FLAGS] & LViewFlags.HasChildViewsToRefresh) ===
    LViewFlags.HasChildViewsToRefresh
  );
}
