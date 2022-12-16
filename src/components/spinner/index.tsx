import { CommonProps } from 'types';
import './styles.scss';

type SpinnerProps = CommonProps & {
  color?: string;
};

const Spinner = ({ color = '#7f58af', className }: SpinnerProps) => {
  return (
    <div className={classNames(styles['lds-orbitals'], className)} style={{ ...style }}>
      <div className={classNames(styles['center'])} style={{ background: color }}></div>
      <div className={classNames(styles['inner-spin'])}>
        <div className={classNames(styles['inner-arc'], styles['inner-arc_start-a'])} style={{ borderColor: color }}></div>
        <div className={classNames(styles['inner-arc'], styles['inner-arc_end-a'])} style={{ borderColor: color }}></div>
        <div className={classNames(styles['inner-arc'], styles['inner-arc_start-b'])} style={{ borderColor: color }}></div>
        <div className={classNames(styles['inner-arc'], styles['inner-arc_end-b'])} style={{ borderColor: color }}></div>
        <div className={classNames(styles['inner-moon-a'])} style={{ background: color }}></div>
        <div className={classNames(styles['inner-moon-b'])} style={{ background: color }}></div>
      </div>
      <div className={classNames(styles['outer-spin'])}>
        <div className={classNames(styles['outer-arc'], styles['outer-arc_start-a'])} style={{ borderColor: color }}></div>
        <div className={classNames(styles['outer-arc'], styles['outer-arc_end-a'])} style={{ borderColor: color }}></div>
        <div className={classNames(styles['outer-arc'], styles['outer-arc_start-b'])} style={{ borderColor: color }}></div>
        <div className={classNames(styles['outer-arc'], styles['outer-arc_end-b'])} style={{ borderColor: color }}></div>
        <div className={classNames(styles['outer-moon-a'])} style={{ background: color }}></div>
        <div className={classNames(styles['outer-moon-b'])} style={{ background: color }}></div>
      </div>
    </div>
  );
};

export default Spinner;
