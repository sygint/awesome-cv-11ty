# Awesome CV 11ty

A fork of [awesome-cv-react](https://github.com/sygint/awesome-cv-react) to [eleventy](https://www.11ty.dev/). This fork has easier markup and style via 11ty's WebC and PostCSS and much simpler build process and dependency tree with 11ty. It has the same easy configuration via YAML.

## Preview

You can see [PDF](build/resume.pdf)

[![Résumé](build/resume_page_1.png)](build/resume.pdf)

# Getting Started

This project is powered by [eleventy](https://github.com/11ty/eleventy/).

# Configuration

All of the config is found in `details.yaml` in the `src/_data` directory. It's fairly self explanatory, feel free to hit me up if you have any questions.

# Available Scripts

In the project directory, you can run:

### `npm run build`

Builds your `resume.pdf` to the `build` folder. It utilizes [Puppeteer](https://github.com/puppeteer/puppeteer) to save the HTML as a `.pdf`.

## `npm run dev`

Runs a nodemon watch script that watches for changes and rebuilds your `resume.pdf`.

## Work In Progress

There are many features supported by awesome-cv that are yet to be supported in this, including Honors & Awards, Certifications, and Education, as well as the cover letter.

I hope to work on these in the near future.
