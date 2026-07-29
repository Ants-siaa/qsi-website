export default function QSILogo() {
  return (
    <div className="flex items-center gap-3">

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-700
          to-emerald-500
          text-white
          font-bold
          shadow-lg
        "
      >
        Q
      </div>

      <div className="leading-tight">

        <div className="text-2xl font-bold tracking-tight text-blue-900">
          QSi
        </div>

        <div className="text-xs text-gray-500">
          Sovereign Semiconductor
        </div>

      </div>

    </div>
  );
}