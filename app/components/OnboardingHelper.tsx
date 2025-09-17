'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Optional first-visit helper - OFF by default
// To enable: set NEXT_PUBLIC_ONBOARDING_AUTO_REDIRECT=true
export default function OnboardingHelper() {
  const router = useRouter();
  
  useEffect(() => {
    // Only run if explicitly enabled via environment variable
    if (process.env.NEXT_PUBLIC_ONBOARDING_AUTO_REDIRECT !== 'true') {
      return;
    }

    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('onboarding_completed') === 'true';
    
    // Only redirect if onboarding not completed
    if (!hasCompletedOnboarding) {
      // Get current path to avoid redirecting from onboarding pages
      const currentPath = window.location.pathname;
      if (!currentPath.includes('/onboarding') && !currentPath.includes('/welcome')) {
        // Redirect to onboarding only from homepage
        if (currentPath === '/' || currentPath === '/ar') {
          const isArabic = currentPath === '/ar';
          router.push(isArabic ? '/ar/onboarding' : '/onboarding');
        }
      }
    }
  }, [router]);

  // This component doesn't render anything
  return null;
}
