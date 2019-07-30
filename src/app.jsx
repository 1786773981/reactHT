// 导入相关库
import React, { Component } from 'react'

// 导入UI组件
import { Pagination } from 'antd';

// 创建组件并导出
export default class App extends Component {
    // 分页功能
    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }
    render() {
        return (
            <div>
                <Pagination
                    showSizeChanger
                    onShowSizeChange={this.onShowSizeChange}
                    defaultCurrent={3}
                    total={500}
                />
            </div>
        )
    }
}