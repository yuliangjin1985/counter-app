# Lesson 2: set up the project
## Steps
 + create the app
 ```npx create-react-app counter-app```
 + install bootstrap
 ```npm i bootstrap@4.1.1```
 + import bootstrap in index.js
 ```import 'bootstrap/dist/css/bootstrap.css'```

# Lesson 3: first module
## Steps
 + create a folder: component
 + create counter.jsx file
 + render counter instead of original App, modify index.js
 ```
 import Counter from './components/counter'

 ReactDOM.render(<Counter />, document.getElementById('root'));
 // ReactDOM.render(<App />, document.getElementById('root'));
 ```
# Lesson 4: Specifying Children
## Steps
 + create a folder: component