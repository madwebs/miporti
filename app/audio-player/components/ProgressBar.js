import React from 'react'
//var React = require('react/addons');
//var ProgressBar = require('react-bootstrap/ProgressBar');
import { ProgressBar } from 'react-bootstrap'
var classNames = require("classnames");

module.exports = React.createClass({

	getDefaultProps: function() {
		return { progressStyle : { marginLeft: '5px' } };
	},

	render: function() {
		var percent = this.props.percent * 100;
		//var style = { width: percent + "%" }
    var style = { left: percent + "%" }
		var classes = classNames({
  		'audio-progress-container': true,
      'visibile':this.props.isPlaying,
  		//'pull-left': true,
  		'audio-progress-container-short-width': this.props.shorter
		});

		return (
			<div ref="progressBar" className={classes} style={this.props.progressStyle} onClick={this.seekTo}>
				<div className="audio-progress" style={style}></div>
			</div>
		);
	},
/*
	seekTo: function(e){
    //console.log('cucu');
		if (!this.props.percent) {
			return;
		}
		var container = $(this.refs.progressBar.getDOMNode());
		var containerStartX = container.offset().left;
		var percent = (e.clientX - containerStartX) / container.width();	
		percent = percent >= 1 ? 1 : percent;
		this.props.seekTo(percent);
	}
*/
})