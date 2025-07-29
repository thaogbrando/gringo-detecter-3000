'use client';
import React, { useState, useEffect } from 'react';
import { Heart, Laugh, Coffee, Music } from 'lucide-react';

export default function GringoRoast() {
  const [currentRoast, setCurrentRoast] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const roasts = [
    "¡Ay, mi amor! You put ketchup on your tacos, don't you? 🌮➡️🍅",
    "I bet you think Taco Bell is authentic Mexican food, ¿verdad? 😂",
    "You probably say 'grassy-ass' instead of 'gracias' and think you're bilingual 💀",
    "Let me guess... you call it 'JAL-apeño' instead of 'hal-apeño' 🌶️",
    "You definitely think Cinco de Mayo is Mexican Independence Day 🇲🇽",
    "I know you put pineapple on pizza AND call it 'exotic' 🍍🍕",
    "You probably think speaking louder in English helps us understand better 📢",
    "¿You season your food with... salt? Just salt? Pobrecito... 🧂",
    "I bet your idea of spicy is black pepper on your chicken 🌶️❌",
    "You definitely clap when the plane lands, don't you? ✈️👏"
  ];

  const gringoFacts = [
    "🥛 Drinks milk with every meal (even with tacos)",
    "🏠 Lives in a house with carpet in the kitchen",
    "🧀 Thinks Velveeta is a fancy cheese",
    "☀️ Burns after 5 minutes in the sun",
    "🛒 Uses a shopping cart for 3 items",
    "❄️ Wears shorts when it's 60°F outside"
  ];

  const handleRoastClick = () => {
    setIsSpinning(true);
    setShowConfetti(true);
    setTimeout(() => {
      setCurrentRoast((prev) => (prev + 1) % roasts.length);
      setIsSpinning(false);
    }, 500);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 p-3 sm:p-4 md:p-6 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg leading-tight">
            🌮 EL GRINGO DETECTOR 3000 🌮
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-bold px-2">
            ¡Bienvenidos a la roast session más épica!
          </p>
        </div>

        {/* Main Roast Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border-4 sm:border-8 border-yellow-400">
          <div className="text-center mb-4 sm:mb-6">
            <div className={`text-5xl sm:text-6xl md:text-8xl mb-3 sm:mb-4 ${isSpinning ? 'animate-spin' : ''}`}>
              🎯
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
              GRINGO ALERT! GRINGO ALERT!
            </h2>
          </div>

          <div className="bg-red-100 border-l-4 sm:border-l-8 border-red-500 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
              {roasts[currentRoast]}
            </p>
          </div>

          <button
            onClick={handleRoastClick}
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg sm:text-xl md:text-2xl font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-xl sm:rounded-2xl hover:from-red-600 hover:to-orange-600 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            ¡DAME OTRO ROAST! 🔥
          </button>
        </div>

        {/* Gringo Characteristics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
              🚨 CLASSIC GRINGO MOVES 🚨
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {gringoFacts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-yellow-100 p-2 sm:p-3 rounded-lg border-2 border-yellow-300"
                >
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">{fact}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
              📚 NO SABO GRINGO TRANSLATOR 📚
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-blue-100 p-3 sm:p-4 rounded-lg">
                <p className="font-bold text-gray-800 text-sm sm:text-base">What you say:</p>
                <p className="text-sm sm:text-base md:text-lg">"I love Mexican food!"</p>
                <p className="font-bold text-gray-800 mt-2 text-sm sm:text-base">What you mean:</p>
                <p className="text-sm sm:text-base md:text-lg">"I went to Chipotle once" 💀</p>
              </div>
              <div className="bg-green-100 p-3 sm:p-4 rounded-lg">
                <p className="font-bold text-gray-800 text-sm sm:text-base">What you say:</p>
                <p className="text-sm sm:text-base md:text-lg">"I'm basically fluent in Spanish"</p>
                <p className="font-bold text-gray-800 mt-2 text-sm sm:text-base">Your Spanish:</p>
                <p className="text-sm sm:text-base md:text-lg">"Hola, donde esta la biblioteca?" 📚</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
          <p className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
            Made with ❤️ and a lot of chanclazos
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Remember: This is all love, mi gente! We roast because we care 🫶
          </p>
          <div className="flex justify-center space-x-3 sm:space-x-4 mt-4">
            <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-brown-600" />
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
            <Music className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            <Laugh className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
          </div>
        </div>
      </div>
    </div>
  );
}