import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  DashboardPage,
  ProjectsPage,
  NewProjectPage,
  ResearchPage,
  PlanPage,
  CampaignsPage,
  ProductionPage,
  AnalyticsPage,
  IntegrationsPage,
  TeamsPage,
  TemplatesPage,
} from '@pages';

const GSAppRouter: React.FC = () => {
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
};

export default GSAppRouter; 