'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Star, Video, Loader2, Play, Zap } from 'lucide-react'
import VideoPreview from './video-preview'

const AI_PROVIDERS = [
  { id: 'runway', name: 'Runway Gen-3 Alpha', description: 'Vídeos ultra-realistas de última geração' },
  { id: 'pika', name: 'Pika Labs 1.5', description: 'Animações criativas e dinâmicas' },
  { id: 'stability', name: 'Stable Video Diffusion', description: 'Vídeos estáveis e consistentes' },
  { id: 'synthesia', name: 'Synthesia Pro', description: 'Avatares hiper-realistas' },
  { id: 'descript', name: 'Descript Overdub', description: 'Edição avançada com IA' },
  { id: 'heygen', name: 'HeyGen Studio', description: 'Vídeos profissionais com IA' },
  { id: 'luma', name: 'Luma Dream Machine', description: 'Geração de vídeos 3D realistas' },
  { id: 'kaiber', name: 'Kaiber AI', description: 'Transformação artística de vídeos' },
  { id: 'genmo', name: 'Genmo Replay', description: 'Animações criativas ilimitadas' },
  { id: 'moonvalley', name: 'Moonvalley AI', description: 'Vídeos cinematográficos' },
]

const VIDEO_STYLES = [
  'Realista',
  'Animado',
  'Cinematográfico',
  '3D',
  'Anime',
  'Cartoon',
  'Documentário',
  'Futurista',
]

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState('')
  const [selectedAI, setSelectedAI] = useState('runway')
  const [style, setStyle] = useState('Realista')
  const [duration, setDuration] = useState([30])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setProgress(0)
    setGeneratedVideo(null)

    // Simulação de progresso
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval)
          return 95
        }
        return prev + 5
      })
    }, 500)

    try {
      const response = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          provider: selectedAI,
          style,
          duration: duration[0],
        }),
      })

      const data = await response.json()
      
      clearInterval(progressInterval)
      setProgress(100)
      
      setTimeout(() => {
        setGeneratedVideo(data.videoUrl || 'demo')
        setIsGenerating(false)
      }, 500)
    } catch (error) {
      console.error('Erro ao gerar vídeo:', error)
      clearInterval(progressInterval)
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Robot Header - Adorável e Saudando */}
      <div className="text-center space-y-6 py-8">
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Robot adorável animado */}
            <div className="relative w-32 h-32 animate-bounce">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl rotate-6 blur-xl opacity-60 animate-pulse" />
              <div className="relative bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-6 shadow-2xl">
                {/* Cabeça do robot */}
                <div className="space-y-2">
                  {/* Olhos */}
                  <div className="flex justify-center gap-3">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                  </div>
                  {/* Boca sorridente */}
                  <div className="flex justify-center">
                    <div className="w-8 h-2 bg-white rounded-full" />
                  </div>
                  {/* Antena */}
                  <div className="flex justify-center">
                    <div className="w-1 h-4 bg-white/50 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            {/* Mão acenando */}
            <div className="absolute -right-4 top-8 animate-wave">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-lg" />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            AI Video Studio Pro
          </h1>
          <p className="text-2xl text-gray-300 font-semibold animate-pulse">
            👋 Olá! Vamos criar vídeos incríveis juntos!
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Crie vídeos realistas e animados sem censura, com as IAs mais avançadas do mundo. 
            Duração de até 120 segundos por vídeo.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Painel de Controle */}
        <Card className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
          <div className="space-y-6">
            <div>
              <Label className="text-white text-lg mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Descreva seu vídeo (sem censura)
              </Label>
              <Textarea
                placeholder="Ex: Um astronauta caminhando em Marte ao pôr do sol, câmera cinematográfica, 4K, hiper-realista..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] bg-black/50 border-gray-700 text-white placeholder:text-gray-500 resize-none focus:border-purple-500"
              />
            </div>

            <div>
              <Label className="text-white text-lg mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Escolha a IA (Modelos Avançados)
              </Label>
              <Select value={selectedAI} onValueChange={setSelectedAI}>
                <SelectTrigger className="bg-black/50 border-gray-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700 max-h-[300px]">
                  {AI_PROVIDERS.map((provider) => (
                    <SelectItem key={provider.id} value={provider.id} className="text-white hover:bg-gray-800">
                      <div className="flex flex-col">
                        <span className="font-semibold">{provider.name}</span>
                        <span className="text-xs text-gray-400">{provider.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-white text-lg mb-3">Estilo do Vídeo</Label>
              <div className="grid grid-cols-4 gap-2">
                {VIDEO_STYLES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      style === s
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-white text-lg mb-3">
                Duração: {duration[0]} segundos (máx: 120s)
              </Label>
              <Slider
                value={duration}
                onValueChange={setDuration}
                min={5}
                max={120}
                step={5}
                className="cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>5s</span>
                <span>60s</span>
                <span>120s</span>
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Gerando... {progress}%
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Gerar Vídeo com IA
                </>
              )}
            </Button>

            {isGenerating && (
              <div className="space-y-2">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-center text-gray-400 text-sm">
                  Processando com {AI_PROVIDERS.find(p => p.id === selectedAI)?.name}...
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Preview */}
        <Card className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl">
          <VideoPreview videoUrl={generatedVideo} isGenerating={isGenerating} />
        </Card>
      </div>

      {/* Galeria de Exemplos */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Vídeos Criados com IA
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <Play className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform relative z-10" />
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm">Exemplo de vídeo gerado #{i}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
