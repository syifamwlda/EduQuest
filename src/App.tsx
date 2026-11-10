import React, { useState } from 'react';
import { EduQuestProvider, useEduQuest } from './context/EduQuestContext';
import { Sidebar } from './components/Sidebar';
import { TopNavbar } from './components/TopNavbar';
import { ToastContainer } from './components/ToastContainer';
import { LevelUpModal } from './components/LevelUpModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';

// Views
import { DashboardView } from './views/DashboardView';
import { ExploreSubjectsView } from './views/ExploreSubjectsView';
import { LearningCenterView } from './views/LearningCenterView';
import { MaterialDetailView } from './views/MaterialDetailView';
import { InteractiveGamesView } from './views/InteractiveGamesView';
import { DailyQuestView } from './views/DailyQuestView';
import { LeaderboardView } from './views/LeaderboardView';
import { AchievementCenterView } from './views/AchievementCenterView';
import { CommunityView } from './views/CommunityView';
import { ProfileView } from './views/ProfileView';
import { AdminDashboardView } from './views/AdminDashboardView';

const AppLayout: React.FC = () => {
  const { activeTab } = useEduQuest();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Render the current view
  const renderCurrentView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'explore-subjects':
        return <ExploreSubjectsView />;
      case 'learning-center':
        return <LearningCenterView />;
      case 'material-detail':
        return <MaterialDetailView />;
      case 'interactive-games':
        return <InteractiveGamesView />;
      case 'daily-quest':
        return <DailyQuestView />;
      case 'leaderboard':
        return <LeaderboardView />;
      case 'achievements':
        return <AchievementCenterView />;
      case 'community':
        return <CommunityView />;
      case 'profile':
        return <ProfileView />;
      case 'admin':
        return <AdminDashboardView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FF] text-[#253453] font-sans antialiased flex flex-col">
      {/* Sidebar (Desktop & Mobile) */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'
        }`}
      >
        {/* Top Navigation */}
        <TopNavbar
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Page Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderCurrentView()}
        </main>
      </div>

      {/* Overlays, Toasts and Modals */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <LevelUpModal />
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <EduQuestProvider>
      <AppLayout />
    </EduQuestProvider>
  );
}

export default App;

