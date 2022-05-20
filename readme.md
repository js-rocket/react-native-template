# Description

This is a template/example for a react native project.  The files in this repository is just the source code and assets.

To run this app you will need to initialize a new project using the [react-native-creator](https://github.com/js-rocket/react-native-creator)
then copy over the files from this repository

The main purpose of this repository is to demonstrate the folder structure as agreed upon and noted in our confluence documentation, but also demonstrates the following:

* Use of navigation/router
* Use of calling API
* Use of saving key/values to local storage
* Use of themes - TODO
* Use of internationalization - TODO


# Notes

This template also requires extra packages not added by default from the react-native-creator project:

```
yarn add @react-navigation/bottom-tabs @react-navigation/native-stack \
  styled-components \
  react-native-svg \
  @react-native-async-storage/async-storage

yarn add -D @types/styled-components @types/styled-components-react-native @svgr/cli

```

TODO: move some (or all) of these packages to the react-native-creator script
