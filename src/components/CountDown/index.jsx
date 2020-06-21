/**
 * @description 倒计时组件
 * 支持格式：08:06:23、08时06分23秒
 * 支持细粒度控制数字或分隔符样式
 *
 * @usage 使用
 * <CountDown remain={30000000} />
 *
 * <CountDown remain={30000000} separatorType="char" />
 * ...
 */
import React, { Component } from 'react';

class CountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hh: '00', // 时
      mm: '00', // 分
      ss: '00', // 秒
    };
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.stop();
  }

  init = () => {
    let { remain } = this.props;

    remain = parseInt(remain || 0, 10);

    const { onStop } = this.props;
    const viewTime = new Date().getTime();
    const toDouble = n =>
      /* eslint-disable-next-line */
      n < 10 ? '0' + n : n;
    const calc = () => {
      const nowTime = new Date().getTime();
      let disTime = nowTime - viewTime;

      // to solve time is invalid
      disTime = parseInt(disTime / 1000, 10) * 1000;

      const actualTime = (remain - disTime) / 1000;

      if (actualTime > 0) {
        let hh = Math.floor(actualTime / 3600);
        let mm = Math.floor((actualTime - hh * 3600) / 60);
        let ss = Math.floor(actualTime - hh * 3600 - mm * 60);

        hh = toDouble(hh);
        mm = toDouble(mm);
        ss = toDouble(ss);

        this.setState({
          hh,
          mm,
          ss,
        });
      } else {
        this.stop();

        if (onStop) {
          onStop();
        }
      }
    };

    if (remain && remain >= 0) {
      calc();
      clearInterval(this.oTimer);
      this.oTimer = setInterval(calc, 1000);
    }
  };

  stop() {
    clearInterval(this.oTimer);
    this.setState({
      hh: '00',
      mm: '00',
      ss: '00',
    });
  }

  render() {
    const { labelClass, separatorClass, separatorType } = this.props;
    const { hh, mm, ss } = this.state;

    return (
      <>
        <span className={labelClass}>{hh}</span>
        <span className={separatorClass}>{separatorType === 'colon' ? ':' : '时'}</span>
        <span className={labelClass}>{mm}</span>
        <span className={separatorClass}>{separatorType === 'colon' ? ':' : '分'}</span>
        <span className={labelClass}>{ss}</span>
        <span className={separatorClass}>{separatorType === 'colon' ? '' : '秒'}</span>
      </>
    );
  }
}

CountDown.defaultProps = {
  remain: 0, // 剩余时间（单位毫秒）
  separatorType: 'colon', // 分隔符 colon : （冒号）、char 时分秒（汉字）
  labelClass: '', // 数字样式
  separatorClass: '', // 分隔符样式
};

export default CountDown;
