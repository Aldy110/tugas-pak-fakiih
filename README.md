# tugas-pak-fakih

Portofolio website (Next.js) — hasil gabungan struktur repo `tugas-pak-fakiih`
dengan logic & style dari `web/gang`.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (animasi)

## Struktur

```
app/
  layout.tsx                    # Navbar + font Geist + wrapper container
  page.tsx                      # Landing / hero
  profil/page.jsx               # Daftar tim (Profile)
  portofolio/page.tsx           # Daftar portofolio per anggota
  portofolio/[nama]/page.jsx    # Detail portofolio per anggota (dynamic route)
components/
  Navbar.jsx
  ProfileCard.jsx
  PortofolioCard.jsx
```

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Catatan penggabungan

Saat digabung, beberapa bug kecil di proyek asli (`web/gang`) diperbaiki supaya
navigasi benar-benar berfungsi:

1. Link di `Navbar` sebelumnya menunjuk ke `/profile` & `/portfolio` (Inggris),
   padahal folder halamannya `/profil` & `/portofolio` (Indonesia) -> disamakan.
2. Folder dynamic route sebelumnya bernama `nama` (tanpa kurung siku), sehingga
   tidak berfungsi sebagai dynamic segment -> diubah jadi `[nama]`, dan
   pengambilan parameter di kode ikut disesuaikan (`params.nama`).
3. Import komponen kartu portofolio sebelumnya salah nama file
   (`@/components/PortfolioCard` vs file aslinya `PortofolioCard.jsx`) -> disamakan.
