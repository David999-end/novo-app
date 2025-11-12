'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Crown, Zap, Rocket } from 'lucide-react'

const PLANS = [
  {
    name: 'Básico',
    price: 20,
    icon: Zap,
    color: 'from-blue-600 to-cyan-600',
    features: [
      '✅ 15 vídeos por mês',
      '✅ Duração máxima: 120 segundos',
      '✅ Sem censura',
      '✅ 5 IAs disponíveis',
      '✅ Qualidade HD',
      '✅ Download ilimitado',
    ],
  },
  {
    name: 'Pro',
    price: 50,
    icon: Crown,
    color: 'from-purple-600 to-pink-600',
    popular: true,
    features: [
      '✅ 50 vídeos por mês',
      '✅ Duração máxima: 120 segundos',
      '✅ Sem censura',
      '✅ Todas as 10 IAs disponíveis',
      '✅ Qualidade 4K',
      '✅ Sem marca d\'água',
      '✅ Suporte prioritário',
      '✅ Renderização rápida',
    ],
  },
  {
    name: 'Premium',
    price: 100,
    icon: Rocket,
    color: 'from-yellow-500 to-orange-600',
    features: [
      '✅ Vídeos ilimitados',
      '✅ Duração máxima: 120 segundos',
      '✅ Sem censura total',
      '✅ Todas as IAs + Modelos Beta',
      '✅ Qualidade 8K',
      '✅ Sem marca d\'água',
      '✅ Suporte VIP 24/7',
      '✅ API de acesso',
      '✅ Renderização ultra-rápida',
      '✅ Acesso antecipado a novas IAs',
    ],
  },
]

export default function PricingMenu() {
  return (
    <div className="mt-20 py-16 border-t border-gray-800">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-5xl font-bold text-white">
          Planos Premium
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Escolha o plano ideal para criar vídeos incríveis com IA. Sem censura, com as melhores IAs do mundo.
        </p>
        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
          <Check className="w-4 h-4" />
          Plano de R$ 20 permite gerar 15 vídeos de até 120 segundos
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PLANS.map((plan) => {
          const Icon = plan.icon
          return (
            <Card
              key={plan.name}
              className={`relative p-8 bg-gradient-to-br ${
                plan.popular
                  ? 'from-purple-900/40 to-pink-900/40 border-2 border-purple-500 scale-105'
                  : 'from-gray-900/80 to-black/80 border border-gray-800'
              } backdrop-blur-lg hover:scale-105 transition-all duration-300 shadow-2xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center space-y-4 mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} shadow-xl`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-white">
                    R$ {plan.price}
                  </span>
                  <span className="text-gray-400">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`p-1 rounded-full bg-gradient-to-br ${plan.color} mt-0.5 flex-shrink-0`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 font-semibold ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                } transition-all`}
              >
                Assinar Agora
              </Button>
            </Card>
          )
        })}
      </div>

      <div className="mt-12 text-center space-y-4">
        <p className="text-gray-500 text-sm">
          Todos os planos incluem 7 dias de garantia. Cancele quando quiser.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            <span>Sem censura</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            <span>IAs mais avançadas</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            <span>Até 120 segundos</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            <span>Qualidade profissional</span>
          </div>
        </div>
      </div>
    </div>
  )
}
