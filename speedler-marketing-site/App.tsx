
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Map, 
  Settings, 
  BarChart3, 
  Smartphone, 
  EyeOff, 
  CloudOff, 
  Download,
  Gauge,
  History,
  Layout,
  Moon,
  Ruler,
  Share2
} from 'lucide-react';

const APP_STORE_URL = "https://apps.apple.com/au/app/speedler-cycling-computer/id1453127381";

// Helper components defined outside to avoid re-renders
const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-black text-black text-2xl italic tracking-tighter">
          S<span className="w-2.5 h-2.5 rounded-full bg-cyan-dot mb-[-12px] ml-0.5"></span>
        </div>
        <span className="text-xl font-bold tracking-tight">Speedler</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
        <a href="#metrics" className="hover:text-white transition-colors">Metrics</a>
      </div>
      <a 
        href={APP_STORE_URL}
        className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-cyan-400 transition-all duration-300"
      >
        Download
      </a>
    </div>
  </nav>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/60 leading-relaxed">{description}</p>
  </div>
);

const MetricBox: React.FC<{ label: string; value: string; unit: string }> = ({ label, value, unit }) => (
  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{label}</p>
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-black text-cyan-400 tracking-tighter">{value}</span>
      <span className="text-xs font-medium text-white/60 uppercase">{unit}</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-cyan-400 selection:text-black">
      <Nav />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Abstract Background Blur */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-cyan-400/20 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-dot animate-pulse"></span>
              The Privacy-First Cycling Computer
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              RIDE FAST. <br />
              <span className="text-white/20 italic">KEEP YOUR DATA.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Speedler is a high-performance cycling dashboard built for riders who value privacy. Real-time metrics, beautiful ride history, and 100% local storage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={APP_STORE_URL}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all active:scale-95 group"
              >
                <Download size={24} className="group-hover:translate-y-0.5 transition-transform" />
                Download for iOS
              </a>
              <div className="text-white/40 text-sm font-medium">
                No accounts. No ads. Just speed.
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Phone Mockup Placeholder */}
            <div className="relative mx-auto w-64 md:w-80 aspect-[9/19] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-2xl p-4 overflow-hidden">
              {/* Screen Content Simulation */}
              <div className="h-full w-full bg-black rounded-[2rem] flex flex-col p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-cyan-400 font-black italic">S.</div>
                  <Settings size={18} className="text-white/40" />
                </div>
                
                <div className="text-center py-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">Current Speed</div>
                  <div className="text-6xl font-black italic text-cyan-400 tracking-tighter">32.4</div>
                  <div className="text-xs font-bold text-white/40">KM/H</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <MetricBox label="Distance" value="12.4" unit="km" />
                  <MetricBox label="Time" value="42:15" unit="" />
                  <MetricBox label="Avg Speed" value="28.1" unit="km/h" />
                  <MetricBox label="Max Speed" value="48.5" unit="km/h" />
                </div>

                <div className="flex-grow flex items-end justify-center">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-sm"></div>
                   </div>
                </div>
              </div>
            </div>
            {/* Floating UI Elements */}
            <div className="absolute top-1/4 -right-8 bg-white text-black p-4 rounded-xl font-bold text-sm shadow-xl hidden md:block">
              100% Private
            </div>
            <div className="absolute bottom-1/4 -left-8 bg-cyan-dot text-black p-4 rounded-xl font-bold text-sm shadow-xl hidden md:block">
              Real-time Metrics
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Message Section */}
      <section id="privacy" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                Your data stays <br />
                <span className="text-cyan-500">where it belongs.</span>
              </h2>
              <p className="text-xl text-black/60 leading-relaxed mb-12">
                Most cycling apps track your location, your routines, and your identity to sell to advertisers. Speedler does the opposite.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                    <CloudOff size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">100% Local Storage</h4>
                    <p className="text-black/60">Every ride, map, and metric is stored directly on your iPhone. We never see it.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                    <EyeOff size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">No Tracking, No Ads</h4>
                    <p className="text-black/60">We don't have accounts. We don't have cookies. We don't have tracking scripts.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Personal iCloud Sync</h4>
                    <p className="text-black/60">Optional sync uses your personal private iCloud space. Encrypted and accessible only by you.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-zinc-100 rounded-[4rem] flex items-center justify-center p-12">
                 <div className="relative w-full h-full border-4 border-dashed border-black/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-xl shadow-lg">
                      <Smartphone className="text-cyan-500" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-4 bg-white rounded-xl shadow-lg">
                      <ShieldCheck className="text-cyan-500" />
                    </div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl font-black italic tracking-tighter opacity-10 select-none">DATA</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Built for the Ride</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Everything you need for a professional-grade cycling experience, minus the bloat and surveillance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Gauge />}
              title="Real-time Metrics"
              description="Monitor speed, distance, time, and average/max speeds with low-latency updates during your ride."
            />
            <FeatureCard 
              icon={<History />}
              title="Activity History"
              description="Keep a structured log of all your rides. Group by date or distance to track your progress over time."
            />
            <FeatureCard 
              icon={<Map />}
              title="Detailed Reviews"
              description="Review every turn with integrated route maps. Analyze pace segments and elevation profiles."
            />
            <FeatureCard 
              icon={<Layout />}
              title="Custom Layouts"
              description="Customize the dashboard to show the metrics you care about most. Adjust brightness for day or night."
            />
            <FeatureCard 
              icon={<Ruler />}
              title="Units & Localization"
              description="Switch seamlessly between Metric and Imperial units. Speedler adapts to your preference."
            />
            <FeatureCard 
              icon={<Moon />}
              title="Native Dark Mode"
              description="A beautiful dark interface that preserves battery life on OLED screens and reduces eye strain."
            />
            <FeatureCard 
              icon={<Share2 />}
              title="Data Export"
              description="It's your data. Export your rides to standard formats for use in other applications or backups."
            />
            <FeatureCard 
              icon={<Smartphone />}
              title="Native Performance"
              description="Built with native iOS technologies for buttery-smooth animations and minimal battery drain."
            />
            <FeatureCard 
              icon={<EyeOff />}
              title="Zero Accounts"
              description="Open the app and start riding. No email, no password, no onboarding friction."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-dot"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to ride private?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join thousands of cyclists who have reclaimed their data. Download Speedler today and experience the purest cycling computer on the App Store.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={APP_STORE_URL}
              className="bg-white text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-cyan-400 transition-all flex items-center gap-4"
            >
              <Download size={28} />
              Get Speedler
            </a>
          </div>
          
          {/* Subtle logo mark in background */}
          <div className="absolute -bottom-20 -right-20 text-[300px] font-black italic text-white/[0.03] select-none pointer-events-none">
            S.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-black text-black text-xl italic tracking-tighter">
              S<span className="w-1.5 h-1.5 rounded-full bg-cyan-dot mb-[-8px] ml-0.5"></span>
            </div>
            <span className="text-lg font-bold tracking-tight">Speedler</span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>

          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} Speedler Cycling. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
