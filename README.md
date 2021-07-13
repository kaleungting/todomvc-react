# TodoMVC • React

> **To Do or Not To Do...?**
> -- Not Hamlet

That is the question.

This repository was based off of Felix Gnass's React Implementation of the [TodoMVC](http://todomvc.com/). The link to the original repository can be found [here](https://github.com/cellular/todomvc-react).

It is built on [React](https://reactjs.org/), [Babel](https://babeljs.io/) and [Webpack](https://webpack.js.org/).

# Instructions

Running the application is so simple, a fool can figure it out:

```sh
npm install
npm start
```

Then open up your browser and run it on **localhost:3000**

# Added Features

## Search Bar - 
type in your favorite to dos, and the unwanted ones will magically disappear (well, not magically)... 

	The Main Section component has a state called searchField, and as user types in the word, it will run a filter on the to dos array and return only the ones that includes the searchField.

<img src="https://ken-github.s3.amazonaws.com/Screen+Shot+2021-07-12+at+9.54.58+PM.png" width="500">
<img src="https://ken-github.s3.amazonaws.com/Screen+Shot+2021-07-12+at+10.02.45+PM.png" width="500">
 

## Priority Sort - 
whether you like the low hanging fruits or the high ones, this feature has got you covered!
	
	Each todo has a priority property of "High", "Medium", or "Low". When the user clicks on the drop down and selects ascending or descending, a sort function is ran onto the To Dos array. Since "High", "Medium", and "Low" are strings that can't be sorted, a Priority Key Hash Table is used to map it to numbers (3 being the highest priority and 1 being lowest).
  
<img src="https://ken-github.s3.amazonaws.com/Screen+Shot+2021-07-12+at+9.54.18+PM.png" width="500">
<img src="https://ken-github.s3.amazonaws.com/Screen+Shot+2021-07-12+at+10.02.29+PM.png" width="500">

# Future Improvements

 - Use of localstorage or a backend database to store todos
 - Use of Redux or a state management library in order to better handle state/actions
 - React Hooks, Selectors and Caching to make app more efficient
 - SCSS for nested styling
 - Updated dependencies (the ones from the original repo are a bit old)

# License

MIT
