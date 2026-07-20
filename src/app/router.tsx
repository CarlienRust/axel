import { Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'
import { DumpPage } from '../features/dump/DumpPage'
import { OneThingPage } from '../features/onething/OneThingPage'
import { LandingPage } from '../features/landing/LandingPage'
import { PrepPage } from '../features/prep/PrepPage'

const navItems = [
  { label: 'Dump', path: '/' },
  { label: 'Landing', path: '/landing' },
  { label: 'Prep', path: '/prep' },
]

function AppLayout() {
  const location = useLocation()
  const navigate = useNavigate()

  const showNav = !location.pathname.startsWith('/response/')
  const navValue = navItems.findIndex((item) => item.path === location.pathname)

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1, pb: showNav ? 8 : 0 }}>
        <Routes>
          <Route path="/" element={<DumpPage />} />
          <Route path="/response/:dumpId" element={<OneThingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/prep" element={<PrepPage />} />
        </Routes>
      </Box>

      {showNav && (
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderTop: 1, borderColor: 'divider' }}
          elevation={0}
        >
          <BottomNavigation
            value={navValue >= 0 ? navValue : false}
            onChange={(_, newValue) => navigate(navItems[newValue].path)}
            showLabels
          >
            {navItems.map((item) => (
              <BottomNavigationAction key={item.path} label={item.label} />
            ))}
          </BottomNavigation>
        </Paper>
      )}
    </Box>
  )
}

export function AppRouter() {
  return <AppLayout />
}
