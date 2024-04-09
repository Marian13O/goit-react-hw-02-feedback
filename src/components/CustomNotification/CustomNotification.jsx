import style from './CustomNotification.module.css';
import PropTypes from 'prop-types';

function CustomNotification({ message }) {
  return <p className={style.notificationText}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomNotification;
