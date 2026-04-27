document.getElementById('live-date').textContent = new Date().toLocaleDateString('en-GB', {weekday:'long', day:'numeric', month:'long', year:'numeric'});


const ARTICLE_IMAGES = {
  'reading-aloud': {
    thumb: 'https://unsplash.com/photos/assorted-titled-book-arranged-on-organizer-m7PaAQkxgxw',
    hero:  'https://unsplash.com/photos/assorted-titled-book-arranged-on-organizer-m7PaAQkxgxw',
    alt:   'Parent reading aloud to young child'
  },
  'screen-time': {
    thumb: 'https://images.unsplash.com/photo-1719559519182-698f9bfc4e2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hero:  'https://images.unsplash.com/photo-1719559519182-698f9bfc4e2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt:   'Child using a tablet with parent nearby'
  },
  'lighthouse-parenting': {
    thumb: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=400&h=300&fit=crop&auto=format',
    hero:  'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=1200&h=600&fit=crop&auto=format',
    alt:   'Parent and children walking together outdoors'
  },
  'emotional-intelligence': {
    thumb: 'https://unsplash.com/photos/2-children-playing-on-green-and-blue-plastic-slide-1mNAVJaPr-g',
    hero:  'https://unsplash.com/photos/2-children-playing-on-green-and-blue-plastic-slide-1mNAVJaPr-g',
    alt:   'Parent and child in a warm embrace'
  },
  'stem-at-home': {
    thumb: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=300&fit=crop&auto=format',
    hero:  'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=1200&h=600&fit=crop&auto=format',
    alt:   'Child learning science in the kitchen'
  },
  'separation-anxiety': {
    thumb: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&auto=format',
    hero:  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=600&fit=crop&auto=format',
    alt:   'Child at school drop-off'
  }
};

