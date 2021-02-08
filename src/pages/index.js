import * as React from "react";
import Card from '../components/Card';

import ToDoImg from '../images/todo_list_notebook_coffee.jpg';
import MERNImg from '../images/mern-logos.png';
import FlaskTutorialImg from '../images/Screenshot 2021-01-19 051837.png';
import PWAImg from '../images/pwa_app.png';
import HTMLCSSJSImg from '../images/htmlCssJS-1140x515.jpg'
import ECommerceLogoImg from '../images/e-commerce-logo.jpg';
import ErrorReactImg from '../images/error_handling_react.jpg';
import ReactConcurrentImg from '../images/react-concurrent-img.jpeg'
import TensorflowKerasLogoImg from '../images/tensorflow-keras-logo.png';
import TwoFAImg from '../images/2fa_shutterstock_image.jpg';
import VueLogoImg from '../images/logo-vuejs-min.png';
import React360Img from '../images/react-360-logo.png';
import GoogleDocsImg from '../images/120618_GoogleDocs-Blog.png';
import MusicPlayerImg from '../images/VectorPortal-Winged-Music-Icon.jpg';
import TensorTradeImg from '../images/tensortrade_algorithm.png';
import CoinMarketCapImg from '../images/coinmarketcap_logo.png';

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0
}
const headingAccentStyles = {
  color: "#663399",
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// custom styles
const rootStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

// data
const appList = [
  {
    link: 'https://mdn-todo-react.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/todo-react',
    thumbnail: ToDoImg,
    title: 'MDN React To Do List',
    description: "Followed MDN's React To Do List tutorial to create a list of to do items with editing & filtering.",
    date: '16 January 2021'
  },
  {
    link: 'https://mern-app-template-000.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/mern-material-demo',
    thumbnail: MERNImg,
    title: 'MERN App Template',
    description: `Forked mern-material-demo - rewrote to deploy to Heroku (build ES6 backend & build React frontend), rewrote signin/signup pages, added mobile support, upgraded package versions: Babel (5.x ⟶ 7.x), Material UI (3.x ⟶ 4.x), React Router (4.x ⟶ 5.x)`,
    date: '18 January 2021'
  },
  {
    link: 'https://cool-components.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/Cool_Components',
    thumbnail: HTMLCSSJSImg,
    title: 'Cool Components',
    description: "Track and Experiment with cool components from blog posts (made with just HTML + CSS). eg: Particle Smoke Animation, Tag Cloud, Play/Pause Animations",
    date: '20 January 2021'
  },
  {
    link: 'https://tutorial-pushercoins.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/pushercoins',
    thumbnail: PWAImg,
    title: 'React Realtime PWA',
    description: "Progressive Web App (PWA) with lighthouse audit & bundle analyzer scripts. React UI to track cryptocurrency prices with Pusher in realtime",
    date: '23 January 2021'
  },
  {
    link: 'https://react-shopping-cart-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/react-shopping-cart',
    thumbnail: ECommerceLogoImg,
    title: 'React Shopping Cart',
    description: "Forked React Typescript & learned to deploy TypeScript apps (same method except tsconfig.json).",
    date: '24 January 2021'
  },
  {
    link: 'https://react-error-boundary-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/react-error-boundaries',
    thumbnail: ErrorReactImg,
    title: 'React Error Boundaries',
    description: "Tried out error boundaries with code from official React docs (& Dan Abramov's codepen) and added a custom reload component.",
    date: '25 January 2021'
  },
  {
    link: 'https://react-concurrent-example-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/react-concurrent-example',
    thumbnail: ReactConcurrentImg,
    title: 'React Concurrent Mode',
    description: "Used React.lazy() and Suspense to lazy load components. Used React error boundaries to catch if loading failed.",
    date: '25 January 2021'
  },
  {
    link: 'https://simple-keras-rest-api.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/simple-keras-rest-api',
    thumbnail: TensorflowKerasLogoImg,
    title: 'Keras REST API',
    description: "Forked example & rewrote to work on Heroku. Flask app exposes pre-trained Keras model for image classification to API requests (given image - returns labels classifying the image)",
    date: '26 January 2021'
  },
  {
    link: 'https://two-fa-speakeasy-example.herokuapp.com/api',
    github_link: 'https://github.com/Borghese-Gladiator/2fa-speakeasy-example',
    thumbnail: TwoFAImg,
    title: 'Implement 2FA',
    description: "Forked LogRocket example & rewrote to work on Heroku. Node.js app that authenticates registered users with 2FA app like Google Authenticator (uses JSON file rather than proper database)",
    date: '27 January 2021'
  },
  {
    link: 'https://first-vue-app-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-vue-app',
    thumbnail: VueLogoImg,
    title: 'First Vue.js App',
    description: "Used @vue/cli to generate Vue project & push to netlify. Note that vue-cli (2.X) does not build with index.html & doesn't deploy correctly!",
    date: '27 January 2021'
  },
  {
    link: 'https://first-react-360-0791.netlify.app/',
    github_link: 'https://github.com/Borghese-Gladiator/first-react-360',
    thumbnail: React360Img,
    title: 'First React 360 App',
    description: "I fixed build node v12.11.0 vs v12.10.0 issue and deployed to Netlify a sample VR project with React. React 360 creates VR framework for the creation of interactive 360 experiences that run in your web browser.",
    date: '28 January 2021'
  },
  {
    link: 'https://google-doc-editor-clone.netlify.app/editor.html',
    github_link: 'https://github.com/Borghese-Gladiator/GEditor',
    thumbnail: GoogleDocsImg,
    title: 'Google Doc Clone',
    description: "I forked & learned how to dynamically apply CSS onto text and div elements with JavaScript. HTML, CSS, and JavaScript for frontend and I also set up a Firebase backend for this app to store.",
    date: '5 February 2021'
  },
  {
    link: 'https://github.com/Borghese-Gladiator/python-mp3-player',
    github_link: 'https://github.com/Borghese-Gladiator/python-mp3-player',
    thumbnail: MusicPlayerImg,
    title: 'Python MP3 Player - Windows app',
    description: "I wrote a Python desktop with tkinter for GUI & pygame to manage audio commands & cx_Freeze to create the MSI installer. Since it's a desktop app, there is no online demo.",
    date: '6 February 2021'
  },
  {
    link: 'https://github.com/Borghese-Gladiator/simple-sine-curve/tree/main',
    github_link: 'https://github.com/Borghese-Gladiator/simple-sine-curve/tree/main',
    thumbnail: TensorTradeImg,
    title: 'TensorTrade - Reinforcement Learning Trading Algorithm',
    description: "Forked tutorial & used Docker to build/run TensorTrade script - script used Ray with TensorTrade (TT) in order to create a profitable algorithm on a predictable sine curve. No online demo included",
    date: '7 February 2021'
  },
  {
    link: 'https://streamlit-crypto-price.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/streamlit_freecodecamp',
    thumbnail: CoinMarketCapImg,
    title: 'Current Crypto Price with Streamlit',
    description: "Streamlit enables to quickly build a Python web UI (as opposed to Flask which needs templates). Uses Beautiful Soup to scrape https://coinmarketcap.com and load into Pandas dataframe. Streamlit UI that applies filters on dataframe (Streamlit also enables downloading).",
    date: '7 February 2021'
  },
  {
    link: 'https://python-text-processing.herokuapp.com/',
    github_link: 'https://github.com/Borghese-Gladiator/Python-Text-Processing',
    thumbnail: FlaskTutorialImg,
    title: 'NLTK Text Processing',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: '25 January 2021'
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div style={rootStyles}>
        <h1 style={headingStyles}>
          <span>Borghese-Gladiator{" "}<span style={headingAccentStyles}>App List</span></span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p>
          <span>Track apps I made using tutorials </span>
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
          <code style={codeStyles}>Made with GatsbyJS</code>
        </p>
        <p>
          <span>Click to see deployed app</span>
        </p>
      </div>
      <div style={cardContainerStyle}>
        {
          appList.map((appObj) => {
            const { link, github_link, thumbnail, title, description, date } = appObj;
            return (
              <Card
                link={link}
                github_link={github_link}
                thumbnail={thumbnail}
                title={title}
                description={description}
                date={date}
              />
            );
          })
        }
      </div>
    </main>
  )
}

export default IndexPage
