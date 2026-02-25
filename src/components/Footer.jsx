import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#f0e8dc]">
      <div className="container-max grid gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.9fr_1fr]">
        <div>
          <p className="text-lg font-semibold">Travel Wonders</p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Curated journeys across India, blending iconic landmarks with hidden gems and local stories.
          </p>
          <div className="mt-6 flex items-center gap-3 text-[var(--muted)]">
            <FaInstagram className="h-4 w-4" />
            <FaFacebookF className="h-4 w-4" />
            <FaXTwitter className="h-4 w-4" />
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-[var(--muted)]">
            <Link to="/" className="hover:text-[var(--ocean)]">
              Home
            </Link>
            <Link to="/destinations" className="hover:text-[var(--ocean)]">
              Destinations
            </Link>
            <Link to="/about" className="hover:text-[var(--ocean)]">
              About
            </Link>
            <Link to="/contact" className="hover:text-[var(--ocean)]">
              Contact
            </Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Contact</p>
          <div className="mt-3 flex flex-col gap-3 text-[var(--muted)]">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              support@travelwonders.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +91 9876543210
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              123 Adventure Street, Travel City, India
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-[var(--muted)]">
        © 2026 Travel Wonders. Crafted for curious explorers.
      </div>
    </footer>
  )
}