// ════════════════════════════════════
// DATA
// ════════════════════════════════════
const ARTICLES = [
  {
    id: 'reading-aloud',
    cat: 'new-parents',
    catLabel: 'New Parents',
    title: 'Why 15 Minutes of Reading Aloud Changes Everything',
    subtitle: 'The evidence is overwhelming — and the practice is simpler than most parents think.',
    author: 'Adaeze Chukwu',
    authorInitials: 'AC',
    date: 'April 10, 2026',
    readTime: '5 min',
    icon: 'fa-book-open',
    likes: 47,
    excerpt: 'Long before your child can read a single word, the language networks in their brain are being wired by the words you speak, sing, and read to them. Starting as early as four months old, shared reading creates the neural pathways that will one day carry your child through school, through books, and through life.',
    body: `
      <p>Long before your child can read a single word, the language networks in their brain are being wired by the words you speak, sing, and read to them. Research shows that starting as early as four months old, the habit of reading together creates a compounding effect on vocabulary, comprehension, and emotional development that lasts well into adolescence.</p>
      <h2>What Happens in the Brain</h2>
      <p>When you read aloud to a young child, you expose them to a far richer vocabulary than ordinary conversation provides. Studies estimate that parents who read one picture book daily expose their children to roughly <strong>78,000 words per year</strong> beyond everyday speech. By age five, those children know significantly more words — and more complex words — than peers who were not read to regularly.</p>
      <p>But it is not only about vocabulary. Hearing stories builds a child's understanding of narrative structure: that events have a beginning, middle, and end; that characters have motivations; that conflict can be resolved. This is the hidden architecture that makes children not only better readers but stronger writers and thinkers.</p>
      <blockquote>Children whose parents read to them during their early years are measurably more likely to learn to read on time — and to love reading once they do.</blockquote>
      <h2>It Does Not Need to Be Long</h2>
      <p>The most important thing is not the duration — it is the regularity. Even fifteen minutes a day, whether spread across short sessions or concentrated at bedtime, creates a meaningful routine. That routine does three things at once: it builds language, it signals safety and warmth, and it makes books a source of pleasure rather than obligation.</p>
      <p>The best time to read is whenever your child is calm and alert. Bedtime is ideal because it settles the nervous system and gives you both a predictable anchor to the day. But a book at breakfast, in the car, or during a quiet afternoon is equally valuable.</p>
      <h2>Choosing the Right Books</h2>
      <p>For very young babies, books with high-contrast images, bold colours, and minimal text work best. Their visual systems are still developing, and simple, stimulating images hold attention far better than detailed illustrations. As your child moves past six months, add texture, flaps, and interactivity. By the toddler years, stories with repetition and rhyme become irresistible — and the repetition, far from being tedious, is how deep learning happens.</p>
      <p>Do not worry about reading every word on the page. Point at pictures. Ask questions. Speculate out loud: "I wonder why the dog is wearing a hat?" This back-and-forth conversation — what researchers call dialogic reading — is more powerful than straight narration.</p>
      <h2>The Habit Is the Thing</h2>
      <p>Starting early dramatically increases the chance that you will still be reading together when your child is six, seven, ten years old. The parents who read to four-month-olds are statistically more likely to still be reading aloud to their five-year-olds — and that sustained habit is where the real gains compound. Do not wait until your child "can understand." They are understanding far more than you know, from the very first page.</p>
    `
  },
  {
    id: 'screen-time',
    cat: 'child-care',
    catLabel: 'Child Care',
    title: 'Screen Time Isn\'t the Enemy — Here\'s How to Make It Work for Your Child',
    subtitle: 'Less about the clock, more about the conversation you have around it.',
    author: 'Tunde Kelani',
    authorInitials: 'TK',
    date: 'April 14, 2026',
    readTime: '8 min',
    icon: 'fa-tablet-screen-button',
    likes: 62,
    excerpt: 'Modern parenting comes with a question our own parents never faced: how much screen time is too much? The answer, research increasingly suggests, is less about the clock and more about context, content, and the conversations you have around it.',
    body: `
      <p>A Nigerian parent in 2026 is navigating something genuinely new. The devices our children reach for were not part of our own childhoods. There is no inherited wisdom to draw on — just a flood of contradictory advice, guilty feelings, and the nagging sense that we are always doing it slightly wrong.</p>
      <p>The good news: the research has matured significantly, and the conclusions are more nuanced — and more reassuring — than the headlines suggest.</p>
      <h2>What the Evidence Actually Says</h2>
      <p>For children under eighteen months, the consensus is clear: screens beyond video calls with family offer very little developmental benefit and can displace the real-world interaction that matters most. This is not because screens are inherently harmful at this age — it is because the opportunity cost is so high. Every minute on a device is a minute not spent being talked to, played with, or moved through space.</p>
      <p>From ages two onwards, the picture shifts considerably. The American Academy of Pediatrics no longer issues blanket time limits for children over two. Instead, the guidance centres on <strong>what they watch, how they watch it, and whether a parent is present</strong>. A five-year-old watching a creative engineering programme with a parent who asks questions and builds on what they see is having a fundamentally different experience than a five-year-old passively scrolling through algorithmically served short videos alone.</p>
      <blockquote>The question is not "how long?" It is "what kind, with whom, and what comes after?"</blockquote>
      <h2>The Content Gap</h2>
      <p>Not all screen time is created equal. Educational content — specifically co-viewed content where an adult reinforces and expands on what the child sees — has measurable positive effects on vocabulary and early numeracy. The danger zone is passive, fast-paced, algorithmically driven content that is designed to maximise watch time, not learning. The difference is often obvious when you sit and watch with your child for twenty minutes.</p>
      <h2>Building Healthy Habits, Not Rules</h2>
      <p>The families that navigate screens most successfully tend not to have the strictest rules — they have the clearest habits. Screens off during meals. A device-free hour before bed. No phones in bedrooms overnight. These are structural choices that reduce conflict because they are not negotiated every time.</p>
      <p>Beyond structure, the single most powerful thing you can do is stay curious rather than critical. Ask your child what they watched. Watch some of it with them. Make the device a shared space rather than a closed door. Children who feel their parents are interested — rather than policing — are far more likely to come to you when something they see online confuses or upsets them.</p>
      <h2>Give Yourself Permission to Relax a Little</h2>
      <p>The parent sitting guilt-ridden on the sofa while their three-year-old watches forty minutes of a beloved cartoon is, in almost every case, doing far better than they think. The evidence for long-term harm from moderate, age-appropriate, occasionally co-viewed screen use is simply not there. The evidence that parental stress and shame affect children, however, is very strong. Be thoughtful — and then let it go.</p>
    `
  },
  {
    id: 'lighthouse-parenting',
    cat: 'family',
    catLabel: 'Family Life',
    title: 'Lighthouse Parenting: Standing Firm While Letting Them Sail',
    subtitle: 'The parenting philosophy quietly replacing helicopter parents everywhere.',
    author: 'Emeka Nwosu',
    authorInitials: 'EN',
    date: 'April 8, 2026',
    readTime: '7 min',
    icon: 'fa-map-pin',
    likes: 38,
    excerpt: 'There is a growing body of parents quietly stepping back from the helicopter approach — not into neglect, but into something more considered. Lighthouse parenting offers a guiding light without doing the sailing for your child.',
    body: `
      <p>For the better part of two decades, helicopter parenting dominated the conversation. It was a response to real anxieties — about safety, academic competition, and a world that felt increasingly difficult to navigate. But a quiet shift is happening in family psychology, and the emerging philosophy has a better metaphor: the lighthouse.</p>
      <h2>What Is Lighthouse Parenting?</h2>
      <p>The term was coined by paediatrician Kenneth Ginsburg, and the image is apt. A lighthouse does not carry ships to harbour. It does not chase them through the water or steer them clear of every rock. It stands firm, shines clearly, and trusts that the ship's navigator can use the light to find their own way.</p>
      <p>Lighthouse parents provide stability — firm values, consistent love, clear boundaries — while genuinely allowing their children to face challenges, make mistakes, and develop the coping muscles that only come from experience. They are neither absent nor controlling. They are present and secure.</p>
      <blockquote>The goal is not to raise a child who never struggles. It is to raise a child who knows they can struggle and survive — because you were always there when it truly mattered.</blockquote>
      <h2>Why This Matters More Than Ever</h2>
      <p>The children arriving at universities and entering workplaces in the last decade have, on average, faced fewer unsupervised challenges than any previous generation. The consequences — delayed independence, difficulty with failure, rising rates of anxiety in young adults — are well documented. Helicopter parenting was designed to protect children, and it did, often at the cost of the very resilience it was supposed to build.</p>
      <p>Lighthouse parenting is not a rejection of involved parenting. It is a refinement of it. The difference lies in where the parent's energy goes — not into removing every obstacle, but into ensuring that the child has a stable enough base to take on obstacles themselves.</p>
      <h2>In Practice: What It Looks Like</h2>
      <p>A lighthouse parent whose eight-year-old has a conflict with a friend does not call the friend's parent to resolve it. They sit with their child, ask good questions, and help them think through what they want to do. Then they step back. The child goes to school and handles it — or does not, and learns something valuable from that too.</p>
      <p>A lighthouse parent whose teenager comes home devastated by an exam result does not immediately contact the school or reframe the failure as unimportant. They sit in it with the child, let the emotion be real, and then — when the time is right — help them figure out what comes next.</p>
      <p>The light never goes out. But the child learns to sail.</p>
    `
  },
  {
    id: 'emotional-intelligence',
    cat: 'development',
    catLabel: 'Development',
    title: 'How to Raise an Emotionally Intelligent Child (Without Losing Your Mind)',
    subtitle: 'Emotional intelligence is not a personality trait. It is a set of learnable skills.',
    author: 'Chioma Eze',
    authorInitials: 'CE',
    date: 'March 30, 2026',
    readTime: '6 min',
    icon: 'fa-heart',
    likes: 91,
    excerpt: 'Emotional intelligence is not a trait children are born with or without — it is a skill, like reading, that can be taught, modelled, and practised every single day.',
    body: `
      <p>We talk a great deal about academic achievement. We worry about reading levels, maths scores, and which secondary school our child will get into. But the research on what actually predicts long-term success — in careers, in relationships, in life — points consistently toward something less measurable: the ability to understand, manage, and work with emotions.</p>
      <p>The good news is that emotional intelligence is not a fixed trait. It is a set of teachable skills, and parents are its primary teachers.</p>
      <h2>Start With Your Own Emotions</h2>
      <p>Children learn emotional vocabulary by watching the adults closest to them. When you say "I'm feeling really frustrated right now, so I'm going to take a breath before I respond," you are doing something profoundly educational. You are modelling that emotions have names, that they are not shameful, and that there are strategies for managing them. This is worth far more than any formal lesson.</p>
      <blockquote>When a child sees a parent regulate an emotion, they learn that regulation is possible. That is one of the most important things a parent can ever teach.</blockquote>
      <h2>Name Feelings, Early and Often</h2>
      <p>Toddlers and young children are frequently overwhelmed by emotions they cannot name. When you help them name what they are feeling — "You seem really disappointed that we're leaving the park" — you are giving them a tool. Research shows that the act of labelling an emotion actually reduces its intensity in the brain. The simple phrase "I feel disappointed" gives the prefrontal cortex something to do with the raw feeling.</p>
      <p>Make it a practice at dinner: "What was the best part of your day? Was there a hard part?" Do not push for answers, but create the space consistently. Over time, the question becomes a habit, and the habit becomes a relationship.</p>
      <h2>Let Them Struggle (A Little)</h2>
      <p>Emotional intelligence grows in the presence of manageable difficulty. When we rush to fix our children's discomfort — smoothing every conflict, preventing every disappointment — we deny them the practice they need. A child who is allowed to feel frustrated with a puzzle, and then figures it out, is learning something that no intervention can teach from the outside.</p>
      <p>Your job is not to make them comfortable. It is to make them feel safe enough to be uncomfortable.</p>
    `
  },
  {
    id: 'stem-at-home',
    cat: 'education',
    catLabel: 'Education',
    title: '5 Everyday Moments That Secretly Teach Your Child Science',
    subtitle: 'You do not need a lab. You need a kitchen and a willingness to ask "why?"',
    author: 'Bisi Adeyemi',
    authorInitials: 'BA',
    date: 'March 25, 2026',
    readTime: '4 min',
    icon: 'fa-flask',
    likes: 55,
    excerpt: 'You do not need a lab or a curriculum. You need a kitchen, a curious child, and the confidence to slow down and ask "why?"',
    body: `
      <p>Science education gets associated with formal settings — laboratories, textbooks, teachers. But the scientific method — observe, question, hypothesise, test — is simply careful attention to the world, and the world is everywhere your child is.</p>
      <p>Here are five moments that happen in most households daily, and how to turn them into genuine science education without anyone feeling like they are in school.</p>
      <h2>1. Cooking Together</h2>
      <p>The kitchen is a chemistry laboratory. Baking involves precise measurements and reactions — why does the dough rise? What does yeast actually do? Why does adding bicarbonate of soda to vinegar make it foam? Let your child hypothesise before you explain. The explanation lands differently when the curiosity already exists.</p>
      <h2>2. Puddles and Rain</h2>
      <p>Where does the puddle go when it stops raining and the sun comes out? This is evaporation — one of the most important concepts in physical science. "Where do you think it went?" is a better first question than any explanation. Follow the curiosity wherever it leads.</p>
      <h2>3. Growing Something</h2>
      <p>Even a single bean in a wet paper towel on a sunny windowsill teaches germination, photosynthesis, and the relationship between living things and their environment. Let your child be responsible for it. Let them notice what happens when they forget to water it. Failure is data.</p>
      <blockquote>The best scientists in the world are still, fundamentally, children asking "what happens if I try this?" Give your child that same permission.</blockquote>
      <h2>4. Shadows and Light</h2>
      <p>On a sunny afternoon, trace your child's shadow. Come back an hour later. Come back again. "What changed?" This is the Earth rotating on its axis — the same science that explains day and night — taught through chalk on a driveway.</p>
      <h2>5. Sorting and Categorising</h2>
      <p>Whether it is organising toys by colour, sorting fruits by size, or arranging books on a shelf, classification is one of science's core tools. Let young children develop their own systems. Ask "why did you put those together?" You will often find a logic more interesting than the obvious one.</p>
    `
  },
  {
    id: 'separation-anxiety',
    cat: 'child-care',
    catLabel: 'Child Care',
    title: 'School Drop-Off Tears: What Your Child Is Actually Telling You',
    subtitle: 'Separation anxiety at the school gate is painful — and almost always temporary.',
    author: 'Funke Alade',
    authorInitials: 'FA',
    date: 'March 18, 2026',
    readTime: '5 min',
    icon: 'fa-school',
    likes: 74,
    excerpt: 'Separation anxiety at school gates is one of the most painful parts of early parenthood. But it is also one of the most misunderstood.',
    body: `
      <p>Few things are harder in the early years of parenting than leaving a sobbing child at the school gate. The guilt can be crushing. But understanding what is actually happening — in your child's brain, and in yours — changes everything.</p>
      <h2>This Is Not Failure. This Is Attachment.</h2>
      <p>A child who cries when you leave is a child with a secure attachment. They trust you enough to show distress. They believe you will come back. The crying is not a sign that something is wrong — it is a sign that the relationship between you is working exactly as it should.</p>
      <p>Children with insecure attachment often do not cry at drop-off. They have learned, through experience, that expressing distress does not bring the parent back. The crying child, counterintuitively, is often the emotionally healthier one.</p>
      <blockquote>If your child cries when you leave, it means they love you, trust you, and believe you will come back. That is not a problem. That is everything.</blockquote>
      <h2>What Helps (and What Does Not)</h2>
      <p>The most damaging thing a parent can do is linger. Drawn-out goodbyes — coming back for one more hug, then another — extend the distress and teach the child that more crying brings more parent. The research is consistent: confident, warm, brief goodbyes with a clear ritual ("I'll be back at 2 o'clock, I love you, bye!") resolve faster than extended ones.</p>
      <p>Equally, sneaking away without saying goodbye — though tempting, because you avoid the tears — undermines the very trust you are trying to build. Your child needs to know that goodbyes are real, manageable, and followed by returns.</p>
      <h2>It Almost Always Passes</h2>
      <p>For the vast majority of children, separation anxiety at school drop-off resolves within two to four weeks. Teachers will tell you that the child is fine within minutes of the parent leaving — and this is almost always true. If you are worried, ask the teacher to text you after ten minutes. What you will almost certainly hear is: "They settled beautifully. They are at the painting table."</p>
      <p>If distress does not reduce after four to six weeks, or is accompanied by physical symptoms like headaches or stomach aches, it may be worth speaking to your GP. But in the vast majority of cases, the answer is simply: stay consistent, say goodbye warmly and confidently, and trust your child to be braver than you fear.</p>
    `
  }
];

