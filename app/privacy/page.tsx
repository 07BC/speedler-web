import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Speedler",
  description: "Speedler Privacy Policy - Your data stays on your device. No tracking, no ads, no compromises.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-black text-black text-2xl italic tracking-tighter">
              S<span className="w-2.5 h-2.5 rounded-full bg-cyan-dot mb-[-12px] ml-0.5"></span>
            </div>
            <span className="text-xl font-bold tracking-tight">Speedler</span>
          </Link>
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-white/40 text-sm mb-12">Last updated: 13 January 2026</p>

          {/* TL;DR Box */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">TL;DR</h2>
            <ul className="space-y-3 text-white/80">
              <li className="flex gap-3">
                <span className="text-cyan-400">•</span>
                <span><strong>Speedler does not track your location</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">•</span>
                <span><strong>Your cycling data stays on your device</strong>, or in <strong>your own iCloud</strong> if you enable it</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">•</span>
                <span><strong>No personal data is sold, shared, or used for advertising</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">•</span>
                <span><strong>Anonymous metrics only</strong> are collected to improve the app</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">•</span>
                <span>If you later choose to connect <strong>Apple HealthKit</strong>, that data stays under your control</span>
              </li>
            </ul>
          </div>

          {/* Sections */}
          <div className="space-y-12 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p>
                Speedler is a cycling app designed to help riders track, analyse, and reflect on their training and performance — without compromising privacy.
              </p>
              <p className="mt-4">
                Speedler follows a <strong className="text-white">privacy-first approach</strong>: collect as little as possible, store data locally, and give users full control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Do Not Collect</h2>
              <p className="mb-4">Speedler <strong className="text-white">does not</strong>:</p>
              <ul className="space-y-2 ml-4">
                <li>• Track or store your real-world location</li>
                <li>• Collect personal identifiers such as your name, email address, or phone number</li>
                <li>• Track you across apps or websites</li>
                <li>• Use advertising identifiers</li>
                <li>• Sell or share personal data with third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cycling &amp; Training Data</h2>
              <p className="mb-4">Any cycling or training data you create in Speedler (such as ride details, performance metrics, or notes):</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li>• Is stored <strong className="text-white">locally on your device</strong></li>
                <li>• Remains private and under your control</li>
              </ul>
              <p className="mb-4">
                If <strong className="text-white">iCloud syncing</strong> is enabled, this data may be stored in <strong className="text-white">your personal iCloud account</strong> so it can sync across your Apple devices. This data:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Is encrypted and managed by Apple</li>
                <li>• Is not accessible to the Speedler developer</li>
                <li>• Is never stored on Speedler-operated servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Location Data</h2>
              <p>
                Speedler does <strong className="text-white">not</strong> collect, store, or transmit GPS or location data. The app does not rely on real-time location tracking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">HealthKit (Planned Feature)</h2>
              <p className="mb-4">Speedler plans to support <strong className="text-white">Apple HealthKit</strong> in the future.</p>
              <p className="mb-4">If enabled by you:</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li>• Health data will only be accessed with your <strong className="text-white">explicit permission</strong></li>
                <li>• Speedler will read and/or write only the data types required for cycling and fitness features</li>
                <li>• Health data will <strong className="text-white">not</strong> be used for advertising or marketing</li>
                <li>• Health data will <strong className="text-white">not</strong> be shared with third parties</li>
              </ul>
              <p>You can manage or revoke HealthKit permissions at any time via your device&apos;s settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Anonymous Usage Metrics</h2>
              <p className="mb-4">
                Speedler may collect <strong className="text-white">anonymous, aggregated usage metrics</strong> to improve app stability, performance, and features. These metrics:
              </p>
              <ul className="space-y-2 ml-4">
                <li>• Cannot identify you personally</li>
                <li>• Do not include cycling content, health data, or personal information</li>
                <li>• Are used only to understand general usage patterns (such as feature usage or crash diagnostics)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="mb-4">Speedler may use Apple-provided services, including:</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li>• iCloud for optional data syncing</li>
                <li>• App Store analytics and crash reporting</li>
              </ul>
              <p>These services are governed by Apple&apos;s own privacy policies. Speedler does not include third-party advertising or tracking SDKs.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="mb-4">Speedler protects your data by:</p>
              <ul className="space-y-2 ml-4">
                <li>• Keeping cycling and training data on-device or within Apple&apos;s secure iCloud infrastructure</li>
                <li>• Avoiding external servers for personal data storage</li>
                <li>• Minimising data collection by design</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Control</h2>
              <p className="mb-4">You are always in control of your data. You can:</p>
              <ul className="space-y-2 ml-4">
                <li>• Delete Speedler to remove all locally stored data</li>
                <li>• Disable iCloud syncing at any time via device settings</li>
                <li>• Control HealthKit access through iOS system permissions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p>
                This Privacy Policy may be updated from time to time. Any changes will be reflected by updating the &quot;Last updated&quot; date above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p>
                If you have questions about this Privacy Policy or how Speedler handles cycling and health data, please contact the developer via the App Store listing.
              </p>
            </section>
          </div>
        </div>
      </main>

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
            <Link href="/privacy" className="text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>

          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} Speedler Cycling. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
