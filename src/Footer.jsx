import React from 'react'

export default function Footer() {
  return (
    <div className='bottom-0 left-0 w-full'>
        <footer className="bg-white border-t border-gray-300 mt-10">
            <div className="max-w-7xl mx-auto px-8 pt-8 pb-8 md:pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    
                    {/* Brand Info */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-6 w-6 bg-emerald-600 rounded-lg"></div>
                            <span className="text-xl font-black tracking-tighter uppercase">RuralWorks</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
                            Connecting village talent with verified opportunities. 
                            No middlemen, direct trust.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900 font-sans">For Seekers</h4>
                            <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Browse Jobs</a>
                            <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Career Advice</a>
                            <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Salaries</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">For Employers</h4>
                            <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Post a Job</a>
                            <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Hiring Solutions</a>
                            <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Pricing</a>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Company</h4>
                            <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">About Us</a>
                            <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Help Center</a>
                            <a href="#" className="text-sm text-slate-500 hover:text-emerald-600 transition-colors">Privacy</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Section */}
                <div className="pt-4 border-t border-slate-50 flex flex-col items-center gap-3">
                    <div className="text-[13px] text-slate-400 font-medium">
                    © 2026 RuralJobs Inc. Built for the future of rural work.
                    </div>
                    
                    <div className="flex items-center gap-4">
                    <a href="#" className="text-[13px] text-slate-400 hover:text-slate-900 transition-colors">Cookies</a>
                    <a href="#" className="text-[13px] text-slate-400 hover:text-slate-900 transition-colors">Terms</a>
                    <a href="#" className="text-[13px] text-slate-400 hover:text-slate-900 transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
