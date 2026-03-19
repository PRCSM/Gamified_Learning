# UI Component Architecture

## Product
Gamified Visual Learning Platform

This document defines the complete component structure for the frontend.

All components should be implemented using:

Next.js  
React  
TailwindCSS  
Framer Motion (for animation)

Components should follow:

atomic design principles  
reusable structure  
consistent styling  

---

# Component Structure Overview

Application Layout Components

AppLayout
SidebarNavigation
TopNavigation
PageContainer

Landing Page Components

LandingHero
FeatureSection
FeatureCard
LearningFlowSection
LearningStepCard
VisualPreviewSection
CallToActionSection
Footer

Dashboard Components

DashboardStatsCard
ProgressRing
ProgressBar
RecommendedLessonCard
LeaderboardPreview

Learning Components

LessonCard
LessonViewer
CodePreview
InteractiveDiagram
StepCard

Quiz Components

QuizContainer
QuizQuestion
QuizOptionCard
QuizProgressBar
QuizResultCard

Gamification Components

LevelIndicator
XPProgressBar
AchievementBadge
RewardNotification
StreakIndicator

Leaderboard Components

LeaderboardTable
LeaderboardRow
TopLeaderboardCard

Profile Components

ProfileHeader
ProfileStats
AchievementGrid
AchievementCard

Utility Components

Button
Input
Modal
Card
Avatar
Tooltip
Badge

---

# Layout Components

## AppLayout

Purpose

Wraps all authenticated pages.

Structure

SidebarNavigation  
TopNavigation  
MainContentArea  

Props

children

---

## SidebarNavigation

Purpose

Primary navigation for authenticated users.

Navigation Items

Dashboard  
Lessons  
Quizzes  
Leaderboard  
Profile  

Props

activeRoute

---

## TopNavigation

Purpose

Displays global controls.

Elements

search input  
notification icon  
user avatar  

---

## PageContainer

Purpose

Standard page wrapper.

Provides

consistent padding  
grid layout

---

# Landing Page Components

## LandingHero

Purpose

Main landing introduction.

Content

headline  
description  
primary CTA  
secondary CTA  
hero visual

Hero visual contains floating UI panels.

---

## FeatureSection

Purpose

Explains platform capabilities.

Layout

three column grid.

---

## FeatureCard

Content

icon  
title  
description  

Interaction

hover elevation.

---

## LearningFlowSection

Explains learning process.

Layout

three steps.

---

## LearningStepCard

Elements

step number  
title  
description  
icon

---

## VisualPreviewSection

Purpose

Show visual learning preview.

Includes

CodePreview  
diagram block

---

## CallToActionSection

Purpose

Encourage account creation.

Content

headline  
two buttons

---

# Dashboard Components

## DashboardStatsCard

Displays statistics.

Examples

Lessons Completed  
Total Points  
Current Level  
Learning Streak  

Props

title  
value  
icon

---

## ProgressRing

Circular progress component.

Used for

level progress  
course completion

Props

progress value  
size

Animation

stroke animation.

---

## ProgressBar

Horizontal progress indicator.

Used for

lesson progress  
quiz progress

---

## RecommendedLessonCard

Shows suggested lesson.

Content

lesson title  
difficulty  
duration

---

## LeaderboardPreview

Mini leaderboard widget.

Shows

top 5 users.

---

# Learning Components

## LessonCard

Displays lesson in lesson list.

Content

title  
difficulty  
estimated time  
completion percentage

Interaction

hover elevation.

Props

lesson data

---

## LessonViewer

Main learning interface.

Structure

lesson content area  
visual learning panel

Visual panel may contain

CodePreview  
InteractiveDiagram

---

## CodePreview

Interactive code example.

Features

syntax highlighting  
copy button  
run button

Props

code snippet  
language

---

## InteractiveDiagram

Visual explanation component.

Examples

flow diagrams  
concept visuals

---

## StepCard

Displays step-by-step concept.

Content

step number  
title  
description

---

# Quiz Components

## QuizContainer

Wraps quiz interface.

Structure

question  
options  
progress bar  
submit button

---

## QuizQuestion

Displays question text.

Props

question text

---

## QuizOptionCard

Selectable answer card.

States

default  
selected  
correct  
incorrect  

Props

option text  
isSelected  
isCorrect

Animations

correct state glow  
incorrect shake

---

## QuizProgressBar

Shows quiz progress.

Props

current question index  
total questions

---

## QuizResultCard

Displays result summary.

Content

score  
correct answers  
retry button

---

# Gamification Components

## LevelIndicator

Shows current user level.

Design

circular progress indicator.

Props

level  
progress percentage

---

## XPProgressBar

Displays XP progress.

Props

current XP  
required XP

---

## AchievementBadge

Displays earned badge.

Elements

icon  
title

Animation

badge unlock animation.

---

## RewardNotification

Floating reward notification.

Triggered when

level up  
badge unlock

Animation

slide up + fade.

---

## StreakIndicator

Displays learning streak.

Content

number of days  
flame icon indicator

---

# Leaderboard Components

## LeaderboardTable

Main leaderboard container.

Structure

multiple LeaderboardRow.

---

## LeaderboardRow

Displays ranking entry.

Content

rank  
avatar  
username  
points  
level

---

## TopLeaderboardCard

Special card for top three users.

Layout

large card format.

---

# Profile Components

## ProfileHeader

Displays user info.

Content

avatar  
username  
level

---

## ProfileStats

Shows user statistics.

Examples

lessons completed  
points earned

---

## AchievementGrid

Grid of earned badges.

---

## AchievementCard

Individual badge card.

Content

badge icon  
title  
description

---

# Utility Components

## Button

Variants

primary  
secondary  
ghost

States

default  
hover  
active  
disabled  
loading

---

## Input

Text input component.

Supports

label  
error message

---

## Modal

Reusable modal dialog.

Used for

confirmations  
lesson completion

---

## Card

Base card component.

Props

children  
hoverable

---

## Avatar

Displays user avatar.

Props

image url  
size

---

## Tooltip

Displays hover information.

---

## Badge

Small label component.

Used for

difficulty tags  
status labels

---

# Component Hierarchy Example

Example page composition

Dashboard Page

AppLayout
  SidebarNavigation
  TopNavigation
  PageContainer
      DashboardStatsCard
      ProgressRing
      RecommendedLessonCard
      LeaderboardPreview

---

# Animation Library

All animations should use

Framer Motion.

Common animations

card hover  
progress fill  
badge unlock  
toast notification

---

# Development Guidelines

Components should be

stateless when possible  
reusable across pages  
responsive  

Use Tailwind for styling.

Avoid inline styles.

Animations must follow motion system defined in design.md.