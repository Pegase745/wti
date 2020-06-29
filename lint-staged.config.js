module.exports = {
  '*.{js?(x),ts?(x)}': (filenames) => {
    const spaceSeparatedFilenames = filenames.join(' ');
    return [
      `import-sort --write ${spaceSeparatedFilenames}`,
      `eslint --quiet --fix ${spaceSeparatedFilenames}`,
    ];
  },
  '*.json': ['prettier --write'],
  'package.json': ['sort-package-json'],
};
