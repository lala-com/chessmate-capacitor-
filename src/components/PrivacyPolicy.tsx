import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, EyeOff, Server, HardDrive, Wifi, Sparkles, Scale, Info, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'CHESSMATE AI Privacy Policy';
    window.scrollTo(0, 0);

    return () => {
      document.title = originalTitle;
    };
  }, []);

  const sections = [
    { id: 'introduction', number: '1', title: 'Introduction' },
    { id: 'information-we-collect', number: '2', title: 'Information We Collect' },
    { id: 'chess-gameplay-data', number: '3', title: 'Chess Gameplay Data' },
    { id: 'chessmate-ai-companion', number: '4', title: 'CHESSMATE AI Companion and AI Requests' },
    { id: 'internet-connectivity', number: '5', title: 'Internet Connectivity' },
    { id: 'local-storage', number: '6', title: 'Local Storage and Saved Game Data' },
    { id: 'device-information', number: '7', title: 'Device Information' },
    { id: 'how-we-use-information', number: '8', title: 'How We Use Information' },
    { id: 'data-sharing', number: '9', title: 'Data Sharing' },
    { id: 'data-security', number: '10', title: 'Data Security' },
    { id: 'childrens-privacy', number: '11', title: "Children's Privacy" },
    { id: 'third-party-services', number: '12', title: 'Third-Party Services' },
    { id: 'data-retention', number: '13', title: 'Data Retention' },
    { id: 'user-choices', number: '14', title: 'User Choices' },
    { id: 'changes-to-policy', number: '15', title: 'Changes to This Privacy Policy' },
    { id: 'contact-us', number: '16', title: 'Contact Us' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500/30">
      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-stone-800/90 bg-stone-900/90 backdrop-blur-md px-4 sm:px-8 py-3.5 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white border border-stone-700/80 transition text-xs font-semibold shadow-xs active:scale-95 cursor-pointer"
              aria-label="Return to CHESSMATE"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Back to Game</span>
            </button>
            <div className="h-5 w-px bg-stone-800 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-serif font-black text-sm tracking-wider">CHESSMATE</span>
              <span className="text-xs text-stone-400 hidden sm:inline">• Privacy Policy</span>
            </div>
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="text-xs text-stone-400 hover:text-amber-300 transition"
          >
            Home
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-10 text-center sm:text-left border-b border-stone-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            Legal & Privacy Documentation
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight text-stone-100 mb-3">
            CHESSMATE AI Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-stone-400 max-w-2xl leading-relaxed">
            Effective Date & Last Updated: October 2026. This Privacy Policy details how CHESSMATE AI handles data, local storage, offline functionality, and AI companion requests.
          </p>
        </div>

        {/* Quick Summary Cards (Transparent & Plain Language) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-10">
          <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 flex flex-col gap-1.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center mb-1">
              <EyeOff className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-stone-200">No Account Required</h2>
            <p className="text-xs text-stone-400 leading-normal">
              No signup, email, password, or login credentials needed to play.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 flex flex-col gap-1.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-400 flex items-center justify-center mb-1">
              <HardDrive className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-stone-200">Offline Chess Engine</h2>
            <p className="text-xs text-stone-400 leading-normal">
              Gameplay and match logic run entirely on your device without network calls.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 flex flex-col gap-1.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-400 flex items-center justify-center mb-1">
              <Wifi className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-stone-200">AI Companion Opt-In</h2>
            <p className="text-xs text-stone-400 leading-normal">
              Only companion chat messages contact the AI cloud service when active.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 flex flex-col gap-1.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/25 text-purple-400 flex items-center justify-center mb-1">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-bold text-stone-200">Zero Commercial Ads</h2>
            <p className="text-xs text-stone-400 leading-normal">
              We do not sell data, run ad networks, or implement user tracking beacons.
            </p>
          </div>
        </div>

        {/* Content Layout with Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table of Contents sidebar */}
          <aside className="lg:col-span-4 sticky top-20 hidden lg:block bg-stone-900/60 border border-stone-800/80 rounded-2xl p-4 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-stone-700">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-3">
              Table of Contents
            </span>
            <nav className="space-y-1 text-xs">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="w-full text-left py-1.5 px-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800/60 transition flex items-center gap-2"
                >
                  <span className="text-amber-500/80 font-mono text-[10px] w-4">{s.number}.</span>
                  <span className="truncate">{s.title}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Policy Sections */}
          <div className="lg:col-span-8 space-y-10 text-stone-300 text-sm leading-relaxed">
            {/* Section 1 */}
            <section id="introduction" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">1.</span> Introduction
              </h2>
              <p className="mb-2">
                Welcome to <strong>CHESSMATE AI</strong> (&quot;CHESSMATE,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We provide a master-grade chess gaming application featuring an interactive chess board, local two-player play, customizable engine difficulty, match statistics, and an optional in-game AI chess companion (&quot;CHESSMATE Companion&quot;).
              </p>
              <p>
                We believe in straightforward, privacy-respecting software. This Privacy Policy is designed to clearly and transparently inform you about how data is treated when you access or use CHESSMATE AI on the web or as an installed progressive web application.
              </p>
            </section>

            {/* Section 2 */}
            <section id="information-we-collect" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">2.</span> Information We Collect
              </h2>
              <p className="mb-3">
                CHESSMATE AI is architected from the ground up to minimize data collection:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
                <li>
                  <strong>No Account or Identity Data:</strong> You are not required to create an account, register, or provide your name, email address, physical address, or phone number.
                </li>
                <li>
                  <strong>No Sensitive Hardware Access:</strong> CHESSMATE AI does not request or access your device microphone, camera, contacts, photo library, file system, or precise GPS location.
                </li>
                <li>
                  <strong>No Financial Information:</strong> CHESSMATE AI does not process payments, collect credit card details, or connect to billing systems.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="chess-gameplay-data" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">3.</span> Chess Gameplay Data
              </h2>
              <p className="mb-2">
                Gameplay information—such as piece placements, legal move histories, captured pieces, turn timers, and game outcomes (e.g., checkmate, stalemate, resignations)—is calculated and handled locally within your client application.
              </p>
              <p>
                The chess engine (evaluating legal moves, CAISSA AI opponent calculations, and board positions) operates entirely client-side on your device. We do not stream or upload your private match history to any remote database.
              </p>
            </section>

            {/* Section 4 */}
            <section id="chessmate-ai-companion" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">4.</span> CHESSMATE AI Companion and AI Requests
              </h2>
              <p className="mb-2">
                CHESSMATE AI includes an interactive companion feature that players can consult for chess strategy, advice, tactics, rules, and game commentary.
              </p>
              <p className="mb-3">
                When you submit a query to the CHESSMATE AI companion:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
                <li>
                  The text of your question, along with the current board state context (FEN representation, piece balance, and recent moves), is transmitted to our backend proxy service.
                </li>
                <li>
                  Our backend proxies the prompt to a language model service (Google Gemini API) to generate the chess-focused response.
                </li>
                <li>
                  These requests are strictly limited to chess analysis and gameplay assistance. We do not attach personal user identifiers to these API calls.
                </li>
                <li>
                  Data transmitted during AI interactions is processed in accordance with the third-party AI provider&apos;s privacy and API terms. Users should refrain from entering personal, sensitive, or confidential information in chess companion chat messages.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="internet-connectivity" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">5.</span> Internet Connectivity
              </h2>
              <p className="mb-2">
                <strong>Core Game is Offline-Capable:</strong> You can play full chess matches against the computer or pass-and-play with another person on the same device without an active internet connection.
              </p>
              <p>
                <strong>Online Requirement for AI Companion:</strong> Querying the cloud-based CHESSMATE AI companion requires an active network connection. If no internet connection is available, the companion gracefully falls back to local pre-compiled responses or informs you that network access is needed.
              </p>
            </section>

            {/* Section 6 */}
            <section id="local-storage" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">6.</span> Local Storage and Saved Game Data
              </h2>
              <p className="mb-2">
                CHESSMATE AI utilizes your browser&apos;s client-side storage (such as Web Storage / <code>localStorage</code>) strictly to preserve your in-game experience between visits:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
                <li>
                  <strong>Unfinished Match Restoration:</strong> Current board state, active move history, and timers are saved so you can resume your game if you refresh or reopen the app.
                </li>
                <li>
                  <strong>Player Preferences:</strong> Your selected board theme (e.g., Classic Wood, Emerald, Slate), sound effects toggle, legal move dots, and preferred time controls.
                </li>
                <li>
                  <strong>Local Player Statistics:</strong> Total games played, win/loss/draw counts, and win streaks stored strictly on your local device.
                </li>
              </ul>
              <p className="mt-2 text-xs text-stone-400">
                This data stays on your local device and is never uploaded to an external server or synced to third-party databases.
              </p>
            </section>

            {/* Section 7 */}
            <section id="device-information" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">7.</span> Device Information
              </h2>
              <p>
                When accessing CHESSMATE AI via the web, standard HTTP/HTTPS transmission headers (such as IP address, browser user-agent, and requested asset paths) may be processed transiently by the hosting web server solely to deliver web assets and maintain network reliability. We do not combine server connection logs with individual player identities or chess games.
              </p>
            </section>

            {/* Section 8 */}
            <section id="how-we-use-information" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">8.</span> How We Use Information
              </h2>
              <p className="mb-2">
                Any information processed by CHESSMATE AI is used solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
                <li>Render the interactive chess board, validate moves, and execute game rules.</li>
                <li>Restore your saved game and preferences across sessions on your device.</li>
                <li>Process chess queries submitted by you to the CHESSMATE AI companion.</li>
                <li>Maintain basic technical stability, security, and uptime of the web application.</li>
              </ul>
              <p className="mt-2">
                We do not sell, rent, monetize, or use your data for advertising, behavioural profiling, or cross-site tracking.
              </p>
            </section>

            {/* Section 9 */}
            <section id="data-sharing" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">9.</span> Data Sharing
              </h2>
              <p className="mb-2">
                We do not sell or trade your data. Data is only shared in the following narrow circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
                <li>
                  <strong>AI Service Processing:</strong> When you initiate a chat with the AI companion, the chess prompt and board state are transmitted to our AI infrastructure provider (Google Gemini API) to generate the assistant response.
                </li>
                <li>
                  <strong>Hosting &amp; Infrastructure:</strong> Our cloud hosting environment processes standard web traffic requests to serve the web application files.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If required by law, subpoena, or valid court order, we may disclose information strictly necessary to comply with applicable legal obligations.
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="data-security" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">10.</span> Data Security
              </h2>
              <p>
                We implement industry-standard security measures, including HTTPS encryption in transit for all communications between your browser, our application server, and upstream AI endpoints. While no electronic transmission over the internet or method of storage can be guaranteed to be 100% impenetrable, our architectural choice to avoid holding accounts or sensitive personal records substantially limits exposure risk.
              </p>
            </section>

            {/* Section 11 */}
            <section id="childrens-privacy" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">11.</span> Children&apos;s Privacy
              </h2>
              <p>
                CHESSMATE AI is a general-audience educational and recreational chess application. We do not knowingly collect, solicit, or maintain personal information from children under the age of 13 (or under applicable age limits in your jurisdiction). Because the app does not require registration or personal data submission, child privacy is inherently protected during normal gameplay.
              </p>
            </section>

            {/* Section 12 */}
            <section id="third-party-services" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">12.</span> Third-Party Services
              </h2>
              <p className="mb-2">
                CHESSMATE AI integrates with select third-party service providers for technical operation:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
                <li>
                  <strong>Google Gemini API:</strong> Utilized server-side to provide responses for the CHESSMATE companion feature. Consult Google&apos;s Privacy Policy and API terms for information on their data handling standards.
                </li>
                <li>
                  <strong>Application Hosting:</strong> The app is hosted on cloud container infrastructure to serve web assets.
                </li>
              </ul>
              <p className="mt-2">
                We do not include third-party advertising SDKs, social media tracking pixels, or third-party analytic monitoring tools in CHESSMATE AI.
              </p>
            </section>

            {/* Section 13 */}
            <section id="data-retention" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">13.</span> Data Retention
              </h2>
              <p>
                Because we do not maintain user accounts or centralized gameplay databases, we do not retain your game moves, match outcomes, or personal histories on our servers. Local storage records remain on your personal device until you reset your browser data, clear application storage, or click the in-app &quot;Reset Stats&quot; button in the Statistics modal.
              </p>
            </section>

            {/* Section 14 */}
            <section id="user-choices" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">14.</span> User Choices
              </h2>
              <p className="mb-2">
                You maintain complete control over your application usage:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
                <li>
                  <strong>Playing Offline:</strong> You may use the app offline or disable network connectivity; core chess matches continue uninterrupted.
                </li>
                <li>
                  <strong>AI Companion Usage:</strong> The CHESSMATE companion is optional. If you do not open or interact with the companion chat, no AI prompts are dispatched.
                </li>
                <li>
                  <strong>Clearing Stored Data:</strong> You can clear your local game state, audio settings, and stats at any time by clearing your browser&apos;s site data or local storage for this domain.
                </li>
              </ul>
            </section>

            {/* Section 15 */}
            <section id="changes-to-policy" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">15.</span> Changes to This Privacy Policy
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect modifications in application features, legal standards, or operational practices. When updates are published, the revised policy will be posted on this page with an updated &quot;Last Updated&quot; date. We recommend checking this page periodically to remain informed.
              </p>
            </section>

            {/* Section 16 */}
            <section id="contact-us" className="scroll-mt-24 p-6 rounded-2xl bg-stone-900/40 border border-stone-800/70">
              <h2 className="text-xl font-serif font-bold text-stone-100 flex items-center gap-2 mb-3">
                <span className="text-amber-400 font-mono text-base">16.</span> Contact Us
              </h2>
              <p className="mb-3">
                If you have questions, inquiries, or feedback regarding this Privacy Policy or data privacy in CHESSMATE AI, you can reach out via:
              </p>
              <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 block">Support &amp; Inquiries</span>
                  <span className="text-sm font-semibold text-stone-200">privacy@chessmate-ai.app</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to CHESSMATE</span>
          </button>
          <span className="text-xs text-stone-500">
            CHESSMATE &copy; {new Date().getFullYear()} &bull; Master-Grade Offline Chess &bull; All Rights Reserved
          </span>
        </div>
      </main>
    </div>
  );
};
