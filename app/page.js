import TopBar from '@/components/TopBar'
import HeroSection from '@/components/HeroSection'
import MembersSection from '@/components/MembersSection'

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <HeroSection />
        <MembersSection />
      </main>
    </>
  )
}
