import NoteContent from '@/components/NoteContent'
import { http } from '@/lib/fetch'

export default async function Page() {
  const { items } = await http('GET')
  return (
    <main className="max-w-2xl mx-auto my-8">
      <NoteContent notes={items} />
    </main>
  )
}
