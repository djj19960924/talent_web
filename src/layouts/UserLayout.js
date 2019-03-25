import React, { Component, Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import { connect } from 'dva';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import DocumentTitle from 'react-document-title';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';
import logo from './images/logo.png';

import getPageTitle from '@/utils/getPageTitle';

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 嘉祥人才驿家智慧化平台
  </Fragment>
);

class UserLayout extends Component {
  componentDidMount() {
    const {
      dispatch,
      route: { routes, authority },
    } = this.props;
    dispatch({
      type: 'menu/getMenuData',
      payload: { routes, authority },
    });
  }

  render() {
    const {
      children,
      location: { pathname },
      breadcrumbNameMap,
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.header}></div>
        <div className={styles.content}>
            <img alt="logo" className={styles.logo} src={logo} />
            <span className={styles.title}>嘉祥县人才驿家智慧化平台</span>
        </div>
        <div className={styles.loginContent}>
          {children}
        </div>
      </div>
    );
  }
}

export default connect(({ menu: menuModel }) => ({
  menuData: menuModel.menuData,
  breadcrumbNameMap: menuModel.breadcrumbNameMap,
}))(UserLayout);
