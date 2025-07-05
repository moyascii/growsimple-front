// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/dashboard/Dashboard';
import ProjectsPage from './pages/projects/Projects';
import NewProjectPage from './pages/projects/NewProject';
import ResearchPage from './pages/research/Research';
import PlanPage from './pages/plan/Plan';
import CampaignsPage from './pages/campaigns/Campaigns';
import ProductionPage from './pages/production/Production';
import AnalyticsPage from './pages/analytics/Analytics';
import IntegrationsPage from './pages/integrations/Integrations';
import TeamsPage from './pages/teams/Teams';
import TemplatesPage from './pages/templates/Templates';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/new" element={<NewProjectPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/production" element={<ProductionPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
