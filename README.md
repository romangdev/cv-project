# CV Maker

A React based CV maker in which users can quickly and dynamically render their education and career history into a CV format.

<img width="1422" alt="Screen Shot 2022-10-31 at 9 00 18 AM" src="https://user-images.githubusercontent.com/74276666/199013823-a862aaaa-53ad-461d-b36a-8a91171da4c6.png">

**You can see a LIVE version of the form here:** https://cyruscvmaker.netlify.app

# How It's Made:
Tech used: React.js, Material UI, HTML, CSS, JS

This CV Maker was made with React and Material UI.

# Optimizations
If given more time with the project, I'd write several more form parameters and sections for a user to fill in to further flesh out their CV (maybe skills or volunteering section). Another cool thing would be to make the addition of these sections optional. Additionally, it'd be interesting to allow users to choose from multiple pre-built CV designs, rather than the current default one. 

# Lessons Learned:
This project was some great practice with many of the things I've learned about React. My first iterations of this this project focused on getting comfortable with class based components. After I wrote the entire program with class components, I then rewrote them all as functional components. I also learned a lot about organizing React projects, and some best practices in regards to passing state attributes around. I had some issues given the lack of a state manager like Redux that I had a bit of trouble figuring out how to overcome, mainly how to update parent state from child components. But eventually, I found a really simple, straightforward solution that I hadn't initially thought of - simply adding callback helper functions in the parent component to be passed as props to children.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
