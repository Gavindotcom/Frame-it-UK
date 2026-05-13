export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        
        <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
          Frame It UK
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight">
          Bespoke Sports Memorabilia Framing
        </h1>

        <p className="text-gray-300 text-xl max-w-2xl mt-6">
          Preserve your shirts, signed memorabilia and sporting memories
          with handcrafted premium framing.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition">
            Get a Quote
          </button>

          <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
            View Gallery
          </button>
        </div>

      </section>

    </main>
  )
}
