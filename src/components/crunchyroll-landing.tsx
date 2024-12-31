'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react'

export function CrunchyrollLandingComponent() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const featuredAnime = [
    { title: "Demon Slayer: Kimetsu no Yaiba", image: "./images/cover.png?height=540&width=960&text=Demon+Slayer" },
    { title: "Jujutsu Kaisen", image: "./images/cover_1.webp?height=540&width=960&text=Jujutsu+Kaisen" },
    { title: "One Piece", image: "./images/cover_2.avif?height=540&width=960&text=One+Piece" },
    { title: "My Hero Academia", image: "./images/cover_3.avif?height=540&width=960&text=My+Hero+Academia" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitMessage('Thank you for signing up! Check your email for further instructions.')
    setIsSubmitting(false)
    setEmail('')
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src="/images/Crunchyroll_Logo_1.png"
            alt="Crunchyroll"
            width={150}
            height={32}
            className="h-8"
            priority
            onError={(e) => {
              console.error('Image failed to load');
              e.currentTarget.src = "/placeholder.svg?height=32&width=150&text=Crunchyroll";
            }}
          />
          <span className="sr-only">Crunchyroll</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6" aria-label="Main navigation">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" aria-label="Browse anime">
            Browse
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" aria-label="Read manga">
            Manga
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" aria-label="Play games">
            Games
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" aria-label="Read anime news">
            News
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section 
          className="w-full py-6 md:py-12 lg:py-16 xl:py-24 relative"
          style={{
            backgroundImage: "url('/images/Banner.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/images/Hime.webp"
                width={500}
                height={500}
                alt="Anime hero image"
                className="mx-auto overflow-hidden rounded-xl object-contain object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Anime Adventure Starts Here
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Stream the world's largest anime library. Simulcasts from Japan, exclusives, and more!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-black text-white hover:bg-gray-800">Start Free Trial</Button>
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                    Explore Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5E6D3] text-black">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose Crunchyroll?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <svg
                  className=" h-12 w-12 mb-4 text-black"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Ad-Free Streaming</h3>
                <p className="text-gray-900">Enjoy uninterrupted anime without any ads.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg
                  className=" h-12 w-12 mb-4 text-black"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Simulcasts</h3>
                <p className="text-gray-900">Watch new episodes as soon as one hour after Japan.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg
                  className=" h-12 w-12 mb-4 text-black"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m8 6 4-4 4 4" />
                  <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                  <path d="m20 22-5-5" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Exclusive Content</h3>
                <p className="text-gray-900">Access Crunchyroll Originals and exclusive anime.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Popular Right Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredAnime.map((anime, index) => (
                <Card key={index} className="bg-gray-900 overflow-hidden">
                  <Image
                    src={anime.image}
                    width={960}
                    height={540}
                    alt={anime.title}
                    className="object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4 bg-[#ECE1C3] text-black">
                    <h3 className="font-bold text-lg mb-2">{anime.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Trailer
            </h2>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JxaJXnWDAN8?si=kaDejzU0SnGyJOoT"
                title="Dr. Stone Science Future Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Choose Your Plan
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Subscription plans">
              <Card className="bg-[#F5E6D3] text-black" role="listitem">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Fan</h3>
                  <p className="text-3xl font-bold mb-4">$7.99/mo</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        className=" h-5 w-5 mr-2 text-orange-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Ad-free anime
                    </li>
                    <li className="flex items-center">
                      <svg
                        className=" h-5 w-5 mr-2 text-orange-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      New episodes one hour after Japan
                    </li>
                  </ul>
                  <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Choose Fan</Button>
                </CardContent>
              </Card>
              <Card className="bg-[#F5E6D3] text-black border-4 border-orange-500" role="listitem">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Mega Fan</h3>
                  <p className="text-3xl font-bold mb-4">$9.99/mo</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        className=" h-5 w-5 mr-2 text-orange-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Everything in Fan
                    </li>
                    <li className="flex items-center">
                      <svg
                        className=" h-5 w-5 mr-2 text-orange-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Offline viewing
                    </li>
                    <li className="flex items-center">
                      <svg
                        className=" h-5 w-5 mr-2 text-orange-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      4 concurrent streams
                    </li>
                  </ul>
                  <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Choose Mega Fan</Button>
                </CardContent>
              </Card>
              <Card className="bg-[#F5E6D3] text-black" role="listitem">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Ultimate Fan</h3>
                  <p className="text-3xl font-bold mb-4">$14.99/mo</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg
                        className=" h-5 w-5 mr-2 text-orange-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Everything in Mega Fan
                    </li>
                    <li className="flex items-center">
                      <svg
                        className=" h-5 w-5 mr-2 text-orange-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20  6 9 17 4 12" />
                      </svg>
                      6 concurrent streams
                    </li>
                    <li className="flex items-center">
                      <svg
                        className=" h-5 w-5 mr-2 text-orange-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Exclusive merchandise discounts
                    </li>
                  </ul>
                  <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Choose Ultimate Fan</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Anime Journey Today</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join millions of fans and dive into the world of anime. Start your free trial now!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    className="bg-[#F5E6D3] border-orange-500 text-black placeholder-gray-500"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                  />
                  <Button className="bg-orange-500 text-white hover:bg-orange-600" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Get Started'}
                  </Button>
                </form>
                {submitMessage && <p className="mt-2 text-sm text-orange-500">{submitMessage}</p>}
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-white" href="#">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link className="underline underline-offset-2 hover:text-white" href="#">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 Crunchyroll, LLC. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6" aria-label="Footer navigation">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Cookies
          </Link>
        </nav>
      </footer>
    </div>
  )
}