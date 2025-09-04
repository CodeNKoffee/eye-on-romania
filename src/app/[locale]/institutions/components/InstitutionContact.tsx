"use client";
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function InstitutionContact() {
  const t = useTranslations('institutionsPage.contact');
  const [formData, setFormData] = useState({
    institution: '',
    contact: '',
    email: '',
    partnership: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-transylvanian-stone mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-transylvanian-stone/80 max-w-3xl mx-auto">
          {t('description')}
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="institution" className="block text-sm font-medium text-transylvanian-stone mb-2">
                {t('form.institution')}
              </label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder={t('form.institutionPlaceholder')}
                className="w-full px-3 py-2 border border-danube-mist rounded-lg focus:ring-2 focus:ring-tricolor-blue focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-transylvanian-stone mb-2">
                {t('form.contact')}
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder={t('form.contactPlaceholder')}
                className="w-full px-3 py-2 border border-danube-mist rounded-lg focus:ring-2 focus:ring-tricolor-blue focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-transylvanian-stone mb-2">
              {t('form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('form.emailPlaceholder')}
              className="w-full px-3 py-2 border border-danube-mist rounded-lg focus:ring-2 focus:ring-tricolor-blue focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="partnership" className="block text-sm font-medium text-transylvanian-stone mb-2">
              {t('form.partnership')}
            </label>
            <textarea
              id="partnership"
              name="partnership"
              rows={4}
              value={formData.partnership}
              onChange={handleChange}
              placeholder={t('form.partnershipPlaceholder')}
              className="w-full px-3 py-2 border border-danube-mist rounded-lg focus:ring-2 focus:ring-tricolor-blue focus:border-transparent resize-none"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-tricolor-blue text-white rounded-lg hover:bg-tricolor-blue/90 transition-colors font-medium"
            >
              {t('form.submit')}
            </button>
            <p className="text-sm text-transylvanian-stone/70 mt-3">
              {t('response')}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
