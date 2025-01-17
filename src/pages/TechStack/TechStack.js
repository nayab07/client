import React from 'react';
import './TechStack.css'; // Importing external CSS for styling

const TechStack = () => {
  return (
    <section className="techstack-container">
      <h2 className="techstack-title">My Tech Stack</h2>
      <div className="techstack-content">
        {/* MongoDB */}
        <div className="techstack-item">
          <img src="https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png" alt="MongoDB" className="tech-icon" />
          <p className="tech-name">MongoDB</p>
        </div>
        {/* Express */}
        <div className="techstack-item">
          <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Express" className="tech-icon" />
          <p className="tech-name">Express</p>
        </div>
        {/* React */}
        <div className="techstack-item">
          <img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="React" className="tech-icon" />
          <p className="tech-name">React</p>
        </div>
        {/* Node.js */}
        <div className="techstack-item">
          <img src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png" alt="Node.js" className="tech-icon" />
          <p className="tech-name">Node.js</p>
        </div>
        <div className="techstack-item">
          <img src="https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg" alt="HTML" className="tech-icon" />
          <p className="tech-name">HTML</p>
        </div>
        <div className="techstack-item">
          <img src="https://static.vecteezy.com/system/resources/previews/022/192/435/non_2x/css-programing-icon-3d-rendering-illustration-vector.jpg" alt="CSS" className="tech-icon" />
          <p className="tech-name">CSS</p>
        </div>
        <div className="techstack-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18fItqFPLFbcZBONMvd9u4ZUwyNqNCjzwsg&s" alt="PYTHON" className="tech-icon" />
          <p className="tech-name">Python</p>
        </div>
        <div className="techstack-item">
          <img src="https://w7.pngwing.com/pngs/160/708/png-transparent-javascript-logo-javascript-logo-language-algorithm-app-3d-icon-thumbnail.png" alt="JS" className="tech-icon" />
          <p className="tech-name">JavaScript</p>
        </div>
        <div className="techstack-item">
          <img src="https://mp-cdn.elgato.com/media/96919547-28ae-4843-81e1-ba0b9d113425/43b158ec-e6e1-4d83-a729-b2b8b504b83a/Bootstrap_Icons-preview-optimized-b3ef4c75-bb05-4b8e-9c71-47d77e00fec7.png" alt="Bootstrap" className="tech-icon" />
          <p className="tech-name">Bootstrap</p>
        </div>
        <div className="techstack-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2gq0EJbNr7VkQ0GQ1yQ_Vs3sKZd9yQVP8g&s" alt="SQL" className="tech-icon" />
          <p className="tech-name">SQL</p>
        </div>
        <div className="techstack-item">
          <img src="https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default" alt="Tailwind" className="tech-icon" />
          <p className="tech-name">Tailwind-css</p>
        </div>
        
      </div>
    </section>
  );
};

export default TechStack;
