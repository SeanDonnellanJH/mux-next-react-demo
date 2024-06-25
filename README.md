<h1 align="center"><b>MUX</b> + <b>Next.js</b> React Template</h1>

<p align="center">
  <a href="https://github.com/manulife-innersource/mux-core"><img src="https://img.shields.io/badge/UI-%7B%20MUX%20%7D-green.svg?logo=react&colorB=00a758&colorA=282b3e"/></a>
</p>

<p align="center">
  A <a href="https://nextjs.org/">Next.js</a> + <a href="https://reactjs.org">React</a> starter template for <a href="https://mux.manulife.com">MUX</a>.
</p>

## Overview

This is a Manulife starter template for React using [Next.js](https://nextjs.org/), bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app) and [MUX](https://mux.manulife.com) component library.

## Artifactory

To use this template, your global NPM registry needs to point to Artifactory - either the [Canadian](https://artifactory.manulife.ca) or the [Global](https://artifactory.platform.manulife.io/) instance (depending on your BU). You can accomplish this with either an `.npmrc` file in your user's global folder (`C:\Users\<YourID>` or `/Users/<YourID>`) or running the following command:

```bash
npm config set registry https://artifactory.manulife.ca/artifactory/api/npm/npm/
# or
npm config set registry https://artifactory.platform.manulife.io/artifactory/api/npm/npm/
```

## Usage

To use this template as the base of your project, clone it using git:

```bash
git clone git@github.com:manulife-innersource/mux-next-template.git <project-name>
cd <project-name>
```

Then make it your own:

```bash
rm -rf .git && git init && npm init
git add .
git commit -m "Initial commit"
```

Install dependencies:

```bash
npm install
```

Now, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next.js App Router

[Next.js 13](https://nextjs.org/blog/next-13) introduced a new [App Router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router), which became stable in version [13.4](https://nextjs.org/blog/next-13-4) and is now the default when creating a new Next.js app with `create-next-app`.

App Router uses [React Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) by default, which [don't support](https://github.com/styled-components/styled-components/issues/3856#issuecomment-1451326851) `styled-components` and other [CSS-in-JS](https://nextjs.org/docs/app/building-your-application/styling/css-in-js) libraries that require runtime JavaScript. Given this limitation, MUX components **can only function as [Client Components](https://nextjs.org/docs/getting-started/react-essentials#client-components) at this time**. As of release [v3.4](https://mux.manulife.com/docs/v3-4-release) all MUX components are exported as Client Components.

Please see the [Next.js Framework Guide](https://mux.manulife.com/docs/nextjs) in MUX Docs for more details and known limitations.

## Import Aliases

Import alias for `src` is setup by default. That means if you have a component in `src/components/Foo.js`, you can write import statements like this:

```jsx
import Foo from 'src/components/Foo';
```

instead of:

```jsx
import Foo from '../../../components/Foo';
```

...anywhere in the project! This makes for much cleaner code readability, and works well with the `simple-import-sort` ESLint plugin.

If you'd like to change or add aliases, you'll need to modify `.eslintrc` and `jsconfig.json` files accordingly. See [eslint-import-resolver-custom-alias](https://github.com/laysent/eslint-import-resolver-custom-alias) and [Next.js docs](https://nextjs.org/docs/advanced-features/module-path-aliases) for more details.

## Styled Components

[Styled Components](https://www.styled-components.com/) are enabled via [Next.js Compiler](https://nextjs.org/docs/advanced-features/compiler#styled-components), in order for MUX to work out-of-the-box.

## Learn More

To learn more about **Next.js**, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about **MUX**, please see the official [MUX Docs](https://mux.manulife.com).
