export const animationCurve = {
  /**
   * The standard curve (also referred to as “ease in out”) is the most common
   * easing curve. Elements quickly accelerate and slowly decelerate between
   * on-screen locations.
   * It applies to growing and shrinking material, among other property changes.
   */
  standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)' as 'cubic-bezier(0.4, 0.0, 0.2, 1)',

  /**
   * Using the deceleration curve (also referred to as “ease out”) elements
   * enter the screen at full velocity and slowly decelerate to a resting point.
   *
   * During deceleration, elements may scale up either in size (to 100%) or
   * opacity (to 100%). In some cases, when elements enter the screen at 0% opacity,
   * they may slightly shrink from a larger size upon entry.
   */
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)' as 'cubic-bezier(0.0, 0.0, 0.2, 1)',

  /**
   * Using the acceleration curve (also referred to as “ease in”) elements
   * leave the screen at full velocity. They do not decelerate when off-screen.
   *
   * They accelerate at the beginning of the animation and may scale down
   * in either size (to 0%) or opacity (to 0%). In some cases, when elements
   * leave the screen at 0% opacity, they may also slightly scale up or down in size.
   */
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)' as 'cubic-bezier(0.4, 0.0, 1, 1)',

  /**
   * Using the sharp curve (also referred to as “ease in out”) elements quickly
   * accelerate and decelerate. It is used by exiting elements that may return
   * to the screen at any time.
   *
   * Elements may quickly accelerate from a starting point on-screen, then
   * quickly decelerate in a symmetrical curve to a resting point immediately
   * off-screen. The deceleration is faster than the standard curve since it
   * doesn't follow an exact path to the off-screen point.
   * Elements may return from that point at any time.
   */
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)' as 'cubic-bezier(0.4, 0.0, 0.6, 1)',
}

/**
 * Animation durations in ms
 */
export const animationDuration = {
  /**
   * The default duration value for elevation transitions.
   */
  elevation: 280 as 280,

  large: 375 as 375,
  enter: 225 as 225,
  leave: 195 as 195,

  mobile: {
    large: 375 as 375,
    enter: 225 as 225,
    leave: 195 as 195,
  },
  tablet: {
    /** 375 * 1.3 */
    large: 487.5 as 487.5,
    /** 225 * 1.3 */
    enter: 292.5 as 292.5,
    /** 195 * 1.3 */
    leave: 253.5 as 253.5,
  },
  desktop: {
    /** 375 * 0.7 */
    large: 262.5 as 262.5,
    /** 225 * 0.7 */
    enter: 157.5 as 157.5,
    /** 195 * 0.7 */
    leave: 136.5 as 136.5,
  },
}

export const animationPreset = {
  elevation: {
    delay: animationDuration.elevation,
    easing: animationCurve.standard,
  },
  move: {
    delay: animationDuration.enter,
    easing: animationCurve.standard,
  },
  enter: {
    delay: animationDuration.enter,
    easing: animationCurve.deceleration,
  },
  leave: {
    delay: animationDuration.leave,
    easing: animationCurve.acceleration,
  },
}

export const elevationTransition = ({
  duration = animationDuration.elevation,
  easing = animationCurve.standard,
  willChange = true,
}: {
  duration?: number
  easing?: string
  willChange?: boolean
}) =>
  Object.assign(
    {
      transition: `box-shadow ${duration} ${easing}`,
    },
    willChange ? {willChange: 'box-shadow' as 'box-shadow'} : undefined,
  )

export const fadeTransition = (
  visible: boolean,
  {scale, scaleRatio = 0.7} = {scale: false},
) => ({
  opacity: visible ? 1 : 0,
  ...scale ? {transform: `scale(${visible ? 1 : scaleRatio})`} : undefined,

  transition: `opacity ${visible
    ? animationDuration.mobile.enter
    : animationDuration.mobile.leave} ${visible
    ? animationCurve.deceleration
    : animationCurve.acceleration}, ${scale
    ? `transform ${visible
        ? animationDuration.mobile.enter
        : animationDuration.mobile.leave} ${visible
        ? animationCurve.deceleration
        : animationCurve.acceleration}`
    : ''}`,
  '@media (min-width: 601px)': {
    transition: `opacity ${visible
      ? animationDuration.desktop.enter
      : animationDuration.desktop.leave} ${visible
      ? animationCurve.deceleration
      : animationCurve.acceleration}, ${scale
      ? `transform ${visible
          ? animationDuration.desktop.enter
          : animationDuration.desktop.leave} ${visible
          ? animationCurve.deceleration
          : animationCurve.acceleration}`
      : ''}`,
  },
  '@media (pointer: coarse) and (min-width: 601px)': {
    transition: `opacity ${visible
      ? animationDuration.tablet.enter
      : animationDuration.tablet.leave} ${visible
      ? animationCurve.deceleration
      : animationCurve.acceleration}, ${scale
      ? `transform ${visible
          ? animationDuration.tablet.enter
          : animationDuration.tablet.leave} ${visible
          ? animationCurve.deceleration
          : animationCurve.acceleration}`
      : ''}`,
  },
})
