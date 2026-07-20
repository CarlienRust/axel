import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined'
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material'
import type { ReactElement } from 'react'
import { useLocation, useNavigate, Routes, Route, Navigate } from 'react-router-dom'
import { COPY } from '../constants/copy'
import { DumpPage } from '../features/dump/DumpPage'
import { EntryPage } from '../features/entry/EntryPage'
import { GroundPage } from '../features/landing/GroundPage'
import { JournalPage } from '../features/journal/JournalPage'
import { LibraryPage } from '../features/library/LibraryPage'
import { OneThingPage } from '../features/onething/OneThingPage'
import { PrepPage } from '../features/prep/PrepPage'
import { ProfilePage } from '../features/profile/ProfilePage'
import { ReturnPage } from '../features/return/ReturnPage'
import { ToolsHubPage } from '../features/tools/ToolsHubPage'

type NavItem = {
  label: string
  icon: ReactElement
  path: string
}

const navItems: NavItem[] = [
  { label: COPY.navHome, icon: <HomeOutlinedIcon />, path: '/' },
  { label: COPY.navTools, icon: <SpaOutlinedIcon />, path: '/tools' },
  { label: COPY.navLibrary, icon: <MenuBookOutlinedIcon />, path: '/library' },
  { label: COPY.navProfile, icon: <PersonOutlineIcon />, path: '/profile' },
]

function navIndex(pathname: string): number {
  if (pathname === '/' || pathname === '/dump') return 0
  if (pathname === '/tools' || pathname === '/ground' || pathname === '/prep') return 1
  if (pathname === '/library' || pathname.startsWith('/response/') || pathname.startsWith('/return/')) {
    return 2
  }
  if (pathname === '/profile' || pathname === '/journal') return 3
  return -1
}

function AppLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const currentIndex = navIndex(location.pathname)

  function handleNavChange(_: unknown, index: number) {
    navigate(navItems[index]!.path)
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Box sx={{ flex: 1, pb: 8 }}>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/dump" element={<DumpPage />} />
          <Route path="/response/:dumpId" element={<OneThingPage />} />
          <Route path="/return/:dumpId" element={<ReturnPage />} />
          <Route path="/tools" element={<ToolsHubPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/ground" element={<GroundPage />} />
          <Route path="/prep" element={<PrepPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>

      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'background.paper',
          borderTop: 1,
          borderColor: 'divider',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        elevation={0}
      >
        <BottomNavigation
          value={currentIndex >= 0 ? currentIndex : false}
          onChange={handleNavChange}
          showLabels
        >
          {navItems.map((item) => (
            <BottomNavigationAction key={item.label} label={item.label} icon={item.icon} />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export function AppRouter() {
  return <AppLayout />
}
