import React from 'react';
import { connect } from 'dva';
import styles from './MusicPage.css';
import CommonTopMenu from '../components/common/CommonTopMenu';
import MusicSideList from '../components/common/MusicSideList';
import CommonContentMenu from '../components/common/CommonContentMenu';

function MusicPage() {
  return (
    <div>
      <CommonTopMenu/>
      <MusicSideList/>
      <CommonContentMenu/>
    </div>
  );
}
MusicPage.propTypes = {
};

export default connect()(MusicPage);