const COMMENTS_DB = {};
ARTICLES.forEach(a => { COMMENTS_DB[a.id] = [
  {
    id: 1,
    user: 'Ngozi Adekunle',
    initials: 'NA',
    date: '3 days ago',
    text: 'This was such a timely read. We struggled with drop-off for the first month of school and I kept blaming myself. Understanding the attachment piece really reframes it.',
    likes: 8,
    liked: false
  }
]; });

let state = {
  user: null,
  currentArticleId: null,
  articleLikes: {},
  commentLikes: {}
};
ARTICLES.forEach(a => { state.articleLikes[a.id] = { count: a.likes, liked: false }; });

// ════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + name);
  if (el) { el.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

function showBrowse(cat) {
  showPage('browse');
  document.querySelectorAll('.nav-cat-btn').forEach(b => b.classList.remove('active'));
  const catMap = { 'all':'All', 'new-parents':'New Parents', 'education':'Education', 'child-care':'Child Care', 'development':'Development', 'family':'Family Life' };
  document.getElementById('browse-label').textContent = 'Articles';
  document.getElementById('browse-title').textContent = catMap[cat] || 'All';
  filterArticles(cat, document.querySelector('.filter-btn'));
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.toLowerCase().replace(' ', '-') === cat || (cat === 'all' && b.textContent === 'All'));
  });
}

