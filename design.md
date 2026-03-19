# Design System Specification

## Product
Gamified Visual Learning Platform

## Purpose

This document defines the complete visual and interaction system for the platform.  
It ensures consistent UI generation across all pages and components.

The design prioritizes:

visual learning  
structured information hierarchy  
gamified progress feedback  
high quality motion  
clean SaaS-style interfaces  

The interface uses **light theme only**.

No dark theme is implemented.

---

# Design Philosophy

The product interface is inspired by:

modern SaaS dashboards  
educational learning platforms  
visual knowledge systems  
gamified productivity tools  

The interface must feel:

clean  
focused  
visual  
modern  
motivating  

The system emphasizes **visual comprehension over textual explanation**.

Concepts are communicated using:

cards  
diagrams  
progress indicators  
interactive previews  

---

# Core UX Principles

## Visual Learning First

Every concept should be shown visually before textual explanation.

Examples:

diagram blocks  
code preview widgets  
interactive examples  
step diagrams  

---

## Modular Design

Every UI element should exist as a reusable module.

Examples:

lesson card  
stat card  
progress ring  
achievement badge  

---

## Continuous Feedback

Users should constantly receive feedback through visual signals.

Examples:

progress animations  
level-up indicators  
quiz feedback  
reward animations  

---

## Predictable Navigation

Users should always know:

current location  
learning progress  
next recommended lesson  

---

# Layout System

## Grid System

12 column responsive grid.

Container width:

1200px

Column gap:

24px

---

## Spacing System

Base spacing unit:

8px

Spacing scale:

8  
16  
24  
32  
48  
64  
96  
120  

---

## Card Geometry

Card radius:

18px

Small cards:

12px

Padding:

24px

---

# Color System

Primary Accent

Electric Lime

#C8F31D

Secondary Accent

Vivid Blue

#3B82F6

Supporting Colors

Soft Orange

#FF8A4C

Mint Green

#7EE6B8

Purple Accent

#8B5CF6

Neutral Colors

Background

#F5F6F8

Card Background

#FFFFFF

Primary Text

#111827

Secondary Text

#6B7280

Divider

#E5E7EB

---

# Typography

Primary Font

Satoshi

Used for:

headings  
navigation  
UI labels  

Secondary Font

Inter

Used for:

paragraph text  
descriptions  

Code Font

JetBrains Mono

Used for:

code previews  
technical examples  

Font Scale

H1 — 48px  
H2 — 36px  
H3 — 28px  
H4 — 22px  
Body — 16px  
Small — 14px  

---

# Icon System

Icon Library

Lucide Icons

Style

outline icons

Stroke Width

1.5px

Icon Sizes

16px  
20px  
24px  

Icons should always appear inside:

buttons  
cards  
navigation  

---

# Illustration Style

Illustrations must follow these guidelines:

flat illustration style  
soft gradients  
rounded shapes  
minimal outlines  
simple character avatars  

Illustrations are used for:

landing hero  
empty states  
learning concepts  

---

# Motion System

Motion should feel refined and smooth.

Micro interaction duration

120ms

Standard transitions

240ms

Large interface animations

480ms

Easing

cubic-bezier(0.22, 1, 0.36, 1)

---

# Animation System

## Hero Floating Animation

Floating UI panels should move vertically.

Amplitude

8px

Duration

6s loop

---

## Card Hover Animation

transform:

translateY(-4px)

Shadow increases.

Duration:

160ms

---

## Progress Ring Animation

Stroke fill animation.

Duration:

800ms

Easing:

ease-out

---

## Badge Unlock Animation

scale: 0.8 → 1.1 → 1

Glow effect

Duration:

400ms

---

## Page Transition

fade + translateY

Duration

300ms

---

# Microinteractions

Buttons slightly scale on hover.

Cards elevate on hover.

Progress indicators animate when updated.

Quiz answers highlight immediately after selection.

Leaderboard ranking shifts animate smoothly.

---

# Component Library

## Card

Used for:

lessons  
features  
statistics  
leaderboard  

Properties:

rounded corners  
soft shadow  
padding container  

---

## Button

Variants:

primary  
secondary  
ghost  

States:

default  
hover  
active  
disabled  
loading  

---

## Progress Ring

Circular progress component.

Used for:

course completion  
level progression  

---

## Progress Bar

Horizontal progress indicator.

Used for:

lesson progress  
quiz progress  

---

## Badge Component

Achievement indicator.

Includes:

icon  
title  
unlock animation  

---

## Code Preview Block

Displays runnable code example.

Includes:

syntax highlighting  
run button  
copy button  

---

# Component States

All components must support states.

Example: Button

default  
hover  
active  
disabled  
loading  

Example: Card

default  
hover  
selected  

Example: Quiz Option

default  
selected  
correct  
incorrect  

---

# Page Architecture

Public Pages

Landing  
Login  
Register  

Application Pages

Dashboard  
Lesson List  
Lesson Viewer  
Quiz Interface  
Leaderboard  
Profile  

---

# Landing Page Layout

Sections

Navigation  
Hero  
Social Proof  
Features  
Visual Learning Preview  
Learning Flow  
CTA  
Footer  

---

# Hero Layout

Two column layout.

Left

headline  
description  
CTA buttons  

Right

animated UI preview.

---

# Feature Cards

Grid layout.

Each card includes:

icon  
title  
description  

Hover effect:

elevation.

---

# Dashboard Layout

Structure

Sidebar navigation  
Main content  
Optional insights panel  

---

# Sidebar Navigation

Width

240px

Items

Dashboard  
Lessons  
Quizzes  
Leaderboard  
Profile  

Active item highlighted.

---

# Dashboard Widgets

Widgets include

statistics cards  
progress charts  
recommended lessons  
leaderboard preview  

---

# Lesson List Page

Grid of lesson cards.

Card content

lesson title  
difficulty  
duration  
progress indicator  

---

# Lesson Viewer

Split layout.

Left

lesson explanation

Right

visual learning panel.

Visual panel includes

interactive diagrams  
code examples  
mini challenges  

---

# Quiz Interface

Single column.

Components

question card  
answer options  
progress indicator  

Answer cards support states

default  
selected  
correct  
incorrect  

---

# Leaderboard Page

Vertical ranking list.

Row elements

rank number  
avatar  
user name  
points  
level  

Top three appear as featured cards.

---

# Profile Page

Displays

user avatar  
level progress  
points  
achievements  
completed lessons  

Achievements shown as badge grid.

---

# Gamification Visual System

Gamification elements include

XP progress bar  
level indicator  
achievement badges  
reward notifications  

Level indicator should use

circular progress ring.

Achievement notifications appear as

floating toast cards.

---

# Interaction Flow

Example learning flow

User opens lesson  
User reads visual explanation  
User runs code preview  
User completes mini exercise  
User starts quiz  
User submits answers  
Points update  
Badge unlock animation  
Leaderboard position updates  

---

# Visual Learning Components

Lesson pages include

diagram blocks  
step cards  
code preview panels  
interactive widgets  

Each concept should include

visual explanation  
example  
practice  

---

# Responsive Design

Breakpoints

Desktop

1200px+

Tablet

768px

Mobile

480px

Behavior

Sidebar collapses to icons.

Cards become single column.

Lesson viewer stacks vertically.

---

# Accessibility

Minimum contrast ratio

4.5:1

All buttons must include

focus states  
keyboard navigation  

Minimum touch target

44px

---

# Design Summary

The interface should feel like

a modern SaaS learning platform  
a visual coding environment  
a gamified education system  

The system prioritizes

visual explanation  
structured layout  
smooth motion  
reward driven learning