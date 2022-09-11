
module.exports = {
  plugins: {
    'postcss-functions': {
      functions: {
        rem: function(pixVal) {
          const defaultRem = 16;
          const unit = pixVal /  defaultRem;
          return unit + 'rem';
        }
      }
    },
    'autoprefixer': {},
    'postcss-nesting': {},
    'postcss-extend': {},
    'postcss-custom-media': {},
  },
};
