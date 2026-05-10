const express = require('express');
const router = express.Router();

const articles = [
  {
    id: 1,
    slug: 'future-of-antennas-5g',
    category: 'Techo Connect',
    categoryColor: 'connect',
    title: 'The Future of Antennas in the 5G Era',
    excerpt: 'As 5G networks roll out globally, antenna manufacturing is undergoing a radical transformation. We explore how beamforming, MIMO arrays, and compact form factors are reshaping the industry.',
    author: 'Techo Connect Team',
    date: 'May 2, 2025',
    readTime: '6 min read'
  },
  {
    id: 2,
    slug: 'ai-changing-courier-logistics',
    category: 'Techo Xpress',
    categoryColor: 'xpress',
    title: 'How AI is Revolutionising Courier Logistics',
    excerpt: 'From predictive routing algorithms to real-time fleet management, artificial intelligence is rewriting the rules of last-mile delivery. Here\'s what that means for businesses and consumers.',
    author: 'Techo Xpress Team',
    date: 'April 18, 2025',
    readTime: '8 min read'
  },
  {
    id: 3,
    slug: 'digital-marketing-roi-2025',
    category: 'Techo Labs',
    categoryColor: 'labs',
    title: 'Maximising Digital Marketing ROI in 2025',
    excerpt: 'With ad costs rising and attention spans shrinking, smart companies are turning to data-driven research and precision targeting. Our digital team breaks down the strategies that actually work.',
    author: 'Techo Labs Team',
    date: 'April 5, 2025',
    readTime: '7 min read'
  },
  {
    id: 4,
    slug: 'synergy-of-integrated-technology',
    category: 'Techo Traders',
    categoryColor: 'traders',
    title: 'The Power of Synergy: Why Integrated Tech Ecosystems Win',
    excerpt: 'When digital, logistics, and hardware work in concert, the result is far greater than the sum of its parts. We examine how Techo\'s integrated model drives competitive advantage.',
    author: 'Editorial Team',
    date: 'March 22, 2025',
    readTime: '5 min read'
  }
];

router.get('/', (req, res) => {
  res.render('insights', { title: 'Techo Insights — Techo Traders', page: 'insights', articles });
});

module.exports = router;
