# Product Requirements Document (PRD)

## Project Title
Gamified Web-Based Learning Platform

## Institution
SASTRA Deemed University — School of Computing

## Project Type
B.Tech Mini Project

## Based on Research Paper
Enhancing Web Development Education With Game-Based and Gamification Learning: A Study of Engagement, Motivation, and Performance (IEEE Access)

---

# 1. Product Overview

## Problem Statement

Traditional learning systems often lack engagement and motivation, especially when learning technical subjects like web development. Students often lose interest when learning through static content.

Gamification introduces game elements into learning systems to make learning more interactive and motivating.

## Solution

Develop a **Gamified Web-Based Learning Platform** where students:

- Learn structured lessons
- Complete quizzes
- Earn points
- Unlock levels
- Receive badges
- Compete on a leaderboard

This approach improves engagement and learning performance.

---

# 2. Product Goals

## Primary Goals

- Improve learning performance
- Increase student engagement
- Provide structured interactive learning

## Secondary Goals

- Encourage consistent learning
- Track progress
- Enable competitive learning via leaderboard

---

# 3. Target Users

## Students

Capabilities:

- Register and login
- Access lessons
- Complete quizzes
- Earn points and badges
- View leaderboard
- Track learning progress

## Admin / Instructor

Capabilities:

- Create lessons
- Create quizzes
- Monitor student performance

---

# 4. Core Features

---
## Landing Page

The landing page acts as the public entry point for the platform before authentication.

### Purpose

- Introduce the platform
- Explain gamified learning
- Guide users to create an account
- Showcase platform features

### Key Sections

Hero Section
Product introduction with primary call-to-action.

How It Works
Visual explanation of the learning flow.

Gamification Overview
Explain points, levels, badges, and leaderboard.

Platform Preview
Screenshots or animated previews of the dashboard and lessons.

Call To Action
Encourage users to sign up and start learning.

### User Flow

Landing Page  
↓  
User clicks "Start Learning"  
↓  
Redirect to Register/Login  
↓  
User enters platform dashboard

# 4.1 Authentication System

Users must create an account to access the learning platform.

Features:

- User registration
- User login
- Session authentication
- Secure user identity management

User Flow:

Register → Login → Access Dashboard

---

# 4.2 Learning Module

The learning module provides structured lessons.

Features:

- Lesson list
- Lesson detail page
- Learning content display
- Lesson completion tracking

Example Lessons:

- HTML Basics
- HTML Elements
- HTML Attributes
- Headings
- Paragraphs

User Flow:

Dashboard → Select Lesson → Read Content → Start Quiz

---

# 4.3 Quiz System

Each lesson includes quizzes that test the student's understanding.

Features:

- Multiple choice questions
- Instant result feedback
- Score calculation
- Quiz completion tracking

Quiz Flow:

Lesson → Start Quiz → Answer Questions → Submit → Score Display

---

# 4.4 Gamification System

Gamification adds game mechanics to improve engagement.

Game Elements Implemented:

- Points
- Levels
- Badges
- Leaderboard

Points Logic Example:

Quiz Completed → +50 Points  
Lesson Completed → +20 Points

Level System:

0 – 100 Points → Level 1  
100 – 200 Points → Level 2  
200 – 400 Points → Level 3  
400 – 800 Points → Level 4

Badge Examples:

First Quiz Completed → Beginner Badge  
5 Lessons Completed → Learner Badge  
100 Points Earned → Achiever Badge  
Top 3 Leaderboard → Champion Badge

---

# 4.5 Leaderboard System

Leaderboard ranks students based on points earned.

Features:

- Global leaderboard
- Real-time ranking
- Top students display

Leaderboard Flow:

Points updated → Ranking recalculated → Leaderboard updated

---

# 4.6 Progress Dashboard

Students can track their learning progress.

Dashboard Displays:

- Current level
- Total points
- Earned badges
- Completed lessons
- Leaderboard rank

---

# 5. System Architecture

## Architecture Type

Serverless Web Architecture

Frontend is deployed on Vercel while backend services are provided by Firebase.

---

# High Level Architecture

User (Browser)
↓
Vercel Hosted Frontend (Next.js / React)
↓
Firebase Authentication
↓
Application Logic (Gamification Engine)
↓
Firestore Database
↓
Leaderboard + Progress Tracking

