import PropTypes from 'prop-types';
import SButton from './style';

const Button = ({ record, stop, submit, color, children }) => {
  return (
    <SButton
      record={record}
      stop={stop}
      submit={submit}
      color={color}
      type='button'
    >
      {children}
    </SButton>
  );
};

Button.propTypes = {
  record: PropTypes.bool,
  stop: PropTypes.bool,
  submit: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Button.defaultProps = {
  record: false,
  stop: false,
  submit: false,
  color: null,
};

export default Button;
