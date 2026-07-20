import { useCallback, useEffect, useRef, useState } from 'react'

function pickVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find((v) => v.lang === 'en-ZA') ??
    voices.find((v) => v.lang.startsWith('en-GB')) ??
    voices.find((v) => v.lang.startsWith('en'))
  )
}

export function useSpeechSynthesis() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window
  const [isSpeaking, setIsSpeaking] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  const stop = useCallback(() => {
    if (!supported) return
    window.speechSynthesis.cancel()
    utteranceRef.current = null
    setIsSpeaking(false)
  }, [supported])

  const speak = useCallback(
    (text: string) => {
      if (!supported || !text.trim()) return

      stop()

      const utterance = new SpeechSynthesisUtterance(text.trim())
      utterance.lang = 'en-ZA'
      utterance.rate = 0.95

      const voice = pickVoice()
      if (voice) utterance.voice = voice

      utterance.onend = () => {
        utteranceRef.current = null
        setIsSpeaking(false)
      }
      utterance.onerror = () => {
        utteranceRef.current = null
        setIsSpeaking(false)
      }

      utteranceRef.current = utterance
      setIsSpeaking(true)
      window.speechSynthesis.speak(utterance)
    },
    [supported, stop],
  )

  useEffect(() => {
    if (!supported) return

    function loadVoices() {
      pickVoice()
    }

    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    loadVoices()

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
      window.speechSynthesis.cancel()
    }
  }, [supported])

  const toggle = useCallback(
    (text: string) => {
      if (isSpeaking) stop()
      else speak(text)
    },
    [isSpeaking, speak, stop],
  )

  return { supported, isSpeaking, speak, stop, toggle }
}
