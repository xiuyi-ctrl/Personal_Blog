import './LogoLoop.css';

const LOGOS = [
  {
    name: 'GitHub',
    url: 'https://github.com/xiuyi-ctrl',
    emoji: '💻',
  },
  {
    name: 'Email',
    url: 'mailto:2998526825@qq.com',
    emoji: '📧',
  },
  {
    name: 'React Bits',
    url: 'https://www.reactbits.dev/',
    emoji: '⚛️',
  },
];

export default function LogoLoop() {
  return (
    <div className="footer-logo-loop">
      <div className="logo-loop-track">
        {LOGOS.map((logo) => (
          <a
            key={logo.name}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="logo-item"
          >
            <span className="logo-icon">{logo.emoji}</span>
            <span className="logo-text">{logo.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}