import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_QUESTIONS } from '../constants/aiTutorQuestion'; // Import from config file


// ============================================
// UTILITY: Get Random Questions
// ============================================
const getRandomQuestions = (allQuestions) => {
  // Get random number between 5 and 9
  const randomCount = Math.floor(Math.random() * (9 - 5 + 1)) + 5;
  
  // Shuffle array and get first randomCount items
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(randomCount, allQuestions.length));
};


// ============================================
// MAIN AI WIDGET COMPONENT
// ============================================
const AIWidget = () => {
  const location = useLocation(); // Get current route
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Hi 👋 I am your AI Nursing Tutor. Ask me anything about nursing, biochemistry, or exam preparation.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [currentRouteData, setCurrentRouteData] = useState(null);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [generatingQuestions, setGeneratingQuestions] = useState(false); // For AI generation animation
  const [generationProgress, setGenerationProgress] = useState(0); // Progress for 5 seconds


  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;


  // ============================================
  // GET QUESTIONS BASED ON CURRENT ROUTE
  // ============================================
  useEffect(() => {
    const currentPath = location.pathname;
    const routeData = ROUTE_QUESTIONS[currentPath];
    setCurrentRouteData(routeData);
    
    // Generate random questions with animation
    if (routeData && routeData.questions.length > 0) {
      setGeneratingQuestions(true);
      setGenerationProgress(0);
      
      // Simulate AI generating questions (5000ms = 5 seconds delay)
      const progressInterval = setInterval(() => {
        setGenerationProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + (100 / 50); // 50 updates in 5 seconds (every 100ms)
        });
      }, 100);

      setTimeout(() => {
        setRandomQuestions(getRandomQuestions(routeData.questions));
        setGeneratingQuestions(false);
        setGenerationProgress(0);
        clearInterval(progressInterval);
      }, 5000);
    }
  }, [location.pathname]);


  // ============================================
  // HANDLE SUGGESTION CLICK
  // ============================================
  const handleSuggestionClick = (question) => {
    setInput(question);
    setShowSuggestions(false);
  };


  // ============================================
  // SEND MESSAGE TO AI
  // ============================================
  const sendMessage = async () => {
    if (!input.trim() || loading) return;


    if (!apiKey) {
      alert('OpenAI API key not found. Set VITE_OPENAI_API_KEY in .env and restart dev server.');
      return;
    }


    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];


    setLoading(true);
    setMessages(newMessages);
    setInput('');
    setShowSuggestions(true);


    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: newMessages,
          max_tokens: 150,
        }),
      });


      const data = await response.json();


      if (!response.ok) {
        console.error('OpenAI error:', data);
        throw new Error(data.error?.message || `API error: ${response.status}`);
      }


      const content = data.choices?.[0]?.message?.content || '';
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: content || 'I could not generate a response right now.',
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'There was a network or API issue. Please try again in a moment.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };


  return (
    <>
      {/* Floating Open button when widget is closed */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 999,
            borderRadius: '999px',
            border: 'none',
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background:
              'linear-gradient(135deg, rgba(56,189,248,1), rgba(129,140,248,1))',
            color: '#0f172a',
            boxShadow: '0 12px 25px rgba(15,23,42,0.45)',
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          <span
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '999px',
              background:
                'radial-gradient(circle at 30% 20%, #22d3ee, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 700,
              color: '#0f172a',
              boxShadow: '0 0 0 1px rgba(15,23,42,0.6)',
            }}
          >
            ✨
          </span>
          AI Tutor
        </button>
      )}


      {/* Main AI Tutor panel - EXPANDED SIZE */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '550px',
            height: '700px',
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(18px)',
            borderRadius: '20px',
            boxShadow: '0 25px 50px rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(148, 163, 184, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            color: '#e5e7eb',
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            overflow: 'hidden',
          }}
        >
          {/* Header - Enhanced */}
          <div
            style={{
              padding: '16px 20px',
              background:
                'linear-gradient(135deg, rgba(56,189,248,0.25), rgba(129,140,248,0.3))',
              borderBottom: '1px solid rgba(148, 163, 184, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 12px rgba(56,189,248,0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '999px',
                  background:
                    'linear-gradient(135deg, #22d3ee, #6366f1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '18px',
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
                  position: 'relative',
                  animation: generatingQuestions ? 'glow 2s ease-in-out infinite' : 'none',
                }}
              >
                ✨
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.5px' }}>
                  AI Nursing Tutor
                </div>
                <div style={{ fontSize: '12px', color: '#cbd5f5', marginTop: '2px' }}>
                  {currentRouteData
                    ? `${currentRouteData.icon} ${currentRouteData.category}`
                    : '🎓 Interactive Learning'}
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                border: 'none',
                background: 'transparent',
                color: '#e5e7eb',
                cursor: 'pointer',
                width: '36px',
                height: '36px',
                borderRadius: '999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s, transform 0.1s',
                fontSize: '20px',
              }}
              onMouseDown={(e) =>
                (e.currentTarget.style.transform = 'scale(0.95)')
              }
              onMouseUp={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
              title="Close tutor"
            >
              ✕
            </button>
          </div>


          {/* Messages + Suggestions Section */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px 20px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: 'rgba(15, 23, 42, 0.5)',
            }}
          >
            {/* Show suggestions only when no messages and route data exists */}
            {messages.length === 1 &&
              showSuggestions &&
              currentRouteData && (
                <div style={{ marginBottom: '12px' }}>
                  {/* Generating Questions Animation - Beautiful Loader */}
                  {generatingQuestions ? (
                    <div style={{
                      padding: '32px 24px',
                      background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.08), rgba(99, 102, 241, 0.08))',
                      borderRadius: '18px',
                      border: '1.5px solid rgba(34, 211, 238, 0.4)',
                      textAlign: 'center',
                      boxShadow: '0 8px 32px rgba(34, 211, 238, 0.15)',
                    }}>
                      {/* Title */}
                      <div style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#22d3ee',
                        marginBottom: '20px',
                        letterSpacing: '0.5px',
                      }}>
                        ✨ AI is Generating Questions...
                      </div>

                      {/* Animated Dots */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '8px',
                        marginBottom: '24px',
                      }}>
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '999px',
                              backgroundColor: '#22d3ee',
                              animation: `bounce 1.4s ease-in-out ${i * 0.14}s infinite`,
                              boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)',
                            }}
                          />
                        ))}
                      </div>

                      {/* Progress Bar */}
                      <div style={{
                        width: '100%',
                        height: '6px',
                        backgroundColor: 'rgba(34, 211, 238, 0.15)',
                        borderRadius: '999px',
                        overflow: 'hidden',
                        marginBottom: '16px',
                        border: '1px solid rgba(34, 211, 238, 0.3)',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${generationProgress}%`,
                          background: 'linear-gradient(90deg, #22d3ee, #6366f1)',
                          borderRadius: '999px',
                          transition: 'width 0.1s linear',
                          boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)',
                        }} />
                      </div>

                      {/* Progress Text */}
                      <div style={{
                        fontSize: '12px',
                        color: '#cbd5e1',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                      }}>
                        {Math.round(generationProgress)}% • Processing your content
                      </div>

                      {/* Subtle Animation Text */}
                      <div style={{
                        marginTop: '16px',
                        fontSize: '11px',
                        color: '#9ca3af',
                        animation: 'fadeInOut 2s ease-in-out infinite',
                      }}>
                        Analyzing questions • Optimizing difficulty • Selecting best fits
                      </div>
                    </div>
                  ) : randomQuestions.length > 0 ? (
                    <>
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#9ca3af',
                          marginBottom: '12px',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        {currentRouteData.icon} AI Generated Questions ({randomQuestions.length})
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr',
                          gap: '10px',
                        }}
                      >
                        {randomQuestions.map((question, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSuggestionClick(question)}
                            style={{
                              padding: '14px 16px',
                              background:
                                'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(99, 102, 241, 0.1))',
                              border: '1.5px solid rgba(56, 189, 248, 0.5)',
                              borderRadius: '14px',
                              color: '#e5e7eb',
                              fontSize: '13px',
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition:
                                'all 0.3s ease, transform 0.1s',
                              fontWeight: 500,
                              fontFamily: 'inherit',
                              lineHeight: '1.5',
                              backgroundColor: 'rgba(30, 41, 59, 0.6)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                'linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(99, 102, 241, 0.2))';
                              e.currentTarget.style.borderColor =
                                'rgba(34, 211, 238, 0.8)';
                              e.currentTarget.style.boxShadow =
                                '0 8px 20px rgba(34, 211, 238, 0.2)';
                              e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background =
                                'linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(99, 102, 241, 0.1))';
                              e.currentTarget.style.borderColor =
                                'rgba(56, 189, 248, 0.5)';
                              e.currentTarget.style.boxShadow = 'none';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                            onMouseDown={(e) => {
                              e.currentTarget.style.transform = 'scale(0.98)';
                            }}
                            onMouseUp={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                          >
                            <span style={{ display: 'inline-block', marginRight: '8px' }}>❓</span>
                            {question}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              )}


            {/* Chat Messages */}
            {messages.map((msg, idx) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: isUser ? 'flex-end' : 'flex-start',
                    marginBottom: '4px',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '80%',
                      padding: '12px 16px',
                      borderRadius: isUser
                        ? '18px 18px 6px 18px'
                        : '18px 18px 18px 6px',
                      fontSize: '14px',
                      lineHeight: 1.5,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      background: isUser
                        ? 'linear-gradient(135deg, #22d3ee, #6366f1)'
                        : 'rgba(51, 65, 85, 0.8)',
                      color: isUser ? '#0f172a' : '#e5e7eb',
                      border: isUser
                        ? '1px solid rgba(56,189,248,0.6)'
                        : '1px solid rgba(71,85,105,0.6)',
                      boxShadow: isUser
                        ? '0 6px 16px rgba(56,189,248,0.25)'
                        : '0 4px 12px rgba(15,23,42,0.5)',
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}


            {loading && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(34, 211, 238, 0.1)',
                  borderRadius: '14px',
                  width: 'fit-content',
                  marginTop: '8px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '999px',
                    background: '#22d3ee',
                    animation: 'pulse 1.2s infinite',
                  }}
                />
                <span style={{ color: '#22d3ee', fontWeight: 500 }}>AI Tutor is generating answer...</span>
              </div>
            )}
          </div>


          {/* Input Section - Enhanced */}
          <div
            style={{
              padding: '16px 20px 20px',
              borderTop: '1px solid rgba(71, 85, 105, 0.5)',
              background:
                'linear-gradient(180deg, rgba(15,23,42,0.95), rgba(15,23,42,1))',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '10px',
                backgroundColor: 'rgba(30, 41, 59, 0.8)',
                borderRadius: '14px',
                padding: '10px 12px 10px 16px',
                border: '1.5px solid rgba(71, 85, 105, 0.6)',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.8)';
                e.currentTarget.style.boxShadow =
                  '0 0 20px rgba(34, 211, 238, 0.2)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.6)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask your doubt here..."
                style={{
                  flex: 1,
                  resize: 'none',
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  color: '#e5e7eb',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  maxHeight: '100px',
                }}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                style={{
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                  background:
                    loading || !input.trim()
                      ? 'rgba(75,85,99,0.6)'
                      : 'linear-gradient(135deg, #22d3ee, #6366f1)',
                  color: loading || !input.trim() ? '#9ca3af' : '#0f172a',
                  boxShadow:
                    loading || !input.trim()
                      ? 'none'
                      : '0 6px 16px rgba(34, 211, 238, 0.3)',
                  transition:
                    'transform 0.1s, box-shadow 0.2s, background 0.2s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
                onMouseDown={(e) => {
                  if (!loading && input.trim())
                    e.currentTarget.style.transform = 'scale(0.96)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {loading ? '⏳' : '✉️ Send'}
              </button>
            </div>
            <div
              style={{
                marginTop: '8px',
                fontSize: '11px',
                color: '#6b7280',
                textAlign: 'center',
                letterSpacing: '0.3px',
              }}
            >
              Press <span style={{ fontWeight: 700, color: '#9ca3af' }}>Enter</span> to send • <span style={{ fontWeight: 700, color: '#9ca3af' }}>Shift+Enter</span> for new line
            </div>
          </div>
        </div>
      )}


      {/* CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-12px);
            opacity: 0.8;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 211, 238, 0.8);
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        /* Custom scrollbar */
        div::-webkit-scrollbar {
          width: 6px;
        }

        div::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 10px;
        }

        div::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.4);
          border-radius: 10px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.6);
        }
      `}</style>
    </>
  );
};


export default AIWidget;
