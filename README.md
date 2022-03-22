## Description

This project will parse banking transactions. Currently only CIBC works.

Uses eslint, prettier and code formatting.

This works on VSCode.

## Instructions to use Code Formatting

1. Clone this repository
1. Make sure you install the ESLint plugin in VSCode
    1. [Eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
1. In Eslint extension setting enable the following
    - `Eslint: Always Show Status`
    - `Eslint > Code Actions: show Documentation`
    - `Eslint: Enable`
    - `Eslint > Format: Enable`
    - `Eslint > Lint Taks: Enable`

## Running

1. Ensure json is in resource directory. Named `transactions.json`.
1. Run `npm run start`
1. Should output in `dist/output.csv`

Copy the entries over to your excel sheet.
