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

The demo admin user is:

- login: `admin`
- password: `unsafe_demo`

The demo front end user is:

- login: `FirstUser`
- password: `unsafe_demo`

## Development

From a development point of view there wasn't much at all to get this running. Initialize a new project using:

    & yarn create strapi-app {PROJECT_NAME} --quickstart

and you get a user interface in localhost. From there, you create an initial admin user (and a front-end user if you like).

As the admin user, you may begin setting up content types and groups via the interface.

The interface is pretty clean and seems to allow for a nice bit of content complexity without having an overly complex UI.

Creating content types via the UI generates files in the `api` folder. Each content type has files within a folder with the name of the content type. For example, in this repo, a content type called "restaurant" was created. Thus, there is a corresponding folder within `api` called `restaurant`. Within the content type folder, there are folders for [config](https://strapi.io/documentation/3.0.0-beta.x/concepts/configurations.html#application), [controllers](https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#concept), [models](https://strapi.io/documentation/3.0.0-beta.x/concepts/models.html), and [services](https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html).

Creating groups via the UI generates files in the `groups` folder. Each group has a json file named for the corresponding group. For example, in this repo, a group called "hours_of_operation" was created. Thus, there is a corresponding json file within `groups` called `hours_of_operation.json`.

An image was uploaded when populating a restaurant content type during the creation of this project. The image was uploaded to the [public](https://strapi.io/documentation/3.0.0-beta.x/concepts/public-assets.html) folder in a child folder called `uploads`. Files may be uploaded to external locations as well. Please see the [Strapi Uploads Documentation](https://strapi.io/documentation/3.0.0-beta.x/plugins/upload.html#models-definition)

See [file structure](https://strapi.io/documentation/3.0.0-beta.x/concepts/file-structure.html)

Once content is created and permissions defined for the fields in the content, it is immediately available via REST requests.

## GraphQL

See the [Strapi GraphQL Documentation](https://strapi.io/documentation/3.0.0-beta.x/plugins/graphql.html)

To implement a GraphQL API, run:

    $ yarn strapi install graphql

## Production

Once in Production, users may log in and add / update content via the dashboard depending on permissions granted them by the admin.

## Documentation

Documentation for the REST API is generated. See the [Strapi Documentation Documentation](https://strapi.io/documentation/3.0.0-beta.x/plugins/documentation.html)

In this demo, the password has been set to: `documentation`

## Thoughts

All in all, this seems to be a very quick way to set up a GraphQl content service with a dashboard pre-built for users to update content.

I haven't explored the performance for large data at all, but do believe this would be a great solution for small web projects.
