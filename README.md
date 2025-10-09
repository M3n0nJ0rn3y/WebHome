# 🌐 My Web Application in React  
> ⚠️ **Note:** This README.md is still under development!  
I am currently developing a webpage that introduces me from different perspectives.  
Here I document my process — what I’m working on, what I struggle with, and what I plan to implement next.  

---

## 🗂️ Table of Contents
1. [🎯 Webapp Content](#-what-the-webapp-will-cover-briefly-speaking)
2. [🐞 Struggles & Lessons Learned](#-what-i-struggled-with)
3. [🚩 Future Goals](#-future-goals)
4. [💡 Ideas & Notes](#-ideas--notes)

---

## 🎯 What the Webapp Will Cover (briefly speaking)
The web application will act as a personal, interactive portfolio and include:  
- 🎓 **Education**
- 💼 **Professional Experience**
- 🧠 **Hobby Projects**
- 🎨 **Personal Interests**
- 🔐 **Visualized Security Implementations**

Each page will provide interactive examples, clean design, and security-by-design principles applied in practice.

---

## 🐞 Struggles

### 🔸 Button expanding beyond the navigation bar  
When first working on the layout of my homepage, I was still learning how React handles components and TypeScript naming conventions.  

I wanted to replace the default HTML tag `<a>` with a more descriptive name (to make my codebase easier to extend later). However, this caused some unexpected styling behavior — particularly with buttons expanding beyond the navigation bar during hover animations.

#### 💻 Original Code Snippet
```tsx
// Example of initial implementation
<a href="/about">About</a>

```
---

## 🚩 Future Goals
Keep the main button in the navigation bar expanded, even when hovering over the dropdown window.

To achieve this I need to move my css styling from "my-button" to "dropdown". But I am not yet sure what should be moved and what not.
#### 💻 Code to be altered
```css
.my-button {
  display: inline-block;
  background-color: #3B82F6;
  color: white;
  text-decoration: none;
  border-radius: 8px 8px 0px 0px;
  padding: 10px 25px;
  margin: 0 15px;
  position: relative;
  transition: transform 0.3s , padding 0.3s, margin 0.3s ease;
  /*transition: transform 0.3s, margin 0.3s, padding 0.7s ease;*/
}

.my-button:hover {
  margin: 0px 50px;
  padding: 10px 120px;
  background-color: #1E40AF;
  border-color: #1E293B;
  background-position: right bottom;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  padding: 0px 80px;
  margin: 0px 50px;
  display: none;
  position: absolute;
  left: 0; /* For some reason these these lines are needed to center the dropdown. Find out why they fix the issue. */
  right: 0;
  top: 100%;
  background-color: #1E40AF;
  z-index: 50;
  min-width: 80px;
  border-radius: 0px 0px 10px 10px;
  
}

.dropdown-content a {
  color: white;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #61dafb;
}

.dropdown:hover .dropdown-content {
  display: block;
}

```

#### ✨The New Code
