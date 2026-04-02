import React, { useState, useEffect } from 'react';
import { 
  Microscope, 
  Activity, 
  Users, 
  Mail, 
  ChevronRight, 
  MapPin, 
  Phone, 
  ExternalLink,
  Award,
  CheckCircle,
  Linkedin,
  GraduationCap,
  Cpu,
  Zap,
  Menu,
  X,
  Globe,
  AlertCircle,
  ChevronLeft,
  BookOpen
} from 'lucide-react';

// ==========================================
// 1. CONFIGURACIÓN Y TRADUCCIONES
// ==========================================
const translations = {
  es: {
    nav: { inicio: "Inicio", investigacion: "Investigación", proyectos: "Proyectos", servicios: "Infraestructura", equipo: "Equipo", publicaciones: "Publicaciones", contacto: "Contacto" },
    hero: { title: "Innovación en la intersección de la ", biology: "biología", and: " y la ", engineering: "ingeniería", description: "El Laboratorio de Biomecánica y Biomateriales (LABBIOM2) desarrolla investigación de vanguardia para mejorar la calidad de vida mediante nuevos materiales médicos y la comprensión del movimiento humano.", btnResearch: "Líneas de Investigación", btnContact: "Colabora con nosotros" },
    collabs: { title: "Nuestras Colaboraciones", description: "Trabajamos con prestigiosas instituciones nacionales e internacionales." },
    research: { 
      title: "Líneas de Investigación", 
      lines: [
        { title: "Biomecánica", desc: "Análisis de la respuesta biomecánica en tejidos blandos y duros mediante técnicas experimentales avanzadas." },
        { title: "Biomateriales", desc: "Modelización, caracterización y creación de nuevos materiales destinados a aplicaciones biomédicas e industriales." },
        { title: "Biomecánica Computacional", desc: "Uso de servidores de cálculo de alto rendimiento para la simulación numérica de sistemas biológicos complejos." },
        { title: "Mecanobiología", desc: "Estudio de la influencia de las fuerzas mecánicas en el comportamiento celular y la transducción de señales." }
      ]
    },
    team: { title: "Nuestro Equipo", description: "Académicos e investigadores comprometidos con la excelencia científica y la innovación.", roles: { academic: "Académico e Investigador", docStudent: "Estudiante de Doctorado", magStudent: "Estudiante de Magíster" } },
    publications: { title: "Publicaciones Científicas", link: "DOI / Enlace", empty: "No hay publicaciones disponibles en este momento." },
    projects: { 
      title: "Proyectos y Becas", 
      tabs: { research: "Investigación", scholarships: "Becas ANID" },
      role: "Rol", 
      fund: "Fondo", 
      scholar: "Becario",
      thesis: "Tema / Tesis",
      empty: "No hay proyectos disponibles en este momento.",
      emptyBecas: "No hay becas registradas en este momento."
    },
    infrastructure: { 
      title: "Capacidades e Infraestructura", 
      description: "LABBIOM2 cuenta con equipamiento de vanguardia para la caracterización mecánica avanzada.",
      categories: [
        { 
          id: 'mechanical', 
          title: "Ensayos Mecánicos", 
          items: [
            "Máquina Biaxial (Cellscale)", 
            "Máquina Uniaxial (INSTRON 3342)", 
            "Nanoindentador INANO/Nanomechanics", 
            "Miógrafo de presión DMT", 
            "Sistema de aspiración por micropipeta para deformación celular"
          ] 
        },
        { 
          id: 'optical', 
          title: "Análisis y Óptica", 
          items: [
            "Microscopio de Fluorescencia de 3 canales acoplado para ensayos mecánicos", 
            "Microscopio invertido Euromex",
            "Extensómetro Óptico", 
            "Escáner 3D de alta precisión"
          ] 
        },
        { 
          id: 'tech', 
          title: "Tecnología y Laboratorio", 
          items: [
            "2 Servidores de cómputo AMD Threadripper", 
            "Impresoras 3D", 
            "Gabinete de bioseguridad Tipo 2", 
            "Sistema de bomba de vacío", 
            "Dispositivos de microfluídica", 
            "Limpiador de Plasma Harrick Plasma Basic 115V",
            "Equipos menores"
          ] 
        }
      ]
    },
    contact: { 
      title: "Contacto", 
      location: "Ubicación", 
      address: "Edificio de Ingeniería en Climatización, sector norte S7, DIMEC USACH. Av. B. O' Higgins 3363.", 
      email: "Correo Electrónico", 
      phone: "Teléfono", 
      form: { 
        name: "Nombre completo", 
        mail: "Email", 
        message: "Mensaje...", 
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito!",
        error: "Hubo un error al enviar. Intenta nuevamente."
      } 
    },
    footer: { institutional: "Institucional", rights: "Todos los derechos reservados." }
  },
  en: {
    nav: { inicio: "Home", investigacion: "Research", proyectos: "Projects", servicios: "Infrastructure", equipo: "People", publicaciones: "Publications", contacto: "Contact" },
    hero: { title: "Innovation at the intersection of ", biology: "biology", and: " and ", engineering: "engineering", description: "The Biomechanics and Biomaterials Laboratory (LABBIOM2) is dedicated to cutting-edge research to improve quality of life.", btnResearch: "Research Lines", btnContact: "Contact Us" },
    collabs: { title: "Our Collaborations", description: "Working with prestigious national and international institutions." },
    research: { 
      title: "Research Lines", 
      lines: [
        { title: "Biomechanics", desc: "Biomechanical response analysis in tissues using advanced experimental techniques." },
        { title: "Biomaterials", desc: "Modeling and creation of new materials for medical and industrial applications." },
        { title: "Computational Biomechanics", desc: "Use of high-performance computing for numerical simulation of biological systems." },
        { title: "Mechanobiology", desc: "Study of how physical forces regulate cell behavior and signal transduction." }
      ]
    },
    team: { title: "Our People", description: "Dedicated academics and researchers committed to scientific excellence.", roles: { academic: "Academic & Researcher", docStudent: "PhD Student", magStudent: "Master's Student" } },
    publications: { title: "Scientific Publications", link: "DOI / Link", empty: "No publications available at the moment." },
    projects: { 
      title: "Projects & Scholarships", 
      tabs: { research: "Research", scholarships: "ANID Scholarships" },
      role: "Role", 
      fund: "Fund", 
      scholar: "Scholar",
      thesis: "Thesis / Topic",
      empty: "No projects available at the moment.",
      emptyBecas: "No scholarships registered at the moment."
    },
    infrastructure: { 
      title: "Infrastructure", 
      description: "State-of-the-art equipment for advanced mechanical characterization.",
      categories: [
        { 
          id: 'mechanical', 
          title: "Mechanical Testing", 
          items: [
            "Biaxial Machine (Cellscale)", 
            "Uniaxial Machine (INSTRON 3342)", 
            "INANO/Nanomechanics Nanoindentor", 
            "DMT Pressure Myograph", 
            "Micropipette aspiration system for cell deformation"
          ] 
        },
        { 
          id: 'optical', 
          title: "Analysis & Optics", 
          items: [
            "3-channel Fluorescence Microscope coupled for mechanical testing", 
            "Euromex Inverted Microscope",
            "Optical Extensometer", 
            "High-precision 3D Scanner"
          ] 
        },
        { 
          id: 'tech', 
          title: "Technology & Lab", 
          items: [
            "2 AMD Threadripper computing servers", 
            "3D Printers", 
            "Type 2 Biosafety Cabinet", 
            "Vacuum pump system", 
            "Microfluidic devices", 
            "Harrick Plasma Basic Plasma Cleaner 115V",
            "Minor equipment"
          ] 
        }
      ]
    },
    contact: { 
      title: "Contact", 
      location: "Location", 
      address: "Climatization Building S7, DIMEC USACH. Av. B. O' Higgins 3363.", 
      email: "Email", 
      phone: "Phone", 
      form: { 
        name: "Full Name", 
        mail: "Email", 
        message: "Message...", 
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "There was an error sending. Please try again."
      } 
    },
    footer: { institutional: "Institutional", rights: "All rights reserved." }
  }
};

