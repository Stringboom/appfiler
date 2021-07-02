# App Filer 📚

![GitHub](https://img.shields.io/github/license/Stringboom/appfiler)

App Filer is used to include scripts and stylesheets in HTML5.

- Install App Filer.
- Include all files required for your app.
- Run App 🎉

## Features

- Import CSS & JS files into HTML
- Clean HTML Head
- Keep track of all dependencies easily
- Run unit tests in minutes

## Installation

Quick and easy installtion with git.

```sh
git clone https://github.com/Stringboom/appfiler
```
## Config

# App Filer 📚

![GitHub](https://img.shields.io/github/license/Stringboom/appfiler)

App Filer is used to include scripts and stylesheets in HTML5.

- Install App Filer.
- Include all files required for your app.
- Run App 🎉

## Features

- Import CSS & JS files into HTML
- Clean HTML Head
- Keep track of all dependencies easily
- Run unit tests in minutes

## Installation

Quick and easy installtion with git.

```sh
git clone https://github.com/Stringboom/appfiler
```
## Config

| Name    | Type    | Description                                       |
|---------|---------|---------------------------------------------------|
| binder  | String  | Define the separator when passing name and folder |
| cabinet | String  | The folder where the app list file is located     |
| files   | String  | The name of the app list file                     |
| folder  | String  | Default parameter for folder                      |
| type    | String  | Default parameter for type                        |
| body    | Boolean | Default parameter for body                        |

In _dist/appfiler.js_
```sh
const filer = {
    config : {
        binder : ".", 
        
        cabinet: "script",
        files: "app",

        folder : "bin",
        type : "javascript",
        body : false
    },
    app: ""
};
```

## Use

_Coming soon..._


