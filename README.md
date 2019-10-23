# Strapi Exploration

Exploring Strapi, a Node.js headless CMS. https://strapi.io

## Requirements

- [Node.js](https://nodejs.org/) Built & tested with v10.16.3
- [yarn](https://yarnpkg.com/) Built & tested with v1.19.0

## Getting started

Once the repo has been checked out, change directories to the root of the project. Build the required dependencies (node_modules) by running:

    $ yarn

from the command line (ensuring this is called from the root of the project).

Once this is complete, you can spin up the project for development by running:

    $ yarn develop

To spin it up as prod, run:

    $ yarn start

## Development

From a development point of view there wasn't much at all to get this running. Initialize a new project using:

    & yarn create strapi-app {PROJECT_NAME} --quickstart

and you get a user interface in localhost. From there, you create an initial admin user (and a front-end user if you like).

As the admin user, you may begin setting up content types and groups via the interface.

The interface is pretty clean and seems to allow for a nice bit of content complexity without having an overly complex UI.

Creating content types via the UI generates files in the `api` folder. Each content type has files within a folder with the name of the content type. For example, in this repo, a content type called "restaurant" was created. Thus, there is a corresponding folder within `api` called `restaurant`. Within the content type folder, there are folders for `config`, `controllers`, `models`, and `services`.

Creating groups via the UI generates files in the `groups` folder. Each group has a json file named for the corresponding group. For example, in this repo, a group called "hours_of_operation" was created. Thus, there is a corresponding json file within `groups` called `hours_of_operation.json`.

An image was uploaded when populating a restaurant content type during the creation of this project. The image was uploaded to the `public` folder in a child folder called `uploads`.

Once content is created and permissions defined for the fields in the content, it is immediately available via GraphQL request.

## Production

Once in Production, users may log in and add / update content via the dashboard depending on permissions granted them by the admin.

## Thoughts

All in all, this seems to be a very quick way to set up a GraphQl content service with a dashboard prebuilt for users to update content.

I haven't explored the performance for large data at all, but do believe this would be a great solution for small web projects.
