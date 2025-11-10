'use client';

export default function TicketCard({ ticket, isQueued, onAdd }) {
    return (
        <div className="border p-2 rounded">
            <div className="font-medium">{ticket.title}</div>
            <div className="text-sm">Priority: {ticket.priority}</div>
            <div className="text-sm">Status: {ticket.status}</div>
            <div className="text-sm">Assignee: {ticket.assignee}</div>
            <div className="text-xs text-gray-400 mb-2">Updated: {new Date(ticket.updatedAt).toLocaleString()}</div>
            {isQueued ? (
                <div className="text-xs text-gray-600">Already in Queue</div>
            ) : (
                <button className="border px-2 py-1 rounded" onClick={onAdd}>Add to Queue</button>
            )}
        </div>
    );
}