export default function Header({
  backgroundImage,
  headerText,
  headerParagraph,
  className,
}) {
  return (
    <header
      className="relative h-[50vh] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/50 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1
            className={`font-allura text-6xl md:text-8xl bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-md py-1 px-2 ${className}`}
          >
            {headerText}
          </h1>
          <p className="mt-2 text-lg font-cormorant">{headerParagraph}</p>
        </div>
      </div>
    </header>
  );
}