---

# 6. Technology Stack

## Frontend

Framework:
Next.js (React)

UI Libraries:

- Tailwind CSS
- ShadCN UI

Responsibilities:

- Render UI
- Display lessons
- Manage quizzes
- Show leaderboard
- Handle user interaction

---

## Backend

Serverless Backend using Firebase.

Services Used:

- Firebase Authentication
- Firestore Database
- Firebase Cloud Functions (optional)

---

## Database

Database Type:
NoSQL Document Database

Service:
Firebase Firestore

Used For:

- User profiles
- Lessons
- Quiz data
- Points tracking
- Leaderboard ranking

---

# 7. Deployment

## Hosting Platform

Frontend Hosting:
Vercel

Backend Services:
Firebase

---

## Deployment Pipeline

Developer pushes code to GitHub
↓
Vercel detects repository
↓
Project automatically builds
↓
Application deployed globally via CDN

Example URL:

https://gamified-learning.vercel.app

---

# 8. Environment Variables

The following variables must be configured in Vercel.

NEXT_PUBLIC_FIREBASE_API_KEY

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN

NEXT_PUBLIC_FIREBASE_PROJECT_ID

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID

NEXT_PUBLIC_FIREBASE_APP_ID

---

# 9. Database Schema

---

## Users Collection

users

userId  
name  
email  
points  
level  
badges  
completedLessons  

Example:

users/
  user123
    name: "John"
    email: "john@email.com"
    points: 150
    level: 2
    badges: ["Beginner"]
    completedLessons: ["lesson1"]

---

## Lessons Collection

lessons

lessonId  
title  
content  
quizId  

Example:

lessons/
  lesson1
    title: "HTML Basics"
    content: "Introduction to HTML"
    quizId: "quiz1"

---

## Quizzes Collection

quizzes

quizId  
questions  

Example:

quizzes/
  quiz1
    questions:
      - question
      - options
      - correctAnswer

---

## Leaderboard Collection

leaderboard

userId  
points  
rank

---

# 10. Gamification Engine

Example Logic:

function completeQuiz(userId):

    addPoints(userId, 50)

    if points >= 100:
        increaseLevel(userId)

    if firstQuiz:
        assignBadge("Beginner")

---

# 11. Folder Structure

Frontend Project Structure

src/

components/
Navbar
LessonCard
QuizComponent
Leaderboard

pages/
Login
Register
Dashboard
Lesson
Quiz

firebase/
firebaseConfig

utils/
gamificationEngine

---

# 12. Feature Flow

User Journey

User registers  
↓  
User logs in  
↓  
User views dashboard  
↓  
User selects lesson  
↓  
User reads lesson  
↓  
User completes quiz  
↓  
Points awarded  
↓  
Level updated  
↓  
Leaderboard updated  
↓  
Progress stored in database

---

# 13. Data Flow

User Action
↓
Frontend (Next.js)
↓
Firebase Authentication
↓
Gamification Logic
↓
Firestore Database Update
↓
Leaderboard Update
↓
UI Refresh

---

# 14. Security

Authentication handled via Firebase Auth.

Security Rules:

- Users can only modify their own data
- Only admin can create lessons
- Firestore rules enforce access control

---

# 15. Future Improvements

Potential Enhancements:

- AI generated quizzes
- Daily learning streak rewards
- Multiplayer challenges
- Skill tracks
- Mobile application
- Learning analytics dashboard

---

# 16. Development Roadmap

Phase 1

Project setup  
Firebase configuration  
Authentication system

Phase 2

Lesson module  
Lesson display UI

Phase 3

Quiz system  
Quiz result calculation

Phase 4

Gamification engine  
Points system  
Levels system  
Badge system

Phase 5

Leaderboard  
Progress dashboard

Phase 6

Testing  
Deployment on Vercel

---

# 17. Success Metrics

System performance can be evaluated by:

- Number of lessons completed
- Number of quizzes attempted
- Average user points
- User engagement levels

---

# 18. Project Summary

This project implements a **gamified web-based learning system** that improves student learning performance through game mechanics such as points, levels, badges, and leaderboards.

The system is built using modern web technologies including **Next.js, Firebase, and Vercel**, enabling a scalable and serverless architecture suitable for educational platforms.