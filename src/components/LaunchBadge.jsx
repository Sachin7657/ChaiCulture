export default function LaunchBadge() {
  return (
    <div className="relative flex justify-center items-center mt-10">
      <div className="absolute w-[220%] h-16 top-1/2 -translate-y-1/2 z-0 bg-gradient-to-r from-[#e7c56e] to-[#b28b34] shadow-lg">
        <div className="absolute left-0 w-12 h-12 bg-[#f6f1ea] -translate-x-1/2 rotate-45 top-2"></div>

        <div className="absolute right-0 w-12 h-12 bg-[#f6f1ea] translate-x-1/2 rotate-45 top-2"></div>
      </div>

      <div className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-b from-[#f3d37a] via-[#e0b85c] to-[#a8832f] shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-300">
        <div className="w-[85%] h-[85%] rounded-full border-[3px] border-[#f7e3a3] flex items-center justify-center">
          <span className="text-[#4b2f0f] font-semibold tracking-widest uppercase text-lg sm:text-xl text-center leading-tight">
            LAUNCHING
            <br />
            SOON
          </span>
        </div>
      </div>
    </div>
  );
}
