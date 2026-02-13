import { motion } from 'motion/react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function ReservationSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    guests: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Reserva solicitada! En una implementación real, esto enviaría los datos al servidor.');
  };

  return (
    <section id="reserva" className="py-24 px-6 md:px-12" style={{ backgroundColor: '#F4F1EA' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#1A2419',
              letterSpacing: '0.02em'
            }}
          >
            Reserva tu refugio
          </h2>
          <p
            className="max-w-2xl mx-auto mb-6"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.125rem',
              color: '#2F4538',
              lineHeight: '1.7',
              fontWeight: '300'
            }}
          >
            Diseñamos un ambiente pensado para la conversación y el disfrute. Pocas mesas, mucha calma.
          </p>
          
          {/* Opening Hours Badge */}
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              backgroundColor: '#3D5A3B',
              boxShadow: '0 4px 15px rgba(61, 90, 59, 0.35)'
            }}
          >
            <Clock size={20} style={{ color: '#E8DFD2' }} />
            <span
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.95rem',
                color: '#E8DFD2',
                fontWeight: '600',
                letterSpacing: '0.3px'
              }}
            >
              Jueves a Domingo • 5:00 – 10:00 p.m.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-[24px] p-8 md:p-12"
          style={{
            backgroundColor: '#E8DFD2',
            boxShadow: '0 8px 40px rgba(47, 69, 56, 0.15)'
          }}
        >
          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: step >= s ? '#3D5A3B' : '#D9CFC0',
                    color: step >= s ? '#E8DFD2' : '#2F4538',
                    border: `2px solid ${step >= s ? '#3D5A3B' : 'rgba(47, 69, 56, 0.3)'}`,
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600'
                  }}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className="flex-1 h-0.5 mx-2"
                    style={{
                      backgroundColor: step > s ? '#3D5A3B' : 'rgba(47, 69, 56, 0.2)'
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Number of Guests */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Users size={24} style={{ color: '#3D5A3B' }} />
                  <label
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.75rem',
                      color: '#1A2419'
                    }}
                  >
                    ¿A cuántos recibimos hoy?
                  </label>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: num.toString() })}
                      className="py-4 rounded-[24px] transition-all duration-300"
                      style={{
                        backgroundColor: formData.guests === num.toString() ? '#3D5A3B' : '#D9CFC0',
                        color: formData.guests === num.toString() ? '#E8DFD2' : '#1A2419',
                        border: `2px solid ${formData.guests === num.toString() ? '#3D5A3B' : 'transparent'}`,
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '1.125rem',
                        fontWeight: '600'
                      }}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => formData.guests && setStep(2)}
                  disabled={!formData.guests}
                  className="w-full mt-8 py-4 rounded-[24px] transition-all duration-300 disabled:opacity-50"
                  style={{
                    backgroundColor: '#2F4538',
                    color: '#E8DFD2',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '1rem',
                    letterSpacing: '0.5px',
                    fontWeight: '500'
                  }}
                >
                  Continuar
                </button>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar size={24} style={{ color: '#3D5A3B' }} />
                  <label
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.75rem',
                      color: '#1A2419'
                    }}
                  >
                    Elige el momento
                  </label>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.875rem',
                        color: '#2F4538',
                        letterSpacing: '0.3px'
                      }}
                    >
                      Fecha
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-6 py-4 rounded-[24px] outline-none"
                      style={{
                        backgroundColor: '#D9CFC0',
                        border: '2px solid rgba(61, 90, 59, 0.3)',
                        color: '#1A2419',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.875rem',
                        color: '#2F4538',
                        letterSpacing: '0.3px'
                      }}
                    >
                      Hora
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['12:00', '13:30', '15:00', '19:00', '20:30', '22:00'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className="py-3 rounded-[24px] transition-all duration-300"
                          style={{
                            backgroundColor: formData.time === time ? '#3D5A3B' : '#D9CFC0',
                            color: formData.time === time ? '#E8DFD2' : '#1A2419',
                            border: `2px solid ${formData.time === time ? '#3D5A3B' : 'transparent'}`,
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '0.95rem'
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-[24px] transition-all duration-300"
                    style={{
                      border: '2px solid #1A2419',
                      color: '#1A2419',
                      backgroundColor: 'transparent',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1rem'
                    }}
                  >
                    Volver
                  </button>
                  <button
                    type="button"
                    onClick={() => formData.date && formData.time && setStep(3)}
                    disabled={!formData.date || !formData.time}
                    className="flex-1 py-4 rounded-[24px] transition-all duration-300 disabled:opacity-50"
                    style={{
                      backgroundColor: '#2F4538',
                      color: '#E8DFD2',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1rem',
                      fontWeight: '500'
                    }}
                  >
                    Continuar
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Additional Notes */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare size={24} style={{ color: '#3D5A3B' }} />
                  <label
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.75rem',
                      color: '#1A2419'
                    }}
                  >
                    ¿Algún detalle especial?
                  </label>
                </div>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Alergias, celebraciones, preferencias de mesa..."
                  rows={5}
                  className="w-full px-6 py-4 rounded-[24px] outline-none resize-none mb-6"
                  style={{
                    backgroundColor: '#D9CFC0',
                    border: '2px solid rgba(61, 90, 59, 0.3)',
                    color: '#1A2419',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                />
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 rounded-[24px] transition-all duration-300"
                    style={{
                      border: '2px solid #1A2419',
                      color: '#1A2419',
                      backgroundColor: 'transparent',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1rem'
                    }}
                  >
                    Volver
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 rounded-[24px] transition-all duration-300 hover:shadow-xl"
                    style={{
                      backgroundColor: '#2F4538',
                      color: '#E8DFD2',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '1rem',
                      fontWeight: '500',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Confirmar Reserva
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
