import React from 'react';
import { connect } from 'dva';
import styles from './ContactPage.css';
import CommonTopMenu from '../components/common/CommonTopMenu';

function ContactPage() {
  return (
    <div>
      <CommonTopMenu/>
    </div>
  );
}
ContactPage.propTypes = {
};

export default connect()(ContactPage);
