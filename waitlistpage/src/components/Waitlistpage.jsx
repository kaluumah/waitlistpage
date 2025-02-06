import React, { useState, useEffect } from 'react';
import { Bell, Shield, Zap, Check, Users, ChevronRight, MessageCircle } from 'lucide-react';


fetch("http://127.0.0.1:5001/api/waitlist", {
  method: "POST",
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
      name: "John Doe",
      email: "johndoe@example.com"
  })
})
.then(response => response.json())
.then(data => console.log("Success:", data))
.catch(error => console.error("Error:", error));


const WaitlistPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Animate waitlist count on load
  useEffect(() => {
    const target = 1847; // Example starting number
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setWaitlistCount(target);
        clearInterval(timer);
      } else {
        setWaitlistCount(Math.floor(current));
      }
    }, 50);
  }, []);

  const submitEmail = async (email) => {
    try {
      const response = await fetch('http://localhost:5000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      // Handle response
    } catch (error) {
      // Handle error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setWaitlistCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with Animation */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <Shield className="w-16 h-16 text-blue-400 animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">CycleCipher</h1>
          <p className="text-xl text-gray-300 mb-8 animate-slide-up delay-100">
            Zero-touch password security for the modern web
          </p>

          {/* Waitlist Counter */}
          <div className="mb-8 text-blue-400 animate-fade-in delay-200">
            <Users className="inline-block mr-2" />
            <span className="text-2xl font-bold">{waitlistCount}</span>
            <span className="ml-2 text-gray-400">people have joined the waitlist</span>
          </div>
          
          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-16">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up delay-300">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-900/30 text-green-400 p-4 rounded-lg flex items-center justify-center gap-2 animate-fade-in">
                <Check size={20} />
                <span>You're on the list! We'll be in touch soon.</span>
              </div>
            )}
          </div>

          {/* Vision & Mission Section */}
          <div className="max-w-3xl mx-auto mb-16 bg-gray-800/30 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Securing Your Digital Life</h2>
            <p className="text-gray-300 mb-4">
              In today's interconnected world, password security isn't just an option—it's a necessity. 
              CycleCipher represents a fundamental shift in how we approach digital security, making 
              enterprise-grade protection accessible to everyone.
            </p>
            <p className="text-gray-300">
              Our vision is to eliminate password-related stress and vulnerabilities, allowing you 
              to focus on what matters while we handle your security invisibly and intelligently.
            </p>
          </div>
        </div>

        {/* Features Grid with Hover Animations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800/50 p-6 rounded-xl transform hover:scale-105 transition-all">
            <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Intelligent Security</h3>
            <p className="text-gray-400">Automatically generates and updates strong passwords without any user intervention.</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl transform hover:scale-105 transition-all">
            <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Zero-Touch Design</h3>
            <p className="text-gray-400">Works seamlessly in the background while you browse, requiring no manual management.</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl transform hover:scale-105 transition-all">
            <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Bell size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Monitoring</h3>
            <p className="text-gray-400">Proactively monitors and updates your security across all platforms automatically.</p>
          </div>
        </div>

       
        {/* Final CTA Section */}
        <div className="max-w-3xl mx-auto text-center bg-blue-600/20 p-12 rounded-2xl transform hover:scale-105 transition-all">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Password Security?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands who are already securing their digital future with ZeroKey.
            Be among the first to experience password security that works for you.
          </p>
          {!submitted && (
            <button
              onClick={() => document.querySelector('input[type="email"]').focus()}
              className="px-8 py-3 bg-blue-600 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              Join the Waitlist Now
              <ChevronRight />
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 CycleCipher. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Add required CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slide-up 1s ease-out forwards;
  }
  
  .delay-100 {
    animation-delay: 100ms;
  }
  
  .delay-200 {
    animation-delay: 200ms;
  }
  
  .delay-300 {
    animation-delay: 300ms;
  }
`;
document.head.appendChild(style);

export default WaitlistPage;