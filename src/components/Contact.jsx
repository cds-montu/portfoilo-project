import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8h4V20h-4zM8 8h3.6v1.7h.05c.5-.95 1.7-1.95 3.5-1.95 3.2 0 4.2 2.05 4.2 5.35V20h-4v-6.1c0-1.45-.03-3.33-2.03-3.33-2.03 0-2.34 1.6-2.34 3.2V20H8V8z" />
        </svg>
      ),
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/montu-prajapati/',
      target: '_blank',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.37.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.697.825.578C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
        </svg>
      ),
      label: 'GitHub',
      href: 'https://github.com/montu-07',
      target: '_blank',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: 'Email',
      href: 'mailto:montuprajapati487@gmail.com',
      target: '_self',
    },
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center py-20 px-6 gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 5 }}
      />

      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Let's Build Something Great</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project idea, want to discuss your tech stack, or just need a passionate developer? 
              I'm excited to collaborate on innovative solutions.
            </p>
          </motion.div>

          {/* Main contact section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name input */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-3 bg-secondary/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      formErrors.name
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-700 focus:border-red-500'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </motion.div>

                {/* Email input */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-3 bg-secondary/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      formErrors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-700 focus:border-red-500'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </motion.div>

                {/* Message textarea */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-3 bg-secondary/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
                      formErrors.message
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-700 focus:border-red-500'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </motion.div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg relative overflow-hidden group disabled:opacity-75"
                  whileHover={!isSubmitting && !submitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !submitted ? { scale: 0.98 } : {}}
                >
                  <motion.span
                    className="relative z-10 block"
                    animate={isSubmitting ? { opacity: 0.7 } : submitted ? { opacity: 1 } : { opacity: 1 }}
                  >
                    {submitted ? '✨ Message Sent Successfully!' : isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 z-0"
                    animate={{ x: submitted ? ['100%', '-100%', '100%'] : 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
                
                {formErrors.submit && (
                  <p className="text-red-500 text-sm text-center">{formErrors.submit}</p>
                )}
              </form>
            </motion.div>

            {/* Contact info and social links */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact methods */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <motion.a
                  href="mailto:montuprajapati487@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg glass group cursor-pointer"
                  whileHover={{ x: 5, backgroundColor: 'rgba(255, 107, 107, 0.1)' }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <span className="text-3xl">✉️</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold group-hover:text-red-500 transition-colors">montuprajapati487@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg glass group cursor-pointer"
                  whileHover={{ x: 5, backgroundColor: 'rgba(255, 107, 107, 0.1)' }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <span className="text-3xl">🌍</span>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-semibold group-hover:text-red-500 transition-colors">India (Remote)</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-lg glass group cursor-pointer"
                  whileHover={{ x: 5, backgroundColor: 'rgba(255, 107, 107, 0.1)' }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <span className="text-3xl">⚡</span>
                  <div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                    <p className="text-white font-semibold group-hover:text-red-500 transition-colors">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <motion.div
                  className="flex gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? 'visible' : 'hidden'}
                >
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target={social.target || '_blank'}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            delay: idx * 0.1,
                          },
                        },
                      }}
                      className="w-20 rounded-lg glass flex flex-col items-center justify-center px-3 py-4 group hover:scale-105"
                      whileHover={{
                        backgroundColor: 'rgba(255, 107, 107, 0.12)',
                        borderColor: '#ff6b6b',
                      }}
                      transition={{ type: 'spring', damping: 20 }}
                      title={social.label}
                    >
                      <div className="w-12 h-12 flex items-center justify-center text-3xl mb-2">
                        {social.icon}
                      </div>
                      <span className="text-sm md:text-base text-gray-300 group-hover:text-white">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-gray-800 text-center"
          >
            <p className="text-gray-500 mb-4">
              Crafted with <span className="text-red-500">❤️</span> using React, Node.js, and modern web technologies
            </p>
            <p className="text-sm text-gray-600">© 2025 Montu Prajapati. Full Stack Developer. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
