export default function Preloader() {
  return (
    <div className="w-full h-screen grid place-items-center preloader-fade-out">
      {/* Love shape container */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className="heart-container animate-pulse">
          <div className="heart-shape"></div>
        </div>
        <div className="absolute text-center">
          <p className="text-amber-400 text-4xl font-bold">F&C</p>
          <span className="text-amber-400 text-xs">forever connected</span>
        </div>
      </div>
    </div>
  );
}
