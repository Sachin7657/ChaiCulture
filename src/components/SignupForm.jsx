import { useState } from 'react';

export default function SignupForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Thank you! We\'ll notify you when we launch.');
    setEmail('');
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full py-4 px-6 bg-[#eee5d9] text-[#3b2f2f] placeholder-[#6b5e5e] rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-[#c9a24d]"
      />
      
      {/* CTA Button */}
      <button
        onClick={handleSubmit}
        className="w-full py-4 bg-[#c9a24d] hover:bg-[#a8832f] text-white font-semibold tracking-wide rounded-full shadow-lg transition-all duration-300"
      >
        Notify Me
      </button>
    </div>
  );
}
