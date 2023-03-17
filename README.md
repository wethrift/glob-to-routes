# glob-to-routes

A simple utility that converts a glob file selection to routes that can be used with any routing library.

# Installation

    npm install glob-to-routes

# Usage

    import globToRoutes from 'glob-to-routes'

    const routes = await globToRoutes(baseDir, globPath, conversionFunction)

This library simply converts the results of a glob (default is `**/*.{js,jsx}`) into an array of objects containing each file path, and its corresponding route string. As each routing library may vary, the default conversion function uses expressjs like syntax. Here is an example of setting up express routes from page files inside a `/pages` folder.

    const routes = await globToRoutes('./pages')
    for (const { route, filePath } of routes) {
      app.get(route, pageHandler(filePath))
    }

In this case, `pageHandler` would be a function that takes in a file path and returns a valid route function based on what the file does.

# Custom file path conversion

If you wish to perform custom conversions of paths to route strings, just provide a function that takes in a route path, and returns the relevant transformed string.

# Credits

This library was built [@wethrift](https://www.wethrift.com).