function imgTag(id, size) {
  const img = ARTICLE_IMAGES[id];
  if (!img) return '';
  const url = size === 'hero' ? img.hero : img.thumb;
  return `<img src="${url}" alt="${img.alt}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">`;
}

function filterArticles(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const filtered = cat === 'all' ? ARTICLES : ARTICLES.filter(a => a.cat === cat);
  const grid = document.getElementById('browse-articles-grid');
  grid.innerHTML = filtered.map(a => {
    const imgHTML = ARTICLE_IMAGES[a.id]
      ? `<img src="${ARTICLE_IMAGES[a.id].thumb}" alt="${ARTICLE_IMAGES[a.id].alt}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">`
      : `<i class="fa-solid ${a.icon}" style="opacity:0.14;"></i>`;
    return `
    <div class="browse-card" onclick="openArticle('${a.id}')">
      <div class="bc-img">
        ${imgHTML}
        <span class="bc-img-tag tag tag-${a.cat === 'new-parents' ? 'terra' : a.cat === 'education' ? 'forest' : 'gold'}">${a.catLabel}</span>
      </div>
      <div class="bc-cat">${a.catLabel}</div>
      <div class="bc-title">${a.title}</div>
      <div class="bc-excerpt">${a.excerpt}</div>
      <div class="bc-meta">
        <span>${a.author}</span><span>·</span><span>${a.readTime} read</span><span>·</span>
        <span><i class="fa-solid fa-heart" style="color:var(--terra);font-size:10px;margin-right:3px;"></i>${state.articleLikes[a.id]?.count || a.likes}</span>
      </div>
    </div>
  `}).join('');
}

