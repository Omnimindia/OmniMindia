import { useState, useEffect, useRef } from 'react'
import Lottie from 'lottie-react'

// TODO: Add actual Lottie JSON file to /src/assets/lottie/omni-thinking.json
// For now, using null with SVG fallback
const omniThinkingAnimation = null

/**
 * OMNI Assistant Widget
 * Floating AI assistant with Lottie animations, transcript panel, and TTS support
 * Follows production-ready template with interactive widget, TTS, and transcript
 */
export default function OmniWidget({ onAnalyzeStack }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
  const [transcript, setTranscript] = useState([])
  const [ttsEnabled, setTtsEnabled] = useState(false)
  const [assistantState, setAssistantState] = useState('idle')
  const transcriptEndRef = useRef(null)

  // OMNI microcopy - different states
  const COPY = {
    idle: [
      "Ready to analyze your infrastructure.",
      "What can I help you optimize today?",
      "Let's make your stack hardware-aware.",
    ],
    analyzing: [
      "Scanning your infrastructure...",
      "Analyzing workload patterns...",
      "Calculating optimal configurations...",
      "Almost there...",
    ],
    success: [
      "Analysis complete! Here's what I found.",
      "Your infrastructure is looking good.",
      "I've identified some optimization opportunities.",
    ],
    error: [
      "Hmm, I encountered an issue.",
      "Let's try that again.",
      "Something went wrong. Can you retry?",
    ],
  }

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [transcript])

  // Add message to transcript
  const addMessage = (role, content) => {
    const message = {
      role, // 'user' | 'assistant'
      content,
      timestamp: new Date().toISOString(),
    }
    setTranscript((prev) => [...prev, message])
    
    // Text-to-Speech if enabled
    if (ttsEnabled && role === 'assistant' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(content)
      utterance.rate = 1.0
      utterance.pitch = 1.0
      window.speechSynthesis.speak(utterance)
    }
  }

  // Handle "Analyze my stack" button
  const handleAnalyzeStack = async () => {
    setIsThinking(true)
    setAssistantState('analyzing')
    addMessage('user', 'Analyze my stack')
    
    // Random analyzing message
    const analyzingMsg = COPY.analyzing[Math.floor(Math.random() * COPY.analyzing.length)]
    addMessage('assistant', analyzingMsg)

    try {
      // Call API endpoint
      const response = await fetch('/api/stats')
      const data = await response.json()
      
      setIsThinking(false)
      setAssistantState('success')
      
      const successMsg = COPY.success[Math.floor(Math.random() * COPY.success.length)]
      addMessage('assistant', successMsg)
      
      // Pass data to parent callback
      onAnalyzeStack?.(data)
    } catch (error) {
      setIsThinking(false)
      setAssistantState('error')
      
      const errorMsg = COPY.error[Math.floor(Math.random() * COPY.error.length)]
      addMessage('assistant', errorMsg)
    }
  }

  return (
    <>
      {/* Floating widget button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-omni-orange to-omni-orange-light rounded-full shadow-lg hover:shadow-xl hover:shadow-omni-orange/50 transition-all duration-300 hover:scale-110 z-50 group"
        aria-label={isOpen ? 'Close OMNI assistant' : 'Open OMNI assistant'}
        aria-expanded={isOpen}
      >
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border-2 border-omni-orange animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full border border-omni-orange-light animate-pulse"></div>

        <div className="relative w-full h-full flex items-center justify-center">
          {isThinking ? (
            omniThinkingAnimation ? (
              <div className="w-10 h-10">
                <Lottie animationData={omniThinkingAnimation} loop />
              </div>
            ) : (
              <svg className="w-8 h-8 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )
          ) : (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Ask OMNI AI
        </div>
      </button>

      {/* Widget panel */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-omni-dark-100 border border-omni-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden animate-slideUp"
          role="dialog"
          aria-label="OMNI Assistant"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-omni-orange/90 to-omni-orange-light/90 backdrop-blur-sm p-4 text-white border-b border-omni-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">O</span>
                </div>
                <div>
                  <h3 className="font-semibold">OMNI Assistant</h3>
                  <p className="text-xs text-white/80">Hardware-aware AI advisor</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Transcript */}
          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-omni-dark">
            {transcript.length === 0 ? (
              <div className="text-center text-omni-gray-400 py-8">
                <p className="text-sm">{COPY.idle[0]}</p>
              </div>
            ) : (
              transcript.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-omni-orange text-white'
                        : 'bg-omni-dark-200 text-omni-gray-200 shadow-sm border border-omni-gray-800'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))
            )}
            <div ref={transcriptEndRef} />
          </div>

          {/* Actions */}
          <div className="p-4 border-t border-omni-gray-800 bg-omni-dark-100">
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={handleAnalyzeStack}
                disabled={isThinking}
                className="flex-1 bg-gradient-to-r from-omni-orange to-omni-orange-light hover:from-omni-orange-light hover:to-omni-orange text-white font-medium py-3 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-omni-orange/30"
              >
                {isThinking ? 'Analyzing...' : 'Analyze my stack'}
              </button>

              {/* TTS toggle */}
              <button
                onClick={() => setTtsEnabled(!ttsEnabled)}
                className={`p-3 rounded-lg transition-colors border ${
                  ttsEnabled
                    ? 'bg-omni-orange text-white border-omni-orange'
                    : 'bg-omni-dark-200 text-omni-gray-400 border-omni-gray-800 hover:bg-omni-dark-300'
                }`}
                aria-label={ttsEnabled ? 'Disable text-to-speech' : 'Enable text-to-speech'}
                title={ttsEnabled ? 'TTS enabled' : 'TTS disabled'}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </button>
            </div>

            {/* Privacy notice */}
            <p className="text-xs text-omni-gray-500 text-center">
              Hardware-aware & human-first design — we follow ethical AI guidelines.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
