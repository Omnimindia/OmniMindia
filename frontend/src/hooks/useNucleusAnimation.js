import { useRef, useCallback } from 'react'
import gsap from 'gsap'

/**
 * Custom hook for controlling nucleus animation sequences
 * Provides API for query animation (spin-up, compress, big-bang)
 * and result animation (particle to UI transition)
 */
export function useNucleusAnimation() {
  const timelineRef = useRef(null)
  const callbacksRef = useRef({
    onQueryStart: null,
    onQueryComplete: null,
    onResultStart: null,
    onResultComplete: null,
  })

  /**
   * Start the query animation sequence:
   * 1. Ramp spin (0.35s)
   * 2. Compress to core (0.2s)
   * 3. Big-bang explosion (0.6-0.9s)
   */
  const startQuery = useCallback((nucleusRef) => {
    if (!nucleusRef?.current) return

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    const nucleus = nucleusRef.current
    const timeline = gsap.timeline({
      onStart: () => callbacksRef.current.onQueryStart?.(),
      onComplete: () => callbacksRef.current.onQueryComplete?.(),
    })

    // Phase 1: Ramp spin (increase rotation speed)
    timeline.to(nucleus.rotation, {
      y: nucleus.rotation.y + Math.PI * 4,
      duration: 0.35,
      ease: 'power2.in',
    })

    // Phase 2: Compress to core
    timeline.to(nucleus.scale, {
      x: 0.3,
      y: 0.3,
      z: 0.3,
      duration: 0.2,
      ease: 'power2.in',
    }, '-=0.1')

    // Phase 3: Big-bang explosion (handled by particle system)
    timeline.call(() => {
      // Trigger particle explosion
      if (nucleus.userData?.triggerExplosion) {
        nucleus.userData.triggerExplosion()
      }
    })

    timelineRef.current = timeline
    return timeline
  }, [])

  /**
   * Stop the query animation
   */
  const stopQuery = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill()
      timelineRef.current = null
    }
  }, [])

  /**
   * Transition from particle explosion to results UI
   */
  const onResult = useCallback((resultsRef, particlesRef) => {
    if (!resultsRef?.current || !particlesRef?.current) return

    const timeline = gsap.timeline({
      onStart: () => callbacksRef.current.onResultStart?.(),
      onComplete: () => callbacksRef.current.onResultComplete?.(),
    })

    // Fade out particles
    timeline.to(particlesRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    })

    // Fade in results
    timeline.to(resultsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.1')

    timelineRef.current = timeline
    return timeline
  }, [])

  /**
   * Set callbacks for animation events
   */
  const setCallbacks = useCallback((callbacks) => {
    callbacksRef.current = { ...callbacksRef.current, ...callbacks }
  }, [])

  /**
   * Reset nucleus to idle state
   */
  const reset = useCallback((nucleusRef) => {
    if (!nucleusRef?.current) return

    const nucleus = nucleusRef.current
    gsap.to(nucleus.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.5,
      ease: 'power2.out',
    })
  }, [])

  return {
    startQuery,
    stopQuery,
    onResult,
    setCallbacks,
    reset,
  }
}
