"use client";
import { useTranslations } from 'next-intl';

export default function BusinessSteps() {
  const t = useTranslations('businessPage');

  const steps = [
    {
      number: 1,
      title: t('steps.step1.title'),
      description: t('steps.step1.description'),
      timeframe: t('steps.step1.timeframe'),
      color: 'tricolor-blue'
    },
    {
      number: 2,
      title: t('steps.step2.title'),
      description: t('steps.step2.description'),
      timeframe: t('steps.step2.timeframe'),
      color: 'carpathian-forest'
    },
    {
      number: 3,
      title: t('steps.step3.title'),
      description: t('steps.step3.description'),
      timeframe: t('steps.step3.timeframe'),
      color: 'tricolor-red'
    },
    {
      number: 4,
      title: t('steps.step4.title'),
      description: t('steps.step4.description'),
      timeframe: t('steps.step4.timeframe'),
      color: 'tricolor-yellow'
    },
    {
      number: 5,
      title: t('steps.step5.title'),
      description: t('steps.step5.description'),
      timeframe: t('steps.step5.timeframe'),
      color: 'tricolor-blue'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-8 mb-8">
      <h2 className="text-2xl font-semibold text-transylvanian-stone mb-6 text-center">
        {t('steps.title')}
      </h2>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className={`flex-shrink-0 w-12 h-12 bg-${step.color}/10 text-${step.color} rounded-full flex items-center justify-center font-semibold`}>
              {step.number}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="font-semibold text-transylvanian-stone">{step.title}</h3>
                <span className="text-sm text-tricolor-blue bg-tricolor-blue/10 px-3 py-1 rounded-full font-medium">
                  {step.timeframe}
                </span>
              </div>
              <p className="text-sm text-transylvanian-stone/70 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="w-px bg-danube-mist h-6 ml-6 mt-4" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
