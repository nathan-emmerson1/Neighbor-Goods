import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: 'url(/images/background-image.png' }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="card glass w-full ">
          <div className="card-body">
            <h1 className="mb-5 text-7xl font-bold">Our Mission</h1>
            <p className="mb-5 text-3xl">
              At Neighbour Goods, our mission is to bridge hearts and homes by
              creating a vibrant, inclusive online marketplace where every
              transaction fuels a cycle of generosity and sustainable growth. We
              strive to empower locals, uplift communities, and foster
              meaningful connections, all while promoting environmental
              stewardship and social equity. Together, we transform commerce
              into a powerful force for good, cultivating a world where every
              exchange enriches lives and strengthens our collective future.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