// ════════════════════════════════════
// ARTICLE
// ════════════════════════════════════
function openArticle(id) {
  const a = ARTICLES.find(x => x.id === id);
  if (!a) return;
  state.currentArticleId = id;
  const liked = state.articleLikes[id]?.liked;
  const likeCount = state.articleLikes[id]?.count || a.likes;

  const imgData = ARTICLE_IMAGES[id];
  const heroHTML = imgData
    ? `<div class="af-hero-img"><img src="${imgData.hero}" alt="${imgData.alt}" loading="lazy"></div>`
    : a.coverImage
      ? `<img src="${a.coverImage}" style="width:100%;height:360px;object-fit:cover;border:1px solid var(--rule);margin-bottom:40px;">`
      : `<div class="af-hero-img"><i class="fa-solid ${a.icon}"></i></div>`;

  document.getElementById('article-content').innerHTML = `
    <div class="af-cat">${a.catLabel}</div>
    <h1 class="af-title">${a.title}</h1>
    <p class="af-subtitle">${a.subtitle}</p>
    <div class="af-meta-bar">
      <div class="af-author-block">
        <div class="af-author-av">${a.authorInitials}</div>
        <div>
          <div class="af-author-name">${a.author}</div>
          <div class="af-author-date">${a.date} — ${a.readTime} read</div>
        </div>
      </div>
      <div class="af-actions">
        <button class="af-action-btn ${liked ? 'liked' : ''}" id="like-btn" onclick="toggleArticleLike('${id}')">
          <i class="fa-${liked ? 'solid' : 'regular'} fa-heart"></i>
          <span id="like-count">${likeCount}</span>
        </button>
        <button class="af-action-btn" onclick="shareArticle()">
          <i class="fa-solid fa-share-nodes"></i> Share
        </button>
      </div>
    </div>
    ${heroHTML}
    <div class="af-body">${a.body}</div>
  `;

  renderComments(id);
  showPage('article');
}

