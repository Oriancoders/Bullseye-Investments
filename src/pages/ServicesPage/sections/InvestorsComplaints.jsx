import { Mail, Phone } from "lucide-react";

function InvestorComplaints() {
  const contacts = [
    {
      name: "Mr. Sajid Ahmed Qureshi",
      role: "Company Secretary / Designated Person",
      phone: "03218234243",
      email: "Bullseyeinvestment2025@gmail.com",
    },
    {
      name: "Mr. Unwan Abbas",
      role: "Compliance Officer",
      phone: "03218234243",
      email: "Bullseyeinvestment2025@gmail.com",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold  mb-6 text-center">
          Investor Complaints
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((person, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white border-2 border-black  "
            >
              <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
              <p className="text-gray-600 mb-4">{person.role}</p>
              <div className="flex items-center gap-3 mb-2">
                <Phone size={18} className="text-gray-700" />
                <span className="text-gray-800">{person.phone}</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Mail size={18} className="text-gray-700" />
                <span className="text-gray-800">{person.email}</span>
              </div>
              <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
                Contact Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InvestorComplaints