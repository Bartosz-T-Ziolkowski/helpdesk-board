'use client';
import { useEffect, useState } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

export default function Board() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [status, setStatus] = useState('All');
    const [priority, setPriority] = useState('All');
    const [search, setSearch] = useState('');
    const [queue, setQueue] = useState({});

    useEffect(() => {
        fetch('/api/tickets', { cache: 'no-store' })
        .then(r => r.ok ? r.json() : PromiseRejectionEvent.reject())
        .then(data => { setTickets(data); setLoading(false); })
        .catch(() => { setError('Unable to load tickets.'); setLoading(false); })
    }, []);

    useEffect(() => {
        if(!tickets.length) return;
        const id = setInterval(() => {
            setTickets(prev => {
                const i = Math.floor(Math.random() * prev.length);
                const t = { ...prev[i], updatedAt: new Date().toISOString() };

                const nextStatus = ['Open','In Progress','On Hold','Resolved'];
                const nextPriority = ['Low','Medium','High','Critical'];
                if (Math.random() < 0.5) {
                    let s = nextStatus.indexOf(t.status);
                    t.status = nextStatus[Math.min(s + 1, nextStatus.length - 1)];
                } else {
                    let p = nextPriority.indexOf(t.priority);
                    t.priority = nextPriority[Math.min(p + 1, nextPriority.length - 1)];
                }

                return prev.map((x, idx) => idx === i ? t : x);
            });
        }, 7000);
        return () => clearInterval(id);
    }, [tickets.length]);

    const visible = tickets.filter(t => {
        const okS = status === 'All' || t.status === status;
        const okP = priority === 'All' || t.priority === priority;
        const q = search.toLowerCase();
        const okQ = !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
        return okS && okP && okQ;
    });

    function addToQueue(id) { setQueue(q => q[id] ? q : { ...q, [id]: true }); }
    function removeFromQueue(id) { setQueue(q => { const n = { ...q }; delete n[id]; return n; }); }
    function clearQueue() { setQueue({}); }

    return (
        <div className="space-y-4">
            <div className="flex gap-2 flex-wrap items-end">
                <StatusFilter value={status} onChange={setStatus} />
                <PriorityFilter value={priority} onChange={setPriority} />
                <SearchBox value={search} onChange={setSearch} />
                <MyQueueSummary
                    ids={Object.keys(queue)}
                    tickets={tickets}
                    onRemove={removeFromQueue}
                    onClear={clearQueue}
                />
            </div>

            <StatusMessage
                loading={loading}
                error={error}
                isEmpty={!loading && !error && visible.length === 0}
            />

            {!loading && !error && visible.length > 0 && (
                <TicketList tickets={visible} queued={queue} onAdd={addToQueue} />
            )}
        </div>
    );
}