import { Navigate } from 'react-router-dom'

/** Journal lives under Profile — keep route as redirect for bookmarks */
export function JournalPage() {
  return <Navigate to="/profile" replace />
}
