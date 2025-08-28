# The Study Hive - Science Education Platform

## Project Overview
A comprehensive online tutoring platform specialising in science education with advanced digital learning technologies and enhanced interactive learning features.

Key Components:
- React.js frontend with gamified learning experience
- Responsive design supporting multiple learning formats  
- Comprehensive science curriculum coverage (KS3, GCSE, A-level)
- Adaptive video learning with points tracking and achievements
- Personalised student engagement through interactive technologies

## User Preferences

### Language & Spelling
- **British English spelling throughout the project**: colour, organisation, specialise, personalise, realise, analyse, behaviour, etc.
- Exception: Web API properties like `behavior: 'smooth'` for ScrollIntoView remain as per web standards

### Design Preferences
- **Hexagon theme throughout** to match The Study Hive branding and logo
- **Clean, modern aesthetic** with academic focus incorporating elements from educational institutions
- **Typography**: Playfair Display for headings, Montserrat for body text (Jellyfish-inspired)
- **Pill-shaped buttons** throughout the site instead of fully rounded buttons
- **Subject-specific colour-coding**: teal for Biology, purple for Chemistry, orange for Physics

### Technical Preferences
- UK curriculum focus (KS3, GCSE, IGCSE, A-level, ages 11-18)
- Videos should be embedded directly rather than redirecting to YouTube
- Only videos from The Study Hive YouTube channel should be used
- Past papers should include years 2018-2024 for both Summer and January exams
- Past paper links must provide direct access to papers

## Project Architecture

### Database Schema (Latest)
- Users authentication system
- Students with points tracking and streak counters
- Video completions with subject-specific points (25-35 points per video)
- Paper completions with notes field for study note generation
- Badge system with categories and student achievements
- Points bonuses for A-level papers and high scores

### Recent Changes
**2025-01-28**: Implemented one-click note generation feature
- Updated database schema to store paper notes
- Created API endpoint `/api/paper-notes` for saving/retrieving notes
- Built NoteGenerator component with subject-specific content generation
- Added notes generation buttons to both past paper tables
- Updated all American spellings to British English throughout codebase

**Previous**: Gamification system with video tracking, badges, leaderboards, and achievements

### Key Features Implemented
✓ Full gamification system with points, badges, and leaderboards
✓ Video lessons integration with Study Hive YouTube content
✓ Past papers repository with downloadable content
✓ One-click study notes generation for past papers
✓ Student progress tracking and achievements
✓ Responsive design with hexagon branding theme

## Development Notes
- Point system: 25-35 points per completed YouTube video
- Badge system includes science-themed designs with filtering
- Notes generation uses local logic without external APIs
- All content uses UK English spelling and grammar standards