'usse client';

const OPTIONS = ['All','Low','Medium','High','Critical'];

export default function PriorityFilter({ value, onChange }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="priority" className="text-sm">Priority</label>
            <select id="priority" value={value} onChange={e => onChange(e.target.value)} className="border p-2 rounded min-w-[140px]">
                {OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
        </div>
    );
}