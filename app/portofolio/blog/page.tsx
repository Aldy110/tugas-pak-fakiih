import Link from 'next/link'

export default async function HalamanBlog() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  const daftarArtikel = await response.json()

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">
          Kumpulan Artikel Blog
        </h1>

        <p className="text-gray-600 mb-8">
          Data artikel diambil langsung dari JSONPlaceholder.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
{daftarArtikel.map((artikel: any) => (
  <div
    key={artikel.id}
    className="bg-white rounded-2xl p-6 border shadow-sm"
  >
    <Link href={`/portofolio/blog/${artikel.id}`}>
      <h2 className="text-xl font-bold capitalize mb-3 text-blue-600 hover:underline">
        {artikel.title}
      </h2>
    </Link>

    <p className="text-gray-600">
      {artikel.body}
    </p>
  </div>
))}
        </div>

      </div>
    </main>
  )
}