import React from 'react';
import { motion } from 'framer-motion';
import { ScanBarcode, Database, Lightbulb } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ScanBarcode className="w-8 h-8 text-olive" />,
      title: 'Scan & Detect',
      description: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
    },
    {
      icon: <Database className="w-8 h-8 text-olive" />,
      title: 'Data Analysis & Validation',
      description: 'After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.',
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-olive" />,
      title: 'Actionable Insights',
      description: "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.",
    },
  ];

  return (
    <section className="py-24 bg-off-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-olive/10 rounded-2xl flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-dark-green mb-4">{feature.title}</h3>
            <p className="text-text-secondary leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
