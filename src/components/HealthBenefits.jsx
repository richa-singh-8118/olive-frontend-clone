import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ingredientImage from '../assets/ingredient_filtering.png';

const HealthBenefits = () => {
  const benefits = [
    {
      title: 'Achieve Nutritional Clarity',
      points: [
        'Olive breaks down every ingredient into clear, actionable information.',
        'Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.',
        'Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.',
      ],
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Proactive Ingredient Filtering',
      points: [
        'Olive flags harmful additives and controversial ingredients before they become mainstream concerns.',
        'Keeps you ahead of potential food safety concerns.',
        'Gives busy parents the confidence to make safer food choices every time.',
      ],
      image: ingredientImage,
    },
    {
      title: 'Real Health Outcomes for Your Family',
      points: [
        "Empowers parents to feel more in control of their family's health.",
        'Delivers personalized suggestions for healthier food choices.',
        'Promotes long-term well-being through informed, balanced decisions.',
      ],
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-24 bg-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <div className="rounded-[32px] overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                  {benefit.title}
                </h2>
                <div className="space-y-4">
                  {benefit.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-olive flex-shrink-0 mt-1" />
                      <p className="text-gray-300 text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;
