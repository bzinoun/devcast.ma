

### [Live Demo](https://devcastma.netlify.com/)

## Motivation 🤔

When a podcast starts the most difficult part is sharing it with the rest of world, this Gatsby Theme will help to solve that! The idea behind it is to provide a customizable platform where the podcasters can:

- Have a [Landing page](#landing) with the last episodes of the show and more relevant information.
- Add information about the show inside the [About Page](#About)
- Showcase all the podcast inside the [Podcast Page](#Podcast)
- Possibility to add/edit/remove content using a [CMS view](#CMS)

BTW, I recorded a really short podcast in which I talked about this project. So in case you want to know more about it here it's the [link to the episde](https://anchor.fm/the-es-podcast/episodes/E01---Gatsby-Theme-Anchor-e4p592)!



## How to Start 👷‍

Given this project use `yarn Workspace` if you download the project you will download the entire project, demo and theme all together. You can always clone the project and remove the additional folder.

In order to avoid confusion, I created a branch called `demo` with only the code to run the example. Go your terminal and run:

```bash
> git clone  https://github.com/bzinoun/devcast.ma.git
```
then 

```bash
> yarn #install dependencies
> yarn start #start project
```

After running the project you should be able to go to the [`http://localhost:8000`](http://localhost:8000) and see the [Landing Page](#landing). This means that you set up the theme successfully, now let's see how to make it yours!

## Customization 🛍

Extracted to **[Customization](./docs/CUSTOMIZATION.md).**

## Trouble Shooting 💥

Extracted to **[Troubleshooting](./docs/TROUBLESHOOTING.md).**

## Deploying your site 📦

In order to deploy and enable all the powerful of the CMS I highly recommend using [Netlify](https://www.netlify.com). It's a static website hosting with the capability of synchronizing with your GitHub repository, so then every time you push a new deployment is released!

Please follow this [Step by Step Guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) from the official documentation of Netlify. When you reach to the point of setting the command the output folder, you need to set as command `yarn build` and as output folder `/dist`.

This last step is totally optionally but it's one of my favorite of this setup. As this theme use Netlify CMS you can enable the `Identity` feature inside the deployment configuration that will allow to modify your data through the deployed site by making commit to the repository.

Please follow this [Guide](https://www.netlifycms.org/authentication-backends/) to enable.I already provide a proper `config.yml` inside `/static/admin` folder but you still need to enable from your side. In order to check if everything is working, go to the route `/admin` of your deployed site, there you need to authenticate (you can pick different services in the previous step) and once you are inside the CMS every change you make it will push a commit to the repository. Dispatching a new release of your website 😄

## Contributing 💪

This project is using yarn Workspace in order to be able to run a Gatsby project using the source code of the theme. Follow these steps to run the demo locally:

1.  Clone the repo: `git clone https://github.com/EmaSuriano/gatsby-theme-anchor.git`
2.  Install dependencies: `cd gatsby-theme-anchor && yarn`
3.  Start the demo: `yarn workspace demo start`

## License

MIT.
