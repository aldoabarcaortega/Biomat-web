import React from 'react';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';

const EquipoSection = ({ t }) => {
	  const teamMembers = [
		      { name: "Dr. Aldo Abarca Ortega", role: t.team.roles.academic, bio: "Ingeniero Civil Mecánico (USACH). Doctorado en Estructuras (UPM).", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400", profileLink: "https://scholar.google.com", type: "scholar" },
		      { name: "Dr. Eugenio Rivera", role: t.team.roles.academic, bio: "Ingeniero Civil Mecánico (USACH). Doctor en Ciencia de Materiales.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", profileLink: "https://www.researchgate.net", type: "scholar" },
		      { name: "Dr. Álvaro Navarrete", role: t.team.roles.academic, bio: "Doctor en Ciencias de la Ingeniería (USACH). Especialista en Biomecánica.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400", profileLink: "https://scholar.google.com", type: "scholar" },
		      { name: "Fabián Álvarez", role: t.team.roles.docStudent, bio: "Candidato a Doctor en Biomecánica.", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400", profileLink: "https://linkedin.com", type: "linkedin" },
		      { name: "Andrés Utrera Soto", role: t.team.roles.docStudent, bio: "Investigación en modelamiento biomecánico.", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400", profileLink: "https://linkedin.com", type: "linkedin" },
		      { name: "Enzo Brito", role: t.team.roles.docStudent, bio: "Diseño y caracterización de biomateriales.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", profileLink: "https://linkedin.com", type: "linkedin" },
		      { name: "Thiare Aliste", role: t.team.roles.magStudent, bio: "Análisis microestructural.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400", profileLink: "https://linkedin.com", type: "linkedin" },
		      { name: "Catalina Poblete", role: t.team.roles.magStudent, bio: "Biomateriales clínicos.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", profileLink: "https://linkedin.com", type: "linkedin" },
		      { name: "Kevin Silva", role: t.team.roles.magStudent, bio: "Ensayos mecánicos avanzados.", image: "https://images.unsplash.com/photo-1504257432389-523431e11832?auto=format&fit=crop&q=80&w=400", profileLink: "https://linkedin.com", type: "linkedin" }
		    ];

	  return (
		      <div className="bg-slate-50 py-12 animate-fadeIn">
		        <div className="max-w-7xl mx-auto px-4">
		          <div className="text-center mb-12">
		            <h2 className="text-3xl font-bold text-slate-900">{t.team.title}</h2>
		            <div className="w-20 h-1 bg-teal-600 mx-auto rounded mt-2"></div>
		            <p className="mt-4 text-slate-500">{t.team.description}</p>
		          </div>
		          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
		            {teamMembers.map((member, i) => (
				                <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
				                  <img src={member.image} alt={member.name} className="h-56 w-full object-cover" />
				                  <div className="p-6">
				                    <h3 className="font-bold text-lg">{member.name}</h3>
				                    <p className="text-teal-600 text-sm mb-3">{member.role}</p>
				                    <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
				                    <div className="flex gap-2">
				                      <a href={`mailto:lbb.dimec@usach.cl`} className="p-2 bg-slate-50 rounded text-slate-400 hover:text-blue-600"><Mail className="w-4 h-4"/></a>
				                      <a href={member.profileLink} target="_blank" className="p-2 bg-slate-50 rounded text-slate-400 hover:text-blue-600 flex items-center gap-2">
				                        {member.type === 'linkedin' ? <Linkedin className="w-4 h-4"/> : <GraduationCap className="w-4 h-4"/>}
				                        <span className="text-[10px] font-bold">PERFIL</span>
				                      </a>
				                    </div>
				                  </div>
				                </div>
				              ))}
		          </div>
		        </div>
		      </div>
		    );
};
export default EquipoSection;
