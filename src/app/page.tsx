import VideoGenerator from '@/components/custom/video-generator'
import PricingMenu from '@/components/custom/pricing-menu'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <VideoGenerator />
        <PricingMenu />
      </div>
    </main>
  )
}
