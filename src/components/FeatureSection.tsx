import { Brain, Target, Sparkles, Users } from 'lucide-react';

/**
 * EDITABLE COMPONENT - FeatureSection
 * 
 * Sección de características y beneficios de la tienda
 */

export const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Basado en Neurociencia',
      description: 'Todos nuestros programas están fundamentados en investigación científica sobre el funcionamiento del cerebro'
    },
    {
      icon: Target,
      title: 'Resultados Comprobados',
      description: 'Métodos probados que generan cambios reales y duraderos en tu vida personal y profesional'
    },
    {
      icon: Sparkles,
      title: 'Transformación Personal',
      description: 'Herramientas prácticas para empoderar tu mente y alcanzar tu máximo potencial'
    },
    {
      icon: Users,
      title: 'Comunidad de Apoyo',
      description: 'Acceso a una red de mujeres comprometidas con su crecimiento y desarrollo continuo'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir nuestros programas?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combinamos ciencia, práctica y empoderamiento para crear experiencias de aprendizaje transformadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};