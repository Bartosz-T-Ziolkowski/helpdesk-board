'use client';

import TicketCard from "./TicketCard";

export default function TicketList({ tickets, queued, onAdd }) {
    return (
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
            {tickets.map(t => (
                <TicketCard
                key={t.id}
                ticket={t}
                isQueued={!!queued[t.id]}
                onAdd={() => onAdd(t.id)}
            />
            ))}
        </div>
    );
}