// ==========================================
// 2. COMPONENTES DE LOGOS
// ==========================================

const BioMatLogo = ({ className = "w-14 h-14" }) => (
  <div className={`${className} flex items-center justify-center`}>
    <img 
      src="https://i.ibb.co/jjxXKJv/Lab-Bio-Logo-02.png" 
      alt="Logo BioMat Lab" 
      className="max-w-full max-h-full object-contain pointer-events-none drop-shadow-sm"
      loading="eager"
      onError={(e) => {
        if (!e.target.dataset.triedLocal) {
          e.target.dataset.triedLocal = "true";
          e.target.src = "/logo-biomat.png";
        } else {
          e.target.onerror = null;
          e.target.src = "https://ui-avatars.com/api/?name=Bio+Mat&background=0d9488&color=fff&bold=true";
        }
      }}
    />
  </div>
);

const DimecLogo = ({ className = "h-10 w-auto" }) => (
  <img 
    src="https://dimec.usach.cl/wp-content/uploads/2021/08/DIMEC-opc.2-color.png" 
    alt="Logo DIMEC USACH" 
    className={`${className} object-contain`}
  />
);

// ==========================================
// 3. COMPONENTE PRINCIPAL (APP)
// ==========================================

const App = () => {
  const [lang, setLang] = useState('es');
  const [activeTab, setActiveTab] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Estados de datos
  const [publications, setPublications] = useState([]);
  const [projects, setProjects] = useState([]);
  const [becas, setBecas] = useState([]);
  
  const [loadingPubs, setLoadingPubs] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [loadingBecas, setLoadingBecas] = useState(false);

  // Estados de interfaz
  const [projectSubTab, setProjectSubTab] = useState('research');

  // Estados de Formulario de Contacto
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 

  // Paginación
  const [currentPubPage, setCurrentPubPage] = useState(1);
  const [currentProjPage, setCurrentProjPage] = useState(1);
  const itemsPerPage = 8;

  const t = translations[lang];

  // Manejador del Formulario de Contacto
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formEndpoint = "https://formspree.io/f/xkoqrpla"; 

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          Mensaje: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Función genérica para rescatar datos de Google Sheets
  const fetchSheetData = async (sheetId, sheetName) => {
    try {
      const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
      const response = await fetch(url);
      const text = await response.text();
      const match = text.match(/\{.*\}/s);
      if (!match) return null;
      const data = JSON.parse(match[0]);
      return data.table.rows.map(row => ({
        c: row.c.map(cell => cell ? (cell.v || cell.f || '') : '')
      }));
    } catch (e) {
      console.error(`Error cargando ${sheetName}:`, e);
      return null;
    }
  };

  useEffect(() => {
    if (activeTab === 'publicaciones') {
      const loadPubs = async () => {
        setLoadingPubs(true);
        const rows = await fetchSheetData('1B0OxLu53JrPy3Y2Np3GeoPCBh5-cVVCnF0d-TWUljsU', 'Publicaciones');
        if (rows) {
          const parsed = rows.map(r => {
            const getStr = (val) => (val !== null && val !== undefined) ? String(val) : '';
            const linkVal = getStr(r.c[4]);
            return {
              year: getStr(r.c[0]), 
              title: getStr(r.c[1]), 
              journal: getStr(r.c[2]), 
              authors: getStr(r.c[3]),
              link: linkVal ? (linkVal.startsWith('http') ? linkVal : 'https://' + linkVal) : '#'
            };
          });
          setPublications(parsed.filter(p => p.title.trim() !== '' && p.title.toLowerCase() !== 'título' && p.title.toLowerCase() !== 'titulo'));
        }
        setLoadingPubs(false);
      };
      loadPubs();
    }
    
    if (activeTab === 'proyectos') {
      // Cargar Proyectos
      const loadProjects = async () => {
        setLoadingProjects(true);
        const rows = await fetchSheetData('1lxQtr9vm4M8IaJclfMZHJBpZxAzx2bRLRsslk1R3DnU', 'Hoja 1');
        if (rows) {
          const parsed = rows.map(r => {
            const getStr = (val) => (val !== null && val !== undefined) ? String(val) : '';
            return {
              year: getStr(r.c[0]), title: getStr(r.c[1]), fund: getStr(r.c[2]), role: getStr(r.c[3]), link: '#'
            };
          });
          setProjects(parsed.filter(p => p.title.length > 5 && !p.title.toLowerCase().includes('nombre del proyecto')));
        }
        setLoadingProjects(false);
      };
      
      // Cargar Becas ANID
      const loadBecas = async () => {
        setLoadingBecas(true);
        const rows = await fetchSheetData('15Ai7KY-7TW9aaFDapKOmK8PPyF8kMnu2AvIFiNv1VdY', 'Hoja 1');
        if (rows) {
          const parsed = rows.map(r => {
            const getStr = (val) => (val !== null && val !== undefined) ? String(val) : '';
            return {
              year: getStr(r.c[0]), scholar: getStr(r.c[1]), scholarshipName: getStr(r.c[2])
            };
          });
          setBecas(parsed.filter(b => b.scholar.length > 2 && !b.scholar.toLowerCase().includes('nombre del becario')));
        }
        setLoadingBecas(false);
      };

      loadProjects();
      loadBecas();
    }
  }, [activeTab]);

  const collaborations = [
    { name: "Universidad de Santiago de Chile", logo: "https://sic.vriic.usach.cl/assets/images/Usach_S1.png" },
    { name: "U. Chile", logo: "https://uchile.cl/dam/jcr:f7c441b2-ffda-4f5b-b278-66c3cba024c8/image.jpg" },
    { name: "PUC Chile", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Marca-uc.svg/960px-Marca-uc.svg.png" },
    { name: "U. Adolfo Ibáñez", logo: "https://datacubechile.cl/wp-content/uploads/2022/08/logo-uai.png" },
    { name: "Universidad de O'Higgins", logo: "https://uohiggins.hiringroom.com/data/accounts/uohiggins/microsite/459f33184653680839be4d3e3fbb096c.png" },
    { name: "Universidad Santo Tomás", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvM8N2JyYfqo02iU6axIz0IBJw2mGZA8TaWQ&s" },
    { name: "Universidad San Sebastián", logo: "https://researchers.uss.cl/skin/footerIcon/" },
    { name: "COIPSA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GgfBk06OhN7lZL5SRClP1aTIveENzzXT9g&s" },
    { name: "UP Madrid", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSsAsJLsWYN1XOxwOmZZGbCBcZkhYeS24aQ&s" },
    { name: "Centro de Tecnología Biomédica", logo: "https://www.upm.es/gsfs/SFS28896" },
    { name: "Ecole des Mines", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISq36aON9KBORg9xyutL2ewSDPaw_n8SMSiQhoLndVh9WFGiybrgDImWziiGPNf4lXcs&usqp=CAU" },
    { name: "UP Valencia", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmCjtyxER8YLIIuCqVi6ojOjes9khYhev07g&s" },
    { name: "U. de Granada", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPbPbz98X0f99_bQSW1oVQtTu1Ggcb-jEbg&s" },
    { name: "Univ. Groningen", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsenl0q20Ri7-nTaiVMobhHJgDn767sS0Kw&s" }
  ];

  const teamMembers = [
    { name: "Dr. Aldo Abarca Ortega", role: t.team.roles.academic, bio: "Ing. Civil Mecánico (USACH) y Doctor en Estructuras y Materiales (UPM). Especialista en mecanobiología.", image: "/fotos_team/abarca_aldo.JPG", profileLink: "https://orcid.org/0000-0002-1600-8555", type: "orcid", position: "object-[center_25%]", email: "aldo.abarca@usach.cl" },
    { name: "Dr. Eugenio Rivera", role: t.team.roles.academic, bio: "Ing. Civil Mecánico y Doctor en Ciencias de la Ingeniería, mención Materiales (USACH).", image: "/fotos_team/rivera_eugenio.JPG", profileLink: "https://orcid.org/0000-0001-8103-2706", type: "orcid", position: "object-[center_20%]", email: "eugenio.rivera@usach.cl" },
    { name: "Dr. Álvaro Navarrete", role: t.team.roles.academic, bio: "Ing. Civil Mecánico (PUC) y Doctor en Ciencias de la Ingeniería (USACH). Especialista en biomecánica.", image: "/fotos_team/navarrete_alvaro.JPG", profileLink: "https://orcid.org/0009-0005-9364-7667", type: "orcid", position: "object-[center_23%]", email: "alvaro.navarrete.r@usach.cl" },
    { name: "Fabián Álvarez", role: t.team.roles.docStudent, bio: "Ing. en Química y candidato a Doctor (USACH). Especializado en biomecánica experimental e ingeniería de tejidos.", image: "/fotos_team/alvarez_fabian.JPG", profileLink: "https://orcid.org/0009-0000-2506-4623", type: "orcid", position: "object-[center_15%]", email: "fabian.alvarez.c@usach.cl" },
    { name: "Andrés Utrera Soto", role: t.team.roles.docStudent, bio: "Ing. Civil Mecánico y candidato a Doctor (USACH/Groningen). Especialista en biomecánica experimental y modelamiento.", image: "/fotos_team/utrera_andres.jpeg", profileLink: "https://www.researchgate.net/profile/Andres-Utrera", position: "object-[center_15%]", email: "andres.utrera@usach.cl" },
    { name: "Enzo Brito", role: t.team.roles.docStudent, bio: "Ing. Civil Mecánico y Magíster (USACH). Estudiante de Doctorado enfocado en nuevos biomateriales.", image: "/fotos_team/brito_enzo.JPG", profileLink: "https://linkedin.com", type: "linkedin", email: "enzo.brito@usach.cl" },
    { name: "Esteban Hermosilla", role: t.team.roles.docStudent, bio: "Ing. Civil Mecánico y estudiante de Doctorado (USACH). Especialista en modelación termomecánica.", image: "/fotos_team/hermosilla_esteban.JPG", profileLink: "https://lat-usach.cl/", type: "website", email: "esteban.hermosilla@usach.cl" },
    { name: "Thiare Aliste", role: t.team.roles.magStudent, bio: "Ing. Civil en Mecánica y estudiante de Magíster en Ciencias de la Ingeniería (USACH).", image: "/fotos_team/aliste_thiare.JPG", profileLink: "https://linkedin.com", type: "linkedin", position: "object-[center_15%]" },
    { name: "Catalina Poblete", role: t.team.roles.magStudent, bio: "Ing. Civil en Mecánica y estudiante de Magíster en Ciencias de la Ingeniería (USACH).", image: "/fotos_team/poblete_catalina.JPG", profileLink: "https://linkedin.com", type: "linkedin" },
    { name: "Kevin Silva", role: t.team.roles.magStudent, bio: "Ing. Civil en Mecánica y estudiante de Magíster en Ciencias de la Ingeniería (USACH).", image: "/fotos_team/silva_kevin.png", profileLink: "https://linkedin.com", type: "linkedin", position: "object-[center_20%]" },
    { name: "Francisco González", role: t.team.roles.magStudent, bio: "Ing. en Ejecución en Mecánica y estudiante de Magíster en Ciencias de la Ingeniería (USACH).", image: "/fotos_team/gonzalez_francisco.JPG", profileLink: "https://linkedin.com", type: "linkedin", position: "object-[center_15%]" },
    { name: "Cristian Catrilef", role: t.team.roles.magStudent, bio: "Ing. Civil en Mecánica y estudiante de Magíster en Ciencias de la Ingeniería (USACH).", image: "/fotos_team/catrilef_cristian.JPG", profileLink: "https://linkedin.com", type: "linkedin" },
    { name: "Nicolás Matus", role: t.team.roles.magStudent, bio: "Ing. Civil en Mecánica y estudiante de Magíster en Ciencias de la Ingeniería (USACH).", image: "/fotos_team/matus_nicolas.JPG", profileLink: "https://linkedin.com", type: "linkedin" },
    { name: "Ignacio Quezada", role: t.team.roles.magStudent, bio: "Ing. Civil en Mecánica y estudiante de Magíster en Ciencias de la Ingeniería (USACH).", image: "/fotos_team/quezada_ignacio.JPG", profileLink: "https://linkedin.com", type: "linkedin" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans-elegant bg-white overflow-x-hidden text-slate-800 scroll-smooth">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-sans-elegant { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .glass-header { backdrop-filter: blur(16px); background-color: rgba(255, 255, 255, 0.85); }
      `}} />
      
      {/* Barra superior de contacto rápido */}
      <div className="bg-slate-900 text-slate-400 py-2.5 text-[11px] font-semibold uppercase tracking-widest">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <span className="hidden sm:inline border-r border-slate-700 pr-6 text-slate-300">USACH | Facultad de Ingeniería</span>
            <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              <Globe className="w-3.5 h-3.5 text-teal-500" /> {lang === 'es' ? 'English' : 'Español'}
            </button>
          </div>
          <div className="flex space-x-6">
            <span className="hidden sm:flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-teal-500"/> +56 2271 83128</span>
            <span className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-teal-500"/> biomat@usach.cl</span>
          </div>
        </div>
      </div>

      {/* Header Sofisticado */}
      <header className="glass-header sticky top-0 z-50 border-b border-slate-200/60 h-20 sm:h-24 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center cursor-pointer gap-4 sm:gap-6 group" onClick={() => setActiveTab('inicio')}>
            <BioMatLogo className="w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-500 group-hover:scale-105" />
            <div className="h-10 w-px bg-slate-200 hidden sm:block"></div>
            <DimecLogo className="h-8 sm:h-10 w-auto hidden sm:block opacity-90 transition-opacity group-hover:opacity-100" />
          </div>

          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {Object.keys(t.nav).map(id => (
              <button key={id} onClick={() => { setActiveTab(id); setProjectSubTab('research'); }} 
                className={`px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === id ? 'text-teal-700 bg-teal-50 shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}>
                {t.nav[id]}
              </button>
            ))}
          </nav>

          <button className="md:hidden p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl p-6 space-y-2 animate-fadeIn">
            {Object.keys(t.nav).map(id => (
              <button key={id} onClick={() => { setActiveTab(id); setProjectSubTab('research'); setIsMenuOpen(false); }} 
                className={`w-full text-left px-6 py-4 rounded-2xl font-bold text-base transition-colors ${activeTab === id ? 'bg-teal-50 text-teal-700' : 'text-slate-600 active:bg-slate-50'}`}>
                {t.nav[id]}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        
        {/* === INICIO (HERO) === */}
        {activeTab === 'inicio' && (
          <div className="animate-fadeIn">
            <section className="relative bg-slate-900 text-white py-32 sm:py-48 overflow-hidden px-6">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://vriic.usach.cl/wp-content/uploads/2024/07/Maquina-Biaxial2-min-1024x508.jpg" 
                  alt="Laboratorio Background" 
                  className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(15,118,110,0.5),transparent_70%)] pointer-events-none"></div>
              </div>
              
              <div className="max-w-4xl mx-auto relative z-10 text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
                  {t.hero.title}<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">{t.hero.biology}</span>{t.hero.and}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">{t.hero.engineering}</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">{t.hero.description}</p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                  <button onClick={() => setActiveTab('investigacion')} className="bg-teal-600 hover:bg-teal-500 px-10 py-4 rounded-full font-bold shadow-[0_8px_30px_rgba(13,148,136,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                    {t.hero.btnResearch} <ChevronRight className="w-5 h-5"/>
                  </button>
                  <button onClick={() => setActiveTab('contacto')} className="bg-white/10 border border-white/20 hover:bg-white/20 px-10 py-4 rounded-full font-bold transition-all backdrop-blur-md">
                    {t.hero.btnContact}
                  </button>
                </div>
              </div>
            </section>

            <section className="py-24 bg-slate-50 border-b border-slate-100/50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-xs font-bold text-slate-400 tracking-[0.3em] uppercase mb-4">{t.collabs.title}</h2>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700 mix-blend-multiply">
                  {collaborations.map((collab, i) => (
                    <img 
                      key={i} src={collab.logo} alt={collab.name} title={collab.name}
                      className="h-10 lg:h-12 w-auto mx-auto object-contain hover:scale-110 transition-transform duration-500" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(collab.name)}&background=f8fafc&color=0f766e&bold=true`;
                      }}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* === INVESTIGACIÓN === */}
        {activeTab === 'investigacion' && (
          <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 animate-fadeIn">
            <div className="mb-20 text-center sm:text-left">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">{t.research.title}</h2>
              <div className="w-24 h-1.5 bg-teal-600 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {t.research.lines.map((line, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-8 p-10 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-teal-600 transition-colors duration-500">
                    {i === 0 ? <Activity className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 group-hover:text-white" /> : 
                     i === 1 ? <Microscope className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 group-hover:text-white" /> : 
                     i === 2 ? <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 group-hover:text-white" /> : 
                     <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 group-hover:text-white" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-teal-700 transition-colors">{line.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium">{line.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* === PROYECTOS Y BECAS === */}
        {activeTab === 'proyectos' && (
          <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 animate-fadeIn">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t.projects.title}</h2>
              <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full mt-6"></div>
            </div>

            {/* Toggle de Sub-Pestañas */}
            <div className="flex justify-center mb-12">
              <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex shadow-inner">
                <button 
                  onClick={() => { setProjectSubTab('research'); setCurrentProjPage(1); }}
                  className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${projectSubTab === 'research' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                >
                  {t.projects.tabs.research}
                </button>
                <button 
                  onClick={() => { setProjectSubTab('scholarships'); }}
                  className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${projectSubTab === 'scholarships' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
                >
                  {t.projects.tabs.scholarships}
                </button>
              </div>
            </div>

            {/* Vista: Proyectos de Investigación */}
            {projectSubTab === 'research' && (
              <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden min-h-[400px] animate-fadeIn">
                {loadingProjects ? (
                  <div className="h-80 flex flex-col items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600 mb-6"></div>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Cargando proyectos</p>
                  </div>
                ) : (
                  <ul className="divide-y divide-slate-100">
                    {projects.length > 0 ? projects.slice((currentProjPage-1)*itemsPerPage, currentProjPage*itemsPerPage).map((p, i) => (
                      <li key={i} className="p-8 sm:p-10 hover:bg-slate-50/80 transition-all group">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                          <div className="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-bold rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            {p.year}
                          </div>
                          <div className="flex-1 w-full">
                            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-900 group-hover:text-teal-700 transition-colors leading-tight">{p.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-start p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm">
                                <Award className="w-5 h-5 mt-0.5 mr-3 text-amber-500 shrink-0"/>
                                <div>
                                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-bold mb-1">{t.projects.fund}</span>
                                  <span className="font-semibold text-slate-700">{p.fund}</span>
                                </div>
                              </div>
                              <div className="flex items-start p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm">
                                <Users className="w-5 h-5 mt-0.5 mr-3 text-blue-500 shrink-0"/>
                                <div>
                                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider font-bold mb-1">{t.projects.role}</span>
                                  <span className="font-semibold text-slate-700">{p.role}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    )) : (
                      <div className="p-32 text-center text-slate-400">
                        <AlertCircle className="w-16 h-16 mx-auto mb-6 opacity-20" />
                        <p className="text-lg font-medium">{t.projects.empty}</p>
                      </div>
                    )}
                  </ul>
                )}
                
                {!loadingProjects && projects.length > itemsPerPage && (
                  <div className="py-10 flex justify-center gap-3 border-t border-slate-100">
                    <button disabled={currentProjPage === 1} onClick={() => setCurrentProjPage(p => p - 1)} className="p-3 border border-slate-200 rounded-xl disabled:opacity-30 hover:bg-slate-50 text-slate-600 transition-all"><ChevronLeft className="w-5 h-5"/></button>
                    <div className="flex gap-2 mx-2">
                      {[...Array(Math.ceil(projects.length/itemsPerPage))].map((_, i) => (
                        <button key={i} onClick={() => setCurrentProjPage(i+1)} className={`w-10 h-10 rounded-xl font-bold transition-all text-sm ${currentProjPage === i+1 ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/30' : 'text-slate-500 hover:bg-teal-50 hover:text-teal-700'}`}>{i+1}</button>
                      ))}
                    </div>
                    <button disabled={currentProjPage >= Math.ceil(projects.length/itemsPerPage)} onClick={() => setCurrentProjPage(p => p + 1)} className="p-3 border border-slate-200 rounded-xl disabled:opacity-30 hover:bg-slate-50 text-slate-600 transition-all"><ChevronRight className="w-5 h-5"/></button>
                  </div>
                )}
              </div>
            )}

            {/* Vista: Becas ANID (Minimalista y Agrupada) */}
            {projectSubTab === 'scholarships' && (
              <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden min-h-[400px] animate-fadeIn p-8 sm:p-12 lg:p-16">
                {loadingBecas ? (
                  <div className="h-80 flex flex-col items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mb-6"></div>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Cargando becas</p>
                  </div>
                ) : becas.length > 0 ? (
                  <div className="space-y-16">
                    {/* Lógica de Agrupación por Nombre de Beca */}
                    {Object.entries(
                      becas.reduce((acc, b) => {
                        const type = b.scholarshipName || 'Otras Becas';
                        if (!acc[type]) acc[type] = [];
                        acc[type].push(b);
                        return acc;
                      }, {})
                    ).map(([scholarshipType, list], index) => (
                      <div key={index} className="animate-fadeIn">
                        <h3 className="text-xl sm:text-2xl font-extrabold mb-8 text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-3">
                          <Award className="w-6 h-6 text-indigo-600" />
                          {scholarshipType}
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                          {list.map((b, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50/50 border border-transparent hover:border-indigo-100 transition-all duration-300 group">
                              <span className="px-3 py-1.5 bg-white text-indigo-700 text-xs font-bold rounded-lg shadow-sm border border-slate-100 group-hover:border-indigo-200 transition-colors">
                                {b.year}
                              </span>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                                <span className="font-bold text-slate-700 group-hover:text-indigo-900 transition-colors text-sm">
                                  {b.scholar}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-32 text-center text-slate-400">
                    <AlertCircle className="w-16 h-16 mx-auto mb-6 opacity-20" />
                    <p className="text-lg font-medium">{t.projects.emptyBecas}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* === INFRAESTRUCTURA === */}
        {activeTab === 'servicios' && (
          <div className="bg-slate-50 py-24 lg:py-32 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-20 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">{t.infrastructure.title}</h2>
                <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full mt-6"></div>
                <p className="mt-8 text-slate-500 text-lg max-w-2xl mx-auto font-medium">{t.infrastructure.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.infrastructure.categories.map((cat, i) => (
                  <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all group">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${i === 0 ? 'bg-blue-50 text-blue-600' : i === 1 ? 'bg-teal-50 text-teal-600' : 'bg-indigo-50 text-indigo-600'}`}>
                      {i === 0 ? <Activity className="w-8 h-8" /> : i === 1 ? <Microscope className="w-8 h-8" /> : <Cpu className="w-8 h-8" />}
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-slate-900">{cat.title}</h3>
                    <ul className="space-y-4">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600 font-medium text-sm">
                          <CheckCircle className={`w-5 h-5 shrink-0 ${i === 0 ? 'text-blue-400' : i === 1 ? 'text-teal-400' : 'text-indigo-400'}`} /> 
                          <span className="mt-0.5">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === EQUIPO === */}
        {activeTab === 'equipo' && (
          <div className="py-24 lg:py-32 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{t.team.title}</h2>
              <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full mb-16"></div>

              {/* FOTO GRUPAL */}
              <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 relative group max-w-5xl mx-auto bg-slate-100">
                <img 
                  src="/fotos_team/equipo.JPG" 
                  alt="Equipo LABBIOM2" 
                  className="w-full h-auto max-h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"; 
                  }}
                />
              </div>

              {/* TARJETAS INDIVIDUALES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamMembers.map((member, index) => (
                  <div key={index} className="group bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 text-left flex flex-col">
                    <div className="relative h-72 overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className={`w-full h-full object-cover ${member.position || 'object-center'} grayscale group-hover:grayscale-0 transition-all duration-700 ${member.position ? 'scale-100 group-hover:scale-105' : 'scale-[1.30] group-hover:scale-[1.35]'}`} 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f8fafc&color=0f766e&bold=true&size=512`;
                        }}
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-teal-600 font-bold text-xs uppercase tracking-wider mb-4">{member.role}</p>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium flex-grow">{member.bio}</p>
                      
                      {/* Correo Electrónico Explícito */}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-slate-500 hover:text-teal-600 font-medium text-xs mb-6 transition-colors group/mail">
                          <Mail className="w-4 h-4 group-hover/mail:scale-110 transition-transform shrink-0" />
                          <span className="truncate">{member.email}</span>
                        </a>
                      )}

                      <div className="flex gap-3 mt-auto border-t border-slate-100 pt-5">
                        <a href={`mailto:${member.email || 'biomat@usach.cl'}`} className="p-3 bg-slate-50 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-colors shrink-0">
                          <Mail className="w-5 h-5" />
                        </a>
                        <a href={member.profileLink} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 px-4 py-3 bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white rounded-xl transition-colors font-bold text-xs uppercase tracking-wide">
                          {member.type === 'linkedin' ? <Linkedin className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                          {member.type === 'orcid' ? 'ORCID' : member.type === 'researchgate' ? 'ResearchGate' : member.type === 'website' ? 'Sitio Web' : 'Perfil'}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === PUBLICACIONES === */}
        {activeTab === 'publicaciones' && (
          <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 animate-fadeIn">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">{t.publications.title}</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
            </div>
            <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden min-h-[400px]">
              {loadingPubs ? (
                <div className="h-80 flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-6"></div>
                  <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Cargando publicaciones</p>
                </div>
              ) : (
                <ul className="divide-y divide-slate-100">
                  {publications.length > 0 ? publications.slice((currentPubPage-1)*itemsPerPage, currentPubPage*itemsPerPage).map((pub, i) => (
                    <li key={i} className="p-8 sm:p-10 hover:bg-slate-50/80 transition-all group flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                      <div className="px-5 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                        {pub.year}
                      </div>
                      <div className="flex-1 w-full">
                        <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">{pub.title}</h4>
                        <p className="text-slate-600 font-medium mb-3">{pub.authors}</p>
                        <p className="text-sm font-bold text-teal-600 italic">{pub.journal}</p>
                      </div>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 rounded-full transition-all shrink-0 shadow-sm hover:shadow-md">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </li>
                  )) : (
                    <div className="p-32 text-center text-slate-400">
                      <AlertCircle className="w-16 h-16 mx-auto mb-6 opacity-20" />
                      <p className="text-lg font-medium">{t.publications.empty}</p>
                    </div>
                  )}
                </ul>
              )}
            </div>
            
            {/* Paginación de Publicaciones */}
            {!loadingPubs && publications.length > itemsPerPage && (
              <div className="mt-14 flex justify-center items-center gap-2">
                <button disabled={currentPubPage === 1} onClick={() => setCurrentPubPage(p => p - 1)} className="p-3 border border-slate-200 rounded-xl disabled:opacity-30 hover:bg-blue-50 hover:border-blue-200 text-slate-500 hover:text-blue-600 transition-all"><ChevronLeft className="w-5 h-5"/></button>
                <div className="flex gap-2 mx-4">
                  {[...Array(Math.ceil(publications.length/itemsPerPage))].map((_, i) => (
                    <button key={i} onClick={() => setCurrentPubPage(i+1)} className={`w-10 h-10 rounded-xl font-bold transition-all text-sm ${currentPubPage === i+1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-700'}`}>{i+1}</button>
                  ))}
                </div>
                <button disabled={currentPubPage >= Math.ceil(publications.length/itemsPerPage)} onClick={() => setCurrentPubPage(p => p + 1)} className="p-3 border border-slate-200 rounded-xl disabled:opacity-30 hover:bg-blue-50 hover:border-blue-200 text-slate-500 hover:text-blue-600 transition-all"><ChevronRight className="w-5 h-5"/></button>
              </div>
            )}
          </div>
        )}

        {/* === CONTACTO === */}
        {activeTab === 'contacto' && (
          <div className="bg-slate-50 py-24 lg:py-32 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-slate-900 tracking-tight">{t.contact.title}</h2>
                  <div className="space-y-10">
                    <div className="flex gap-6 group">
                      <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:border-teal-500 transition-colors"><MapPin className="text-teal-600 w-7 h-7" /></div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{t.contact.location}</p>
                        <p className="text-slate-800 font-semibold leading-relaxed">{t.contact.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:border-blue-500 transition-colors"><Mail className="text-blue-600 w-7 h-7" /></div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{t.contact.email}</p>
                        <p className="text-slate-800 font-semibold">biomat@usach.cl</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-10 sm:p-12 rounded-3xl border border-slate-200/60 shadow-[0_20px_50px_rgb(0,0,0,0.05)]">
                  <form className="space-y-8" onSubmit={handleContactSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t.contact.form.name}</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-teal-500 focus:bg-white outline-none text-slate-800 transition-all font-medium" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">{t.contact.form.mail}</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-teal-500 focus:bg-white outline-none text-slate-800 transition-all font-medium" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mensaje</label>
                      <textarea 
                        rows="4" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-teal-500 focus:bg-white outline-none text-slate-800 transition-all font-medium resize-none"
                      ></textarea>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-teal-50 text-teal-700 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5"/> {t.contact.form.success}
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 text-red-700 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2">
                        <AlertCircle className="w-5 h-5"/> {t.contact.form.error}
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-teal-600 shadow-lg shadow-slate-900/20 transition-all active:scale-[0.98] disabled:opacity-70 flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> {t.contact.form.sending}</>
                      ) : (
                        t.contact.form.send
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* === FOOTER INSTITUCIONAL === */}
      <footer className="bg-slate-900 text-slate-300 py-20 border-t-4 border-teal-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-xl flex items-center justify-center shadow-lg">
                  <BioMatLogo className="w-10 h-10" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">BIOMAT LAB</span>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed max-w-sm">Pioneros en investigación transdisciplinaria aplicada a la salud y la industria desde la Universidad de Santiago de Chile.</p>
            </div>
            
            <div className="md:col-span-4">
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">{t.footer.institutional}</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="https://dimec.usach.cl" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-teal-600" /> Dept. Ingeniería Mecánica</a></li>
                <li><a href="https://dimec.usach.cl/magister/" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-teal-600" /> Magíster DIMEC</a></li>
                <li><a href="https://fing.usach.cl" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-teal-600" /> Facultad de Ingeniería</a></li>
                <li><a href="https://www.usach.cl" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3 text-teal-600" /> U. de Santiago de Chile</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Contacto</h4>
              <div className="space-y-4 text-sm">
                <p className="flex items-center gap-3 font-medium"><Mail className="w-4 h-4 text-teal-500" /> biomat@usach.cl</p>
                <p className="flex items-center gap-3 font-medium"><Phone className="w-4 h-4 text-teal-500" /> +56 2271 83128</p>
              </div>
            </div>
            
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
            <p>© {new Date().getFullYear()} LABBIOM2 · USACH · CHILE</p>
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;