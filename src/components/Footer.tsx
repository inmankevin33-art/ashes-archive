export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ashes-charcoal border-t border-ashes-charcoal mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-ashes-gold font-bold mb-4">About</h3>
            <p className="text-ashes-light-grey text-sm">
              The Ashes Archive is your complete digital home for cricket's greatest rivalry between England and Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-ashes-gold font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-ashes-light-grey text-sm">
              <li><a href="/" className="hover:text-ashes-gold transition-colors">Home</a></li>
              <li><a href="/timeline" className="hover:text-ashes-gold transition-colors">Timeline</a></li>
              <li><a href="/greatest-matches" className="hover:text-ashes-gold transition-colors">Greatest Matches</a></li>
              <li><a href="/legends" className="hover:text-ashes-gold transition-colors">Legends</a></li>
              <li><a href="/records" className="hover:text-ashes-gold transition-colors">Records</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-ashes-gold font-bold mb-4">Information</h3>
            <p className="text-ashes-light-grey text-sm">
              Dedicated to the history and legacy of The Ashes cricket series.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ashes-dark pt-8">
          <p className="text-center text-ashes-light-grey text-sm">
            © {currentYear} The Ashes Archive. All rights reserved. 🏏
          </p>
        </div>
      </div>
    </footer>
  )
}
