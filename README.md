# Helpdesk-Board

In order to run the application, copy and paste the documents into a new directory on your device. Then, run the following commands.
1. npm install
2. npm run dev

Then, open http://localhost:3000 on your web browser.

Rubric checklist:

* Project Setup & Structure	| Next.js config and folders; app runs; README present
* Components + JSX + Keys | Separate components, proper JSX, stable keys by id
* Props + Lifting State	| Board holds lifted state; children receive props and callbacks
* State + Controlled Inputs	| useState used; filters & search are controlled; immutable updates
* Effects + Cleanup	| Fetch on mount; interval live updates with proper cleanup
* UX + Conditional Rendering | Loading, error, empty states; disabled buttons where appropriate

The board has the following features:
* Browse tickets loaded from an API
* Filter by status and priority (controlled inputs)
* Search by keyword (title/description)
* Add tickets to My Queue (analogous to a cart)
* See live updates to ticket status/priority (simulated)
* View loading, error, and empty states
