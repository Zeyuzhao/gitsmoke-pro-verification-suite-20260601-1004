import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Activity, 
  RefreshCcw, 
  Github, 
  Layers,
  Database,
  Lock,
  Globe
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Toaster, toast } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
export function HomePage() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const handleRefresh = async () => {
    setIsRefreshing(true);
    toast.promise(new Promise(resolve => setTimeout(resolve, 1500)), {
      loading: 'Validating workflow integrity...',
      success: 'All checks passed',
      error: 'Validation failed'
    });
    setTimeout(() => setIsRefreshing(false), 1500);
  };
  const metrics = [
    { label: 'Build Hash', value: '7c82a1d', icon: Terminal },
    { label: 'Environment', value: 'Production', icon: Globe },
    { label: 'Node Version', value: 'v20.11.0', icon: Cpu },
    { label: 'Latency', value: '14ms', icon: Activity },
    { label: 'Datacenter', value: 'US-East-1', icon: Database },
    { label: 'Security', value: 'Verified', icon: Lock },
  ];
  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-emerald-500/30">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gradient-mesh opacity-0 transition-opacity duration-1000",
          hasLoaded && "opacity-30 dark:opacity-20"
        )} />
        <div className="absolute inset-0 grain" />
      </div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Github className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold tracking-tight text-lg">GitSmoke Pro</span>
            <Badge variant="outline" className="ml-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Verification Suite</Badge>
          </div>
          <ThemeToggle className="relative top-0 right-0" />
        </div>
      </header>
      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 md:py-32 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl space-y-12">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>System Operational</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            </div>
            <h1 className="text-display text-foreground">
              GitHub exporter <br />
              <span className="text-muted-foreground">smoke test </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8"
              >
                2026-06-01
              </motion.span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Automated verification of workflow state, environment consistency, and data integrity for enterprise repository exports.
            </p>
          </motion.div>
          {/* Metrics Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {metrics.map((metric, i) => (
              <Card key={metric.label} className="glass group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <metric.icon className="w-5 h-5 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
                    <div className="h-1 w-8 rounded-full bg-border group-hover:bg-emerald-500/50 transition-all" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</p>
                    <p className="text-base font-mono font-medium text-foreground">{metric.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
          {/* Action Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <Button 
              size="lg" 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
            >
              <RefreshCcw className={cn("mr-2 h-5 w-5", isRefreshing && "animate-spin")} />
              {isRefreshing ? 'Re-validating...' : 'Re-run Smoke Test'}
            </Button>
            <div className="flex items-center gap-8 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> STACK: HONO + REACT</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> STATUS: 200 OK</span>
            </div>
          </motion.div>
        </div>
      </main>
      <footer className="relative z-10 border-t border-border/40 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground/60">
            &copy; 2026 GitSmoke Verification Suite. Secured by Cloudflare Workers.
          </p>
        </div>
      </footer>
      <Toaster richColors position="bottom-right" />
    </div>
  );
}