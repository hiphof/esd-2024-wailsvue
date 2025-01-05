# README

## Welcome

As soon as your dev container is finished installing, you are one command away from running wails.
Use the `wails dev` command to start up wails for the first time.
This will initialize the Vue frontend as well as building the Go backend.

If you see output similar to the following:

```cmd
Watching (sub)/directory: /app

To develop in the browser and call your bound Go methods from Javascript, navigate to: http://localhost:34115
```

This indicates that the startup process has finished.  
You can CTRL/CMD + click the link in the terminal to visit the Wails frontend in your browser!  
You can also click [here](http://localhost:34115)

## Project Structure

The project structure might seem a little overwhelming at first, but we are mainly focusing on two locations:

`/backend/app.go`  
This is the core of our Wails applications backend, where we can write Go code which has regular system access just like any other desktop application.

`/frontend/src/tasks/*`  
Here we can find all the practical tasks for this workshop. These are isolated Vue components where we will explore some entry level features of Vue.

`/frontend/src/solutions/*`  
If you get stuck or just want to quickly peek into how we intended a task to be solved, feel free to cheat!

## Task Overview

[Task 0: The Wails Philosophy](./frontend/src/tasks/task-0/README.md)  
[Task 1: Reactivity Basics - Ref for Primitives](./frontend/src/tasks/task-1/README.md)  
[Task 2: Reactivity Basics - Reactive Objects](./frontend/src/tasks/task-2/README.md)  
[Task 3: Computed Property](./frontend/src/tasks/task-3/README.md)  
[Task 4: Conditional Rendering](frontend/src/tasks/task-4/README.md)  
[Task 5: Lifecycle Hooks](frontend/src/tasks/task-5/README.md)  
[Task 6: Element References](frontend/src/tasks/task-6/README.md)  
[Task 7: List Rendering](frontend/src/tasks/task-7/README.md)  
[Task 8: Custom Components](frontend/src/tasks/task-8/README.md)  
[Task 9: Two-Way Data Binding](frontend/src/tasks/task-9/README.md)  


## Building for Production

Since this workshop is about building Desktop Applications, you might be interested in how to actually build and export this application for your system.

Go & Wails do support cross compilation to Windows & Linux out of the box, so we can use the following commands to build our app:

### For Windows
```cmd
wails build -platform windows/amd64
```

### For Linux
```cmd
wails build -platform linux/amd64
```

The resulting binary will be located in the `/code/build/bin` directory of the Repository

### For macOS

We will use a GitHub runner to build the application for us. This is also how you would do this in production environments.

**Step 1**:  
Start off by creating a fork of [this repository](https://github.com/sebivenlo/esd-2024-wailsvue). There is only one branch so you only need the main one.

**Step 2**:  
Update the remote of your cloned repository to be your fork.
In the working directory of the local repository, you can do this with `git remote set-url origin` followed by your fork URL with the `.git` extension.  
It should look as follows:
```cmd
git remote set-url origin https://github.com/LucaVDW/esd-2024-wailsvue.git
```

**Step 3**:  
Commit and push your local changes with git.

**Step 4**:  
Visit your fork's GitHub page and click on the Actions tab.

**Step 5**:  
Choose one of the workflows from the left, depending on your macOS architecture and trigger the workflow manually.

**Step 6**:  
Once the build process has finished, you can refresh the page to see that the GitHub runner has uploaded an artifact for you. Download the artifact `.zip` file.

**Step 7**:  
After unpacking the artifact, we can not just run the app, since macOS will recognize it as "Broken".  
We will have to allow it first, since it is not code-signed. We can do this with the following command:

```cmd
xattr -c ESD-Workshop.app
```

**Step 8**:  
Run the app through finder or the terminal of your choice.

## References

Task 1 & 2:  
Gore, A 2022, Ref vs reactive, vuejsdevelopers.com, viewed 4 January 2025,  
<https://vuejsdevelopers.com/2022/06/01/ref-vs-reactive/>.

Event Handling n.d., vuejs.org, viewed 4 January 2025,  
<https://vuejs.org/guide/essentials/event-handling>.

Task 3:  
Vue Computed Properties n.d., w3schools.com, viewed 4 January 2025,  
<https://www.w3schools.com/vue/vue_computed-properties.php>.

Task 4:  
Vue v-if Directive n.d., w3schools.com, viewed 4 January 2025  
<https://www.w3schools.com/vue/vue_v-if.php>  
Conditional Rendering n.d., vuejs.org, viewed 4 January 2025  
<https://vuejs.org/guide/essentials/conditional#v-if-vs-v-show>

Task 5:
Lifecycle Hooks n.d., vuejs.org, viewed 4 January 2025  
<https://vuejs.org/guide/essentials/lifecycle>

Task 6:
Template refs n.d., vuejs.org, viewed 5 January 2025  
<https://vuejs.org/guide/essentials/template-refs>

Task 7:
List Rendering n.d., vuejs.org, viewed 5 January 2025  
<https://vuejs.org/guide/essentials/list>  

Task 9:  
Two-way Binding n.d., w3schools.com, viewed 5 January 2025  
<https://www.w3schools.com/vue/vue_v-model.php>