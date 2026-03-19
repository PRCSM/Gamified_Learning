import { Lesson } from '@/types';

export const sampleLessons: Lesson[] = [
  // ─── Lesson 1: How the Web Works & HTML Basics ────────────────
  {
    id: 'lesson1',
    title: 'How the Web Works & HTML Basics',
    difficulty: 'beginner',
    estimatedTime: 15,
    order: 1,
    quizId: 'quiz1',
    content: [
      { type: 'text', title: 'How Does the Web Work?', body: 'When you type a URL, your browser sends a request to a server. The server responds with HTML, CSS, and JavaScript files. Your browser reads them and renders the page you see.' },
      { type: 'text', title: 'What is HTML?', body: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure and content of a webpage using elements and tags. Every website you visit is built with HTML at its core.' },
      {
        type: 'showcase',
        title: 'Building Your First Page',
        showcaseSteps: [
          { title: 'Start with DOCTYPE', description: 'Every HTML page begins with a DOCTYPE declaration that tells the browser this is HTML5.', code: '<!DOCTYPE html>', highlightLines: [1] },
          { title: 'Add the HTML tag', description: 'The <html> tag is the root element that wraps everything on your page.', code: '<!DOCTYPE html>\n<html>\n\n</html>', highlightLines: [2, 4] },
          { title: 'Add Head & Body', description: 'The <head> contains metadata (title, links). The <body> contains everything visible.', code: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n\n  </body>\n</html>', highlightLines: [3, 4, 5, 6, 8] },
          { title: 'Add visible content', description: 'Now add a heading and paragraph inside the body — this is what users see!', code: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n    <p>My first webpage.</p>\n  </body>\n</html>', highlightLines: [7, 8] },
        ],
      },
      {
        type: 'explorer',
        title: 'HTML Document Tree',
        tree: {
          tag: 'html', codeLine: 1,
          children: [
            { tag: 'head', codeLine: 2, children: [{ tag: 'title', codeLine: 3 }] },
            { tag: 'body', codeLine: 5, children: [
              { tag: 'h1', codeLine: 6 },
              { tag: 'p', codeLine: 7 },
            ]},
          ],
        },
        codeLines: [
          { line: 1, content: '<html>' },
          { line: 2, content: '  <head>' },
          { line: 3, content: '    <title>My Page</title>' },
          { line: 4, content: '  </head>' },
          { line: 5, content: '  <body>' },
          { line: 6, content: '    <h1>Hello World!</h1>' },
          { line: 7, content: '    <p>My first webpage.</p>' },
          { line: 8, content: '  </body>' },
          { line: 9, content: '</html>' },
        ],
      },
      {
        type: 'live-editor',
        title: 'Try It Yourself',
        initialCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n    <p>This is my first webpage.</p>\n  </body>\n</html>',
      },
      {
        type: 'practice',
        practiceLabel: 'HTML Basics',
        exercises: [
          { title: 'Create a basic page', description: 'Write a complete HTML page with a heading and paragraph', code: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>About Me</title>\n  </head>\n  <body>\n    <h1>My Name</h1>\n    <p>I am learning HTML!</p>\n  </body>\n</html>', hint: 'Every HTML page needs DOCTYPE, html, head, and body tags' },
        ],
      },
    ],
  },

  // ─── Lesson 2: HTML Tags & Elements ───────────────────────────
  {
    id: 'lesson2',
    title: 'HTML Tags & Elements',
    difficulty: 'beginner',
    estimatedTime: 20,
    order: 2,
    quizId: 'quiz2',
    content: [
      { type: 'text', title: 'Understanding Elements', body: 'HTML elements are the building blocks of web pages. Each element consists of an opening tag, content, and a closing tag. Some elements like <img> and <br> are self-closing.' },
      { type: 'heading-hierarchy', title: 'Heading Hierarchy' },
      {
        type: 'showcase',
        title: 'Building a Page Tag by Tag',
        showcaseSteps: [
          { title: 'Headings', description: 'Headings range from <h1> (largest) to <h6> (smallest). Use <h1> once per page for the main title.', code: '<h1>Main Title</h1>\n<h2>Section Title</h2>\n<h3>Subsection</h3>', highlightLines: [1, 2, 3] },
          { title: 'Paragraphs', description: 'The <p> tag wraps blocks of text. Browsers add space between paragraphs automatically.', code: '<h1>Main Title</h1>\n<p>This is a paragraph of text\n  that explains something.</p>\n<p>Another paragraph follows.</p>', highlightLines: [2, 3, 4] },
          { title: 'Links', description: 'The <a> tag creates clickable links. The href attribute specifies where to go.', code: '<h1>Main Title</h1>\n<p>Visit <a href="https://google.com">Google</a></p>', highlightLines: [2] },
          { title: 'Images', description: 'The <img> tag embeds images. It needs src (source) and alt (description) attributes.', code: '<h1>Main Title</h1>\n<p>Visit <a href="https://google.com">Google</a></p>\n<img src="photo.jpg" alt="A photo">', highlightLines: [3] },
          { title: 'Lists', description: 'Use <ul> for bullet lists and <ol> for numbered lists. Each item uses <li>.', code: '<h1>Main Title</h1>\n<ul>\n  <li>Item one</li>\n  <li>Item two</li>\n  <li>Item three</li>\n</ul>', highlightLines: [2, 3, 4, 5, 6] },
        ],
      },
      {
        type: 'live-editor',
        title: 'Experiment with Tags',
        initialCode: '<h1>My Profile</h1>\n<p>Hello! I am learning HTML.</p>\n<img src="https://picsum.photos/200/150" alt="Random photo">\n<h2>My Hobbies</h2>\n<ul>\n  <li>Coding</li>\n  <li>Reading</li>\n  <li>Gaming</li>\n</ul>\n<p>Visit <a href="https://github.com">my GitHub</a></p>',
      },
      {
        type: 'practice',
        practiceLabel: 'HTML Tags',
        exercises: [
          { title: 'Create a mini profile', description: 'Use headings, paragraph, image and a link', code: '<h1>Your Name</h1>\n<p>I\'m learning HTML today!</p>\n<img src="https://picsum.photos/150" alt="My photo">\n<a href="https://github.com">My GitHub →</a>', hint: 'Save and open with Live Server to see it instantly' },
          { title: 'Build a hobby list', description: 'Create an ordered list of your top 3 hobbies', code: '<h2>My Hobbies</h2>\n<ol>\n  <li>Coding</li>\n  <li>Gaming</li>\n  <li>Reading</li>\n</ol>\n<p>My favorite is <strong>coding</strong>!</p>', hint: 'Try changing <ol> to <ul> and see what changes' },
        ],
      },
    ],
  },

  // ─── Lesson 3: Semantic HTML & Attributes ─────────────────────
  {
    id: 'lesson3',
    title: 'Semantic HTML & Attributes',
    difficulty: 'beginner',
    estimatedTime: 15,
    order: 3,
    quizId: 'quiz3',
    content: [
      { type: 'text', title: 'What is Semantic HTML?', body: 'Semantic tags describe the purpose of their content. Instead of using generic <div> tags everywhere, you use <header>, <main>, <footer>, <nav>, <section>, and <article>. They look the same visually but help screen readers and search engines understand your page.' },
      {
        type: 'showcase',
        title: 'Semantic vs Non-Semantic',
        showcaseSteps: [
          { title: 'Non-semantic (bad)', description: 'Using generic <div> tags — the browser has no idea what each section means.', code: '<div class="header">\n  <div class="nav">...</div>\n</div>\n<div class="content">...</div>\n<div class="footer">...</div>', highlightLines: [1, 4, 5] },
          { title: 'Semantic (good)', description: 'Using meaningful tags — browser, screen readers, and Google understand your layout.', code: '<header>\n  <nav>...</nav>\n</header>\n<main>...</main>\n<footer>...</footer>', highlightLines: [1, 2, 4, 5] },
        ],
      },
      { type: 'text', title: 'What are Attributes?', body: 'Attributes provide extra information about HTML elements. They are placed inside the opening tag and usually come in name/value pairs like href="url" or class="name".' },
      { type: 'code', title: 'Common Attributes', code: '<a href="https://example.com" target="_blank">Open Link</a>\n<img src="photo.jpg" alt="A photo" width="300">\n<input type="text" placeholder="Enter name" required>\n<div class="container" id="main">\n  Content here\n</div>', language: 'html' },
      {
        type: 'live-editor',
        title: 'Build a Semantic Page',
        initialCode: '<header>\n  <h1>My Website</h1>\n  <nav>\n    <a href="#home">Home</a> |\n    <a href="#about">About</a> |\n    <a href="#contact">Contact</a>\n  </nav>\n</header>\n\n<main>\n  <section>\n    <h2>Welcome</h2>\n    <p>This is the main content area.</p>\n  </section>\n</main>\n\n<footer>\n  <p>&copy; 2025 My Website</p>\n</footer>',
      },
      {
        type: 'practice',
        practiceLabel: 'Semantic HTML',
        exercises: [
          { title: 'Wrap your page in semantic tags', description: 'Replace generic divs with header, main, and footer', code: '<header>\n  <h1>My Website</h1>\n</header>\n\n<main>\n  <p>This is the main content.</p>\n</main>\n\n<footer>\n  <p>&copy; 2025 Me</p>\n</footer>', hint: 'Visually identical — but screen readers and Google now understand your page structure' },
          { title: 'Add a navigation bar', description: 'Create a nav with 3 links using a list', code: '<nav>\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li><a href="#">About</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>', hint: 'This is exactly how real navbars are built — we\'ll style it with CSS soon' },
        ],
      },
    ],
  },

  // ─── Lesson 4: Introduction to CSS ────────────────────────────
  {
    id: 'lesson4',
    title: 'Introduction to CSS',
    difficulty: 'beginner',
    estimatedTime: 20,
    order: 4,
    quizId: 'quiz4',
    content: [
      { type: 'text', title: 'What is CSS?', body: 'CSS (Cascading Style Sheets) controls the visual appearance of HTML. It handles colors, fonts, spacing, layout, and animations. Without CSS, every website would look like a plain text document.' },
      {
        type: 'showcase',
        title: 'Unstyled → Styled Transformation',
        showcaseSteps: [
          { title: 'Raw HTML (no CSS)', description: 'Without CSS, browsers use default styles — Times New Roman font, blue underlined links, no spacing.', code: '<h1>Hello World</h1>\n<p>This is unstyled HTML.</p>\n<a href="#">Click me</a>', highlightLines: [1, 2, 3] },
          { title: 'Add a font', description: 'Changing the font-family instantly makes it look modern.', code: '<style>\nbody {\n  font-family: sans-serif;\n}\n</style>\n<h1>Hello World</h1>\n<p>Now with a clean font.</p>', highlightLines: [3] },
          { title: 'Add colors', description: 'Color and background transform the entire mood.', code: '<style>\nbody {\n  font-family: sans-serif;\n  background: #1a1a2e;\n  color: #ffffff;\n}\nh1 { color: #FC5107; }\n</style>\n<h1>Hello World</h1>\n<p>Dark mode activated!</p>', highlightLines: [4, 5, 7] },
          { title: 'Add spacing & rounded corners', description: 'Padding, margin, and border-radius make elements breathe.', code: '<style>\nbody {\n  font-family: sans-serif;\n  background: #1a1a2e;\n  color: #fff;\n  padding: 32px;\n}\n.card {\n  background: #16213e;\n  padding: 24px;\n  border-radius: 12px;\n}\n</style>\n<div class="card">\n  <h1>Hello World</h1>\n  <p>Looking premium now!</p>\n</div>', highlightLines: [6, 9, 10, 11] },
        ],
      },
      { type: 'text', title: 'CSS Selectors', body: 'Selectors target which HTML elements to style. Element selectors (h1, p) target all elements of that type. Class selectors (.card) target elements with that class. ID selectors (#main) target one specific element.' },
      { type: 'code', title: 'Selector Examples', code: '/* Element selector — all h1 tags */\nh1 { color: #FC5107; }\n\n/* Class selector — reusable */\n.card { background: white; }\n\n/* ID selector — one specific element */\n#header { position: sticky; }', language: 'css' },
      {
        type: 'live-editor',
        title: 'Style Your First Page',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body {\n      font-family: sans-serif;\n      background: #f5f5f5;\n      padding: 32px;\n    }\n    h1 {\n      color: #FC5107;\n      font-size: 2rem;\n    }\n    .card {\n      background: white;\n      padding: 24px;\n      border-radius: 12px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n  </style>\n</head>\n<body>\n  <div class="card">\n    <h1>Hello World</h1>\n    <p>Styled with CSS!</p>\n  </div>\n</body>\n</html>',
      },
      {
        type: 'practice',
        practiceLabel: 'CSS Basics',
        exercises: [
          { title: 'Change the font and colors', description: 'Transform your page from default to modern', code: 'body {\n  font-family: \'Inter\', sans-serif;\n  background: #1a1a2e;\n  color: #ffffff;\n}', hint: 'Add a Google Font link in your <head> for custom fonts' },
          { title: 'Add a hover effect', description: 'Make a card scale up and add shadow on hover', code: '.card {\n  transition: transform 0.3s ease,\n             box-shadow 0.3s ease;\n}\n\n.card:hover {\n  transform: scale(1.03);\n  box-shadow: 0 8px 32px rgba(0,0,0,0.2);\n}', hint: 'The transition property makes it smooth — without it, changes are instant' },
        ],
      },
    ],
  },

  // ─── Lesson 5: CSS Box Model ──────────────────────────────────
  {
    id: 'lesson5',
    title: 'CSS Box Model',
    difficulty: 'intermediate',
    estimatedTime: 20,
    order: 5,
    quizId: 'quiz5',
    content: [
      { type: 'text', title: 'The Box Model', body: 'Every HTML element is a box with 4 layers: Content (the actual text/image), Padding (space between content and border), Border (the edge around padding), and Margin (space outside the border). Understanding this is the key to CSS layout.' },
      { type: 'box-model', title: 'Interactive Box Model' },
      { type: 'text', title: 'box-sizing: border-box', body: 'By default, padding and border add to the element\'s width. A 300px box with 20px padding becomes 340px! Adding box-sizing: border-box makes padding fit inside the declared width. Always use this reset.' },
      { type: 'code', title: 'Universal Box-Sizing Reset', code: '/* Add this to the top of every CSS file */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Now a 300px element stays 300px\n   even with padding and border! */', language: 'css' },
      {
        type: 'live-editor',
        title: 'Experiment with Box Model',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { padding: 32px; font-family: sans-serif; }\n    .card {\n      width: 300px;\n      padding: 24px;\n      margin: 16px;\n      border: 3px solid #FC5107;\n      border-radius: 12px;\n      background: #fff5f0;\n    }\n  </style>\n</head>\n<body>\n  <div class="card">\n    <h2>Card Title</h2>\n    <p>This card is exactly 300px wide thanks to border-box.</p>\n  </div>\n</body>\n</html>',
      },
      {
        type: 'practice',
        practiceLabel: 'Box Model',
        exercises: [
          { title: 'Add padding and margin to a card', description: 'See the difference between inner and outer spacing', code: '.card {\n  padding: 24px;      /* space inside */\n  margin: 16px;       /* space outside */\n  border: 2px solid #ddd;\n  border-radius: 12px;\n}', hint: 'Right-click → Inspect your card to see the box model diagram live' },
          { title: 'Always add border-box', description: 'Add this reset to the top of your CSS', code: '* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}', hint: 'Without this, a 300px box + 20px padding = 340px. With it, it stays 300px' },
        ],
      },
    ],
  },

  // ─── Lesson 6: Display Types & CSS Units ──────────────────────
  {
    id: 'lesson6',
    title: 'Display Types & CSS Units',
    difficulty: 'intermediate',
    estimatedTime: 20,
    order: 6,
    quizId: 'quiz6',
    content: [
      { type: 'text', title: 'Display Property', body: 'The display property controls how an element flows in the layout. Block elements (div, h1, p) take full width and stack vertically. Inline elements (span, a, strong) flow with text. Inline-block combines both — flows inline but respects width/height.' },
      {
        type: 'showcase',
        title: 'Display Types Compared',
        showcaseSteps: [
          { title: 'Block', description: 'Block elements take the full width and stack vertically. <div>, <h1>, <p> are block by default.', code: '<div style="background: #fee;">Block 1</div>\n<div style="background: #efe;">Block 2</div>\n\n/* Each takes full width,\n   stacks vertically */', highlightLines: [1, 2] },
          { title: 'Inline', description: 'Inline elements flow with text. <span>, <a>, <strong> are inline. They ignore width/height.', code: '<p>\n  I love <span style="color:red">red</span>\n  and <span style="color:blue">blue</span>\n</p>\n\n/* Flows with text,\n   ignores width/height */', highlightLines: [2, 3] },
          { title: 'Inline-Block', description: 'Best of both — flows inline but respects width and height. Perfect for buttons.', code: '.btn {\n  display: inline-block;\n  padding: 10px 24px;\n  background: #FC5107;\n  color: white;\n  border-radius: 8px;\n}\n\n/* Sits inline, but accepts\n   padding and dimensions */', highlightLines: [2] },
        ],
      },
      { type: 'text', title: 'CSS Units', body: 'px = fixed pixels, good for borders and small details. % = relative to parent element. em = relative to parent font size. rem = relative to root font size (consistent). vh/vw = viewport height/width (full-screen layouts).' },
      {
        type: 'live-editor',
        title: 'Try Display Types',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body { font-family: sans-serif; padding: 24px; }\n    .btn {\n      display: inline-block;\n      padding: 10px 24px;\n      background: #FC5107;\n      color: white;\n      border-radius: 8px;\n      margin: 4px;\n      text-decoration: none;\n    }\n    p { margin: 16px 0; }\n  </style>\n</head>\n<body>\n  <p>My favorite color is <span style="color:#FC5107;font-weight:bold">orange</span> and I love it.</p>\n  <a href="#" class="btn">Button 1</a>\n  <a href="#" class="btn">Button 2</a>\n  <a href="#" class="btn">Button 3</a>\n</body>\n</html>',
      },
      {
        type: 'practice',
        practiceLabel: 'Display Types',
        exercises: [
          { title: 'Style a span inside a paragraph', description: 'See how inline elements flow with text', code: '<p>\n  My favorite color is\n  <span class="highlight">orange</span>\n  and I love it.\n</p>\n\n/* CSS */\n.highlight {\n  color: #FC5107;\n  font-weight: bold;\n}', hint: 'Inline elements ignore width/height — that\'s their whole personality' },
          { title: 'Put two buttons side by side', description: 'Use inline-block to place elements next to each other', code: '.btn {\n  display: inline-block;\n  padding: 10px 24px;\n  background: #FC5107;\n  color: white;\n  border-radius: 8px;\n}', hint: 'inline-block = sits inline but respects width/height. Best of both worlds' },
        ],
      },
    ],
  },

  // ─── Lesson 7: CSS Positioning ────────────────────────────────
  {
    id: 'lesson7',
    title: 'CSS Positioning',
    difficulty: 'intermediate',
    estimatedTime: 25,
    order: 7,
    quizId: 'quiz7',
    content: [
      { type: 'text', title: 'Position Property', body: 'CSS position controls how elements are placed on the page. Static (default) follows normal flow. Relative moves from its normal spot. Absolute positions relative to the nearest positioned parent. Fixed stays in place during scroll. Sticky sticks after scrolling past it.' },
      {
        type: 'showcase',
        title: 'Position Values Explained',
        showcaseSteps: [
          { title: 'static (default)', description: 'Normal document flow. You can\'t use top/left/bottom/right with static positioning.', code: '.box {\n  position: static;\n  /* default — normal flow */\n}', highlightLines: [2] },
          { title: 'relative', description: 'Like static, but you can nudge it with top/left. It still takes up its original space.', code: '.box {\n  position: relative;\n  top: 10px;\n  left: 20px;\n  /* Shifted, but original space preserved */\n}', highlightLines: [2, 3, 4] },
          { title: 'absolute', description: 'Removed from flow. Positions relative to nearest positioned ancestor (usually a relative parent).', code: '.parent {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n}', highlightLines: [2, 5, 6, 7] },
          { title: 'fixed', description: 'Stays in the same spot even when scrolling. Great for floating buttons or headers.', code: '.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n}', highlightLines: [2, 3, 4] },
          { title: 'sticky', description: 'Normal flow until the scroll hits its threshold, then it sticks. Perfect for navbars.', code: '.navbar {\n  position: sticky;\n  top: 0;\n  background: #1a1a2e;\n  z-index: 100;\n}', highlightLines: [2, 3] },
        ],
      },
      {
        type: 'live-editor',
        title: 'Try Positioning',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; }\n    body { font-family: sans-serif; padding: 24px; }\n    .icon-wrapper {\n      position: relative;\n      display: inline-block;\n      font-size: 2.5rem;\n    }\n    .badge {\n      position: absolute;\n      top: -5px;\n      right: -8px;\n      background: red;\n      color: white;\n      font-size: 0.6rem;\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 700;\n    }\n  </style>\n</head>\n<body>\n  <h2>Notification Badge Demo</h2>\n  <br>\n  <div class="icon-wrapper">\n    🔔\n    <span class="badge">3</span>\n  </div>\n</body>\n</html>',
      },
      {
        type: 'practice',
        practiceLabel: 'CSS Position',
        exercises: [
          { title: 'Add a notification badge', description: 'Use position absolute to place a badge on an icon', code: '.icon-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: red;\n  color: white;\n  font-size: 0.7rem;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}', hint: 'The parent MUST have position: relative — otherwise the badge flies to the page corner' },
          { title: 'Make a sticky header', description: 'Create a navbar that sticks to the top', code: 'nav {\n  position: sticky;\n  top: 0;\n  background: #1a1a2e;\n  color: white;\n  padding: 12px 24px;\n  z-index: 100;\n}', hint: 'sticky = normal flow until top: 0 is reached, then it sticks' },
        ],
      },
    ],
  },

  // ─── Lesson 8: Flexbox Layout ─────────────────────────────────
  {
    id: 'lesson8',
    title: 'Flexbox Layout',
    difficulty: 'intermediate',
    estimatedTime: 25,
    order: 8,
    quizId: 'quiz8',
    content: [
      { type: 'text', title: 'What is Flexbox?', body: 'Flexbox is a CSS layout system that arranges items in a row or column. It handles alignment, spacing, and distribution automatically. Before Flexbox, centering a div was a meme. Now it\'s 3 lines of CSS.' },
      {
        type: 'showcase',
        title: 'Flexbox Properties',
        showcaseSteps: [
          { title: 'Enable Flex', description: 'Add display: flex to a container to activate Flexbox. Children become flex items.', code: '.container {\n  display: flex;\n}\n\n/* Children now sit in a row\n   by default */', highlightLines: [2] },
          { title: 'justify-content', description: 'Controls horizontal alignment. center, space-between, space-around, flex-start, flex-end.', code: '.container {\n  display: flex;\n  justify-content: center;\n}\n\n/* Items centered horizontally */', highlightLines: [3] },
          { title: 'align-items', description: 'Controls vertical alignment. center, flex-start, flex-end, stretch.', code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n/* Items centered both ways! */', highlightLines: [4, 5] },
          { title: 'gap', description: 'Adds consistent spacing between items. Better than margins because it doesn\'t add space at edges.', code: '.container {\n  display: flex;\n  gap: 16px;\n}\n\n/* 16px between each item,\n   no extra space at edges */', highlightLines: [3] },
          { title: 'flex: 1', description: 'Makes items grow equally to fill available space. Perfect for equal-width columns.', code: '.container {\n  display: flex;\n  gap: 16px;\n}\n.card {\n  flex: 1;\n}\n\n/* Each card takes equal width */', highlightLines: [6] },
        ],
      },
      {
        type: 'live-editor',
        title: 'Build with Flexbox',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    * { box-sizing: border-box; margin: 0; }\n    body { font-family: sans-serif; padding: 24px; background: #f5f5f5; }\n    .card-row {\n      display: flex;\n      gap: 16px;\n    }\n    .card {\n      flex: 1;\n      padding: 24px;\n      background: #16213e;\n      border-radius: 12px;\n      color: white;\n      text-align: center;\n    }\n    .center-demo {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 150px;\n      background: #eee;\n      border-radius: 12px;\n      margin-top: 16px;\n    }\n    .centered {\n      padding: 12px 32px;\n      background: #FC5107;\n      color: white;\n      border-radius: 8px;\n      font-weight: bold;\n    }\n  </style>\n</head>\n<body>\n  <h2>3-Card Row</h2>\n  <div class="card-row">\n    <div class="card">Card 1</div>\n    <div class="card">Card 2</div>\n    <div class="card">Card 3</div>\n  </div>\n  <div class="center-demo">\n    <div class="centered">Centered!</div>\n  </div>\n</body>\n</html>',
      },
      {
        type: 'practice',
        practiceLabel: 'Flexbox',
        exercises: [
          { title: 'Center everything on the page', description: 'The classic "center a div" — solved in 3 lines', code: 'body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}', hint: 'This is the answer to the most famous CSS question. Memorize it' },
          { title: 'Create a 3-card row', description: 'Place 3 cards side by side with equal spacing', code: '.card-row {\n  display: flex;\n  gap: 16px;\n}\n.card {\n  flex: 1;\n  padding: 24px;\n  background: #16213e;\n  border-radius: 12px;\n  color: white;\n}', hint: 'flex: 1 makes each card take equal width. gap adds spacing without margins' },
        ],
      },
    ],
  },

  // ─── Lesson 9: Responsive Design ──────────────────────────────
  {
    id: 'lesson9',
    title: 'Responsive Design',
    difficulty: 'intermediate',
    estimatedTime: 20,
    order: 9,
    quizId: 'quiz9',
    content: [
      { type: 'text', title: 'What is Responsive Design?', body: 'Responsive design makes your website look good on all screen sizes — from phones to desktops. It uses media queries to apply different styles at different screen widths, and flexible layouts that adapt automatically.' },
      {
        type: 'showcase',
        title: 'Going Responsive',
        showcaseSteps: [
          { title: 'The viewport meta tag', description: 'Always add this in <head>. Without it, mobile browsers zoom out to show the desktop version.', code: '<meta name="viewport"\n  content="width=device-width,\n  initial-scale=1.0">\n\n<!-- This tells the browser:\n  "use the device width,\n   don\'t zoom out" -->', highlightLines: [1, 2, 3] },
          { title: 'Media queries', description: '@media lets you apply styles only at certain screen widths. This stacks cards on mobile.', code: '.card-row {\n  display: flex;\n  gap: 16px;\n}\n\n@media (max-width: 600px) {\n  .card-row {\n    flex-direction: column;\n  }\n}', highlightLines: [6, 7, 8, 9] },
          { title: 'The container pattern', description: 'This 3-line pattern works on every screen size — 90% on mobile, max 960px on desktop, centered.', code: '.container {\n  width: 90%;\n  max-width: 960px;\n  margin: 0 auto;\n}\n\n/* 90% on small screens,\n   960px max on large,\n   auto margin centers it */', highlightLines: [2, 3, 4] },
        ],
      },
      {
        type: 'live-editor',
        title: 'Make It Responsive',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <style>\n    * { box-sizing: border-box; margin: 0; }\n    body { font-family: sans-serif; background: #f5f5f5; }\n    .container {\n      width: 90%;\n      max-width: 960px;\n      margin: 0 auto;\n      padding: 24px;\n    }\n    .card-row {\n      display: flex;\n      gap: 16px;\n    }\n    .card {\n      flex: 1;\n      padding: 20px;\n      background: white;\n      border-radius: 12px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n    }\n    @media (max-width: 600px) {\n      .card-row { flex-direction: column; }\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <h1>Responsive Layout</h1>\n    <p style="margin:12px 0;color:#666">Resize the preview!</p>\n    <div class="card-row">\n      <div class="card"><h3>Card 1</h3><p>Content here</p></div>\n      <div class="card"><h3>Card 2</h3><p>Content here</p></div>\n      <div class="card"><h3>Card 3</h3><p>Content here</p></div>\n    </div>\n  </div>\n</body>\n</html>',
      },
      {
        type: 'practice',
        practiceLabel: 'Responsive Design',
        exercises: [
          { title: 'Stack cards on mobile', description: 'Use a media query to switch from row to column', code: '.card-row {\n  display: flex;\n  gap: 16px;\n}\n\n@media (max-width: 600px) {\n  .card-row {\n    flex-direction: column;\n  }\n}', hint: 'Resize your browser window to see it switch. Ctrl+Shift+M in DevTools simulates mobile' },
          { title: 'Responsive container', description: 'This 3-line combo works on every screen size', code: '.container {\n  width: 90%;\n  max-width: 960px;\n  margin: 0 auto;\n}', hint: 'This is the same pattern used by every major website. Memorize it' },
        ],
      },
    ],
  },

  // ─── Lesson 10: Build Challenge ───────────────────────────────
  {
    id: 'lesson10',
    title: 'Build Challenge: Complete Webpage',
    difficulty: 'advanced',
    estimatedTime: 30,
    order: 10,
    quizId: 'quiz10',
    content: [
      { type: 'text', title: 'Put It All Together!', body: 'Now it\'s time to combine everything you\'ve learned — HTML structure, semantic tags, CSS styling, box model, Flexbox, and responsive design — to build a complete, professional-looking webpage from scratch.' },
      { type: 'step', title: 'Your Build Checklist', steps: [
        { number: 1, title: 'HTML Structure', description: 'Set up DOCTYPE, html, head (with viewport meta + title), and body.' },
        { number: 2, title: 'Semantic Layout', description: 'Use header, nav, main, section, and footer for page structure.' },
        { number: 3, title: 'Navigation', description: 'Build a nav with links using a list. Style with Flexbox.' },
        { number: 4, title: 'Hero Section', description: 'Create a hero with heading, description, and CTA button.' },
        { number: 5, title: 'Feature Cards', description: 'Build a 3-card row using Flexbox with gap spacing.' },
        { number: 6, title: 'Responsive', description: 'Add media queries so cards stack on mobile.' },
        { number: 7, title: 'Polish', description: 'Add colors, fonts, hover effects, and spacing.' },
      ]},
      {
        type: 'live-editor',
        title: 'Build Your Landing Page',
        initialCode: '<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <style>\n    * { box-sizing: border-box; margin: 0; padding: 0; }\n    body {\n      font-family: system-ui, sans-serif;\n      background: #0a0a0a;\n      color: #fff;\n    }\n    .container { width: 90%; max-width: 960px; margin: 0 auto; }\n    \n    /* Nav */\n    nav {\n      padding: 16px 0;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    nav a { color: #999; text-decoration: none; margin-left: 24px; }\n    nav a:hover { color: #fff; }\n    .logo { font-weight: 800; font-size: 1.2rem; color: #FC5107; }\n    \n    /* Hero */\n    .hero {\n      text-align: center;\n      padding: 80px 0 60px;\n    }\n    .hero h1 { font-size: 3rem; margin-bottom: 16px; }\n    .hero p { color: #888; max-width: 500px; margin: 0 auto 24px; }\n    .btn {\n      display: inline-block;\n      padding: 12px 32px;\n      background: #FC5107;\n      color: #fff;\n      border-radius: 8px;\n      text-decoration: none;\n      font-weight: 600;\n    }\n    \n    /* Cards */\n    .cards { display: flex; gap: 16px; padding: 40px 0; }\n    .card {\n      flex: 1;\n      padding: 24px;\n      background: #151515;\n      border: 1px solid #222;\n      border-radius: 12px;\n    }\n    .card h3 { margin-bottom: 8px; }\n    .card p { color: #888; font-size: 0.9rem; }\n    \n    footer { text-align: center; padding: 32px 0; color: #555; font-size: 0.8rem; }\n    \n    @media (max-width: 600px) {\n      .hero h1 { font-size: 2rem; }\n      .cards { flex-direction: column; }\n    }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <nav>\n      <span class="logo">MyBrand</span>\n      <div>\n        <a href="#">Home</a>\n        <a href="#">About</a>\n        <a href="#">Contact</a>\n      </div>\n    </nav>\n    \n    <section class="hero">\n      <h1>Build Something Amazing</h1>\n      <p>Learn HTML & CSS to create beautiful, responsive websites from scratch.</p>\n      <a href="#" class="btn">Get Started →</a>\n    </section>\n    \n    <section class="cards">\n      <div class="card">\n        <h3>📐 Structure</h3>\n        <p>HTML gives your page structure and meaning.</p>\n      </div>\n      <div class="card">\n        <h3>🎨 Style</h3>\n        <p>CSS makes it beautiful with colors and layout.</p>\n      </div>\n      <div class="card">\n        <h3>📱 Responsive</h3>\n        <p>Media queries make it work on every screen.</p>\n      </div>\n    </section>\n    \n    <footer>Built with HTML & CSS ❤️</footer>\n  </div>\n</body>\n</html>',
      },
      {
        type: 'practice',
        practiceLabel: 'Build Challenge',
        exercises: [
          { title: 'Modify the hero section', description: 'Change the headline, description, and button style', code: '.hero h1 {\n  font-size: 3.5rem;\n  background: linear-gradient(135deg, #FC5107, #FF8A4C);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.btn {\n  padding: 14px 40px;\n  border-radius: 50px;\n  font-size: 1.1rem;\n}', hint: 'Gradient text is a popular modern effect — try different angles and colors' },
          { title: 'Add hover effects to cards', description: 'Make cards lift up and glow on hover', code: '.card {\n  transition: transform 0.3s,\n             border-color 0.3s;\n}\n.card:hover {\n  transform: translateY(-8px);\n  border-color: #FC5107;\n}', hint: 'translateY moves up/down. Negative values move up' },
        ],
      },
    ],
  },
];
