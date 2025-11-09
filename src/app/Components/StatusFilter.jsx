'use client';

const OPTIONS = ['All','Open','In Progress','On Hold','Resolved'];

export default function StatusFilter({ value, onChange }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="status" className="text-sm">Status</label>
            <select id="status" value={value} onchange={e => onChange(e.target.value)} className="border p-2 rounded min-w-[140px]">
                {OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
        </div>
    );
}