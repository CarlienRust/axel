import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material'
import type { ReactElement } from 'react'
import { useLocation, useNavigate, Routes, Route, Navigate } from 'react-router-dom'
import { AppBackground } from '../components/brand/AppBackground'
import { renderFeatureIcon } from '../components/brand/featureIcons'
import { COPY } from '../constants/copy'
import { DumpPage } from '../features/dump/DumpPage'
import { EntryPage } from '../features/entry/EntryPage'
import { LandingToolPage } from '../features/landing/LandingToolPage'
import { LandingToolsHubPage } from '../features/landing/LandingToolsHubPage'
import { JournalPage } from '../features/journal/JournalPage'
import { LibraryPage } from '../features/library/LibraryPage'
import { OneThingPage } from '../features/onething/OneThingPage'
import { PrepHubPage } from '../features/prep/PrepHubPage'
import { PrepSectionPage } from '../features/prep/PrepSectionPage'
import { ProfilePage } from '../features/profile/ProfilePage'
import { ReframePage } from '../features/reframe/ReframePage'
import { ReturnPage } from '../features/return/ReturnPage'
import { ToolsHubPage } from '../features/tools/ToolsHubPage'

type NavItem = {
  label: string
  icon: ReactElement
  path: string
}

const navItems: NavItem[] = [
  { label: COPY.navHome, icon: renderFeatureIcon('home'), path: '/' },
  { label: COPY.navTools, icon: <ForumOutlinedIcon />, path: '/tools' },
  { label: COPY.navLibrary, icon: renderFeatureIcon('library'), path: '/library' },
  { label: COPY.navProfile, icon: renderFeatureIcon('profile'), path: '/profile' },
]

function navIndex(pathname: string): number {
  if (pathname === '/' || pathname === '/dump') return 0
  if (
    pathname === '/tools' ||
    pathname.startsWith('/landing-tools') ||
    pathname.startsWith('/prep') ||
    pathname === '/reframe'
  ) {
    return 1
  }
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
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <AppBackground />
      <Box sx={{ flex: 1, pb: 8, position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/dump" element={<DumpPage />} />
          <Route path="/response/:dumpId" element={<OneThingPage />} />
          <Route path="/return/:dumpId" element={<ReturnPage />} />
          <Route path="/tools" element={<ToolsHubPage />} />
          <Route path="/reframe" element={<ReframePage />} />
          <Route path="/landing-tools" element={<LandingToolsHubPage />} />
          <Route path="/landing-tools/:toolId" element={<LandingToolPage />} />
          <Route path="/ground" element={<Navigate to="/landing-tools" replace />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/prep" element={<PrepHubPage />} />
          <Route path="/prep/:sectionId" element={<PrepSectionPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>

      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
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
