"use strict"
/**
 * @author Johan Westermann <johanwestermann@gmail.com>
 * @description Used to load javascript and css files.
 * @version 1.0
 * 
*/

/** 
* Filer Class
*/
class AppFiler {
    
   /** 
    * Initiating app files list
    * @constructor
    */
    constructor(){
        this.config = {
            /** 
            * Default variables for filer
            * @variable {string} binder - Recursive Folder Separator
            * @variable {string} cabinet - Folder of main file
            * @variable {string} files - Main File Name were all the operations will be done
            * @variable {string} folder - Location of the folder it is located
            * @variable {string} type - The type of file
            * @variable {boolean} body - Should this file be appended to the body tag
            */
            binder : ".",
            
            cabinet: "appfiler.script",
            files: "app",
    
            folder : "bin",
            type : "javascript",
            body : false
        };

        this.incl(this.config.files, this.config.cabinet);
    }

    /*
    * Links file into html
    * @param {string} name - Name of the file
    * @param {string} folder - Location of the folder it is located
    * @param {string} type - The type of file
    * @param {boolean} body - Should this component be appended to the body tag
    */
    incl(name, folder = this.config.folder, type = this.config.type, body = this.config.body) {
        let file = document.createElement((type === "css")? "link" : "script");
        let url = folder.replace(this.config.binder, "/") + "/" + name.replace(this.config.binder, "/") + ((type === "css")? ".css" : ".js");

        file.type = "text/" + type;

        if(type === "css"){
            file.rel = "stylesheet";
            file.href = url;
        }else{
            file.src = url;
        }

        if(body){
            document.body.appendChild(file);
        }else{
            document.head.appendChild(file);
        }

    }

    /*
    * Links Multiple files into html
    * @param {string array} files - List of files
    * @param {string} folder - Location of the folder it is located
    * @param {string} type - The type of file
    * @param {boolean} body - Should this component be appended to the body tag
    */
    inclMulti(files, folder = this.config.folder, type = this.config.type, body = this.config.body){
        files.foreach(function (file) {
            this.incl(file, folder, type, body);
        });
    }    
}

// Create an instance of the AppFiler
const filer = new AppFiler(); 




