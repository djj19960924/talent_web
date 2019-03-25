import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import { Checkbox, Alert, Icon } from 'antd';
import Login from '@/components/Login';
import styles from './Login.less';
import login_bg from './images/login_bg2.png'

const { UserName, Password, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { login, submitting } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <img className={styles.loginLogo} src={login_bg}></img>
        <div className={styles.loginMain}>
          <Login
            defaultActiveKey={type}
            onSubmit={this.handleSubmit}
            ref={form => {
              this.loginForm = form;
            }}
          >
            <div className={styles.container}>
              <div className={styles.title}>登录LOGIN</div>
              <UserName name="userName" placeholder="请输入账号" />
              <Password
                name="password"
                placeholder="请输入密码"
                onPressEnter={e => {
                  e.preventDefault();
                  this.loginForm.validateFields(this.handleSubmit);
                }}
              />
              <div>
                <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
                  记住密码
                </Checkbox>
                <a style={{ float: 'right' }} href="">
                  忘记密码
                </a>
              </div>
              <Submit loading={submitting}>
                登录
              </Submit>
            </div>
          </Login>
        </div>
      </div>
      
    );
  }
}

export default LoginPage;
