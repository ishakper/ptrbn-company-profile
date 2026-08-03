import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { PublicLayout } from '@/layouts/PublicLayout'
import { PageLoader } from '@/components/common/PageLoader'

// Lazy-loaded pages
const HomePage      = lazy(() => import('@/features/home'))
const AboutPage     = lazy(() => import('@/features/about'))
const ServicesPage  = lazy(() => import('@/features/services'))
const FleetPage     = lazy(() => import('@/features/fleet'))
const RoutesPage    = lazy(() => import('@/features/routes'))
const ProjectsPage  = lazy(() => import('@/features/projects'))
const GalleryPage   = lazy(() => import('@/features/gallery'))
const NewsPage      = lazy(() => import('@/features/news'))
const CareerPage    = lazy(() => import('@/features/career'))
const ContactPage   = lazy(() => import('@/features/contact'))
const NotFoundPage  = lazy(() => import('@/features/error/NotFound'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true,         element: <HomePage /> },
      { path: 'about',       element: <AboutPage /> },
      { path: 'services',    element: <ServicesPage /> },
      { path: 'fleet',       element: <FleetPage /> },
      { path: 'routes',      element: <RoutesPage /> },
      { path: 'projects',    element: <ProjectsPage /> },
      { path: 'gallery',     element: <GalleryPage /> },
      { path: 'news',        element: <NewsPage /> },
      { path: 'career',      element: <CareerPage /> },
      { path: 'contact',     element: <ContactPage /> },
      { path: '*',           element: <NotFoundPage /> },
    ],
  },
])

export { PageLoader as RouterFallback }
