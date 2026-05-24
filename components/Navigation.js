'use client';

import { useRouter, usePathname } from 'next/navigation';

const navItems = [
  { id: 'about', label: 'Our Story', href: '/about' },
  { id: 'works', label: 'Our Projects', href: '/works' },
  { id: 'contact', label: 'Contact', href: '/contact' }
];

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    if (pathname === '/case' && href === '/works') return true;
    return false;
  };

  return (
    <nav className="nav">
      <div className="nav-inner" style={{ padding: "18px 60px" }}>
        <button
          className="brand"
          onClick={() => router.push('/')}
          aria-label="Think Tank — home"
        >
          <img src="/assets/logo.png" alt="Think Tank" className="brand-logo" />
        </button>
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={isActive(item.href) ? 'active' : ''}
              onClick={() => router.push(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="nav-cta"
          onClick={() => router.push('/contact')}
        >
          Get Started →
        </button>
      </div>
    </nav>
  );
}
