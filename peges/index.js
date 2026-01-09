import React, { useState, useEffect, useRef } from "react";
import { createClient } from '@supabase/supabase-js';
import { 
  HardHat, ShieldCheck, ArrowRight, MapPin, Camera, 
  ShoppingCart, Users, MessageSquare, LogOut, CheckSquare, 
  ClipboardList, Send, Calculator, Wallet, CheckCircle2, X, 
  TrendingUp, Activity, ChevronRight, Mail, Lock, Layers
} from "lucide-react";
import SignatureCanvas from 'react-signature-canvas';

// --- CONFIGURACIÓN SUPABASE ---
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function SoftconUnifiedApp() {
  const [session, setSession] = useState(null);
  const [view, setView] = useState('login'); 
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const sigCanvas = useRef({});

  // TEST DE CONEXIÓN A SUPABASE
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from('usuarios').select('*').limit(1);
      if (error) {
        alert('Error de conexión a Supabase: ' + error.message);
      } else {
        alert('¡Conexión a Supabase exitosa!');
      }
    }
    testConnection();
  }, []);
  // ESTADO FINANCIERO Y OPERATIVO
  const [finanzas, setFinanzas] = useState({ ingresos: 185000, egresos: 52000 });
  const [chatOpen, setChatOpen] = useState(false);

  // --- LÓGICA DE NEGOCIO ---
  const registrarGasto = (monto) => {
    setFinanzas(prev => ({ ...prev, egresos: prev.egresos + monto }));
    alert("Gasto registrado: Balance actualizado en tiempo real.");
  };

  // --- VISTA 1: LOGIN PROFESIONAL (Basado en archivo cargado) ---
  if (view === 'login') {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#010204] overflow-hidden relative font-sans">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=90&w=2070" className="w-full h-full object-cover opacity-40 mix-blend-soft-light" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#010204] via-transparent to-[#010204] h-full" />
        </div>

        <div className="relative z-10 w-full max-w-[1150px] flex flex-col md:flex-row items-center gap-16 p-6">
          {/* BRANDING IZQUIERDA */}
          <div className="hidden md:flex flex-col flex-1 -mt-24 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full w-fit">
                <Activity size={16} className="text-yellow-500 animate-pulse" />
                <span className="text-yellow-500 text-[10px] font-black uppercase tracking-[4px]">System v4.5</span>
              </div>
              <h1 className="text-8xl font-black text-white leading-none tracking-tighter">SOFTCON<br/><span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>MYS</span></h1>
            </div>
            <p className="text-slate-200 text-xl border-l-4 border-yellow-500 pl-8 italic font-light leading-relaxed drop-shadow-lg tracking-widest">"CONSTRUYENDO TU FUTURO"</p>
          </div>

          {/* TERMINAL FLIP DERECHA */}
          <div className="relative w-full max-w-[480px] h-[660px]" style={{ perspective: "2500px" }}>
            <div className="relative w-full h-full transition-all duration-[1100ms]" style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
              
              {/* LADO A: LOGIN ACCESO */}
              <div className="absolute inset-0 w-full h-full rounded-[50px] p-12 flex flex-col border border-white/10 shadow-2xl overflow-hidden" style={{ backfaceVisibility: "hidden", background: "linear-gradient(165deg, rgba(15,23,42,0.94) 0%, rgba(2,4,8,1) 100%)", backdropFilter: "blur(30px)" }}>
                <div className="flex items-center justify-between mb-14">
                  <div className="p-3.5 bg-yellow-400 rounded-2xl shadow-lg shadow-yellow-400/20"><HardHat size={30} className="text-slate-900" /></div>
                  <div className="text-right">
                    <p className="text-[11px] text-slate-500 font-black uppercase tracking-widest">Terminal Alpha-9</p>
                    <div className="flex items-center gap-1.5 justify-end mt-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /><p className="text-white/40 text-[9px]">Secure Connection</p></div>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tight italic">Access Control</h2>
                <div className="h-[3px] w-20 bg-yellow-400 mb-12 shadow-[0_0_15px_#facc15]" />

                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setView('dashboard'); }}>
                  <div className="group relative">
                    <input type="email" placeholder=" " className="peer w-full bg-transparent border-b border-slate-700 py-4 text-white outline-none focus:border-yellow-400 transition-all placeholder-transparent" />
                    <label className="absolute left-0 top-4 text-slate-500 text-sm transition-all peer-focus:-top-4 peer-focus:text-yellow-400 peer-focus:text-[11px] peer-focus:uppercase peer-focus:font-black">Email de Operaciones</label>
                    <Mail className="absolute right-0 top-4 text-slate-700" size={20} />
                  </div>
                  <button type="submit" className="w-full relative group overflow-hidden py-5 rounded-2xl transition-all shadow-[0_20px_40px_rgba(202,138,4,0.3)] border border-yellow-500/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 via-yellow-300 to-yellow-600" />
                    <span className="relative z-10 flex items-center justify-center gap-3 text-sm font-black text-black uppercase">Ingresar al Ecosistema</span>
                  </button>
                </form>

                <div className="mt-auto pt-12 flex flex-col items-center">
                  <button onClick={() => setIsFlipped(true)} className="group relative flex items-center gap-6">
                    <span className="text-base font-bold text-white transition-all">¿Nuevo Personal?</span>
                    <div className="w-[1.5px] h-8 bg-yellow-400/60" />
                    <span className="text-lg font-black uppercase tracking-tighter text-white group-hover:drop-shadow-[0_0_6px_#fff]">Regístrate</span>
                  </button>
                </div>
              </div>

              {/* LADO B: REGISTRO (Blueprint System) */}
              <div className="absolute inset-0 w-full h-full rounded-[50px] p-12 flex flex-col border border-blue-500/30 shadow-2xl" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "linear-gradient(165deg, #020617 0%, #1e1b4b 100%)", backdropFilter: "blur(35px)" }}>
                <div className="flex justify-between items-start mb-12"><Layers size={36} className="text-blue-400" /><div className="text-right"><p className="text-[11px] text-blue-400 font-black uppercase">Blueprint System</p></div></div>
                <h2 className="text-3xl font-black text-white mb-10 uppercase leading-tight italic tracking-tighter">Iniciar<br/><span className="text-blue-400 tracking-widest">Onboarding</span></h2>
                <button onClick={() => setView('onboarding')} className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl shadow-[0_25px_50px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 uppercase text-sm">Comenzar Registro Digital <ArrowRight size={22} /></button>
                <button onClick={() => setIsFlipped(false)} className="mt-auto mx-auto text-[11px] font-black text-slate-500 hover:text-white uppercase tracking-widest">← Volver al Terminal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VISTA 2: ONBOARDING (Selfie + Firma Legal) ---
  if (view === 'onboarding') {
    return (
      <div className="min-h-screen bg-slate-50 p-6 flex items-center justify-center font-sans">
        <div className="w-full max-w-2xl bg-white p-12 rounded-[60px] shadow-2xl space-y-8">
           <div className="text-center"><h2 className="font-black text-3xl uppercase tracking-tighter">Expediente Digital</h2><p className="text-blue-600 text-[10px] font-black uppercase tracking-widest">SOFTCON-MYS-CONSTRU-WM</p></div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-2 text-center">
               <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">1. Selfie Patrón (AI Id)</span>
               <div className="aspect-square bg-slate-100 rounded-[40px] flex items-center justify-center border-2 border-dashed border-slate-300 relative group overflow-hidden">
                 <Camera size={40} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                 <input type="file" accept="image/*" capture="user" className="absolute opacity-0 w-full h-full cursor-pointer" />
               </div>
             </div>
             <div className="space-y-2">
               <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">2. Firma de Responsabilidad</span>
               <div className="bg-slate-50 border border-slate-200 rounded-[40px] overflow-hidden">
                 <SignatureCanvas ref={sigCanvas} penColor='#000' canvasProps={{className: 'w-full h-48'}} />
               </div>
               <button onClick={() => sigCanvas.current.clear()} className="text-[9px] font-bold text-red-500 uppercase tracking-widest mt-2">Limpiar Firma</button>
             </div>
           </div>
           <button onClick={() => setView('mensaje_bendicion')} className="w-full bg-black text-white py-6 rounded-[30px] font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-slate-800 transition-all">Finalizar Contratación Digital</button>
        </div>
      </div>
    );
  }

  // --- VISTA 3: DASHBOARD ADMINISTRATIVO (BI & GANANCIAS) ---
  if (view === 'dashboard') {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
        <nav className="bg-slate-900 text-white p-6 flex justify-between items-center shadow-xl sticky top-0 z-50">
          <div><h2 className="font-black text-2xl tracking-tighter uppercase">SOFTCON-MYS</h2><p className="text-[9px] text-yellow-400 font-bold uppercase tracking-widest italic italic">Construyendo Tu Futuro</p></div>
          <div className="flex gap-4">
            <button onClick={() => setChatOpen(true)} className="relative bg-white/10 p-3 rounded-2xl hover:bg-blue-600 transition-all"><MessageSquare size={22} /><span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[8px] flex items-center justify-center font-bold">2</span></button>
            <button onClick={() => setView('login')} className="bg-red-500/10 p-3 rounded-2xl text-red-400 hover:bg-red-500 hover:text-white transition-all"><LogOut size={22}/></button>
          </div>
        </nav>

        <main className="p-6 max-w-7xl mx-auto w-full space-y-6">
          {/* SECCIÓN FINANCIERA REAL-TIME */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-slate-900 p-10 rounded-[45px] text-white shadow-2xl relative overflow-hidden">
               <TrendingUp className="absolute right-[-20px] top-[-20px] text-white/5 w-60 h-60" />
               <p className="text-yellow-400 text-[11px] font-black uppercase tracking-[0.3em] mb-2 italic">Ganancia Neta del Proyecto</p>
               <h3 className="text-5xl font-black tracking-tighter">Q. {(finanzas.ingresos - finanzas.egresos).toLocaleString()}</h3>
            </div>
            <div className="bg-white p-8 rounded-[45px] shadow-sm border border-slate-200">
               <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4 italic text-center">Registrar Gasto Directo</p>
               <div className="space-y-3">
                 <button onClick={() => registrarGasto(1200)} className="w-full bg-slate-50 hover:bg-red-50 text-slate-800 p-4 rounded-3xl text-[10px] font-black uppercase border border-slate-100 transition-all">Materiales (Factura)</button>
                 <button onClick={() => registrarGasto(2500)} className="w-full bg-slate-50 hover:bg-red-50 text-slate-800 p-4 rounded-3xl text-[10px] font-black uppercase border border-slate-100 transition-all">Pago de Alquiler</button>
               </div>
            </div>
            <div className="bg-white p-8 rounded-[45px] shadow-sm border border-slate-200 flex flex-col justify-center text-center">
               <div className="bg-orange-100 text-orange-600 p-4 rounded-3xl mb-4 animate-pulse"><p className="text-[10px] font-black uppercase tracking-tighter">Alerta: Equipo Vence Mañana</p></div>
               <button className="bg-green-600 text-white py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest shadow-lg">Generar Planilla Semanal</button>
            </div>
          </div>

          {/* ACCESOS A MÓDULOS DE CAMPO */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               {name: 'Asistencia GPS', icon: <MapPin/>, color: 'blue'},
               {name: 'Bitácora Campo', icon: <ClipboardList/>, color: 'purple'},
               {name: 'Inventarios', icon: <ShoppingCart/>, color: 'orange'},
               {name: 'Calculadora APU', icon: <Calculator/>, color: 'slate'},
             ].map((mod, i) => (
               <button key={i} className="bg-white p-10 rounded-[50px] shadow-sm flex flex-col items-center gap-5 hover:bg-slate-900 group transition-all duration-500">
                 <div className="w-16 h-16 bg-slate-50 text-slate-600 rounded-[22px] flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all">{mod.icon}</div>
                 <span className="text-[11px] font-black uppercase tracking-tight group-hover:text-white">{mod.name}</span>
               </button>
             ))}
          </div>
        </main>

        {/* CHAT MODAL INTEGRADO */}
        {chatOpen && (
          <div className="fixed bottom-10 right-10 z-[100] w-[350px] h-[500px] bg-white rounded-[40px] shadow-2xl flex flex-col border border-slate-100 overflow-hidden">
             <div className="bg-slate-900 p-6 flex justify-between items-center text-white font-black text-xs uppercase italic tracking-widest">Chat Obra-Admin <button onClick={() => setChatOpen(false)}><X/></button></div>
             <div className="flex-1 p-6 bg-slate-50 space-y-4 overflow-y-auto">
               <div className="bg-yellow-400 text-black p-4 rounded-2xl rounded-tr-none text-[11px] font-bold ml-10 italic">Admin: ¿Status del vaciado Sector B?</div>
               <div className="bg-white text-slate-800 p-4 rounded-2xl rounded-tl-none text-[11px] font-bold mr-10 shadow-sm border">Supervisor: En proceso. Enviando fotos...</div>
             </div>
             <div className="p-4 border-t flex gap-2"><input className="flex-1 bg-slate-100 rounded-2xl p-4 text-[11px] outline-none" placeholder="Escribir reporte..." /><button className="bg-blue-600 text-white p-4 rounded-2xl"><Send size={18}/></button></div>
          </div>
        )}
      </div>
    );
  }

  // --- VISTA 4: MENSAJE DE BENDICIÓN ---
  if (view === 'mensaje_bendicion') {
    return (
      <div className="min-h-screen bg-blue-600 flex items-center justify-center p-8 text-center text-white font-sans">
        <div className="animate-in fade-in duration-1000">
          <CheckCircle2 size={120} className="mx-auto mb-10 animate-bounce" />
          <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter leading-none italic italic">M&S TE AGRADECE POR TU ESFUERZO BENDICIONES</h1>
          <p className="text-blue-100 font-bold uppercase text-[11px] tracking-[0.5em] italic">"CONSTRUYENDO TU FUTURO"</p>
          <button onClick={() => setView('login')} className="mt-16 bg-white text-blue-600 px-16 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all italic">Regresar al Sistema</button>
        </div>
      </div>
    );
  }

  return null;
}