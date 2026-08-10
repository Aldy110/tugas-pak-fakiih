export default function Kontak() {
  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Hubungi Kami
          </h1>

          <p className="text-gray-600 mt-3">
            Punya pertanyaan atau ingin bekerja sama?
            Silakan hubungi kami.
          </p>
        </section>

        {/* Contact Card */}
        <section className="bg-white rounded-2xl shadow-sm border p-8">
          <form className="space-y-6">

            {/* Nama */}
            <div>
              <label className="block font-medium mb-2">
                Nama
              </label>

              <input
                type="text"
                placeholder="Masukkan nama kamu"
                className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="nama@email.com"
                className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Pesan */}
            <div>
              <label className="block font-medium mb-2">
                Pesan
              </label>

              <textarea
                rows={5}
                placeholder="Tulis pesan kamu..."
                className="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition"
            >
              Kirim Pesan
            </button>

          </form>
        </section>

      </div>
    </main>
  );
}