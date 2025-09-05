"use client";
import { useTranslations } from 'next-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

interface FormValues {
  institution: string;
  contact: string;
  email: string;
  partnership: string;
}

export default function InstitutionContact() {
  const t = useTranslations('institutionsPage.contact');
  const tValidation = useTranslations('institutionsPage.contact.validation');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validationSchema = Yup.object({
    institution: Yup.string()
      .required(tValidation('institutionRequired')),
    contact: Yup.string()
      .required(tValidation('contactRequired')),
    email: Yup.string()
      .email(tValidation('emailInvalid'))
      .required(tValidation('emailRequired'))
      .test('business-email', tValidation('emailNotBusiness'), function(value) {
        if (!value) return false;
        
        const freeEmailDomains = [
          'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com',
          'icloud.com', 'me.com', 'mac.com', 'aol.com', 'msn.com',
          'ymail.com', 'rocketmail.com', 'mail.com', 'gmx.com',
          'protonmail.com', 'tutanota.com', 'tempmail.org', '10minutemail.com',
          'guerrillamail.com', 'mailinator.com', 'dispostable.com'
        ];
        
        const domain = value.split('@')[1]?.toLowerCase();
        return !freeEmailDomains.includes(domain);
      }),
    partnership: Yup.string()
      .required(tValidation('partnershipRequired'))
  });

  const initialValues: FormValues = {
    institution: '',
    contact: '',
    email: '',
    partnership: ''
  };

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setSubmitStatus('submitting');
    
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_API_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          institution: values.institution,
          contact: values.contact,
          email: values.email,
          partnership: values.partnership,
          _subject: `Partnership Inquiry from ${values.institution}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        resetForm();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transylvanian-stone mb-3 sm:mb-4">
          {t('title')}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-transylvanian-stone/80 max-w-3xl mx-auto leading-relaxed">
          {t('description')}
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        {submitStatus === 'success' && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-xs sm:text-sm text-green-800">{t('form.success')}</p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-xs sm:text-sm text-red-800">{t('form.error')}</p>
            </div>
          </div>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="institution" className="block text-xs sm:text-sm font-medium text-transylvanian-stone mb-1 sm:mb-2">
                    {t('form.institution')}
                  </label>
                  <Field
                    type="text"
                    id="institution"
                    name="institution"
                    placeholder={t('form.institutionPlaceholder')}
                    className="w-full px-3 py-2.5 sm:py-2 border border-danube-mist rounded-lg focus:ring-2 focus:ring-tricolor-blue focus:border-transparent transition-colors text-sm sm:text-base touch-manipulation"
                  />
                  <ErrorMessage name="institution" component="div" className="mt-1 text-xs sm:text-sm text-red-600" />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-xs sm:text-sm font-medium text-transylvanian-stone mb-1 sm:mb-2">
                    {t('form.contact')}
                  </label>
                  <Field
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder={t('form.contactPlaceholder')}
                    className="w-full px-3 py-2.5 sm:py-2 border border-danube-mist rounded-lg focus:ring-2 focus:ring-tricolor-blue focus:border-transparent transition-colors text-sm sm:text-base touch-manipulation"
                  />
                  <ErrorMessage name="contact" component="div" className="mt-1 text-xs sm:text-sm text-red-600" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-transylvanian-stone mb-1 sm:mb-2">
                  {t('form.email')}
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('form.emailPlaceholder')}
                  className="w-full px-3 py-2.5 sm:py-2 border border-danube-mist rounded-lg focus:ring-2 focus:ring-tricolor-blue focus:border-transparent transition-colors text-sm sm:text-base touch-manipulation"
                />
                <ErrorMessage name="email" component="div" className="mt-1 text-xs sm:text-sm text-red-600" />
              </div>

              <div>
                <label htmlFor="partnership" className="block text-xs sm:text-sm font-medium text-transylvanian-stone mb-1 sm:mb-2">
                  {t('form.partnership')}
                </label>
                <Field
                  as="textarea"
                  id="partnership"
                  name="partnership"
                  rows={4}
                  placeholder={t('form.partnershipPlaceholder')}
                  className="w-full px-3 py-2.5 sm:py-2 border border-danube-mist rounded-lg focus:ring-2 focus:ring-tricolor-blue focus:border-transparent resize-none transition-colors text-sm sm:text-base touch-manipulation min-h-[120px]"
                />
                <ErrorMessage name="partnership" component="div" className="mt-1 text-xs sm:text-sm text-red-600" />
              </div>

              <div className="text-center pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'submitting'}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3 bg-tricolor-blue text-white rounded-lg hover:bg-tricolor-blue/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center touch-manipulation min-h-[48px]"
                >
                  {(isSubmitting || submitStatus === 'submitting') ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-sm sm:text-base">{t('form.submitting')}</span>
                    </>
                  ) : (
                    <span className="text-sm sm:text-base">{t('form.submit')}</span>
                  )}
                </button>
                <p className="text-xs sm:text-sm text-transylvanian-stone/70 mt-2 sm:mt-3 leading-relaxed">
                  {t('response')}
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
