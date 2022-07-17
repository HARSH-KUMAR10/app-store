# App Store - A place for all my mobile application (created using React Native)

***

## About Me
- Harsh Kumar
- Website and Mobile Application Developer
- harshkumar093@gmail.com
- Creating mobile application and website for best digital solutions using mordern age technology
- Also working with Data Science (Machine learning, Artificial Intelligence).

***

## Why an app store?
I started creating mobile application using android studio back in May-2020, since then there is no stoping. When I shifted to ***JavaScript Stack (MERN)***, I also took up **React Native** as a Native Mobile Application Development language and created many mobile application using React Native. 

Then I wanted to upload my applications for other people to download and use then, so at that time I did not had the money to buy developers account and decided to create my own app store and let users download mobile apps from the platform.

***

## How I created the app store?
The App Store is created using **NodeJS** and I am using **JSON-FS** (JavaScript Object Notation-File System) for storing *dynamic data* and I am using **HTML-CSS-JS** for the front-end of the app store. I have also used *media queries* for mobile view of the app store. The app store is hosted on **heroku** (Free NodeJS applications hosting website).

***

## API Documentation

| Route | Request | Response | Remark |
|-------|---------|----------|--------|
| ***/*** | {} | index.html | showing the index page of the app store |
| ***/getAllAppsList*** | {} | `[{app_name,category,cost,IMG,multiple,about,date,size,version,apk}]` | getting all the apps data from app.json (storage file) |
| ***/getApp*** | {name(query)} | `{app_name,category,cost,IMG,multiple,about,date,size,version,apk}` | getting a single application using application name from app.json |

## Future Works

- I am planning to create a database for the app store.
- Introduce new features such as download counts of applications, search feature, and many more.