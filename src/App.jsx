import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default function App() {
  return (
    <div>
       <Navbar />
        <Home />
       <Footer />
    </div>
  )
}


// // export default function App() {
// //   return (
// //     <div className="min-h-screen bg-[#F4F7F6] text-slate-900 font-sans">
      
// //       {/* --- TOP HEADER (Naukri Style) --- */}
// //       <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
// //         <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
// //           <div className="flex items-center gap-8">
// //             <h1 className="text-2xl font-black text-emerald-700 tracking-tighter">RURAL<span className="text-slate-900">INDIA</span></h1>
// //             <nav className="hidden lg:flex gap-6 text-sm font-bold text-slate-500">
// //               <a href="#" className="text-emerald-600">Jobs</a>
// //               <a href="#" className="hover:text-emerald-600">Companies</a>
// //               <a href="#" className="hover:text-emerald-600">Salaries</a>
// //             </nav>
// //           </div>
// //           <div className="flex gap-3">
// //             <button className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-slate-900">Login</button>
// //             <button className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-emerald-200">Register</button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* --- SEARCH BAR SECTION (Indeed Style) --- */}
// //       <div className="bg-emerald-900 py-12 px-4">
// //         <div className="max-w-5xl mx-auto">
// //           <h2 className="text-white text-3xl font-bold mb-6">Find your next opportunity</h2>
// //           <div className="flex flex-col md:flex-row bg-white rounded-xl p-2 shadow-2xl overflow-hidden">
// //             <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-slate-100">
// //               <span className="text-slate-400 mr-2">🔍</span>
// //               <input type="text" placeholder="Job title, Skills, or Company" className="w-full outline-none font-medium" />
// //             </div>
// //             <div className="flex-1 flex items-center px-4 py-3">
// //               <span className="text-slate-400 mr-2">📍</span>
// //               <input type="text" placeholder="Village, City, or District" className="w-full outline-none font-medium" />
// //             </div>
// //             <button className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-emerald-700 transition-all">
// //               Search Jobs
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* --- MAIN CONTENT AREA --- */}
// //       <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
// //         {/* LEFT SIDEBAR: Filters */}
// //         <aside className="hidden lg:block lg:col-span-3 space-y-6">
// //           <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
// //             <h4 className="font-bold mb-4 flex items-center justify-between">
// //               Filters <span className="text-xs text-emerald-600 cursor-pointer">Clear All</span>
// //             </h4>
            
// //             <div className="space-y-4">
// //               <div>
// //                 <p className="text-xs font-black text-slate-400 uppercase mb-2">Work Mode</p>
// //                 <label className="flex items-center gap-2 text-sm font-medium text-slate-600"><input type="checkbox" className="accent-emerald-600" /> On-Field</label>
// //                 <label className="flex items-center gap-2 text-sm font-medium text-slate-600 mt-2"><input type="checkbox" className="accent-emerald-600" /> Office</label>
// //               </div>
// //               <hr />
// //               <div>
// //                 <p className="text-xs font-black text-slate-400 uppercase mb-2">Salary Range</p>
// //                 <input type="range" className="w-full accent-emerald-600" />
// //                 <div className="flex justify-between text-[10px] font-bold text-slate-400"><span>0</span><span>1L+</span></div>
// //               </div>
// //             </div>
// //           </div>
// //         </aside>

// //         {/* CENTER: Job Feed */}
// //         <div className="lg:col-span-6 space-y-4">
// //           <div className="flex justify-between items-center mb-2">
// //             <p className="text-sm font-bold text-slate-500 tracking-tight underline">Showing 142 Jobs</p>
// //             <select className="bg-transparent text-sm font-bold outline-none border-none text-emerald-600 cursor-pointer">
// //               <option>Sort by: Newest</option>
// //               <option>Sort by: Salary</option>
// //             </select>
// //           </div>
          
// //           <JobCard 
// //             title="Solar Plant Maintenance Supervisor" 
// //             company="Adani Green Energy" 
// //             location="Kutch, Gujarat" 
// //             salary="₹35,000 - ₹45,000" 
// //             type="Full-time" 
// //             posted="2 days ago" 
// //             verified={true}
// //             description="Looking for an experienced supervisor to manage on-ground maintenance of solar arrays. Technical knowledge of inverters and panels required..."
// //           />
// //           <JobCard 
// //             title="Senior Agronomist" 
// //             company="BigBasket (Innovative Retail)" 
// //             location="Malegaon, MH" 
// //             salary="₹40,000 - ₹55,000" 
// //             type="Contract" 
// //             posted="5 hours ago" 
// //             verified={true}
// //             description="Liaise with local farmers to ensure crop quality and implement sustainable farming techniques for organic produce..."
// //           />
// //           <JobCard 
// //             title="Solar Plant Maintenance Supervisor" 
// //             company="Adani Green Energy" 
// //             location="Kutch, Gujarat" 
// //             salary="₹35,000 - ₹45,000" 
// //             type="Full-time" 
// //             posted="2 days ago" 
// //             verified={true}
// //             description="Looking for an experienced supervisor to manage on-ground maintenance of solar arrays. Technical knowledge of inverters and panels required..."
// //           />
// //           <JobCard 
// //             title="Senior Agronomist" 
// //             company="BigBasket (Innovative Retail)" 
// //             location="Malegaon, MH" 
// //             salary="₹40,000 - ₹55,000" 
// //             type="Contract" 
// //             posted="5 hours ago" 
// //             verified={true}
// //             description="Liaise with local farmers to ensure crop quality and implement sustainable farming techniques for organic produce..."
// //           />
// //         </div>

