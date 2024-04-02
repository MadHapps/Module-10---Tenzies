<h2>This is a Vite React-Javascript template. Instructions are for VS Code.</h2>

**Prerequisite Installations:**
 - Node.js
 - npm
 - GitHub CLI

Node.js & npm

	https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

GitHub CLI:

	https://cli.github.com/

		
**1.** With the prerequisites installed, locate the Github repository you wish to use as the template for your new project:
- In the repo's settings be sure "Template Repository" is enabled.
- Copy its URL.

**2.** Open VS Code in the location you want your project folder to be located in, press `` Ctrl + ` `` to open the terminal.
  
**3.** Type the command below into the terminal, replace `PROJECT NAME` with the name of your project(in lowercase) and the `GITHUB URL` with the url you copied:

	gh repo create PROJECT NAME -p GITHUB URL --public


**4.** Then, type `npm install`. Followed by `npm run dev` to generate a localhost link.

**5.** Start your project!
