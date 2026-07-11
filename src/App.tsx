/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Share, 
  X, 
  ChevronRight, 
  Smartphone, 
  CheckCircle,
  HelpCircle,
  Plus,
  ArrowLeft,
  RotateCw,
  Lock,
  Unlock,
  Key,
  Eye,
  EyeOff,
  Clipboard,
  ShieldAlert,
  Play,
  Info,
  Search,
  Bell,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

// --- MODULAR LOGO COMPONENT ---
// Uses the official logo from Google Drive, with a premium silver SVG vector fallback
interface LogoProps {
  className?: string;
  size?: number;
}

function MovizLogo({ className = '', size = 120 }: LogoProps) {
  const [error, setError] = useState<boolean>(false);

  if (!error) {
    return (
      <img 
        src="https://lh3.googleusercontent.com/d/1aXjKru_W_vo4PP6TD2YWKztb3QHcyKM2" 
        alt="Moviz TV Logo" 
        width={size}
        height={size}
        className={`object-contain max-w-full select-none pointer-events-none ${className}`}
        style={{ height: size, width: 'auto' }}
        referrerPolicy="no-referrer"
        onError={() => setError(true)}
      />
    );
  }

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500" 
      width={size} 
      height={size} 
      className={`select-none pointer-events-none ${className}`}
    >
      <defs>
        <linearGradient id="mBodyGradApp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F2F2F2" />
          <stop offset="100%" stopColor="#D5D5D5" />
        </linearGradient>
        
        <linearGradient id="playButtonGradApp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9A9A9A" />
          <stop offset="30%" stopColor="#CCCCCC" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        
        <filter id="premiumShadowApp" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      <g filter="url(#premiumShadowApp)">
        <path d="M 120,150 
                 L 185,150 
                 L 185,340 
                 L 120,340 
                 Z" 
              fill="url(#mBodyGradApp)" />
              
        <path d="M 185,150 
                 L 270,245 
                 L 355,150 
                 L 420,150 
                 L 420,230 
                 L 375,275 
                 L 375,210 
                 L 270,325 
                 L 185,230 
                 Z" 
              fill="url(#mBodyGradApp)" />

        <path d="M 375,240 
                 L 375,340 
                 L 485,290 
                 Z" 
              fill="url(#playButtonGradApp)" />
      </g>
    </svg>
  );
}

/// --- CUSTOM PREMIUM VECTOR LOGOS FOR HUBS ---

function TvCanaisIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="select-none pointer-events-none">
      <defs>
        <linearGradient id="tvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052FF" />
          <stop offset="100%" stopColor="#002999" />
        </linearGradient>
        <filter id="tvGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0052FF" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect x="15" y="25" width="70" height="50" rx="12" fill="url(#tvGrad)" stroke="#0052FF" strokeWidth="2" filter="url(#tvGlow)" />
      {/* Screen area */}
      <rect x="22" y="31" width="56" height="38" rx="6" fill="#050505" stroke="rgba(0, 82, 255, 0.2)" strokeWidth="1" />
      {/* Play button indicator inside TV */}
      <polygon points="46,43 46,57 58,50" fill="#00E676" />
      {/* Antennas */}
      <path d="M 35,12 L 50,25 L 65,12" stroke="#0052FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="35" cy="11" r="2.5" fill="#00E676" />
      <circle cx="65" cy="11" r="2.5" fill="#00E676" />
    </svg>
  );
}

function AppleIphoneIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="select-none pointer-events-none">
      <defs>
        <linearGradient id="appleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
        <filter id="appleGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0052FF" floodOpacity="0.25" />
        </filter>
      </defs>
      {/* Circular glassmorphic disc backdrop with light border */}
      <circle cx="50" cy="50" r="45" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(0, 82, 255, 0.2)" strokeWidth="1.5" />
      {/* Apple icon body */}
      <g filter="url(#appleGlow)">
        <path 
          d="M50,25 C45.5,25 42,27.5 40,27.5 C38,27.5 35.5,25 32,25.2 C27,25.6 22,29.5 22,37.5 C22,45.5 27.5,57.5 32.5,57.5 C35,57.5 36.5,56 39,56 C41.5,56 42.5,57.5 45,57.5 C47.5,57.5 49,56 51.5,56 C53.8,56 55,57.5 57.5,57.5 C61.5,57.5 66,47.5 66,43 C56,41.5 56,30.5 66,30 C62.5,26.5 58,25.2 55.5,25.2 C53,25.2 51.5,25 50,25 Z" 
          fill="url(#appleGrad)" 
        />
        {/* Leaf */}
        <path 
          d="M56.5,13 C60,17.5 57.5,22.5 53,23 C52.5,19 54.5,14.5 56.5,13 Z" 
          fill="url(#appleGrad)" 
        />
      </g>
    </svg>
  );
}

function AndroidRobotIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="select-none pointer-events-none">
      <defs>
        <linearGradient id="androidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3DDC84" />
          <stop offset="100%" stopColor="#0F9D58" />
        </linearGradient>
        <filter id="androidGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3DDC84" floodOpacity="0.4" />
        </filter>
      </defs>
      {/* Backdrop plate */}
      <rect x="8" y="8" width="84" height="84" rx="20" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(0, 230, 118, 0.15)" strokeWidth="1" />
      {/* Android Head */}
      <path d="M 50,26 A 18,18 0 0,1 68,44 L 32,44 A 18,18 0 0,1 50,26 Z" fill="url(#androidGrad)" filter="url(#androidGlow)" />
      {/* Eyes */}
      <circle cx="43" cy="36" r="2" fill="#000000" />
      <circle cx="57" cy="36" r="2" fill="#000000" />
      {/* Antennas */}
      <line x1="39" y1="28" x2="33" y2="17" stroke="url(#androidGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="61" y1="28" x2="67" y2="17" stroke="url(#androidGrad)" strokeWidth="2" strokeLinecap="round" />
      {/* Body */}
      <path d="M 32,48 L 68,48 A 0,0 0 0,1 68,48 L 68,70 A 7,7 0 0,1 61,77 L 39,77 A 7,7 0 0,1 32,70 Z" fill="url(#androidGrad)" />
      {/* Arms */}
      <rect x="25" y="48" width="5" height="18" rx="2.5" fill="url(#androidGrad)" />
      <rect x="70" y="48" width="5" height="18" rx="2.5" fill="url(#androidGrad)" />
      {/* Legs */}
      <rect x="39" y="77" width="5" height="10" rx="2.5" fill="url(#androidGrad)" />
      <rect x="56" y="77" width="5" height="10" rx="2.5" fill="url(#androidGrad)" />
    </svg>
  );
}

const SECRET_UNLOCK_KEY = "7$mK!9v#2W@L5%rN1^zB8(jE4)cQ+uT3_mX6=pY0&fV2%gH9*aK5_wL1#rN8@jE4c!x$7M#p9_K&v2*W@L5%rN1^zB8(jE4)cQ+uT3_mX6=pY0&fV2%gH9*aK5_wL1#rN8@jE4c7$mK!9v#2W@L5%rN1^zB8(jE4)cQ+uT3_mX6=pY0&fV2%gH9*aK5_wL1#rN8@jE4c!x$7M#p9_K&v2*W@L5%rN1^zB8(jE4)cQ+uT3_mX6=pY0&fV2%gH9*aK5_wL1#rN8@jE4c7$mK!9v#2W@L5%rN1^zB8(jE4)cQ+uT3_mX6=pY0&fV2%gH9*aK5_wL1#rN8@jE4c!x$7M#p9_K&v2*W@L5%rN1^zB8(jE4)c";

