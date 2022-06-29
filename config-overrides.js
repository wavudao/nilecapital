// const { ProvidePlugin } = require('webpack');

// module.exports = function (config, env) {
//     return {
//         ...config,
//         module: {
//             ...config.module,
//             rules: [
//                 ...config.module.rules,
//                 {
//                     test: /\.(m?js|ts)$/,
//                     enforce: 'pre',
//                     use: ['source-map-loader'],
//                 },
//             ],
//         },
//         plugins: [
//             ...config.plugins,
//             new ProvidePlugin({
//                 process: 'process/browser',
//             }),
//         ],
//         resolve: {
//             ...config.resolve,
//             fallback: {
//                 assert: require.resolve('assert'),
//                 buffer: require.resolve('buffer'),
//                 stream: require.resolve('stream-browserify'),
//                 crypto:require.resolve('crypto-browserify')
//             },
//         },
//         ignoreWarnings: [/Failed to parse source map/],
//     };
// };

const webpack = require('webpack'); 
module.exports = function override(config) { 
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, { 
    
      "stream": require.resolve("stream-browserify"), 
      "assert": require.resolve("assert"), 
      "crypto": require.resolve("crypto-browserify"),  
    //   "http": require.resolve("stream-http"), 
    //   "https": require.resolve("https-browserify"), 
    //   "os": require.resolve("os-browserify"), 
    //   "url": require.resolve("url") 
      }) 
   config.resolve.fallback = fallback; 
   config.plugins = (config.plugins || []).concat([ 
   	new webpack.ProvidePlugin({ 
    	process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    }) 
   ]) 
   return config; 
  }