import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'tuongg\'s page',
  description:
    // Tối ưu hóa mô tả này nếu cần, nhưng giữ nguyên nội dung gốc theo yêu cầu
    'i\'m a loser from Vietnam',
  href: 'https://tuongg.vercel.app',
  author: 'nguyencaoantuong',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 4,
}

// Giả sử SocialLink là { href: string, label: string }
export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    // Đảm bảo Label khớp với key trong ICON_MAP
    href: 'https://github.com/nguyencaoantuong',
    label: 'GitHub', 
  },
  {
    // Đảm bảo Label khớp với key trong ICON_MAP
    href: 'mailto:ntuong@proton.me',
    label: 'Email',
  },
  {
    // Đảm bảo Label khớp với key trong ICON_MAP
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
