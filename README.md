# ENGLISH <img width="25px" src="./assets/logo.png" /> JANALA

**ENGLISH JANALA** is a user-friendly, interactive webpage designed to practice and showcase API integration skills. This project is a culmination of learning and implementing modern web development tools such as HTML, Tailwind CSS, Daisy UI, and JavaScript, alongside practical API usage. The application focuses on enhancing vocabulary building, allowing users to explore different levels, words, and their details dynamically through responsive and engaging UI elements.

Whether you're brushing up your vocabulary or experimenting with API-driven features, ENGLISH JANALA offers a seamless and enjoyable experience. With intuitive navigation, smooth functionality, and error handling, this project demonstrates strong coding principles and modern design aesthetics.

---

## **Features**

### ⚡ **API Endpoints**

- **Get All Levels**:  
  `https://openapi.programming-hero.com/api/levels/all`
- **Get Words by Levels**:  
  `https://openapi.programming-hero.com/api/level/{id}`  
  Example: `https://openapi.programming-hero.com/api/level/5`
- **Get Words Detail**:  
  `https://openapi.programming-hero.com/api/word/{id}`  
  Example: `https://openapi.programming-hero.com/api/word/5`
- **Get All Words**:  
  `https://openapi.programming-hero.com/api/words/all`

---

## **Implementation**

### **Navbar**

- Fixed at the top with a bottom border.
- Includes:
  - Logo and brand name on the left.
  - Buttons: FAQ, Learn, and Logout.
  - Smooth scrolling to relevant sections.

### **Banner**

- Left side: Login form and banner text.
- Right side: Image (as per design).
- Functional login form:
  - Alerts for invalid input (missing name or incorrect password).
  - On successful login (`password: 123456`), hides the banner and displays active sections.
  - Logout reverts visibility to banner and footer.

### **FAQ Section**

- Detailed answers provided for:
  - Differences between variable declarations.
  - Comparisons of higher-order array methods.
  - Usage and benefits of arrow functions.
  - Working principles of Promises.
  - Explanation of closures in JavaScript.

### **Vocabulary Section**

- Dynamically generated lesson buttons (via **API-01**).
- Default text displayed initially.
- Upon clicking a lesson button:
  - **Load words** using **API-02**.
  - Display cards with:
    - Word, meaning, and pronunciation.
    - Buttons: Details and Sound.
  - Show `No Word Found` message if applicable.
  - Highlight active button.

### **Vocabulary Details**

- Modal opens on clicking the "Details" button.
- Displays: Word, example sentence, and synonyms (via **API-03**).
- Includes "Complete Learning" button.

### **Footer**

- Includes logo and social icons.
- Social links open in a new tab.

---

## **Additional Features**

1. **Custom Navigation**:

   - Banner and footer visible by default; other sections hidden until login.
   - Smooth scrolling implemented for FAQ and Learn buttons.

2. **Error Handling**:

   - Avoids displaying falsy values (e.g., `undefined`, `null`).
   - Displays relevant messages for missing data.

3. **Loading Spinner**:

   - Displays a spinner during data fetching from API.

4. **Enhanced Alerts**:
   - Integrated **Sweet Alert** for modern, user-friendly notifications.

---

## **How to Use**

1. **Clone Repository**:

   ```bash
   git clone https://github.com/Erfan-Khan-Dhrubo/project-6-Web-development.git

   ```

## A visual representation of my page.

<img src="./webpage pic/home.png"/>

<hr>

<img src="./webpage pic/pic 1.png"/>

<hr>

<img src="./webpage pic/pic 2.png"/>

<hr>

<img src="./webpage pic/pic 3.png"/>

<hr>

<img src="./webpage pic/pic 4.png"/>
