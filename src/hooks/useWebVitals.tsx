import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
}

const useWebVitals = () => {
  useEffect(() => {
    // Function to send analytics
    const sendToAnalytics = (metric: WebVitalsMetric) => {
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
    };

    // Import and use web-vitals library if available
    const measureWebVitals = async () => {
      try {
        // Simulated web vitals measurement (replace with actual web-vitals library)
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            // Simulate web vitals metrics
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              
              // First Contentful Paint (FCP)
              if (navEntry.loadEventEnd) {
                sendToAnalytics({
                  name: 'FCP',
                  value: navEntry.loadEventEnd - navEntry.loadEventStart,
                  id: 'fcp-' + Date.now(),
                  delta: 0
                });
              }
            }
          });
        });

        // Observe navigation timing
        if ('PerformanceObserver' in window) {
          observer.observe({ entryTypes: ['navigation'] });
        }

        // Cleanup
        return () => {
          observer.disconnect();
        };
      } catch (error) {
        console.warn('Web Vitals measurement failed:', error);
      }
    };

    measureWebVitals();
  }, []);
};

export default useWebVitals;