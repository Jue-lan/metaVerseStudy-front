# metaVerseStudy-front

## Project description

In this capstone project, I sought to leverage my new learnings of JavaScript,Typescript, and Angular FULL CRUD to build a study helper for my interests in the MetaVerse. Through this frontend production, this app serves as a to do tracker, resource log, and meta news hub for all things related to the meta verse.

Deploy Link:  https://jue-lan.github.io/metaVerseStudy-front/

## User Stories
- User can add items to their study to do list ~~and check them off as completed~~.
- User can view all tasks and resource ~~or sort tasks by category or resource type
- ~~User can edit and view a progress log on a task
- User can see a feed of current news related to things meta verse (external API)[almost...appears in console]

### Tools
- LucidCharts
- VS Code

## Wire Frame
![Blank diagram (2)](https://user-images.githubusercontent.com/72534273/152554611-a7d428af-70f3-444d-8ed8-acec0f9f63f5.png)


## Project Progression
Day 1    |Day 2 -Day 5 |Day 6    |Day 7    |Day 8 | Day 9
------------ |------------ | ------------- | ------------- | 
|Mapped original ERD, started wireframe, mapped original project timeline | Backend work. Started some components mapping |Worked on connecting backend to front end | Sucessfully made a connection but rant into issues with recursive calling and no web page rendorings| Successfully rendered data onto page and not just console. Worked on trying to display object data correctly. Streamlined most of user stores and methods| Added some CSS styling

## Hurdles
#### Problem 1
Trying to to add a Login user portal. And overall getting mt front and backend to communicate.
-Solution: Dropping that initiative and refactoring code to meet deadline
#### Problem 2
Recusive calling of my data.
-Solution: Removing CRUD method from my ngInit
#### Problem 3
CORS ORIGIN issue. No 'access-control-allow-origin'. Cross domain request issue for half my method calls.
-Solution: I solved the issue with an extention download, but then I had an epiphany and realized it did add this to my other controller as well.
```
@CrossOrigin(origins = "http://localhost:4200")

```
#### Problem 4
Figuring out how to not display an object and then sortign out how to just display the values.
-Solution: Still working on it

##### Backend Link
https://github.com/Jue-lan/metaVerseStudy-back
