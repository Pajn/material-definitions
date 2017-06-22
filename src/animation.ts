import {CSSProperties} from 'glamorous'

export const animationCurve = {
  /**
   * The standard curve (also referred to as “ease in out”) is the most common
   * easing curve. Elements quickly accelerate and slowly decelerate between
   * on-screen locations.
   * It applies to growing and shrinking material, among other property changes.
   */
  standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',

  /**
   * Using the deceleration curve (also referred to as “ease out”) elements
   * enter the screen at full velocity and slowly decelerate to a resting point.
   *
   * During deceleration, elements may scale up either in size (to 100%) or
   * opacity (to 100%). In some cases, when elements enter the screen at 0% opacity,
   * they may slightly shrink from a larger size upon entry.
   */
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',

  /**
   * Using the acceleration curve (also referred to as “ease in”) elements
   * leave the screen at full velocity. They do not decelerate when off-screen.
   *
   * They accelerate at the beginning of the animation and may scale down
   * in either size (to 0%) or opacity (to 0%). In some cases, when elements
   * leave the screen at 0% opacity, they may also slightly scale up or down in size.
   */
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',

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
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
}

/**
 * Animation durations in ms
 */
export const animationDuration = {
  /**
   * The default duration value for elevation transitions.
   */
  elevation: 280,

  large: 375,
  enter: 225,
  leave: 195,

  mobile: {
    large: 375,
    enter: 225,
    leave: 195,
  },
  tablet: {
    large: 375 * 1.3,
    enter: 225 * 1.3,
    leave: 195 * 1.3,
  },
  desktop: {
    large: 375 * 0.7,
    enter: 225 * 0.7,
    leave: 195 * 0.7,
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
}): CSSProperties =>
  Object.assign(
    {
      transition: `box-shadow ${duration} ${easing}`,
    },
    willChange ? {willChange: 'box-shadow'} : undefined,
  )
