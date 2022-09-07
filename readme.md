# react-micro-frontends

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">React micro frontends</h3>

  <p align="center">
    This is a demo of micro frontends using React.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project



### Built With

* [![React][React.js]][React-url]
* [![Typescript][Typescript]][Typescript-url]
* [![Node][Node.js]][Node-url]
* [![Webpack][Webpack]][Webpack-url]
* [![MUI][MUI]][MUI-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
  
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JesperKihlberg/react-micro-frontends.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
This will install all the dependencies for the project and all subpackages and apps.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

To run the project, run the following command in the root folder:

```sh
npm run start
```

this starts the webpack dev server for the host app and the webpack dev server for the design system and shared business functionality packages.

It is possible to run the apps individually by running the following commands in the root folder:

```sh   
npm run start-app1
npm run start-design-system
npm run start-shared-business-func
```

Typing support for the federated modules are provided by seperate *-types projects. They are shared in other projects using npm workspaces.



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Typescript]: https://img.shields.io/badge/TypeScript-2f74c0?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Node.js]: https://img.shields.io/badge/Node.js-333333?style=for-the-badge&logo=node.js&logoColor=7fc728
[Node-url]: https://nodejs.org/en/
[React.js]: https://img.shields.io/badge/React-212121?style=for-the-badge&logo=react&logoColor=5ed3f3
[React-url]: https://reactjs.org/
[Webpack]: https://img.shields.io/badge/Webpack-2e70ce?style=for-the-badge&logo=webpack&
[Webpack-url]: https://webpack.js.org/
[MUI]: https://img.shields.io/badge/MUI-white?style=for-the-badge&logo=mui&logoColor=0072e4
[MUI-url]: https://mui.com/