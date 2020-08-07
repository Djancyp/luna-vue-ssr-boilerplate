import path from 'path'
import webpack from 'webpack'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import {VueLoaderPlugin} from 'vue-loader'
import HTMLPlugin from 'html-webpack-plugin';
import config from 'config'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

delete process.env.TS_NODE_PROJECT;
const themeName = config.theme
const themePath = '../../src/themes/' + themeName
const postcssConfig = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: (loader) => [
      require('postcss-flexbugs-fixes'),
      require('autoprefixer')({
        flexbox: 'no-2009'
      })
    ]
  }
};
const isProd = process.env.NODE_ENV === 'production'

export default {
  mode: !isProd ? 'development' : 'production',
  devtool: isProd
    ? false
    : 'source-map',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../../public'),
      'src': path.resolve(__dirname, '../../src'),
      'theme': path.resolve(__dirname, themePath),
      'theme/css': path.resolve(__dirname, themePath + '/css')
    },
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../../tsconfig.json'),
        extensions: ['.ts', '.tsx'],
        mainFields: ['browser', 'main']
      })
    ]
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: '../../tsconfig.json'
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          postcssConfig
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          postcssConfig,
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          postcssConfig,
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
        loader: 'url-loader?importLoaders=1&limit=10000'
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: isProd
    ? [
      new VueLoaderPlugin(),
      new HTMLPlugin({
        template: './src/themes/default/index.template.html',
        filename: 'index.html',
        chunksSortMode: 'none',
        inject: !isProd // in dev mode we're not using clientManifest therefore renderScripts() is returning empty string and we need to inject scripts using HTMLPlugin
      }),
      new webpack.DefinePlugin({
        'process.env.__APPVERSION__': JSON.stringify(require('../../package.json').version)
        // 'process.env.__BUILDTIME__': JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss'))
      }),
      new webpack.optimize.ModuleConcatenationPlugin()
    ]
    : [
      new VueLoaderPlugin(),
      new FriendlyErrorsPlugin()
    ]
}
