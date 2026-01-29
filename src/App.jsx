import logo from './assets/logo.png'
import Hero from './components/Hero'
import LaunchBadge from './components/LaunchBadge'
import SignupForm from './components/SignupForm'
import SocialIcons from './components/SocialIcons'

function App() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] flex flex-col items-center justify-center text-center px-4">
      {/* Logo Section */}
      <img 
        src={logo} 
        alt="Chai Culture Logo" 
        className="w-[72px] sm:w-24 mb-8 drop-shadow-md"
      />
      
      {/* Hero Text */}
      <Hero />
      
      {/* Launch Badge */}
      <LaunchBadge />
      
      {/* Email Signup */}
      <SignupForm />
      
      {/* Social Icons */}
      <SocialIcons />
    </div>
  )
}

export default App
