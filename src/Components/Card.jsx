export default function Card() {
  return (
    <div className="flex flex-col gap-2 p-4 h-80 w-56 border-2 border-violet-600 shadow-2xl shadow-violet-600/50 rounded-2xl">
      <img
        className="rounded-xl"
        src="https://wallpapercat.com/w/full/4/6/1/1165730-3840x2160-desktop-4k-landscape-background.jpg"
      />
      <h3 className="text-white font-['Inter'] text-xl font-semibold">
        Nom carte
      </h3>
    </div>
  );
}