function toggleArticleLike(id) {
  if (!state.user) { openModal('signin'); return; }
  const s = state.articleLikes[id];
  s.liked = !s.liked;
  s.count += s.liked ? 1 : -1;
  const btn = document.getElementById('like-btn');
  const icon = btn.querySelector('i');
  document.getElementById('like-count').textContent = s.count;
  btn.classList.toggle('liked', s.liked);
  icon.className = `fa-${s.liked ? 'solid' : 'regular'} fa-heart`;
  showToast(s.liked ? 'Added to your liked articles' : 'Removed from liked articles');
  updateProfile();
}

function shareArticle() {
  showToast('Link copied to clipboard!');
}

// ════════════════════════════════════
// COMMENTS
// ════════════════════════════════════
function renderComments(id) {
  const comments = COMMENTS_DB[id] || [];
  const count = comments.length;
  document.getElementById('comments-title').textContent = count ? `${count} Comment${count !== 1 ? 's' : ''}` : 'Comments';
  document.getElementById('comments-count').textContent = count ? 'Join the conversation below.' : 'Be the first to share your thoughts.';

  if (!state.user) {
    document.getElementById('comment-form-card').innerHTML = `
      <div style="padding:20px;text-align:center;font-family:var(--sans);color:var(--ink-l);font-size:13px;">
        <i class="fa-solid fa-lock" style="font-size:20px;color:var(--forest-l);margin-bottom:10px;display:block;"></i>
        <strong style="color:var(--ink);display:block;margin-bottom:6px;">Join the conversation</strong>
        Sign in or create a free account to comment on articles.
        <div style="display:flex;gap:10px;justify-content:center;margin-top:16px;">
          <button class="btn btn-outline btn-sm" onclick="openModal('signin')">Sign In</button>
          <button class="btn btn-terra btn-sm" onclick="openModal('signup')">Join Free</button>
        </div>
      </div>`;
  } else {
    document.getElementById('comment-form-card').innerHTML = `
      <textarea class="comment-input" id="comment-input" placeholder="Share your thoughts, questions, or experience..."></textarea>
      <div class="comment-form-footer">
        <div class="cf-note"><i class="fa-solid fa-lock"></i> Visible to all readers</div>
        <button class="btn btn-forest btn-sm" onclick="submitComment()"><i class="fa-solid fa-paper-plane"></i> Post Comment</button>
      </div>`;
  }

  document.getElementById('comments-list').innerHTML = comments.map(c => `
    <div class="comment-item" id="comment-${c.id}">
      <div class="ci-avatar">${c.initials}</div>
      <div style="flex:1;">
        <div class="ci-name">${c.user}</div>
        <div class="ci-date">${c.date}</div>
        <div class="ci-text">${c.text}</div>
        <button class="ci-like-btn ${state.commentLikes[c.id] ? 'liked' : ''}" onclick="likeComment(${c.id})">
          <i class="fa-${state.commentLikes[c.id] ? 'solid' : 'regular'} fa-heart"></i>
          <span id="clikes-${c.id}">${c.likes + (state.commentLikes[c.id] ? 1 : 0)}</span> helpful
        </button>
      </div>
    </div>
  `).join('');
}

function submitComment() {
  if (!state.user) { openModal('signin'); return; }
  const input = document.getElementById('comment-input');
  const text = input ? input.value.trim() : '';
  if (!text) { showToast('Please write something before posting.'); return; }
  const id = state.currentArticleId;
  const initials = state.user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
  COMMENTS_DB[id].unshift({
    id: Date.now(),
    user: state.user.name,
    initials,
    date: 'Just now',
    text,
    likes: 0,
    liked: false
  });
  renderComments(id);
  showToast('Comment posted!');
}

function likeComment(cid) {
  if (!state.user) { openModal('signin'); return; }
  state.commentLikes[cid] = !state.commentLikes[cid];
  const id = state.currentArticleId;
  renderComments(id);
}

// ════════════════════════════════════
// AUTH
// ════════════════════════════════════
let authMode = 'signin';
const USERS_DB = {};