export default function App() {
  // Unlock & Key states
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    return localStorage.getItem('moviz_tv_unlocked') === 'true';
  });
  const [secretInput, setSecretInput] = useState<string>('');
  const [unlockError, setUnlockError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showUnlockScreen, setShowUnlockScreen] = useState<boolean>(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);

  // Navigation & Screen states
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  
  // In-App Viewport states
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>('');
  const [iframeLoading, setIframeLoading] = useState<boolean>(false);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // PWA & Installation states
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [showIosGuide, setShowIosGuide] = useState<boolean>(false);
  const [isIos, setIsIos] = useState<boolean>(false);
  const [activeInstallTab, setActiveInstallTab] = useState<'android' | 'ios'>('android');

  const handleUnlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = secretInput.trim();
    if (trimmedInput === SECRET_UNLOCK_KEY) {
      localStorage.setItem('moviz_tv_unlocked', 'true');
      setIsUnlocked(true);
      setUnlockError(null);
    } else {
      setUnlockError('Chave secreta incorreta. Verifique e tente novamente.');
    }
  };

  const handlePasteKey = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setSecretInput(text);
      setUnlockError(null);
    } catch (err) {
      setUnlockError('Não foi possível ler a área de transferência automaticamente. Por favor, cole manualmente.');
    }
  };

  // 1. Splash Screen Organic Realistic Progress Animation
  useEffect(() => {
    if (!showSplash) return;
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Simulate slow realistic check of connections:
      // Starts rapidly, slows down considerably towards the end.
      let increment = 0;
      if (currentProgress < 35) {
        increment = Math.floor(Math.random() * 8) + 8; // fast jump
      } else if (currentProgress < 75) {
        increment = Math.floor(Math.random() * 5) + 3; // medium pacing
      } else if (currentProgress < 95) {
        increment = Math.floor(Math.random() * 3) + 1; // slow crawl
      } else if (currentProgress < 100) {
        // very slow final verification
        increment = Math.random() > 0.65 ? 1 : 0;
      }
      
      currentProgress = Math.min(currentProgress + increment, 100);
      setLoadingProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => setShowSplash(false), 600); // elegant fade-out transition after 100%
      }
    }, 100);

    return () => clearInterval(interval);
  }, [showSplash]);

  // 2. Detect device capability, OS, and install context
  useEffect(() => {
    // Check if running in standalone mode (installed PWA)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                         (window.navigator as any).standalone === true;
    setIsInstalled(isStandalone);

    // Detect User Agent
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIosDevice);
    if (isIosDevice) {
      setActiveInstallTab('ios');
    }

    // Listen for browser-triggered install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Update state immediately if app is installed
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // 3. Trigger programmatic install prompt for Android/Chrome/Windows
  const handleInstallClickUnified = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setDeferredPrompt(null);
      }
    } else {
      // If native PWA browser prompt is not captured yet, open the elegant interactive modal
      setShowIosGuide(true);
    }
  };

  // Open a URL directly in a new tab/window (Linktree style)
  const openInAppBrowser = (url: string, _title: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Render the iOS and universal installation modal helper to avoid code duplication
  const renderIosGuideModal = () => (
    <AnimatePresence>
      {showIosGuide && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/95 backdrop-blur-md">
          {/* Modal Backdrop Click-to-Dismiss */}
          <div className="absolute inset-0" onClick={() => setShowIosGuide(false)} />

          {/* Modal Body */}
          <motion.div 
            className="relative w-full sm:max-w-md bg-[#121212] border-t sm:border border-white/10 rounded-t-[24px] sm:rounded-[24px] p-6 text-left shadow-2xl overflow-hidden z-10"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowIosGuide(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X size={15} />
            </button>

            {/* Title Header */}
            <div className="flex items-center space-x-3 mb-5 mt-1">
              <div className="w-10 h-10 bg-[#0052FF]/10 rounded-xl flex items-center justify-center border border-[#0052FF]/20">
                <Smartphone className="text-[#0052FF]" size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  Instalar Moviz TV
                </h3>
                <p className="text-[11px] text-neutral-400">
                  Instale no seu dispositivo em segundos.
                </p>
              </div>
            </div>

            {/* Tab Selector for maximum multi-device clarity */}
            <div className="flex bg-black/40 p-1 rounded-xl border border-white/5 mb-5">
              <button
                type="button"
                onClick={() => setActiveInstallTab('android')}
                className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeInstallTab === 'android'
                    ? 'bg-[#0052FF] text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Android / Chrome
              </button>
              <button
                type="button"
                onClick={() => setActiveInstallTab('ios')}
                className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeInstallTab === 'ios'
                    ? 'bg-[#0052FF] text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                iPhone / iOS
              </button>
            </div>

            {/* Step By Step Instructions */}
            <div className="space-y-3.5 my-5">
              
              {activeInstallTab === 'android' ? (
                <>
                  {/* Step 1: Open Menu */}
                  <div className="flex items-start bg-black/40 p-4 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-white shrink-0">
                      <Plus size={14} className="text-[#0052FF]" />
                    </div>
                    <div className="ml-3.5">
                      <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Passo 1</span>
                      <p className="text-xs text-neutral-200 mt-0.5 leading-relaxed">
                        Toque no ícone de <strong className="text-white">Opções/Menu</strong> (três pontos <strong className="text-white">⋮</strong> ou linhas) no canto do seu navegador (Chrome/Samsung).
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Install button */}
                  <div className="flex items-start bg-black/40 p-4 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-white shrink-0">
                      <Download size={14} className="text-[#0052FF]" />
                    </div>
                    <div className="ml-3.5">
                      <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Passo 2</span>
                      <p className="text-xs text-neutral-200 mt-0.5 leading-relaxed">
                        Selecione a opção <strong className="text-white">Instalar Aplicativo</strong> ou <strong className="text-white">Adicionar ao Ecrã Principal</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Finish */}
                  <div className="flex items-start bg-black/40 p-4 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-[#00E676]/10 border border-[#00E676]/20 flex items-center justify-center text-white shrink-0">
                      <CheckCircle size={14} className="text-[#00E676]" />
                    </div>
                    <div className="ml-3.5">
                      <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Passo 3</span>
                      <p className="text-xs text-neutral-200 mt-0.5 leading-relaxed">
                        Confirme clicando em <strong className="text-[#00E676]">Instalar</strong> para criar o atalho nativo automaticamente na tela do seu telemóvel!
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Step 1: Share Icon */}
                  <div className="flex items-start bg-black/40 p-4 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-white shrink-0">
                      <Share size={14} className="text-[#0052FF]" />
                    </div>
                    <div className="ml-3.5">
                      <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Passo 1</span>
                      <p className="text-xs text-neutral-200 mt-0.5 leading-relaxed">
                        No Safari ou navegador do iPhone, clique em <strong className="text-white">Partilhar</strong> (ícone de seta para cima).
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Add to Home Screen Icon */}
                  <div className="flex items-start bg-black/40 p-4 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-white shrink-0">
                      <Plus size={14} className="text-[#0052FF]" />
                    </div>
                    <div className="ml-3.5">
                      <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Passo 2</span>
                      <p className="text-xs text-neutral-200 mt-0.5 leading-relaxed">
                        Role para baixo e selecione a opção <strong className="text-white">Adicionar ao Ecrã Principal</strong> (ou <strong className="text-white">Add to Home Screen</strong>).
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Finish */}
                  <div className="flex items-start bg-black/40 p-4 rounded-xl border border-white/5">
                    <div className="w-7 h-7 rounded-lg bg-[#00E676]/10 border border-[#00E676]/20 flex items-center justify-center text-white shrink-0">
                      <CheckCircle size={14} className="text-[#00E676]" />
                    </div>
                    <div className="ml-3.5">
                      <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Passo 3</span>
                      <p className="text-xs text-neutral-200 mt-0.5 leading-relaxed">
                        Confirme clicando em <strong className="text-[#00E676]">Adicionar</strong> no canto superior direito para finalizar!
                      </p>
                    </div>
                  </div>
                </>
              )}

            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full bg-[#1c1c1e] hover:bg-[#2c2c2e] text-white font-bold py-3.5 px-6 rounded-xl transition-all cursor-pointer text-xs uppercase tracking-wider font-display"
            >
              Concluir
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // Render the secure Vanqir checkout inside a seamless iframe modal overlay
  const renderCheckoutModal = () => (
    <AnimatePresence>
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/95 backdrop-blur-md">
          {/* Backdrop Click-to-Dismiss */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowCheckoutModal(false)} />
          
          {/* Modal Container */}
          <motion.div 
            className="relative w-full h-full sm:h-[85vh] sm:max-w-4xl bg-[#080808] border-t sm:border border-white/10 rounded-t-[24px] sm:rounded-[24px] overflow-hidden z-10 flex flex-col shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4.5 bg-[#121212] border-b border-white/5 shrink-0">
              <div className="flex items-center space-x-2.5">
                <div className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">Pagamento Oficial Integrado e Seguro</span>
              </div>
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            
            {/* IFrame containing Vanqir checkout */}
            <div className="flex-1 w-full relative bg-[#000]">
              <iframe
                src="https://pay.vanqir.com/checkout/85f3111d-fb7d-4a73-9a39-a7545e434202"
                className="w-full h-full border-0"
                title="Checkout Seguro Moviz TV"
                allow="payment; clipboard-write"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (!isUnlocked) {
    if (!showUnlockScreen) {
      // PREMIUM MINIMALIST SALES LANDING PAGE (Netflix Inspired Layout)
      return (
        <div className="relative min-h-screen bg-[#000000] text-white flex flex-col overflow-x-hidden font-sans selection:bg-[#E50914]/30">
          
          {/* HEADER BAR */}
          <header className="absolute top-0 left-0 w-full z-30 bg-gradient-to-b from-black/90 to-transparent px-6 py-4 sm:px-12 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-[#E50914] font-display font-black text-2xl tracking-[0.1em] select-none uppercase cursor-pointer">
                MOVIZ TV
              </h1>
              
              {/* Minimalist Navigation Links (like Netflix image) */}
              <nav className="hidden md:flex items-center space-x-6 text-[11px] font-bold text-neutral-300 tracking-wider">
                <span className="hover:text-white transition-colors cursor-pointer text-white">INICIO</span>
                <span className="hover:text-white transition-colors cursor-pointer">SERIES</span>
                <span className="hover:text-white transition-colors cursor-pointer">PELICULAS</span>
                <span className="hover:text-white transition-colors cursor-pointer">NOVEDADES</span>
              </nav>
            </div>

            {/* Right side utilities */}
            <div className="flex items-center space-x-6 text-neutral-300">
              <Search size={18} className="cursor-pointer hover:text-white transition-colors" />
              <Bell size={18} className="cursor-pointer hover:text-white transition-colors" />
              
              <button 
                onClick={() => setShowUnlockScreen(true)}
                className="bg-[#E50914] text-white text-xs font-bold px-4 py-2 rounded-md hover:brightness-110 active:scale-[0.97] transition-all cursor-pointer font-display tracking-wider"
              >
                ENTRAR
              </button>
            </div>
          </header>

          {/* HERO SECTION */}
          <section className="relative min-h-[92vh] w-full flex flex-col justify-end px-6 sm:px-12 pb-16 pt-36 overflow-hidden">
            {/* Breathtaking Ocean Sunset Silhouette Couple backdrop (replicates reference style) */}
            <div 
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1920')] bg-cover bg-center"
              style={{ backgroundPosition: '50% 35%' }}
            />
            {/* Cinematic dark vignette layers to ensure maximum text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            
            {/* Hero Main Content Box */}
            <div className="relative z-10 max-w-2xl text-left">
              {/* Top Rating Tag */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-[#E50914] text-white text-[9px] font-black tracking-widest px-2 py-0.5 rounded-sm uppercase">
                  TOP 10
                </div>
                <span className="text-[10px] font-bold text-white tracking-widest uppercase font-mono">
                  #1 EM ANGOLA ESTA SEMANA
                </span>
              </div>

              {/* Display Title */}
              <h2 className="font-serif font-black text-5xl sm:text-7xl tracking-wide text-white mb-5 uppercase leading-[0.95] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                MOVIZ TV
              </h2>

              {/* Poetic description from reference image inspired format */}
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-xl mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Num rincão de entretenimento onde os limites se dissolvem. Canais ao vivo cobiçados, séries exclusivas de streamings globais e lançamentos diretos do cinema. Desenvolvido com elegância absoluta para funcionar diretamente no seu telefone, TV ou computador, sem interrupções e com a máxima fidelidade audiovisual.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* REPRODUCIR / COMEÇAR AGORA BUTTON */}
                <button
                  onClick={() => setShowUnlockScreen(true)}
                  className="flex items-center justify-center space-x-3 bg-white hover:bg-neutral-200 text-black font-extrabold py-3.5 px-8 rounded-md shadow-2xl active:scale-[0.98] transition-all duration-200 cursor-pointer text-xs uppercase tracking-widest font-display"
                >
                  <Play size={16} fill="black" className="text-black" />
                  <span>REPRODUCIR</span>
                </button>

                {/* ADQUIRIR ACESSO BUTTON */}
                <button
                  onClick={() => setShowCheckoutModal(true)}
                  className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-extrabold py-3.5 px-8 rounded-md active:scale-[0.98] transition-all duration-200 cursor-pointer text-xs uppercase tracking-widest font-display backdrop-blur-md"
                >
                  <Plus size={16} />
                  <span>ADQUIRIR ACESSO</span>
                </button>
              </div>
            </div>
          </section>

          {/* LO MAS BUSCADO / MOST SEARCHED SECTION */}
          <section className="bg-black w-full pt-10 pb-20">
            <h3 className="font-display font-black text-neutral-400 text-[11px] tracking-[0.25em] uppercase mb-6 px-6 sm:px-12 max-w-6xl mx-auto">
              LO MAS BUSCADO
            </h3>
            
            {/* Vertical Posters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 sm:px-12 max-w-6xl mx-auto">
              
              {/* Poster 1 */}
              <div className="group relative aspect-[2/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 cursor-pointer shadow-lg hover:border-[#E50914]/40 hover:scale-[1.03] transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500&auto=format&fit=crop" 
                  alt="Horizonte de Ação" 
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[9px] font-mono font-bold text-[#E50914] uppercase tracking-wider mb-0.5">AÇÃO / SCIFI</span>
                  <p className="text-xs font-bold text-white leading-tight">Horizonte Perdido</p>
                </div>
              </div>

              {/* Poster 2 */}
              <div className="group relative aspect-[2/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 cursor-pointer shadow-lg hover:border-[#E50914]/40 hover:scale-[1.03] transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=500&auto=format&fit=crop" 
                  alt="Pôr de Sol Romance" 
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[9px] font-mono font-bold text-[#E50914] uppercase tracking-wider mb-0.5">ROMANCE / DRAMA</span>
                  <p className="text-xs font-bold text-white leading-tight">O Encontro</p>
                </div>
              </div>

              {/* Poster 3 */}
              <div className="group relative aspect-[2/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 cursor-pointer shadow-lg hover:border-[#E50914]/40 hover:scale-[1.03] transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=500&auto=format&fit=crop" 
                  alt="Horizonte de Aventura" 
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[9px] font-mono font-bold text-[#E50914] uppercase tracking-wider mb-0.5">SUSPENSE / THRILLER</span>
                  <p className="text-xs font-bold text-white leading-tight">Sombras no Escuro</p>
                </div>
              </div>

              {/* Poster 4 */}
              <div className="group relative aspect-[2/3] bg-neutral-900 rounded-lg overflow-hidden border border-white/5 cursor-pointer shadow-lg hover:border-[#E50914]/40 hover:scale-[1.03] transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=500&auto=format&fit=crop" 
                  alt="Noite de Estreia" 
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[9px] font-mono font-bold text-[#E50914] uppercase tracking-wider mb-0.5">CLÁSSICO / CINEMA</span>
                  <p className="text-xs font-bold text-white leading-tight">Noite de Estreia</p>
                </div>
              </div>

            </div>

            {/* Netflix-style footer original credits line */}
            <div className="mt-16 flex items-center justify-center space-x-3 text-neutral-600">
              <span className="text-2xl font-black text-[#E50914] tracking-tighter">M</span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase font-mono">
                ORIGINAL MOVIZ TV desde 2024
              </span>
            </div>
          </section>

          {/* Secure embedded payment checkout modal */}
          {renderCheckoutModal()}

          {/* Universal step guide modal */}
          {renderIosGuideModal()}
        </div>
      );
    }

    // SECURITY UNLOCK SCREEN
    return (
      <div className="relative min-h-screen bg-[#000000] text-white flex flex-col justify-center items-center px-6 py-12 overflow-x-hidden font-sans selection:bg-[#E50914]/30">
        
        {/* BACK TO LANDING PAGE BUTTON */}
        <button
          type="button"
          onClick={() => setShowUnlockScreen(false)}
          className="absolute top-6 left-6 flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors text-xs font-mono py-2 px-3.5 bg-neutral-900/50 border border-white/5 hover:border-white/10 rounded-full backdrop-blur-md cursor-pointer transition-all"
        >
          <ArrowLeft size={14} />
          <span>VOLTAR</span>
        </button>

        {/* BACKGROUND DECORATIVE ELEMENTS - COBALT BLUE RADIAL VIGNETTE */}
        <div className="absolute top-[-10%] left-[-20%] w-[140%] h-[70%] bg-[radial-gradient(circle_at_center,_rgba(0,82,255,0.08)_0%,_rgba(0,0,0,0)_75%)] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[140%] h-[60%] bg-[radial-gradient(circle_at_center,_rgba(0,230,118,0.02)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none z-0" />

        <main className="relative z-10 max-w-md w-full mx-auto flex flex-col items-center">
          {/* Logo container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,82,255,0.12)] mb-6"
          >
            <MovizLogo size={62} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display font-black text-2xl tracking-[0.25em] text-white select-none">
              MOVIZ TV
            </h2>
            <p className="text-[10px] text-neutral-500 font-bold tracking-[0.2em] mt-2 uppercase">
              Aplicação Bloqueada
            </p>
          </motion.div>

          {/* Key Box Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full bg-[#121212]/90 border border-white/5 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0052FF]/2 to-transparent pointer-events-none" />
            
            <div className="flex items-center space-x-3 mb-6 relative z-10">
              <div className="w-10 h-10 bg-[#0052FF]/10 rounded-xl flex items-center justify-center border border-[#0052FF]/20">
                <Lock className="text-[#0052FF]" size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-white">Desbloquear Aplicação</h3>
                <p className="text-[10px] text-neutral-400 font-mono tracking-wider">Insira a sua chave de acesso</p>
              </div>
            </div>

            <form onSubmit={handleUnlockSubmit} className="space-y-5 relative z-10">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider font-mono">
                  Sua Chave Secreta
                </label>
                
                <div className="relative rounded-2xl bg-black border border-white/5 focus-within:border-[#0052FF]/50 transition-all duration-300">
                  <textarea
                    rows={4}
                    value={secretInput}
                    onChange={(e) => {
                      setSecretInput(e.target.value);
                      setUnlockError(null);
                    }}
                    placeholder="Cole ou escreva a sua chave de acesso aqui..."
                    className="w-full bg-transparent px-4 py-3.5 pr-12 text-xs font-mono text-neutral-200 outline-none placeholder:text-neutral-600 resize-none rounded-2xl animate-none"
                  />
                  
                  {/* Lock Indicator inside input area */}
                  <div className="absolute bottom-3 right-3 text-neutral-600">
                    <Key size={14} />
                  </div>
                </div>
              </div>

              {unlockError && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start space-x-2 bg-red-950/30 border border-red-500/20 p-3.5 rounded-xl text-xs text-red-400 leading-relaxed"
                >
                  <ShieldAlert size={16} className="shrink-0 mt-0.5 text-red-500" />
                  <span className="font-mono text-[11px]">{unlockError}</span>
                </motion.div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="button"
                  onClick={handlePasteKey}
                  className="flex-1 flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-white/5 hover:border-neutral-700 text-neutral-300 hover:text-white font-bold py-3.5 px-4 rounded-xl active:scale-[0.98] transition-all duration-200 cursor-pointer text-xs font-mono tracking-wider"
                >
                  <Clipboard size={14} />
                  <span>COLAR CHAVE</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0052FF] to-[#0039B3] text-white font-bold py-3.5 px-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer text-xs font-display tracking-widest font-extrabold"
                >
                  <Unlock size={14} />
                  <span>DESBLOQUEAR</span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* DYNAMIC SECURE ACQUIRE KEY BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="w-full mb-6"
          >
            <button
              type="button"
              onClick={() => setShowCheckoutModal(true)}
              className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-[#00E676] to-[#00B259] text-black font-extrabold py-4 px-6 rounded-2xl shadow-xl hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer text-xs tracking-wider font-display uppercase"
            >
              <Key size={16} className="text-black" />
              <span>Adquirir Chave de Acesso</span>
            </button>
          </motion.div>

          {/* Unified PWA Persistent Installation Zone on Lock Screen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full bg-[#121212]/90 border border-white/5 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0052FF]/2 to-transparent pointer-events-none" />
            
            <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider font-mono mb-4 text-center relative z-10">
              Instalar Aplicativo Oficial
            </h4>

            {isInstalled ? (
              <div className="flex items-center justify-center space-x-2 bg-[#121212]/90 border border-[#00E676]/20 px-5 py-2.5 rounded-full text-xs text-[#00E676] font-medium tracking-wide shadow-lg mx-auto w-max relative z-10">
                <CheckCircle size={14} className="text-[#00E676]" />
                <span className="font-mono">✓ Moviz TV Instalada com Sucesso</span>
              </div>
            ) : (
              <div className="w-full space-y-3 relative z-10">
                <button
                  type="button"
                  id="install-pwa-button-unified-lock"
                  onClick={handleInstallClickUnified}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-[#0052FF] to-[#0039B3] text-white font-bold py-4.5 px-6 rounded-2xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm tracking-wide font-display border border-[#0052FF]/30 group"
                >
                  <Download size={18} className="text-white group-hover:translate-y-0.5 transition-transform duration-200" />
                  <span className="font-display tracking-widest uppercase font-extrabold text-[13px]">
                    INSTALAR NO TELEFONE
                  </span>
                </button>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowIosGuide(true)}
                    className="inline-flex items-center space-x-1.5 text-neutral-400 hover:text-white transition-colors text-xs font-mono py-1 cursor-pointer"
                  >
                    <HelpCircle size={14} className="text-[#0052FF]" />
                    <span>Como instalar passo a passo?</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          <p className="text-[10px] text-neutral-600 font-mono tracking-wider mt-8 text-center leading-relaxed">
            Se não possui uma chave secreta válida de acesso,<br />
            entre em contacto com o administrador do sistema.
          </p>
        </main>

        {/* Embedded checkout portal for fast access */}
        {renderCheckoutModal()}

        {/* Modal is also rendered in the locked context for instant visual support */}
        {renderIosGuideModal()}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#000000] text-white flex flex-col justify-between overflow-x-hidden font-sans selection:bg-[#0052FF]/30">
      
      {/* 1. CINEMATIC SPLASH SCREEN */}
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            id="splash-screen"
            className="fixed inset-0 bg-[#000000] z-50 flex flex-col items-center justify-center p-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          >
            {/* Matte Cobalt Deep radial glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,82,255,0.18)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none z-0" />
            
            <div className="flex flex-col items-center max-w-xs w-full relative z-10">
              {/* Logo container with slow premium pulsating animation */}
              <motion.div
                animate={{ 
                  scale: [0.95, 1.03, 0.95],
                  opacity: [0.9, 1, 0.9]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.2, 
                  ease: "easeInOut" 
                }}
                className="mb-8"
              >
                <MovizLogo size={130} />
              </motion.div>
              
              {/* Slogan & Title in Splash */}
              <div className="text-center mb-10">
                <h2 className="font-display font-bold text-3xl tracking-[0.3em] text-white select-none">
                  MOVIZ TV
                </h2>
                <p className="text-[10px] text-neutral-500 font-bold tracking-[0.2em] mt-2.5 uppercase">
                  SERVIÇO DE ENTRETENIMENTO PREMIUM
                </p>
              </div>

              {/* Minimal Loading Progress Bar and Numeric Text */}
              <div className="w-56 space-y-3">
                <div className="w-full h-[3px] bg-[#121212] rounded-full overflow-hidden relative border border-white/5">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#0052FF] via-[#00B0FF] to-[#00E676] shadow-[0_0_8px_rgba(0,82,255,0.6)]"
                    style={{ width: `${loadingProgress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono tracking-wider">
                  <span>
                    {loadingProgress < 100 
                      ? 'A estabelecer ligação segura...' 
                      : 'Ligação autorizada!'
                    }
                  </span>
                  <span className="font-bold text-white bg-[#121212] px-1.5 py-0.5 rounded border border-white/5">
                    {loadingProgress}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND DECORATIVE ELEMENTS - COBALT BLUE RADIAL VIGNETTE */}
      <div className="absolute top-[-10%] left-[-20%] w-[140%] h-[70%] bg-[radial-gradient(circle_at_center,_rgba(0,82,255,0.11)_0%,_rgba(0,0,0,0)_75%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[140%] h-[60%] bg-[radial-gradient(circle_at_center,_rgba(0,230,118,0.02)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none z-0" />

      {/* MAIN CONTAINER */}
      <main className="relative z-10 flex-1 max-w-md w-full mx-auto px-6 py-10 flex flex-col justify-between min-h-screen">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col items-center text-center mt-2">
          {/* Circular logo badge (fundo preto com isotipo elegante) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,82,255,0.15)] mb-5"
          >
            <MovizLogo size={62} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="space-y-2.5"
          >
            <h1 className="font-display font-bold text-3xl tracking-[0.25em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] bg-clip-text">
              MOVIZ TV
            </h1>
            <p className="text-xs text-neutral-400 font-medium tracking-wide max-w-[310px] mx-auto leading-relaxed">
              Seu portal definitivo de entretenimento. Filmes, séries e canais oficiais ao seu alcance.
            </p>
          </motion.div>
        </header>

        {/* 3 REDIRECTING BUTTONS/CARDS (HUB OF LINKS) */}
        <section className="my-8 space-y-4">
          
          {/* BUTTON 1: TV CANAIS */}
          <motion.button
            id="btn-tv-canais"
            onClick={() => openInAppBrowser("https://redecanais.ee/", "TV CANAIS")}
            className="w-full text-left cursor-pointer group flex items-center bg-[#121212]/90 border border-white/5 rounded-2xl p-4.5 hover:bg-[#161616] hover:border-[#0052FF]/60 hover:scale-[1.02] transition-all duration-300 ease-out active:scale-[0.98] block relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Bright premium blue glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF]/0 via-[#0052FF]/4 to-[#0052FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Left Icon: tv icon */}
            <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#0052FF]/30 transition-all duration-300 relative z-10 overflow-hidden">
              <TvCanaisIcon size={44} />
            </div>
            
            {/* Middle Texts */}
            <div className="ml-4.5 flex-1 text-left relative z-10">
              <span className="block text-white font-bold text-[14px] tracking-wider uppercase font-display group-hover:text-white transition-colors">
                TV CANAIS
              </span>
              <span className="block text-[11px] text-neutral-400 mt-1 font-normal leading-relaxed group-hover:text-neutral-300 transition-colors">
                Assista aos seus filmes, séries e canais favoritos.
              </span>
            </div>
 
            {/* Right indicator */}
            <div className="text-neutral-600 group-hover:text-[#0052FF] group-hover:translate-x-1 transition-all duration-300 pr-1 relative z-10">
              <ChevronRight size={18} />
            </div>
          </motion.button>

          {/* BUTTON 2: SÉRIES E FILMES IPHONE */}
          <motion.button
            id="btn-iphone-app"
            onClick={() => openInAppBrowser("https://apps.apple.com/ao/app/comp-study-farm-manager/id6756660667", "Séries e Filmes iPhone")}
            className="w-full text-left cursor-pointer group flex items-center bg-[#121212]/90 border border-white/5 rounded-2xl p-4.5 hover:bg-[#161616] hover:border-[#0052FF]/60 hover:scale-[1.02] transition-all duration-300 ease-out active:scale-[0.98] block relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Bright premium blue glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF]/0 via-[#0052FF]/4 to-[#0052FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Left Icon: Custom user photo logo */}
            <div className="w-12 h-12 bg-black/20 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#0052FF]/30 transition-all duration-300 relative z-10 overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1AAesq2CwzqT0p0kk1UifSRysEQDP-08Q" 
                alt="Logo iPhone" 
                className="w-full h-full object-cover rounded-xl scale-105 group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://drive.google.com/thumbnail?id=1AAesq2CwzqT0p0kk1UifSRysEQDP-08Q&sz=w150-h150";
                }}
              />
            </div>
            
            {/* Middle Texts */}
            <div className="ml-4.5 flex-1 text-left relative z-10">
              <span className="block text-white font-bold text-[14px] tracking-wider uppercase font-display group-hover:text-white transition-colors">
                Séries e Filmes iPhone
              </span>
              <span className="block text-[11px] text-neutral-400 mt-1 font-normal leading-relaxed group-hover:text-neutral-300 transition-colors">
                Aplicativo oficial de filmes e séries para iPhone / Apple.
              </span>
            </div>
 
            {/* Right indicator */}
            <div className="text-neutral-600 group-hover:text-[#0052FF] group-hover:translate-x-1 transition-all duration-300 pr-1 relative z-10">
              <ChevronRight size={18} />
            </div>
          </motion.button>

          {/* BUTTON 3: FILMES E SÉRIES ANDROID */}
          <motion.button
            id="btn-android-app"
            onClick={() => openInAppBrowser("https://smartplayoficial.net/", "Filmes e Séries Android")}
            className="w-full text-left cursor-pointer group flex items-center bg-[#121212]/90 border border-white/5 rounded-2xl p-4.5 hover:bg-[#161616] hover:border-[#0052FF]/60 hover:scale-[1.02] transition-all duration-300 ease-out active:scale-[0.98] block relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Bright premium blue glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF]/0 via-[#0052FF]/4 to-[#0052FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Left Icon: Android Robot */}
            <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#0052FF]/30 transition-all duration-300 relative z-10 overflow-hidden">
              <AndroidRobotIcon size={44} />
            </div>
            
            {/* Middle Texts */}
            <div className="ml-4.5 flex-1 text-left relative z-10">
              <span className="block text-white font-bold text-[14px] tracking-wider uppercase font-display group-hover:text-white transition-colors">
                Filmes e Séries Android
              </span>
              <span className="block text-[11px] text-neutral-400 mt-1 font-normal leading-relaxed group-hover:text-neutral-300 transition-colors">
                Aplicativo oficial SmartPlay para dispositivos Android.
              </span>
            </div>
 
            {/* Right indicator */}
            <div className="text-neutral-600 group-hover:text-[#0052FF] group-hover:translate-x-1 transition-all duration-300 pr-1 relative z-10">
              <ChevronRight size={18} />
            </div>
          </motion.button>

        </section>

        {/* PWA PERSISTENT INSTALLATION ZONE */}
        <section className="mb-4 w-full flex flex-col items-center">
          
          {/* Case 1: App Already Installed */}
          {isInstalled ? (
            <motion.div 
              className="flex items-center space-x-2 bg-[#121212]/90 border border-[#00E676]/20 px-5 py-2.5 rounded-full text-xs text-[#00E676] font-medium tracking-wide shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <CheckCircle size={14} className="text-[#00E676]" />
              <span className="font-mono">✓ Moviz TV Instalada com Sucesso</span>
            </motion.div>
          ) : (
            /* Case 2: Unified installation button always visible! */
            <div className="w-full space-y-3">
              <motion.button
                id="install-pwa-button-unified"
                onClick={handleInstallClickUnified}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-[#0052FF] to-[#0039B3] text-white font-bold py-4.5 px-6 rounded-2xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm tracking-wide font-display shadow-[0_4px_15px_rgba(0,82,255,0.35)] border border-[#0052FF]/30 group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Download size={18} className="text-white group-hover:translate-y-0.5 transition-transform duration-200" />
                <span className="font-display tracking-widest uppercase font-extrabold text-[13px]">
                  INSTALAR APLICATIVO NO TELEFONE
                </span>
              </motion.button>
              
              <div className="text-center">
                <button
                  onClick={() => setShowIosGuide(true)}
                  className="inline-flex items-center space-x-1.5 text-neutral-400 hover:text-white transition-colors text-xs font-mono py-1 cursor-pointer"
                >
                  <HelpCircle size={14} className="text-[#0052FF]" />
                  <span>Como instalar passo a passo?</span>
                </button>
              </div>
            </div>
          )}

        </section>

        {/* COMPACT & ELEGANT FOOTER */}
        <footer className="text-center text-neutral-600 tracking-wider text-[10px] leading-relaxed mt-2 font-mono">
          <p className="font-semibold">© 2026 Moviz TV</p>
          <p className="mt-0.5 opacity-60">Todos os direitos reservados.</p>
        </footer>

      </main>

      {/* iOS & UNIVERSAL INSTALLATION MODAL / BOTTOM SHEET */}
      {renderIosGuideModal()}



      {/* 2. IN-APP STREAMING PLAYER OVERLAY */}
      <AnimatePresence>
        {activeUrl && (
          <motion.div
            id="in-app-player"
            className="fixed inset-0 z-50 bg-[#000000] flex flex-col"
            initial={{ opacity: 0, y: '5%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '5%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* 2.1 Premium Native App Header (Absolute Application look: NO address bar, NO link URL, NO domain names) */}
            <div className="bg-[#050505] border-b border-white/5 px-4 py-3 select-none shrink-0 flex items-center justify-between">
              
              {/* Elegant App Back Button */}
              <button
                onClick={() => {
                  setActiveUrl(null);
                  setActiveTitle('');
                }}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-[#121212] border border-white/5 hover:bg-[#1a1a1a] hover:border-[#0052FF]/30 text-xs font-bold text-neutral-300 hover:text-white transition-all cursor-pointer active:scale-95"
                title="Voltar ao Aplicativo"
              >
                <ArrowLeft size={14} className="text-[#0052FF]" />
                <span className="uppercase tracking-wider font-display">Voltar</span>
              </button>

              {/* Centered Category Title */}
              <div className="flex items-center">
                <span className="text-[11px] font-bold tracking-widest text-white uppercase font-display bg-[#121212] border border-white/5 px-4.5 py-1.5 rounded-full shadow-inner select-none">
                  {activeTitle}
                </span>
              </div>

              {/* Single Refresh / Reload Action Button */}
              <button
                onClick={() => {
                  setRefreshTrigger(prev => prev + 1);
                  setIframeLoading(true);
                }}
                className="flex items-center justify-center p-2 rounded-xl bg-[#121212] border border-white/5 hover:bg-[#1a1a1a] hover:border-[#0052FF]/30 text-neutral-400 hover:text-white transition-all cursor-pointer active:scale-95"
                title="Recarregar Transmissão"
              >
                <RotateCw 
                  size={14} 
                  className={iframeLoading ? 'animate-spin text-[#0052FF]' : 'text-neutral-400'} 
                />
              </button>
            </div>

            {/* 2.2 Streaming Viewport Container */}
            <div className="flex-1 w-full bg-black relative overflow-hidden">
              
              {/* Premium Loading Spinner Overlay */}
              <AnimatePresence>
                {iframeLoading && (
                  <motion.div
                    className="absolute inset-0 z-30 bg-[#000000] flex flex-col items-center justify-center p-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Deep Cinematic Blue glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,82,255,0.15)_0%,_rgba(0,0,0,0)_65%)] pointer-events-none z-0" />
                    
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className="relative mb-6">
                        <div className="absolute -inset-4 rounded-full border-2 border-t-[#0052FF] border-r-transparent border-b-[#0052FF]/20 border-l-transparent animate-spin" />
                        <MovizLogo size={70} />
                      </div>
                      <h3 className="font-display font-bold text-sm tracking-widest text-white uppercase">
                        A CARREGAR {activeTitle.toUpperCase()}
                      </h3>
                      <p className="text-[10px] text-neutral-500 mt-2 font-mono tracking-wider uppercase">
                        A PREPARAR TRANSMISSÃO SEGURA...
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Streaming Iframe */}
              <iframe
                key={`${activeUrl}-${refreshTrigger}`}
                ref={iframeRef}
                src={activeUrl || ''}
                title={activeTitle}
                className="w-full h-full border-none bg-black"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                onLoad={() => {
                  setIframeLoading(false);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
