import Link from 'next/link'
import { useState } from 'react'

function MobileMenuLink({ l, index }) {
  const [open, setOpen] = useState(false)
  return (
    <li key={index} className={(l.megamenu || l.submenu) && 'has-droupdown'}>
      <Link
        href={l.url}
        className={open ? 'open' : undefined}
        onClick={(l.megamenu || l.submenu) && (() => setOpen((p) => !p))}
      >
        {l.title}
      </Link>
      {open && (
        <ul
          className={`${l.submenu ? 'submenu' : 'mega-menu'} ${
            open && 'active'
          }`}
          style={!open ? { display: 'none' } : { display: 'block' }}
        >
          {l.submenu
            ? l.submenu.map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>
                    {link.title + ' '}
                    {link.tag && (
                      <span className={link.tagClass}>{link.tag}</span>
                    )}
                  </Link>
                </li>
              ))
            : l.megamenu
            ? l.megamenu.map((l, i) => (
                <li key={i}>
                  <h6 className="menu-title">{l.title}</h6>
                  <ul className={`submenu mega-sub-menu-01`}>
                    {l.submenu.map((link, i) => (
                      <li key={i}>
                        <Link href={link.url}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            : null}
        </ul>
      )}
    </li>
  )
}

export default MobileMenuLink
