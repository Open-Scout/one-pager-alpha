## One Pager Alpha Assignment.

Hello! Welcome to the OnePager Alpha assignment. This repository was built using next.js and React.

For additional information relating to this assignment see the assignment [Google Doc](https://docs.google.com/document/d/1gw-_v70LVAJf3wFAl0kjq6HXsDgMQuQXf2AVmKlKUoU/edit?usp=sharing).

All other notes in this readme were generated automatically via next.js.

## Nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

##############################################################################################################
Open Scout Software Engineering Intern Assignment
Authors: jack@openscout.vc
Introduction
Open Scout’s mission is to displace the need for warm introductions in the early-stage financing process.
To reach that larger goal, our first step is to build tools for founders to help them interact with investors more efficiently and effectively.
The first tool we will launch is OnePager.
Guidelines
We hope you’ll learn some new skills from this exercise and have fun with it!
This assignment will allow us to evaluate your ability to learn new tools, to write clean code, and to put your creativity to work.
Once you have begun working please take no more than 2 days to complete the assignment, but don’t feel the need to use anywhere near the full amount. We don’t want to time box you in, but we want to allow you to put your best work on display.
Complete this assignment without help from others.
All information on the internet is fair game. Read any documentation, use any tools or libraries you see fit, and create to the best of your ability!
Don’t worry about writing tests. For this exercise just write code that will run.
Please reach out with any questions.
Assignment Overview
Rather than administer a coding interview and test your algorithm knowledge, we’re interested in your ability to learn and apply practical development skills. This assignment is designed to test your ability to develop a real world application for founders. Experience and knowledge about the particular technologies we use will be useful, but is by no means necessary. 

This assignment will be completely focused on front-end web development. The internship will require you to develop full stack, but for the sake of time and complexity the focus for this assignment is only on the front-end.

As a preview, you’ll be making changes to this base website.
Assignment Setup
If you run into trouble during setup, don’t hesitate to reach out to jack@openscout.vc.
Prereqs 
A computer
A code editor, we suggest using VSCode
A github account (signup, you’ll need one eventually!
git installed on your computer (download git, for mac computers running the “git clone” command below will ask you to install git if you do not have git downloaded yet)
nodejs and npm installed on your computer (download node and npm which are downloaded together using this link)
Clone and install the OnePager-Alpha-Assignment repository
Clone the OnePager-Alpha repository from github onto your local computer. The repository is located at https://github.com/Open-Scout/one-pager-alpha.
In your terminal, navigate to a directory you would like to store the repository and run the command: 
 $ git clone https://github.com/Open-Scout/one-pager-alpha.git
Open up the new folder created in your code editor (VS Code, etc).
Run this command in the newly downloaded directory to install all code dependencies. Make sure you are in the /one-pager-alpha directory:
 $ npm install

At this point you should have the repository downloaded and installed.
Run the project locally
One you’ve downloaded the project locally, run the front end with the following command (make sure you’re in the right directory /one-pager-alpha).
 $ npm run dev
Once the front end server is running, in a browser navigate to http://localhost:3000/
You should see the main page of OnePager Alpha!
Make a small edit to the title (search for a line in components/Home.tsx with the line “Welcome to OnePager Alpha!”), save the code, and make sure your browser reloads correctly. You should see your changes in the browser.

Alright! You’re ready to get started!
Assignment
We at Open Scout have created a way for founders to efficiently display their fundraising materials: behold OnePager-Alpha! Unfortunately however, OnePager-Alpha is full of issues. We need you to improve the app and help get these founders funded!

Try to work through the following tasks below to improve the application. We’ve listed two straightforward tasks and one larger open ended task. Good luck!
Task 1: Hide the unused pitch video field
Some startups haven’t created a pitch video yet, but still want to create a OnePager. For those companies the pitch video field doesn’t link to anything at the moment. This is a problem.

Change the OnePager pager to hide the “Pitch Video” card if a company has not listed a pitch video. See the underlying data for the OnePagers in the data/onepagers.tsx file.
Task 2: Updates to the finance card
Our founders using OnePager have requested we find a better way to represent their financial data. Improve the finance section by doing the following:
Format the “funds raised” and “funding goal” numbers to more clearly display their values (ex. $4000000 should be displayed as $4,000,000).
The OnePager data model includes a field called fundraisingDetails that does not currently appear in the UI. Update the card to include the “Fundraising Details” information.
Include a visual representation of the funds raised vs funding goal (chakra-ui provides a progress bar and circle ui components that could be of use. See appendix for more info).
Task 3: Additional features
Now that you’ve fixed some starter mistakes, add at least two additional features to the application. Build in anything that you think would add value to the page. Please don’t spend more than a few hours on this part of the assignment (for your own sake!).

Feel free to add to the OnePager data model as necessary or import any external libraries. Nothing is out of bounds here. Show what you can think up and create!

A few ideas to get you started: 
Represent additional data in the application
Visual enhancements
A feature to interact with founders
What are some other tools that help people share information? Check those out for inspiration!
Completion
Upon completion of the assignment, upload your solution to your github (create an account if you don’t have one yet) in a public repository. Once you have uploaded your repository, deploy your website using https://vercel.com/ using the github integration tool (you will need to login using your github account. Once all of this is complete, send me an email containing the following: 

The link to your github public repository. 
The link to your website hosted on vercel.
A description of the new features you’ve added to the site in task 3. 

After that I’ll be in touch!
Appendix
OnePager alpha is a web application build with the following key technologies: 
React - javascript library for building UIs
Next.js - full frontend framework
Chakra-ui - ui component library
React
React is the ui framework library we use. React allows you to create reactive javascript, mixing html, css, and javascript together. A basic React tutorial may be helpful before you get started if you have no React experience. React was created by Facebook in 2015 has quickly become a leading software framework.
Next.js
Next.js is an industry leading React framework. Where React defines the guidelines for how to write html, css, and js, think of Next.js as a framework for to structure how the entire web app comes together. This includes writing the router and pre-rendering pages. 

For the purposes of this demo application, we are using only a subset of Next.js’s features. Note that the “pages” directory defines all of the pages in our application (ex. pages/home defines the page when you navigate to http://localhost:3000/home).
Chakra-UI
Chakra-ui is a ui component library that we use for easy styling and quick simple building. It’s full of pre built ui components that make it easy to quickly build ~modern~ websites. I highly recommend you browse their website before diving into the code.

A few notes about Chakra-UI
The Box component is essentially a formatted div component. We use this all over our application.
The Flex component is shorthand for a Box with display=’flex’. We use this all over the application when looking to use a flexbox (if you’re unfamiliar with a flex in css, check out this extremely helpful post).
This is a fairly obscure library that we’ve chosen to use. We know that you likely don’t have experience using it!

Code Layout 
The OnePager Alpha repository has the following layout. I’ll do into a little detail about what each directory contains:

components/
The main ui components used in the web app, namely the home and onepager.
data/
All data for the application and the “dataService”. Note that this web application does not communicate with any live backend, but mocks a backend using the dataService. If you look closely, you’ll see that data is returned after a given resolve time.
model/
The interfaces for defining the OnePager alpha data model.
pages/
A directory defined by Next.js to override the router. Ex. pages/home.tsx is the page that renders for http://localhost:3000/home.
public/
All public assets (images, svgs, etc.), for now the favicon.png.
styles/
Global scss styling
