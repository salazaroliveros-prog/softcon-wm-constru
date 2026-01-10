import React, { useState, useEffect, useRef } from "react";
import { 
  HardHat, ShieldCheck, MapPin, Camera, ShoppingCart, Users, 
  MessageSquare, LogOut, ClipboardList, Send, Calculator, 
  Wallet, CheckCircle2, X, TrendingUp, Activity, Layers, Mail, Lock, 
  Briefcase, Clock, DollarSign, Plus, Save, Trash2, Tool, ChevronRight
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// --- SOFTCON-MYS-CONSTRU-WM ---
// "CONSTRUYENDO TU FUTURO"

export default function App() {
  // --- ESTADOS DE NAVEGACIÓN Y SISTEMA ---
  const [view, setView] = useState('login'); 
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isFlipped, setIsFlipped] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scanActive, setScanActive] = useState(true);

  // --- DATOS SIMULADOS (CONECTABLES A SUPABASE) ---
  const [proyectos] = useState([
    { id: 'p1', nombre: 'Edificio Central M&S', presupuesto: 500000, gastado: 120500 },
    { id: 'p2', nombre: 'Residencial Los Olivos', presupuesto: 350000, gastado: 45000 }
  ]);
  
  const [renglones, setRenglones] = useState([
    { id: 1, actividad: "Cimentación y Zapata", ponderacion: 15, completado: true },
    { id: 2, actividad: "Levantado de Muros 1er Nivel", ponderacion: 25, completado: false },
    { id: 3, actividad: "Instalaciones Hidráulicas", ponderacion: 10, completado: false },
  ]);

  // --- EFECTO VISUAL SCANNER LOGIN ---
  useEffect(() => {
    const interval = setInterval(() => setScanActive(prev => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setView('main'); setLoading(false); }, 1500);
  };

  // --- VISTA 1: LOGIN PROFESIONAL ---
  if (view === 'login') {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#010204] relative overflow-hidden font-sans">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070" className="w-full h-full object-cover" alt="obra" />
        </div>
        
        <div className="relative z-10 w-full max-w-[450px] h-[650px]" style={{ perspective: '2000px' }}>
          <div className={`relative w-full h-full transition-all duration-1000 shadow-2xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
            
            {/* CARA FRONTAL: ACCESO */}
            <div className="absolute inset-0 w-full h-full bg-slate-900/95 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 [backface-visibility:hidden] flex flex-col">
              <div className={`absolute top-0 left-0 w-full h-1 bg-yellow-500/50 shadow-[0_0_15px_#eab308] transition-all duration-[3000ms] ${scanActive ? 'translate-y-[650px]' : 'translate-y-0'}`} />
              
              <div className="flex flex-col items-center mb-10">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/20">
                  <HardHat size={35} className="text-slate-900" />
                </div>
                <h1 className="text-yellow-500 text-2xl font-black tracking-tighter italic uppercase">SOFTCON-MYS</h1>
                <p className="text-white/40 text-[9px] font-bold tracking-[0.3em] uppercase italic">"CONSTRUYENDO TU FUTURO"</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] text-yellow-500 font-black uppercase ml-2">ID Operador</label>
                  <input required type="email" placeholder="usuario@softcon.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-sm outline-none focus:border-yellow-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-yellow-500 font-black uppercase ml-2">Security Key</label>
                  <input required type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-sm outline-none focus:border-yellow-500 transition-all" />
                </div>
                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 py-4 rounded-2xl text-slate-900 font-black text-xs uppercase tracking-widest mt-4 transition-all transform active:scale-95 shadow-xl shadow-yellow-500/10">
                  {loading ? "AUTENTICANDO..." : "INICIAR SISTEMA"}
                </button>
              </form>

              <button onClick={() => setIsFlipped(true)} className="mt-auto text-[10px] text-white/40 hover:text-yellow-500 font-bold uppercase text-center transition-all">
                SOLICITAR ACCESO ADMINISTRADOR →
              </button>
            </div>

            {/* CARA TRASERA: ADMIN */}
            <div className="absolute inset-0 w-full h-full bg-yellow-600/90 backdrop-blur-xl p-10 rounded-[40px] [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-slate-900">
              <ShieldCheck size={80} className="mb-6" />
              <h2 className="font-black text-2xl uppercase italic mb-2">MODO CENTRAL</h2>
              <p className="text-center text-sm font-bold opacity-80 mb-10">Acceso restringido para gestión de planillas y presupuestos maestros.</p>
              <button onClick={() => setView('main')} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase">VALIDAR TOKEN</button>
              <button onClick={() => setIsFlipped(false)} className="mt-6 text-xs font-black underline uppercase">Volver</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VISTA 2: APLICACIÓN PRINCIPAL ---
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      {/* NAVBAR SUPERIOR */}
      <nav className="bg-slate-900 text-white p-5 flex justify-between items-center sticky top-0 z-50 shadow-xl border-b border-yellow-500/30">
        <div className="flex items-center gap-4">
          <div className="bg-yellow-500 p-2 rounded-lg"><HardHat size={20} className="text-slate-900" /></div>
          <div>
            <h2 className="font-black text-xl tracking-tighter italic uppercase leading-none">SOFTCON-MYS</h2>
            <p className="text-[8px] text-yellow-500 font-bold uppercase tracking-[0.2em] italic">"CONSTRUYENDO TU FUTURO"</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setChatOpen(true)} className="bg-white/5 p-3 rounded-xl hover:bg-yellow-500 hover:text-slate-900 transition-all"><MessageSquare size={18}/></button>
          <button onClick={() => setView('login')} className="bg-red-500/10 p-3 rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all"><LogOut size={18}/></button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <aside className="w-20 md:w-64 bg-white border-r border-slate-200 flex flex-col p-4 gap-2">
          {[
            { id: 'dashboard', name: 'Dashboard Central', icon: <Layers size={20}/> },
            { id: 'bitacora', name: 'Control de Obra', icon: <ClipboardList size={20}/> },
            { id: 'inventario', name: 'Almacén/Equipos', icon: <ShoppingCart size={20}/> },
            { id: 'planilla', name: 'Planilla Digital', icon: <Wallet size={20}/> }
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${activeTab === tab.id ? 'bg-slate-900 text-yellow-500 shadow-lg shadow-slate-900/20' : 'text-slate-400 hover:bg-slate-50'}`}>
              {tab.icon} <span className="hidden md:block text-[10px] font-black uppercase tracking-widest">{tab.name}</span>
            </button>
          ))}
        </aside>

        {/* CONTENIDO DINÁMICO */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50 space-y-8">
          
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-center gap-6">
                  <div className="bg-blue-100 p-4 rounded-2xl text-blue-600"><Activity/></div>
                  <div><p className="text-[10px] font-black text-slate-400 uppercase">Avance Global</p><h3 className="text-2xl font-black italic">68.5%</h3></div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-center gap-6">
                  <div className="bg-green-100 p-4 rounded-2xl text-green-600"><DollarSign/></div>
                  <div><p className="text-[10px] font-black text-slate-400 uppercase">Presupuesto Ejecutado</p><h3 className="text-2xl font-black italic">Q 165,500</h3></div>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-center gap-6">
                  <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-600"><Users/></div>
                  <div><p className="text-[10px] font-black text-slate-400 uppercase">Personal en Sitio</p><h3 className="text-2xl font-black italic">14 Operadores</h3></div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-200">
                <h3 className="font-black text-slate-900 text-xs uppercase mb-6 flex items-center gap-2"><TrendingUp size={16} className="text-blue-500"/> Flujo de Caja Mensual</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[{n: 'Ene', v: 400}, {n: 'Feb', v: 300}, {n: 'Mar', v: 600}]}>
                      <XAxis dataKey="n" fontSize={10} fontStyle="bold" />
                      <YAxis fontSize={10} />
                      <Tooltip />
                      <Bar dataKey="v" fill="#0f172a" radius={[10, 10, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bitacora' && (
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-slate-900 p-10 rounded-[45px] text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black italic uppercase">Renglones de Obra</h3>
                  <p className="text-yellow-500 font-bold text-[10px] tracking-widest mt-1">SEGUIMIENTO EN TIEMPO REAL</p>
                </div>
                <div className="absolute right-[-20px] top-[-20px] opacity-10"><ClipboardList size={200}/></div>
              </div>
              <div className="bg-white p-4 rounded-[35px] shadow-sm space-y-3">
                {renglones.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-yellow-500 transition-all">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setRenglones(renglones.map(r => r.id === item.id ? {...r, completado: !r.completado} : r))}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${item.completado ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-300'}`}
                      >
                        <CheckCircle2 size={24}/>
                      </button>
                      <span className="font-black uppercase text-[11px] text-slate-700 italic">{item.actividad}</span>
                    </div>
                    <span className="bg-slate-50 px-3 py-1 rounded-full text-[9px] font-black text-slate-400">{item.ponderacion}% POND.</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'inventario' && (
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-200">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="font-black text-xl uppercase italic">Inventario Maestro</h3>
                  <button className="bg-slate-900 text-yellow-500 px-6 py-3 rounded-2xl font-black text-[10px] uppercase flex items-center gap-2"><Plus size={16}/> Nuevo Item</button>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left text-[11px] font-bold">
                    <thead className="bg-slate-50 text-slate-400 uppercase tracking-widest">
                      <tr><th className="p-4">Herramienta/Equipo</th><th className="p-4">Cant.</th><th className="p-4">Estado</th><th className="p-4">Acción</th></tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 italic">Rotomartillo Industrial</td>
                        <td className="p-4">03</td>
                        <td className="p-4"><span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[9px]">OPERATIVO</span></td>
                        <td className="p-4 text-slate-300"><Trash2 size={16}/></td>
                      </tr>
                    </tbody>
                 </table>
               </div>
            </div>
          )}

          {activeTab === 'planilla' && (
             <div className="bg-white p-10 rounded-[45px] shadow-sm border border-slate-200 text-center space-y-6">
                <Wallet size={60} className="mx-auto text-slate-200" />
                <h3 className="font-black text-2xl uppercase italic">Control de Planillas</h3>
                <p className="text-slate-500 text-sm font-medium max-w-sm mx-auto">Este módulo se conecta directamente con la base de datos de empleados para generar pagos automáticos.</p>
                <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest">Generar Nómina Semanal</button>
             </div>
          )}

        </main>
      </div>

      {/* CHAT CENTRAL FLOTANTE */}
      {chatOpen && (
        <div className="fixed bottom-10 right-10 z-[100] w-[380px] h-[550px] bg-white rounded-[40px] shadow-2xl flex flex-col border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-10">
           <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-black text-[10px] uppercase italic tracking-widest">Enlace Central SOFTCON</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="hover:rotate-90 transition-all"><X size={20}/></button>
           </div>
           <div className="flex-1 p-6 bg-slate-50 overflow-y-auto space-y-4">
             <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none text-[11px] font-bold text-slate-600 shadow-sm max-w-[80%]">
               Bienvenido al sistema de mensajería M&S. ¿En qué puedo apoyarle hoy?
             </div>
           </div>
           <div className="p-4 border-t bg-white flex gap-2">
             <input className="flex-1 bg-slate-100 rounded-2xl p-4 text-[11px] font-bold outline-none" placeholder="Reportar incidencia..." />
             <button className="bg-slate-900 text-yellow-500 p-4 rounded-2xl"><Send size={18}/></button>
           </div>
        </div>
      )}
    </div>
  );
}