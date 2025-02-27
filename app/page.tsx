export default function Home() {
  return (
    <main className="group relative h-dvh overflow-hidden bg-zinc-900">
      <div className="mx-auto -mt-10 size-20 rounded-full bg-zinc-700 shadow-2xl transition duration-500 group-has-[:checked]:bg-yellow-500 group-has-[:checked]:shadow-yellow-500" />

      <label className="shdaow-sm bottom-8 mx-auto mt-40 block h-16 w-8 cursor-pointer rounded-sm border border-zinc-800 bg-zinc-800 p-0.5 shadow-inner shadow-black/80">
        <input type="checkbox" aria-label="電気スイッチ" className="peer sr-only" />
        <span className="block h-1/2 rounded-sm bg-zinc-600 shadow-[inset_0_1px_theme(colors.white/0.2)] transition duration-300 peer-checked:translate-y-full" />
      </label>
    </main>
  );
}
