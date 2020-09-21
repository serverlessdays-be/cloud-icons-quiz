import React from 'react'

import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { HomeOutlined, ProfileOutlined, FileProtectOutlined } from '@ant-design/icons'

import { AmplifySignOut } from '@aws-amplify/ui-react'

const Nav = (props) => {
    const { current } = props
    return (
        <div>
            <Menu selectedKeys={[current]} mode="horizontal">
                <Menu.Item key='home'>
                    <Link to='/'>
                        <HomeOutlined />Home
                    </Link>
                </Menu.Item>
                <Menu.Item key='admin'>
                    <Link to='/admin'>
                        <ProfileOutlined />Admin
                    </Link>
                </Menu.Item>
                <Menu.Item key='protected'>
                    <Link to='/protected'>
                        <FileProtectOutlined />Protected
                    </Link>
                </Menu.Item>
                <Menu.Item key='signout'>
                    <AmplifySignOut />
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Nav