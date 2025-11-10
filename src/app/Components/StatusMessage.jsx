'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
    if (loading) return <div className="text-sm">Loading</div>;
    if (error) return <div className="text-sm text-red-400">{error}</div>;
    if (isEmpty) return <div className="text-sm">No matching tickets.</div>;
    return null;
}