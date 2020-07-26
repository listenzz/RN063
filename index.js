import {
  ReactRegistry,
  Garden,
  Navigator,
  BarStyleDarkContent,
} from 'react-native-navigation-hybrid';
import App from './App';

// 配置全局样式
Garden.setStyle({
  topBarStyle: BarStyleDarkContent,
});

// 重要必须
ReactRegistry.startRegisterComponent();

// 注意，你的每一个页面都需要注册
ReactRegistry.registerComponent('App', () => App);

// 重要必须
ReactRegistry.endRegisterComponent();

Navigator.setRoot({
  stack: {
    children: [{screen: {moduleName: 'App'}}],
  },
});
