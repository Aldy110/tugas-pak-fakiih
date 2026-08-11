export default async function DetailBlog({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  const artikel = await response.json()

  if (!artikel.id) {
    return (
      <main className="min-h-screen px-6 py-12">
        <h1 className="text-2xl font-bold">
          Artikel tidak ditemukan
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm border">

        <p className="text-sm text-orange-500 mb-3">
          Artikel #{artikel.id}
        </p>

        <h1 className="text-3xl font-bold capitalize mb-6">
          {artikel.title}
        </h1>

        <p className="text-gray-600 leading-7">
          {artikel.body}
        </p>

      </article>
    </main>
  )
}