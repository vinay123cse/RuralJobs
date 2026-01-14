
import { useState } from 'react'


// Service Professional Card
const ProCard = ({ name, category, subSkill, location, rate, available, experience, rating, dp, color }) => (
  <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 group">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-50">
          <img src={dp} alt={name} className="w-full h-full object-cover" />
        </div>
        {available && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900 leading-tight">{name}</h3>
          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg tracking-tighter">⭐ {rating}</span>
        </div>
        <div className={`text-[10px] font-black uppercase tracking-widest mt-1 ${color}`}>
          {category}
        </div>
      </div>
    </div>

    <div className="space-y-2 mb-6">
      <div className="flex justify-between text-sm">
        <span className="text-slate-400 font-bold">Speciality</span>
        <span className="text-slate-900 font-bold">{subSkill}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-slate-400 font-bold">Experience</span>
        <span className="text-slate-900 font-bold">{experience}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-slate-400 font-bold">Consultation</span>
        <span className="text-emerald-700 font-black">{rate}</span>
      </div>
    </div>

    <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400 mb-6 bg-slate-50 p-2 rounded-xl justify-center">
      <span>📍 {location}</span>
    </div>

    <div className="flex gap-2">
      <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition shadow-xl active:scale-95">
        Book Now
      </button>
      <button className="w-14 h-14 border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition active:scale-90 text-xl">
        💬
      </button>
    </div>
  </div>
);

function Body() {
  const [pros] = useState([
    { name: "Dr. Anjali M.", category: "Healthcare", subSkill: "Nursing/First Aid", location: "Sector 4, Near Hospital", rate: "₹500/visit", available: true, experience: "6 Years", rating: "4.9", dp: "https://i.pravatar.cc/150?u=anjali", color: "text-blue-500" },
    { name: "Rahul Sharma", category: "Education", subSkill: "Maths Teacher", location: "Village Center", rate: "₹300/hr", available: true, experience: "4 Years", rating: "4.8", dp: "https://i.pravatar.cc/150?u=rahul", color: "text-purple-500" },
    { name: "Vikram Singh", category: "Technical", subSkill: "Solar Engineer", location: "Industrial Area", rate: "₹1200/day", available: true, experience: "5 Years", rating: "4.7", dp: "https://i.pravatar.cc/150?u=vikram", color: "text-orange-500" },
    { name: "Sunita Devi", category: "Healthcare", subSkill: "Midwife/Asha", location: "Green Park", rate: "₹400/visit", available: true, experience: "12 Years", rating: "5.0", dp: "https://i.pravatar.cc/150?u=sunita", color: "text-blue-500" },
    { name: "Dr. Anjali M.", category: "Healthcare", subSkill: "Nursing/First Aid", location: "Sector 4, Near Hospital", rate: "₹500/visit", available: true, experience: "6 Years", rating: "4.9", dp: "https://i.pravatar.cc/150?u=anjali", color: "text-blue-500" },
    { name: "Rahul Sharma", category: "Education", subSkill: "Maths Teacher", location: "Village Center", rate: "₹300/hr", available: true, experience: "4 Years", rating: "4.8", dp: "https://i.pravatar.cc/150?u=rahul", color: "text-purple-500" },
    { name: "Vikram Singh", category: "Technical", subSkill: "Solar Engineer", location: "Industrial Area", rate: "₹1200/day", available: true, experience: "5 Years", rating: "4.7", dp: "https://i.pravatar.cc/150?u=vikram", color: "text-orange-500" },
    { name: "Sunita Devi", category: "Healthcare", subSkill: "Midwife/Asha", location: "Green Park", rate: "₹400/visit", available: true, experience: "12 Years", rating: "5.0", dp: "https://i.pravatar.cc/150?u=sunita", color: "text-blue-500" },
  ]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      

      <main className="max-w-7xl mx-auto px-6 py-12">
        <header className="max-w-3xl mb-16 text-center mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            Find the <span className="text-emerald-600">Expert</span> <br />You Need Today.
          </h1>
          <p className="text-slate-400 font-bold text-lg">Doctors, Teachers, and Skilled Professionals—verified and ready to help in your district.</p>
        </header>

       

        {/* Pros Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pros.map((pro, index) => (
            <ProCard key={index} {...pro} />
          ))}
        </div>
      </main>
      
    </div>
  );
}

export default Body;