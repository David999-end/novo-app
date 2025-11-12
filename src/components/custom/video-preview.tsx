'use client'

import { Button } from '@/components/ui/button'
import { Download, Video, Loader2 } from 'lucide-react'

interface VideoPreviewProps {
  videoUrl: string | null
  isGenerating: boolean
}

export default function VideoPreview({ videoUrl, isGenerating }: VideoPreviewProps) {
  const handleDownload = () => {
    if (videoUrl) {
      // Lógica de download
      alert('Download iniciado! (Demo)')
    }
  }

  if (isGenerating) {
    return (
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-16 h-16 text-purple-400 animate-spin" />
        <p className="text-white text-lg">Gerando seu vídeo...</p>
        <p className="text-purple-300 text-sm text-center max-w-md">
          A IA está processando sua solicitação. Isso pode levar alguns minutos dependendo da duração.
        </p>
      </div>
    )
  }

  if (!videoUrl) {
    return (
      <div className="h-full flex flex-col items-center justify-center space-y-4 text-center">
        <div className="p-6 bg-white/5 rounded-full">
          <Video className="w-16 h-16 text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Preview do Vídeo</h3>
        <p className="text-purple-300 max-w-md">
          Seu vídeo gerado aparecerá aqui. Descreva o que você quer criar e clique em "Gerar Vídeo com IA".
        </p>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex-1 bg-black rounded-lg overflow-hidden relative group">
        {/* Simulação de vídeo */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full inline-block">
              <Video className="w-12 h-12 text-white" />
            </div>
            <p className="text-white text-lg font-semibold">Vídeo Gerado com Sucesso!</p>
            <p className="text-purple-300 text-sm">Preview disponível</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
        >
          <Download className="w-5 h-5 mr-2" />
          Baixar Vídeo (MP4)
        </Button>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-purple-300">Qualidade</p>
            <p className="text-white font-semibold">4K Ultra HD</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-purple-300">Formato</p>
            <p className="text-white font-semibold">MP4</p>
          </div>
        </div>
      </div>
    </div>
  )
}