function openModal(mode) {
  authMode = mode;
  document.getElementById('authModal').classList.add('open');
  document.getElementById('modal-error').style.display = 'none';
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-password').value = '';
  if (document.getElementById('auth-name')) document.getElementById('auth-name').value = '';
  if (mode === 'signup') {
    document.getElementById('modal-title').textContent = 'Create Your Account';
    document.getElementById('modal-sub').textContent = 'Free forever. Comment, like, and save articles.';
    document.getElementById('modal-action-btn').textContent = 'Create Account';
    document.getElementById('modal-switch').innerHTML = 'Already have an account? <span onclick="toggleAuthMode()">Sign in</span>';
    document.getElementById('signup-name-field').style.display = 'block';
  } else {
    document.getElementById('modal-title').textContent = 'Welcome Back';
    document.getElementById('modal-sub').textContent = 'Sign in to comment, like, and save your favourites.';
    document.getElementById('modal-action-btn').textContent = 'Sign In';
    document.getElementById('modal-switch').innerHTML = 'Don\'t have an account? <span onclick="toggleAuthMode()">Create one — it\'s free</span>';
    document.getElementById('signup-name-field').style.display = 'none';
  }
}

function closeModal() { document.getElementById('authModal').classList.remove('open'); }
function toggleAuthMode() { openModal(authMode === 'signin' ? 'signup' : 'signin'); }

function showModalError(msg) {
  const el = document.getElementById('modal-error');
  el.textContent = msg;
  el.style.display = 'block';
}

function handleAuth() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  if (!email || !password) { showModalError('Please fill in all fields.'); return; }
  if (!email.includes('@')) { showModalError('Please enter a valid email address.'); return; }
  if (password.length < 6) { showModalError('Password must be at least 6 characters.'); return; }

  if (authMode === 'signup') {
    const name = document.getElementById('auth-name').value.trim();
    if (!name) { showModalError('Please enter your name.'); return; }
    if (USERS_DB[email]) { showModalError('An account with that email already exists.'); return; }
    USERS_DB[email] = { name, email, password };
    logIn({ name, email });
  } else {
    const user = USERS_DB[email];
    if (!user || user.password !== password) { showModalError('Incorrect email or password.'); return; }
    logIn(user);
  }
}

function logIn(user) {
  state.user = user;
  closeModal();
  document.getElementById('nav-auth-out').style.display = 'none';
  document.getElementById('nav-auth-in').style.display = 'flex';
  const initials = user.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  document.getElementById('nav-user-av').textContent = initials;
  document.getElementById('nav-user-name').textContent = user.name.split(' ')[0];
  document.getElementById('profile-avatar').textContent = initials;
  document.getElementById('profile-name').textContent = user.name;
  document.getElementById('profile-email').textContent = user.email;
  showToast(`Welcome, ${user.name.split(' ')[0]}!`);
  document.getElementById('nav-write-btn').style.display = 'inline-flex';
  if (state.currentArticleId) renderComments(state.currentArticleId);
  updateProfile();
}

function signOut() {
  state.user = null;
  document.getElementById('nav-auth-out').style.display = 'flex';
  document.getElementById('nav-auth-in').style.display = 'none';
  document.getElementById('nav-write-btn').style.display = 'none';
  showToast('You\'ve been signed out.');
  if (state.currentArticleId) renderComments(state.currentArticleId);
}

// ════════════════════════════════════
// PROFILE
// ════════════════════════════════════
function updateProfile() {
  const liked = ARTICLES.filter(a => state.articleLikes[a.id]?.liked);
  const el = document.getElementById('profile-liked-list');
  if (!liked.length) {
    el.innerHTML = '<p style="font-family:var(--sans);font-size:14px;color:var(--ink-l);padding:24px 0;">You haven\'t liked any articles yet. Start reading and hit the heart button!</p>';
    return;
  }
  el.innerHTML = `<div class="saved-articles-grid">${liked.map(a => {
    const imgHTML = ARTICLE_IMAGES[a.id]
      ? `<img src="${ARTICLE_IMAGES[a.id].thumb}" alt="${ARTICLE_IMAGES[a.id].alt}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">`
      : `<i class="fa-solid ${a.icon}" style="opacity:0.14;"></i>`;
    return `
    <div class="browse-card" onclick="openArticle('${a.id}')">
      <div class="bc-img" style="height:140px;">${imgHTML}</div>
      <div class="bc-cat">${a.catLabel}</div>
      <div class="bc-title">${a.title}</div>
      <div class="bc-meta"><span>${a.author}</span><span>·</span><span>${a.readTime}</span></div>
    </div>`;
  }).join('')}</div>`;
}

