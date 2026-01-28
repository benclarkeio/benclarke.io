import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SocialIcon } from './components/SocialIcons'
import './App.css'

const ventures = [
  {
    name: 'A2A Net',
    desc: 'a2anet.com',
    url: 'https://a2anet.com/',
  },
  {
    name: 'Lifey',
    desc: 'lifeyapp.com',
    url: 'https://lifeyapp.com/',
  },
]

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/benclarkeio/', icon: 'linkedin' as const },
  { name: 'X', url: 'https://x.com/benclarkeio', icon: 'x' as const },
  { name: 'GitHub', url: 'https://github.com/benclarkeio', icon: 'github' as const },
  { name: 'Reddit', url: 'https://www.reddit.com/user/benclarkereddit/', icon: 'reddit' as const },
  { name: 'Instagram', url: 'https://www.instagram.com/benclarkeio', icon: 'instagram' as const },
  { name: 'TikTok', url: 'https://tiktok.com/@benclarkeio', icon: 'tiktok' as const },
  { name: 'YouTube', url: 'https://www.youtube.com/@benclarkeio', icon: 'youtube' as const },
]

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

function App() {
  return (
    <div className="site">
      {/* Header */}
      <motion.header
        className="header"
        variants={fade}
        custom={0}
        initial="hidden"
        animate="show"
      >
        <h1 className="header-name">Ben Clarke</h1>
        <p className="header-bio">
          Founder of{' '}
          <a href="https://a2anet.com/" target="_blank" rel="noopener noreferrer">
            A2A Net
          </a>{' '}
          and{' '}
          <a href="https://lifeyapp.com/" target="_blank" rel="noopener noreferrer">
            Lifey
          </a>
          .
        </p>
      </motion.header>

      {/* Ventures */}
      <motion.section
        className="section"
        variants={fade}
        custom={1}
        initial="hidden"
        animate="show"
      >
        <h2 className="section-heading">Ventures</h2>
        <div className="ventures">
          {ventures.map((v) => (
            <a
              key={v.name}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="venture"
            >
              <div className="venture-left">
                <span className="venture-name">{v.name}</span>
                <span className="venture-desc">{v.desc}</span>
              </div>
              <ArrowUpRight size={15} className="venture-arrow" />
            </a>
          ))}
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        className="section"
        variants={fade}
        custom={2}
        initial="hidden"
        animate="show"
      >
        <h2 className="section-heading">Elsewhere</h2>
        <div className="socials">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <SocialIcon name={s.icon} />
              {s.name}
            </a>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="footer"
        variants={fade}
        custom={3}
        initial="hidden"
        animate="show"
      >
        <p className="footer-text">benclarke.io</p>
      </motion.footer>
    </div>
  )
}

export default App
