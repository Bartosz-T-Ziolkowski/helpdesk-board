import Board from './Components/Board';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold mb-4">Helpdesk Ticket Board</h1>
      <Board />
    </main>
  )
}