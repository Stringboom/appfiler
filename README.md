# App Filer 📚

![GitHub](https://img.shields.io/github/license/Stringboom/appfiler) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/Stringboom/appfiler) ![GitHub all releases](https://img.shields.io/github/downloads/Stringboom/appfiler/total)

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

## Use

To include a file; use the file defined in config. (default: *app*)

Include a single file:

```sh
filer.incl("jquery");
```

Include multiple files:

```sh
filer.inclMulti(["jquery", "poper", "custom"]);
```

Choose a specific folder:
```sh
filer.incl("jquery", "externals");
```

Set type to css or javascript:
```sh
filer.incl("bootstrap", undefined, "css");
```

Add at the bottom of body tag:
```sh
filer.incl("custom-ui", undefined, undefined, true);
```
Use the same for parameters for multiIncl()

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
    constructor(){
        this.config = {
            binder : ".",
            
            cabinet: "script",
            files: "app",
    
            folder : "bin",
            type : "javascript",
            body : false
        };

        this.incl(this.config.files, this.config.cabinet);
    }
```

Edit the config variable in the class to set the default configuration.
Alternatively, you can set it dynamically:

```sh
    const filer = new AppFiler();
    filer.config = {
            binder : ".",
            
            cabinet: "scripts",
            files: "stylingFiles",
    
            folder : "styles",
            type : "css",
            body : false
        };
        filer.incl("node_modules.bootstrap.dist.bootstrap");
```

or 


```sh
    const filer = new AppFiler();
    filer.config.binder  = "+";
    filer.incl("node_modules+jquery+dist+jquery");
```

