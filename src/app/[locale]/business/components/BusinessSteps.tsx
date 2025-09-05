"use client";
import { useTranslations } from 'next-intl';

export default function BusinessSteps() {
  const t = useTranslations('businessPage');

  const getStepStyles = (color: string) => {
    switch (color) {
      case 'tricolor-blue':
        return 'bg-tricolor-blue/10 text-tricolor-blue';
      case 'carpathian-forest':
        return 'bg-carpathian-forest/10 text-carpathian-forest';
      case 'tricolor-red':
        return 'bg-tricolor-red/10 text-tricolor-red';
      case 'tricolor-yellow':
        return 'bg-tricolor-yellow/20 text-tricolor-yellow';
      default:
        return 'bg-tricolor-blue/10 text-tricolor-blue';
    }
  };

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
    <div className="bg-white rounded-xl shadow-sm border border-danube-mist p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-transylvanian-stone mb-4 sm:mb-6 text-center">
        {t('steps.title')}
      </h2>
      
      <div className="space-y-4 sm:space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${getStepStyles(step.color)} rounded-full flex items-center justify-center font-semibold text-sm sm:text-base self-start sm:self-auto`}>
              {step.number}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-2 sm:gap-3 mb-2 sm:mb-3">
                <h3 className="font-semibold text-transylvanian-stone text-sm sm:text-base leading-tight">{step.title}</h3>
                <span className="text-xs sm:text-sm text-tricolor-blue bg-tricolor-blue/10 px-2 sm:px-3 py-1 rounded-full font-medium self-start">
                  {step.timeframe}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-transylvanian-stone/70 leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="w-px bg-danube-mist h-4 sm:h-6 ml-5 sm:ml-6 mt-3 sm:mt-4 hidden sm:block" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
