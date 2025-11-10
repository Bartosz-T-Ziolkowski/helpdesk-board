'use client';

export default function MyQueueSummary({ ids, tickets, onRemove, onClear }) {
    const items = ids.map(id => tickets.find(t => t.id === id)).filter(Boolean);
    return (
        <div className="border p-2 rounded flex-1 min-w-[240px]">
            <div className="font-medium mb-2">Queue ({items.length})</div>
            {items.length === 0 ? (
                <div className="text-sm text-gray-400">No tickets selected.</div>
            ) : (
                <ul className="text-sm space-y-1 mb-2">
                    {items.map(t => (
                        <li key={t.id} className="flex justify-between">
                            <span>{t.title}</span>
                            <button className="border px-2 rounded" onClick={() => onRemove(t.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button className="border px-2 py-1 rounded" onClick={onClear} disabled={!items.length}>
                Clear Queue
            </button>
        </div>
    );
}