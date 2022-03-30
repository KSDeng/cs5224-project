import React from 'react';

class SellCarPanel extends React.Component {

	constructor(props) {
		super(props);
		// state
		this.state = {

		}

		// functions

		// this.tryLogin = this.tryLogin.bind(this);
	}

	// lifecycle

	componentWillMount() {
		this.setState({

		});

	}

	componentDidMount() {
		
	}

	// frontend appearence
	render() {

		let panel = null;
		panel = (
			<div className="filter-sellCar">
				<div className="filter-buyCar-title fn-clear">
					<h3><a href="#" id="aIndexSellCar" target="_blank">我要卖车<i className="iconfont">&#xe909;</i></a></h3>
				</div>
				<p>已有<em>15567272</em>人提交了卖车申请</p>
				<div className="tele-number">
					<input type="text" name="" value="" id="txtSellCarPhone" placeholder="请输入您的手机号码"/>
				</div>
				<div className="handle-btn">
					<a id="btnQuickSellCar" href="javascript:void(0)" className="btn">快速卖车</a>
					<a href="//www.che168.com/pinggu/?pvareaid=103958&leadssources=3&sourcetwo=1&sourcethree=346" target="_blank" className="btn btn-yellow">爱车估值</a>	
				</div>
			</div>
		);
		return (panel);
	}
}

// functions/values from parent
SellCarPanel.propTypes = {

};

export default SellCarPanel;