// //         {/* RIGHT SIDEBAR: Featured / Ads */}
// //         <aside className="hidden xl:block xl:col-span-3 space-y-6">
// //           <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
// //             <h4 className="font-bold text-lg mb-2">Get Noticed!</h4>
// //             <p className="text-slate-400 text-xs mb-4 leading-relaxed">Boost your profile to appear at the top of recruiter searches.</p>
// //             <button className="w-full bg-emerald-500 text-slate-900 py-2 rounded-lg font-bold text-xs uppercase tracking-widest">Upgrade to Pro</button>
// //           </div>
// //         </aside>

// //       </main>
// //     </div>
// //   );
// // }


// import { useState } from 'react'
// import Footer from './Footer.jsx'

// // Worker Card: Instant Communication ke liye
// const WorkerCard = ({ name, skill, location, rate, available, experience, rating, dp }) => (
//   <div className="bg-white border border-slate-200 rounded-3xl p-5 hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 group">
//     <div className="flex items-center gap-4 mb-6">
//       {/* Profile Picture with Online Status */}
//       <div className="relative">
//         <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-emerald-500 transition-colors">
//           <img src={dp} alt={name} className="w-full h-full object-cover" />
//         </div>
//         {available && (
//           <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
//         )}
//       </div>
      
//       <div className="flex-1">
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-bold text-slate-900 leading-tight">{name}</h3>
//           <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">⭐ {rating}</span>
//         </div>
//         <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">{skill}</p>
//       </div>
//     </div>

//     <div className="grid grid-cols-2 gap-4 mb-6">
//       <div className="bg-slate-50 p-3 rounded-2xl">
//         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Experience</p>
//         <p className="text-sm font-bold">{experience}</p>
//       </div>
//       <div className="bg-slate-50 p-3 rounded-2xl">
//         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Daily Rate</p>
//         <p className="text-sm font-bold text-emerald-700">{rate}</p>
//       </div>
//     </div>

//     <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 px-1">
//       <span>📍 {location}</span>
//       <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
//       <span className="text-emerald-500 font-bold">Ready to Work Today</span>
//     </div>

//     {/* Instant Action Buttons */}
//     <div className="flex gap-2">
//       <button className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 active:scale-95">
//         <span>📞</span> Call Now
//       </button>
//       <button className="w-12 h-12 border-2 border-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-50 transition active:scale-90">
//         <span className="text-xl">💬</span>
//       </button>
//     </div>
//   </div>
// );

// function App() {
//   const [workers] = useState([
//     { name: "Ram Singh", skill: "Tractor Driver", location: "2km away", rate: "₹800/day", available: true, experience: "8 Years", rating: "4.9", dp: "https://i.pravatar.cc/150?u=ram" },
//     { name: "Suraj Kumar", skill: "Dairy Labor", location: "500m away", rate: "₹600/day", available: true, experience: "3 Years", rating: "4.7", dp: "https://i.pravatar.cc/150?u=suraj" },
//     { name: "Amit Yadav", skill: "Solar Installer", location: "1.2km away", rate: "₹1200/day", available: true, experience: "5 Years", rating: "4.8", dp: "https://i.pravatar.cc/150?u=amit" },
//     { name: "Lokesh G.", skill: "General Labor", location: "Nearby", rate: "₹500/day", available: true, experience: "10 Years", rating: "4.5", dp: "https://i.pravatar.cc/150?u=lokesh" },
//   ]);

//   return (
//     <div className="min-h-screen bg-[#F8F9FB] text-slate-900 font-sans">
//       {/* Simple Header */}
//       <nav className="bg-white px-8 py-5 border-b border-slate-100 flex justify-between items-center sticky top-0 z-50">
//         <div className="text-2xl font-black tracking-tighter">RURAL<span className="text-emerald-600 font-normal">QUEST</span></div>
//         <div className="flex items-center gap-4">
//           <button className="text-sm font-bold text-slate-500">I am a Worker</button>
//           <div className="w-10 h-10 bg-slate-100 rounded-full border border-slate-200"></div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-6 py-12">
//         <header className="mb-12">
//           <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 animate-pulse">
//             Live: 42 Workers Available Right Now
//           </div>
//           <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
//             Need Labor <span className="text-emerald-600 underline decoration-emerald-100">Instantly?</span>
//           </h1>
//           <p className="text-slate-500 font-bold max-w-xl">No job posts needed. Directly contact verified workers available in your village today.</p>
//         </header>

//         {/* Filters/Categories */}
//         <div className="flex gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
//           {['All Workers', 'Tractor', 'Farming', 'Construction', 'Delivery'].map((cat, i) => (
//             <button key={cat} className={`whitespace-nowrap px-6 py-3 rounded-2xl font-bold text-sm transition-all ${i === 0 ? 'bg-slate-900 text-white shadow-xl' : 'bg-white border border-slate-200 text-slate-500'}`}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Workers Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {workers.map((worker, index) => (
//             <WorkerCard key={index} {...worker} />
//           ))}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

//-----------------------------------------------------------------------------------------------//
