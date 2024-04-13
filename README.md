<div align='center'>

# Resume Application

</div>
<div align='center'>
    <h3>💻 Languages</h3>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML badge">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS badge">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript badge">
    <h3>🔧 Technologies</h3>
    <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux badge">
    <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code badge">
    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git badge">
    <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack badge">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js badge">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm badge">
    <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint badge">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" alt="Prettier badge">
    <img src="https://img.shields.io/badge/Babel-F7B93E?style=for-the-badge&logo=babel&logoColor=black" alt="Babel badge">
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest badge">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React badge">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite badge">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel badge">
    <h4><a href="https://resume-nu-lake.vercel.app/">Live Preview</a></h4>
</div>

**Demo:**

<img src="./readme-assets/folder.png" alt="folder">
![Live Demo](./readme-assets/live.gif)

<details>

**<summary>Screen views</summary>**

**Desktop View:**

<img src="./readme-assets/desktop.png" alt="desktop view">
<br>

**Tablet View:**

<img src="./readme-assets/tablet.png" alt="desktop view">
<br>

**Mobile View:**

<img src="./readme-assets/mobile.png" alt="desktop view">

</details>

## 🌐 Origin

[The Odin Project](https://www.theodinproject.com/)

## 📝 Description

First react project that builds interactive Resume web app.

<details>
<summary>Features</summary>

- Change of palette and Resume layout in Personalization menu.
- A bar to clear Resume or reveal a sample.
- Download Resume
- Hide Resume to get larger Interface to Input.
- Real-time feedback of what input is expected (from animated placeholders)
- Two input fields for respective sections (Education & Profession). More than two can disrupt Resume UI, so it's intentional.
- Icons that are still visible in dark mode.
- Appealing UI

</details>

## 🎯 Relevance

To solidify concepts of `React Fundamentals` in JavaScript.

## 👥 Intended Audience

Developers, users, recruiters.

> [!NOTE]
> Users can install all dependencies using `package.json` file via:
>
> ```bash
> npm install
> ```

## 📂 Files

<details>
<summary>Invert</summary>

| File                                 | Description                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `src/*`                              | Source files that are bundled into the output directory `dist/`.                                              |
| `src/index.jsx`                      | The main JavaScript entry point that bundling begins.                                                         |
| `src/App.jsx`                        | Main component where overall structure and other layout components of the app are contained.                  |
| `src/assets/*`                       | All assets(imgs, icons, vids) used in website.                                                                |
| `src/components/animateText.js`      | Animates placeholders, required and optional status.                                                          |
| `src/components/getNodes.js`         | Selects nodes from DOM.                                                                                       |
| `src/components/sample.js`           | Updates Resume when cleared or revealed in Navigation.                                                        |
| `src/components/nav.js`              | Responsible for every logic in Nav, including dialog.                                                         |
| `src/components/responsiveTyping.js` | Adds real-time update of Resume from inputs.                                                                  |
| `src/components/inputFields.js`      | Responsible for every logic in input fields.                                                                  |
| `src/styles/App.css`                 | Main stylesheet for entire website.                                                                           |
| `dist/*`                             | Output files from bundling of files in directory `src/`.                                                      |
| `dist/main.js`                       | Main JavaScript output file that contains the bundled JavaScript code, minified and optimized for deployment. |
| `package*`                           | Contains details of project and dependencies versions.                                                        |
| `algorithm.txt`                      | Algorithm for `JavaScript`.                                                                                   |
| `readme-assets/*`                    | Live demo and different screen views used in `README.md`.                                                     |

</details>

## ©️ Credit

<details>
<summary>Invert</summary>

| File                     | Description                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| `src/assets/profile.jpg` | Photo created by Shubham Dhage on [Unsplash](https://unsplash.com/). |
| `src/assets/unknown.jpg` | Photo created by Stephan Müller on [Pexels](https://pexels.com/).    |

</details>

## 🔄 Improvements

<details>
<summary>Invert</summary>

- [ ] Uncomment Skills html, add its input, animated placeholder and make it responsive in Resume.
- [ ] Make download occur once at click.
- [ ] Downloaded Resume should be visibly the same as on website.
- [ ] Add languages.
- [ ] Add night mode.
- [ ] Add real time feedback when user is typing.
- [ ] Add audio in Nav to read Resume.
- [ ] Use correct date input formats (Year for Education, Month-Year for Profession).
- [ ] Transition input fields section smoothly when Resume is hidden.
- [ ] Transition layouts smoothly.
- [ ] Add top-align to Layout in Personalization and make Layout a slider.
- [ ] Make nav sticky
- [ ] Fix inconsistency in placeholder animation cause when tab is changed. (Can restart animation whenever focus on the site changed. Focus also shifts when download button is pressed in phone.)

</details>

## 👤 Curator

1. [Abraham Da Costa Silvanus](https://github.com/asdacosta)

<br>

> [!IMPORTANT]
> Seek contributor's consent for any code usage.

**[🞁 Top](#template)**
