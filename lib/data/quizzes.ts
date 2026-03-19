import { Quiz } from '@/types';

export const sampleQuizzes: Quiz[] = [
  {
    id: 'quiz1',
    lessonId: 'lesson1',
    questions: [
      { id: 'q1-1', question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language'], correctAnswer: 0 },
      { id: 'q1-2', question: 'Which tag is used for the largest heading?', options: ['<heading>', '<h6>', '<h1>', '<head>'], correctAnswer: 2 },
      { id: 'q1-3', question: 'Where does the <title> tag go?', options: ['<body>', '<head>', '<footer>', '<div>'], correctAnswer: 1 },
      { id: 'q1-4', question: 'Which declaration defines HTML5?', options: ['<html5>', '<!DOCTYPE html>', '<html version="5">', '<!HTML>'], correctAnswer: 1 },
    ],
  },
  {
    id: 'quiz2',
    lessonId: 'lesson2',
    questions: [
      { id: 'q2-1', question: 'Which element is used for paragraphs?', options: ['<para>', '<text>', '<p>', '<paragraph>'], correctAnswer: 2 },
      { id: 'q2-2', question: 'Which tag creates a hyperlink?', options: ['<link>', '<a>', '<href>', '<url>'], correctAnswer: 1 },
      { id: 'q2-3', question: 'Which tag is self-closing?', options: ['<p>', '<div>', '<img>', '<a>'], correctAnswer: 2 },
      { id: 'q2-4', question: 'What does <ul> create?', options: ['Ordered list', 'Unordered list', 'Underlined text', 'Upper layout'], correctAnswer: 1 },
    ],
  },
  {
    id: 'quiz3',
    lessonId: 'lesson3',
    questions: [
      { id: 'q3-1', question: 'What attribute specifies a link URL?', options: ['src', 'link', 'href', 'url'], correctAnswer: 2 },
      { id: 'q3-2', question: 'Which attribute provides alternative text for images?', options: ['title', 'alt', 'src', 'desc'], correctAnswer: 1 },
      { id: 'q3-3', question: 'The "class" attribute is used for?', options: ['JavaScript only', 'CSS styling and targeting', 'Database queries', 'Server requests'], correctAnswer: 1 },
      { id: 'q3-4', question: 'Which input attribute means the field must be filled?', options: ['important', 'needed', 'required', 'mandatory'], correctAnswer: 2 },
    ],
  },
  {
    id: 'quiz4',
    lessonId: 'lesson4',
    questions: [
      { id: 'q4-1', question: 'How many heading levels exist in HTML?', options: ['4', '5', '6', '8'], correctAnswer: 2 },
      { id: 'q4-2', question: 'Which heading is the smallest?', options: ['<h1>', '<h3>', '<h6>', '<h4>'], correctAnswer: 2 },
      { id: 'q4-3', question: 'How many <h1> tags should a page typically have?', options: ['As many as needed', 'One', 'Two', 'None'], correctAnswer: 1 },
      { id: 'q4-4', question: 'The <p> tag defines a?', options: ['Picture', 'Paragraph', 'Page', 'Pointer'], correctAnswer: 1 },
    ],
  },
  {
    id: 'quiz5',
    lessonId: 'lesson5',
    questions: [
      { id: 'q5-1', question: 'What does CSS stand for?', options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Styling System', 'Content Style Syntax'], correctAnswer: 1 },
      { id: 'q5-2', question: 'Which property changes text color?', options: ['font-color', 'text-color', 'color', 'fg-color'], correctAnswer: 2 },
      { id: 'q5-3', question: 'What is the outermost part of the CSS Box Model?', options: ['Content', 'Padding', 'Border', 'Margin'], correctAnswer: 3 },
      { id: 'q5-4', question: 'How do you select an element with class "card"?', options: ['#card', '.card', 'card', '*card'], correctAnswer: 1 },
    ],
  },
  {
    id: 'quiz6',
    lessonId: 'lesson6',
    questions: [
      { id: 'q6-1', question: 'Which display value takes full width and stacks vertically?', options: ['inline', 'inline-block', 'block', 'flex'], correctAnswer: 2 },
      { id: 'q6-2', question: 'What unit is relative to the root font size?', options: ['em', 'rem', 'px', '%'], correctAnswer: 1 },
      { id: 'q6-3', question: 'Inline elements ignore which properties?', options: ['color and font', 'width and height', 'margin and padding', 'border and outline'], correctAnswer: 1 },
      { id: 'q6-4', question: 'Which unit represents 1% of viewport height?', options: ['%', 'em', 'vh', 'px'], correctAnswer: 2 },
    ],
  },
  {
    id: 'quiz7',
    lessonId: 'lesson7',
    questions: [
      { id: 'q7-1', question: 'Which position value removes an element from normal flow?', options: ['static', 'relative', 'absolute', 'sticky'], correctAnswer: 2 },
      { id: 'q7-2', question: 'What does z-index control?', options: ['Horizontal position', 'Stacking order', 'Zoom level', 'Font size'], correctAnswer: 1 },
      { id: 'q7-3', question: 'An absolute element is positioned relative to?', options: ['The browser window', 'The nearest positioned ancestor', 'The body always', 'The next sibling'], correctAnswer: 1 },
      { id: 'q7-4', question: 'Which position works like relative until a scroll threshold?', options: ['fixed', 'absolute', 'sticky', 'static'], correctAnswer: 2 },
    ],
  },
  {
    id: 'quiz8',
    lessonId: 'lesson8',
    questions: [
      { id: 'q8-1', question: 'What does display: flex do?', options: ['Makes the element invisible', 'Creates a flex container', 'Adds a border', 'Changes the font'], correctAnswer: 1 },
      { id: 'q8-2', question: 'Which property centers items horizontally in a flex row?', options: ['align-items', 'justify-content', 'flex-wrap', 'gap'], correctAnswer: 1 },
      { id: 'q8-3', question: 'What does flex: 1 do to a child?', options: ['Sets its opacity to 1', 'Makes it grow to fill available space', 'Sets its order to 1', 'Adds 1px padding'], correctAnswer: 1 },
      { id: 'q8-4', question: 'The gap property adds space between?', options: ['The element and its border', 'Flex/Grid children', 'Text characters', 'The element and the viewport'], correctAnswer: 1 },
    ],
  },
  {
    id: 'quiz9',
    lessonId: 'lesson9',
    questions: [
      { id: 'q9-1', question: 'What does @media (max-width: 600px) mean?', options: ['Apply styles only above 600px', 'Apply styles only at exactly 600px', 'Apply styles at 600px and below', 'Apply styles to images under 600px'], correctAnswer: 2 },
      { id: 'q9-2', question: 'Which meta tag is essential for responsive design?', options: ['<meta charset>', '<meta viewport>', '<meta description>', '<meta author>'], correctAnswer: 1 },
      { id: 'q9-3', question: 'What does "margin: 0 auto" do?', options: ['Removes all margin', 'Centers the element horizontally', 'Adds automatic margin on all sides', 'Inherits parent margin'], correctAnswer: 1 },
      { id: 'q9-4', question: 'Which approach starts with mobile and adds complexity?', options: ['Desktop-first', 'Mobile-first', 'Responsive-first', 'Content-first'], correctAnswer: 1 },
    ],
  },
  {
    id: 'quiz10',
    lessonId: 'lesson10',
    questions: [
      { id: 'q10-1', question: 'Which CSS property adds a smooth color transition?', options: ['animation', 'transform', 'transition', 'translate'], correctAnswer: 2 },
      { id: 'q10-2', question: 'A complete HTML page MUST have?', options: ['A div element', 'A DOCTYPE declaration', 'At least 3 sections', 'JavaScript'], correctAnswer: 1 },
      { id: 'q10-3', question: 'The "container pattern" uses which 3 CSS properties?', options: ['display, flex, gap', 'width, max-width, margin', 'position, top, left', 'color, background, font'], correctAnswer: 1 },
      { id: 'q10-4', question: 'transform: translateY(-8px) does what?', options: ['Moves element 8px down', 'Moves element 8px up', 'Scales element to 8px', 'Rotates element 8 degrees'], correctAnswer: 1 },
    ],
  },
];
