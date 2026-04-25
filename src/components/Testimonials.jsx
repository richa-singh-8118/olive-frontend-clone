import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Megan L.',
      location: 'Austin, TX',
      quote: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Tina B.',
      location: 'Denver, CO',
      quote: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      name: 'Lila M.',
      location: 'Portland, OR',
      quote: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
      avatar: 'https://i.pravatar.cc/150?img=9',
    },
    {
      name: 'Sarah J.',
      location: 'Chicago, IL',
      quote: "I love how Olive flags things I wouldn't have even known to look for. It's like having a nutritionist in my pocket.",
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Emily R.',
      location: 'Seattle, WA',
      quote: "The personalized suggestions are amazing. It doesn't just tell me what's bad, it actually helps me find better alternatives.",
      avatar: 'https://i.pravatar.cc/150?img=16',
    },
    {
      name: 'Jessica T.',
      location: 'Boston, MA',
      quote: "As a busy mom, I don't have time to research every ingredient. Olive does the heavy lifting for me. Absolute lifesaver!",
      avatar: 'https://i.pravatar.cc/150?img=20',
    },
  ];

  return (
    <section className="py-24 bg-dark-green relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-olive/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-olive/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Real Mothers <span className="text-olive">Real Results</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Join thousands of satisfied parents who trust Olive to help them make healthier choices for their families.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl break-inside-avoid"
            >
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-olive/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-white text-dark-green px-8 py-4 rounded-full font-bold hover:bg-off-white hover:scale-105 transition-all shadow-lg flex items-center gap-2 mx-auto">
            Read all 3,147+ reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
