import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

export default function SocialIcons() {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/chaiculture',
      icon: FaInstagram,
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/chaiculture',
      icon: FaFacebookF,
    },
    {
      name: 'X',
      url: 'https://x.com/chaiculture',
      icon: FaXTwitter,
    },
  ];

  return (
    <div className="mt-12 flex justify-center gap-6">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a24d] hover:text-[#a8832f] transition-all duration-300 hover:scale-110"
            aria-label={social.name}
          >
            <Icon size={28} />
          </a>
        );
      })}
    </div>
  );
}
