/**
 * to debug gruntfile:
 * node-debug $(which grunt) task
 */
module.exports = function(grunt) {

  // project configuration.
  grunt.initConfig({

    pkgName: "is-multiple-of",

    shell: {

      browserify_prod_umd: {
        command: () => `npx browserify --standalone=isMultipleOf -r ./src/main.js:<%= pkgName %> > ./dist/<%= pkgName %>.umd.js -t [ babelify --presets [ es2015 babili] ]`
      },

      browserify_prod_cjs: {
        command: () => `npx browserify -r ./src/main.js:<%= pkgName %> > ./dist/<%= pkgName %>.cjs.js -t [ babelify --presets [ es2015 babili] ]`
      },

    },
  })

  grunt.loadNpmTasks("grunt-shell")

  grunt.registerTask("browserify", [
    "shell:browserify_prod_umd",
    "shell:browserify_prod_cjs",
  ])
}
