import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import StarsBackground from '../components/StarsBackground';

const Cita = () => {
  const { packageName, price } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cita solicitada:', { packageName, price, ...formData });
    alert('¡Solicitud de cita enviada! Te contactaremos pronto.');
    navigate('/paquetes');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const decodedPackageName = packageName ? decodeURIComponent(packageName) : 'Paquete Personalizado';
  const decodedPrice = price ? decodeURIComponent(price) : 'Consultar';

  return (
    <>
      <Helmet>
        <title>Solicitar Cita - {decodedPackageName} | Drafter Studio</title>
        <meta name="description" content={`Solicita tu cita para el paquete ${decodedPackageName}. Fotografía profesional en Madrid con Drafter Studio.`} />
        <link rel="canonical" href={`https://drafter.es/cita/${packageName}/${price}`} />
        <meta property="og:title" content={`Solicitar Cita - ${decodedPackageName} | Drafter Studio`} />
        <meta property="og:description" content={`Solicita tu cita para el paquete ${decodedPackageName}. Fotografía profesional en Madrid.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://drafter.es/cita/${packageName}/${price}`} />
      </Helmet>
      
      <Navigation />
      <StarsBackground color="#8b5cf6" />
      
      <main className="relative min-h-screen bg-black pt-28 pb-16 px-4 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Solicitar Cita
            </h1>
            <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">{decodedPackageName}</h2>
              <p className="text-purple-400 font-semibold text-xl">{decodedPrice}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-white font-semibold mb-2">
                  Fecha preferida
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className="block text-white font-semibold mb-2">
                Hora preferida
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleSelectChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              >
                <option value="">Selecciona una hora</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Mensaje adicional
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                placeholder="Cuéntanos más sobre tu proyecto, ideas o requisitos especiales..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Enviar solicitud
              </button>
              <button
                type="button"
                onClick={() => navigate('/paquetes')}
                className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Volver a paquetes
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Cita; 