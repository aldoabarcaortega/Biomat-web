import React from 'react';
import { Activity, Microscope, Cpu, CheckCircle } from 'lucide-react';

const InfrastructureSection = ({ t }) => (
	  <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
	    <div className="mb-10">
	      <h2 className="text-3xl font-bold text-slate-900">{t.infrastructure.title}</h2>
	      <div className="w-20 h-1 bg-teal-600 rounded mt-2"></div>
	      <p className="mt-4 text-slate-500">{t.infrastructure.description}</p>
	    </div>
	    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
	      <div className="bg-white p-8 rounded-xl border border-slate-200">
	        <Activity className="w-10 h-10 text-blue-700 mb-6" />
	        <h3 className="text-xl font-bold mb-4">{t.infrastructure.groups.mechanical}</h3>
	        <ul className="space-y-2 text-slate-600 text-sm">
	          {t.infrastructure.items.slice(0, 3).map((item, i) => <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500"/> {item}</li>)}
	        </ul>
	      </div>
	      <div className="bg-white p-8 rounded-xl border border-slate-200">
	        <Microscope className="w-10 h-10 text-teal-700 mb-6" />
	        <h3 className="text-xl font-bold mb-4">{t.infrastructure.groups.optical}</h3>
	        <ul className="space-y-2 text-slate-600 text-sm">
	          {t.infrastructure.items.slice(3, 5).map((item, i) => <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500"/> {item}</li>)}
	        </ul>
	      </div>
	      <div className="bg-white p-8 rounded-xl border border-slate-200">
	        <Cpu className="w-10 h-10 text-indigo-700 mb-6" />
	        <h3 className="text-xl font-bold mb-4">{t.infrastructure.groups.tech}</h3>
	        <ul className="space-y-2 text-slate-600 text-sm">
	          {t.infrastructure.items.slice(5, 7).map((item, i) => <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500"/> {item}</li>)}
	        </ul>
	      </div>
	    </div>
	  </div>
);
export default InfrastructureSection;
