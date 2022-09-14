
module.exports = {
  plugins: {
    'postcss-functions': {
      functions: {
        rem: function (pixVal) {
          const defaultRem = 16;
          const unit = pixVal / defaultRem;
          return unit + 'rem';
        }
      }
    },
    'postcss-advanced-variables': {
      variables: {
        'tablet-screen': '768px',
        'desktop-screen': '1440px',
      }

    },
    'autoprefixer': {},
    'postcss-nesting': {},
    'postcss-extend': {},
    'postcss-custom-media': {},
  },
};
