import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Heart, Menu, X, ChevronDown, ShieldCheck, Utensils, Users, MapPin, Quote, Check, Sparkles, HandHeart } from 'lucide-react';
import './styles.css';

const impact = [
  { value: '25K+', label: 'meals served', icon: Utensils },
  { value: '120+', label: 'communities reached', icon: MapPin },
  { value: '8K+', label: 'people supported', icon: Users },
  { value: '96%', label: 'direct impact', icon: Heart },
];

const stories = [
  { name: 'Meena & family', place: 'Chennai, Tamil Nadu', quote: 'The meal was not just food. It made us feel that someone cared.', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Arun', place: 'Madurai, Tamil Nadu', quote: 'A warm meal gave me the strength to keep going through a difficult week.', image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Lakshmi', place: 'Coimbatore, Tamil Nadu', quote: 'Now my children can sit down for a proper meal without worrying about tomorrow.', image: 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=1200&q=85' }
];

function App(){
  const [menu, setMenu] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [amount, setAmount] = useState(500);
  const [monthly, setMonthly] = useState(true);
  const [faq, setFaq] = useState(null);

  useEffect(() => { document.body.style.overflow = donateOpen ? 'hidden' : ''; return () => document.body.style.overflow=''; }, [donateOpen]);

  const scroll = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setMenu(false); };

  return <div className="site">
    <header className="nav-wrap">
      <nav className="nav container">
        <button className="brand" onClick={()=>scroll('top')} aria-label="UniChef home"><span className="brand-mark"><Utensils size={17}/></span><span>Uni<span>Chef</span></span></button>
        <div className="desktop-links"><button onClick={()=>scroll('mission')}>Our mission</button><button onClick={()=>scroll('impact')}>Impact</button><button onClick={()=>scroll('stories')}>Stories</button><button onClick={()=>scroll('faq')}>FAQ</button></div>
        <button className="nav-donate" onClick={()=>setDonateOpen(true)}>Donate now <ArrowUpRight size={17}/></button>
        <button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button>
      </nav>
      <AnimatePresence>{menu && <motion.div className="mobile-panel" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}><button onClick={()=>scroll('mission')}>Our mission</button><button onClick={()=>scroll('impact')}>Impact</button><button onClick={()=>scroll('stories')}>Stories</button><button onClick={()=>scroll('faq')}>FAQ</button><button className="mobile-donate" onClick={()=>{setMenu(false);setDonateOpen(true)}}>Donate now</button></motion.div>}</AnimatePresence>
    </header>

    <main id="top">
      <section className="hero container">
        <motion.div className="hero-copy" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="eyebrow"><span></span> Food with purpose</div>
          <h1>A meal is more than <em>food.</em><br/>It is <span>hope.</span></h1>
          <p>UniChef brings nourishing meals to people and communities who need a helping hand — one thoughtful meal at a time.</p>
          <div className="hero-actions"><button className="primary" onClick={()=>setDonateOpen(true)}>Sponsor a meal <ArrowUpRight size={18}/></button><button className="text-btn" onClick={()=>scroll('impact')}>See our impact <span>↓</span></button></div>
          <div className="trust-row"><div className="avatars"><i>R</i><i>A</i><i>M</i><i>+</i></div><div><strong>8,000+</strong><small>people supported by our community</small></div></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.9,delay:.1}}>
          <div className="hero-photo"><img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1500&q=90" alt="Community meal being served"/></div>
          <motion.div className="meal-card" initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{delay:.7}}><div className="meal-icon"><Heart fill="currentColor" size={17}/></div><div><strong>Every ₹100</strong><span>helps serve a meal</span></div></motion.div>
          <div className="scribble">Made with care <span>↗</span></div>
        </motion.div>
      </section>

      <section className="ticker"><div className="ticker-track"><span>FEED. CARE. CHANGE.</span><b>✦</b><span>EVERY MEAL MATTERS</span><b>✦</b><span>FEED. CARE. CHANGE.</span><b>✦</b><span>EVERY MEAL MATTERS</span></div></section>

      <section className="mission section container" id="mission">
        <div className="section-kicker">01 — Our mission</div><div className="mission-grid"><h2>We believe <i>everyone</i> deserves a seat at the table.</h2><div><p>Food should never be a privilege. UniChef partners with local communities to deliver nourishing meals with dignity, consistency and care.</p><button className="outline-btn" onClick={()=>scroll('stories')}>Meet the people we serve <ArrowUpRight size={17}/></button></div></div>
        <div className="values"><div><Sparkles/><h3>Dignity first</h3><p>We make every interaction feel human, respectful and welcoming.</p></div><div><HandHeart/><h3>Local action</h3><p>We work close to communities so support reaches people faster.</p></div><div><ShieldCheck/><h3>Radical clarity</h3><p>We make our impact visible, measurable and easy to understand.</p></div></div>
      </section>

      <section className="donation-strip"><div className="container donation-grid"><div><span className="mini-label">YOUR KINDNESS → A MEAL</span><h2>Small giving.<br/><i>Real impact.</i></h2></div><div className="donation-box"><div className="toggle"><button className={!monthly?'active':''} onClick={()=>setMonthly(false)}>One-time</button><button className={monthly?'active':''} onClick={()=>setMonthly(true)}>Monthly <span>Best impact</span></button></div><div className="amounts">{[100,500,1000,2500].map(a=><button key={a} className={amount===a?'selected':''} onClick={()=>setAmount(a)}>₹{a.toLocaleString('en-IN')}</button>)}</div><div className="custom-amount"><span>₹</span><input value={amount} onChange={e=>setAmount(e.target.value.replace(/\D/g,''))} aria-label="Donation amount"/><span className="per">{monthly?'/ month':''}</span></div><button className="donate-large" onClick={()=>setDonateOpen(true)}>Sponsor ₹{Number(amount||0).toLocaleString('en-IN')} <ArrowUpRight size={19}/></button><small className="secure"><ShieldCheck size={14}/> Secure donation experience</small></div></div></section>

      <section className="impact section container" id="impact"><div className="section-kicker">02 — Our impact</div><div className="impact-head"><h2>Numbers that tell<br/><i>human stories.</i></h2><p>Behind every number is a person, a family, a shared table and a moment of relief.</p></div><div className="stat-grid">{impact.map((item,i)=>{const Icon=item.icon; return <motion.div className="stat" key={item.label} whileHover={{y:-6}} transition={{type:'spring',stiffness:300}}><Icon size={20}/><strong>{item.value}</strong><span>{item.label}</span><small>{i===0?'meals delivered with local partners':i===1?'neighbourhoods reached with care':i===2?'people reached through food support':'of donations directed to programs'}</small></motion.div>})}</div></section>

      <section className="story-feature container"><div className="story-image"><img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90" alt="Fresh food prepared for a community"/><div className="image-tag">Cooked fresh · Served with care</div></div><div className="story-copy"><span className="mini-label">ONE MEAL AT A TIME</span><Quote size={30}/><blockquote>“When you sit down with a warm meal, for a moment, the world feels a little less heavy.”</blockquote><p>We work with cooks, volunteers and local organisations to turn generous contributions into nutritious food — and moments of connection.</p><button className="text-btn" onClick={()=>scroll('stories')}>Read more stories <ArrowUpRight size={17}/></button></div></section>

      <section className="stories section" id="stories"><div className="container"><div className="stories-head"><div><div className="section-kicker">03 — Stories</div><h2>Real people.<br/><i>Real change.</i></h2></div><p>Because impact isn't just a statistic. It is the feeling of being seen, supported and remembered.</p></div><div className="story-grid">{stories.map((s,i)=><motion.article key={s.name} whileHover={{y:-7}} className="story-card"><div className="story-card-img"><img src={s.image} alt=""/><span>0{i+1}</span></div><div className="story-card-body"><span>{s.place}</span><h3>{s.name}</h3><p>“{s.quote}”</p></div></motion.article>)}</div></div></section>

      <section className="trust section container"><div className="trust-copy"><div className="section-kicker">04 — Why support UniChef</div><h2>Give with <i>confidence.</i></h2><p>We want every supporter to know where their generosity goes and what it helps make possible.</p></div><div className="trust-points"><div><span>01</span><div><h3>Transparent impact</h3><p>Clear stories and measurable program outcomes.</p></div><Check/></div><div><span>02</span><div><h3>Community-led</h3><p>Local partners understand local needs best.</p></div><Check/></div><div><span>03</span><div><h3>Purposeful giving</h3><p>Your contribution is designed to create practical change.</p></div><Check/></div></div></section>

      <section className="cta"><div className="container cta-inner"><div className="cta-orb"></div><span className="mini-label">THE NEXT MEAL STARTS WITH YOU</span><h2>One meal.<br/><i>One person.</i><br/>One better tomorrow.</h2><p>Your support can turn an ordinary meal into an extraordinary moment of care.</p><button className="light-btn" onClick={()=>setDonateOpen(true)}>Sponsor a meal <ArrowUpRight size={19}/></button></div></section>

      <section className="faq section container" id="faq"><div className="section-kicker">05 — Questions</div><div className="faq-head"><h2>Good questions.<br/><i>Clear answers.</i></h2><p>We believe transparency starts with making information easy to find.</p></div><div className="faq-list">{['How does my donation help?','Can I choose monthly giving?','How do you measure your impact?','Can I support UniChef as a company?'].map((q,i)=><div className={'faq-item '+(faq===i?'open':'')} key={q}><button onClick={()=>setFaq(faq===i?null:i)}><span>0{i+1}</span><strong>{q}</strong><ChevronDown size={20}/></button><AnimatePresence>{faq===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>Your contribution helps fund nutritious meals and community food programs. We aim to make the path from generosity to impact simple, responsible and visible.</motion.p>}</AnimatePresence></div>)}</div></section>
    </main>

    <footer><div className="container footer-main"><div className="footer-brand"><button className="brand" onClick={()=>scroll('top')}><span className="brand-mark"><Utensils size={17}/></span><span>Uni<span>Chef</span></span></button><p>Food with purpose.<br/>Care with dignity.</p></div><div className="footer-links"><div><strong>Explore</strong><button onClick={()=>scroll('mission')}>Our mission</button><button onClick={()=>scroll('impact')}>Our impact</button><button onClick={()=>scroll('stories')}>Stories</button></div><div><strong>Support</strong><button onClick={()=>setDonateOpen(true)}>Donate</button><button onClick={()=>scroll('faq')}>FAQ</button><button>Contact us</button></div><div><strong>Follow</strong><button>Instagram</button><button>LinkedIn</button><button>Facebook</button></div></div></div><div className="container footer-bottom"><span>© 2026 UniChef Foundation</span><span>Made for people who care <Heart size={13} fill="currentColor"/></span><span>Privacy · Terms</span></div></footer>

    <AnimatePresence>{donateOpen && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setDonateOpen(false)}><motion.div className="donation-modal" initial={{y:30,opacity:0,scale:.98}} animate={{y:0,opacity:1,scale:1}} exit={{y:20,opacity:0}} onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setDonateOpen(false)}><X/></button><div className="modal-top"><span className="mini-label">MAKE AN IMPACT</span><h2>Choose your way<br/>to <i>give.</i></h2><p>Every contribution helps put nourishing food on someone's table.</p></div><div className="toggle modal-toggle"><button className={!monthly?'active':''} onClick={()=>setMonthly(false)}>One-time</button><button className={monthly?'active':''} onClick={()=>setMonthly(true)}>Monthly</button></div><div className="amounts">{[100,500,1000,2500].map(a=><button key={a} className={Number(amount)===a?'selected':''} onClick={()=>setAmount(a)}>₹{a.toLocaleString('en-IN')}</button>)}</div><div className="custom-amount"><span>₹</span><input value={amount} onChange={e=>setAmount(e.target.value.replace(/\D/g,''))}/><span className="per">{monthly?'/ month':''}</span></div><button className="donate-large">Continue to donate <ArrowUpRight size={19}/></button><div className="modal-trust"><ShieldCheck size={16}/><span>Secure & transparent giving</span><span>•</span><span>Your details stay protected</span></div></motion.div></motion.div>}</AnimatePresence>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