// ════════════════════════════════════
// TOAST
// ════════════════════════════════════
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  document.getElementById('toast-msg').textContent = msg;
  document.getElementById('toast').classList.add('show');
  toastTimer = setTimeout(() => document.getElementById('toast').classList.remove('show'), 3000);
}

// ════════════════════════════════════
// DRAWER
// ════════════════════════════════════
function toggleDrawer() {
  document.getElementById('mobileDrawer').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeDrawer() {
  document.getElementById('mobileDrawer').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

document.getElementById('authModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

filterArticles('all', null);

// ════════════════════════════════════
// WRITE / PUBLISH
// ════════════════════════════════════
let selectedCat = { id: 'new-parents', label: 'New Parents' };
let coverDataUri = null;

function selectCat(btn) {
  document.querySelectorAll('.write-cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedCat = { id: btn.dataset.cat, label: btn.dataset.label };
}

function handleCoverUpload(e) {
  const file = e.target.files[0]; if (!file) return;
  if (file.size > 4 * 1024 * 1024) { showToast('Image must be under 4MB'); return; }
  const r = new FileReader();
  r.onload = (ev) => {
    coverDataUri = ev.target.result;
    document.getElementById('write-cover-img').src = coverDataUri;
    document.getElementById('write-cover-preview').style.display = 'block';
    document.getElementById('write-cover-drop').style.display = 'none';
  };
  r.readAsDataURL(file);
}

function removeCover() {
  coverDataUri = null;
  document.getElementById('write-cover-preview').style.display = 'none';
  document.getElementById('write-cover-drop').style.display = 'flex';
  document.getElementById('write-cover-input').value = '';
}

function fmt(cmd) { document.getElementById('write-body').focus(); document.execCommand(cmd, false, null); }
function fmtBlock(tag) { document.getElementById('write-body').focus(); document.execCommand('formatBlock', false, tag); }

function insertBodyImg() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = (e) => {
    const file = e.target.files[0]; if (!file) return;
    if (file.size > 4 * 1024 * 1024) { showToast('Image must be under 4MB'); return; }
    const r = new FileReader();
    r.onload = (ev) => {
      document.getElementById('write-body').focus();
      document.execCommand('insertHTML', false, '<img src="' + ev.target.result + '" alt="">');
    };
    r.readAsDataURL(file);
  };
  input.click();
}

document.addEventListener('input', (e) => {
  if (e.target.id === 'write-body') {
    const words = (e.target.innerText || '').trim().split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.round(words / 200));
    const el = document.getElementById('write-readtime');
    if (el) el.textContent = words > 0 ? ('~' + words + ' words — estimated ' + mins + ' min read') : '';
  }
});

function publishPost() {
  if (!state.user) { openModal('signin'); return; }
  const title    = document.getElementById('write-title').value.trim();
  const subtitle = document.getElementById('write-subtitle').value.trim();
  const bodyEl   = document.getElementById('write-body');
  const bodyText = (bodyEl.innerText || '').trim();
  const bodyHTML = bodyEl.innerHTML.trim();
  const errEl    = document.getElementById('write-error');
  errEl.style.display = 'none';

  if (!title) { errEl.textContent = 'Please add a title.'; errEl.style.display = 'block'; return; }
  if (bodyText.length < 50) { errEl.textContent = 'Your article needs at least 50 characters of content.'; errEl.style.display = 'block'; return; }

  const words = bodyText.split(/\s+/).filter(Boolean).length;
  const mins  = Math.max(1, Math.round(words / 200));
  const inits = state.user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const date  = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const newId = 'user-' + Date.now();

  ARTICLES.unshift({
    id: newId, cat: selectedCat.id, catLabel: selectedCat.label,
    title, subtitle: subtitle || 'A post by ' + state.user.name,
    author: state.user.name, authorInitials: inits, date,
    readTime: mins + ' min', icon: 'fa-pen-nib', likes: 0,
    excerpt: bodyText.slice(0, 200) + (bodyText.length > 200 ? '...' : ''),
    body: bodyHTML, coverImage: coverDataUri, isUserPost: true
  });
  state.articleLikes[newId] = { count: 0, liked: false };
  COMMENTS_DB[newId] = [];

  document.getElementById('write-title').value = '';
  document.getElementById('write-subtitle').value = '';
  bodyEl.innerHTML = '';
  document.getElementById('write-readtime').textContent = '';
  removeCover();
  document.querySelectorAll('.write-cat-btn').forEach((b,i) => b.classList.toggle('active', i===0));
  selectedCat = { id: 'new-parents', label: 'New Parents' };

  filterArticles('all', null);
  showToast('Your article has been published!');
  openArticle(newId);
}