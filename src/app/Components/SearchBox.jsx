'use client';

export default function SearchBox({ value, onChange }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="search" className="text-sm">Search</label>
            <input
                id="search"
                className="border p-2 rounded min-w-[160px]"
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="title or description"
            />
        </div>
    );
}