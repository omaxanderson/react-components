const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = async ({ config, mode }) => {
   const isDevelopment = mode === 'development';
   console.log('isDev', isDevelopment);
   config.module.rules.push({
      test: /\.scss/,
      use: [
         isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               sourceMap: isDevelopment,
               modules: true,
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

   console.log(JSON.stringify(config, 0, 2));
   return config;
};
