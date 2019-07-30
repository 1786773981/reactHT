// 导入相关库
import React from 'react'
import {render} from 'react-dom'

// 引入组件
import App from './app'
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';

// 渲染视图  
render(<LocaleProvider locale={zhCN}><App /></LocaleProvider>,document.querySelector('#root'))