export async function GET() {
const tickets = [
    { id:'t-1001', title:'Cannot connect to VPN', description:'Intermittent VPN errors.', priority:'High', status:'Open', assignee:'Unassigned', updatedAt:'2025-10-31T14:05:00Z' },
    { id:'t-1002', title:'Computer overheating', description:'Crashes and restarts under heavy load.', priority:'Medium', status:'In Progress', assignee:'Jim', updatedAt:'2025-10-31T16:06:00Z' },
    { id:'t-1003', title:'Computer doesnt turn on', description:'User cannot power on device.', priority:'High', status:'In Progress', assignee:'Open', updatedAt:'2025-10-31T16:07:00Z' },
    { id:'t-1004', title:'Cannot connect to wifi', description:'Wifi wont connect to users device.', priority:'High', status:'Open', assignee:'Unassigned', updatedAt:'2025-10-31T16:10:00Z' },
    { id:'t-1005', title:'Slow performance', description:'Users device runs slower than normal.', priority:'Low', status:'Open', assignee:'Unassigned', updatedAt:'2025-11-01T08:15:00Z' },
    { id:'t-1006', title:'Pinter not turning on', description:'The printer for the building wont turn on.', priority:'Medium', status:'In Progress', assignee:'Pam', updatedAt:'2025-11-02T10:20:00Z' },
    { id:'t-1007', title:'Cannot access Microsoft Office', description:'User cannot access Microsoft Office Services.', priority:'Medium', status:'Resolved', assignee:'Jim', updatedAt:'2025-11-02T16:10:00Z' },
    { id:'t-1008', title:'Cannot login to company portal', description:'User login information cannot sign into company portal.', priority:'High', status:'In Progress', assignee:'Pam', updatedAt:'2025-11-03T16:30:00Z' },
    { id:'t-1009', title:'No sound', description:'User laptop does not produce sound.', priority:'Low', status:'Open', assignee:'Unassigned', updatedAt:'2025-11-03T17:45:00Z' },
    { id:'t-1010', title:'Computer Frozen', description:'User cannot move their mouse or access apps.', priority:'High', status:'In Progress', assignee:'Pam', updatedAt:'2025-11-04T10:15:00Z' },
    { id:'t-1011', title:'Keyboard wont work', description:'User cannot type, but the keyboard is on.', priority:'Medium', status:'Open', assignee:'Unassigned', updatedAt:'2025-11-05T16:10:00Z' },
    { id:'t-1012', title:'Mouse wont work', description:'User computer is not frozen, but the mouse wont move.', priority:'Medium', status:'In Progress', assignee:'Jim', updatedAt:'2025-11-10T08:10:00Z' },
];
return Response.json(tickets);
}