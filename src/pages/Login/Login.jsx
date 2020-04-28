import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './css/login.less'
const {Item} = Form

export default class Login extends Component {
    onFinish = values => {
        console.log('Received values of form: ', values);
    };
    render() {
        return (
            <div className="login">
                <h1>商品管理系统</h1>
                <section>
                    <span className="ti">用户登录</span>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        >
                        <Item
                            rules={[
                                {required:true,message:'用户名必须输入'},
                                {min:4,message:'用户名必须大于四'},
                                {max:12,message:'用户名必须小于十二'},
                                {pattern:/^\w+$/,message:'用户名必须是英文数字下划线'}
                            ]}
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Item>
                        <Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Item>
                        
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}
