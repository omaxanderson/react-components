const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = async ({ config, mode }) => {
   const isDevelopment = mode === 'development';
   config.module.rules.push({
      test: /\.scss/,
      use: [
         isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               sourceMap: isDevelopment,
               modules: {
                  localIdentName: '[local]__[hash:base64:6]',
               },
            },
         },
         {
            loader: 'sass-loader',
            options: {
               sourceMap: isDevelopment,
            },
         },
      ],
   });

   config.plugins.push(
      new MiniCssExtractPlugin({
         filename: isDevelopment ? '[name].css' : '[name].[hash].css',
         chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      })
   );

   return config;
};
