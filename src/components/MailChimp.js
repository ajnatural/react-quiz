import React, { PropTypes } from 'react';
import $ from 'jquery';

class MailChimp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: ""
    };
  }

  submit() {
    var url = "https://rationalme.us17.list-manage.com/subscribe/post-json?u=5725628f86b4110193373bfbc&amp;id=fae9d520b7";
    url = `${url}&EMAIL=${this.email.value}&c=?`;

    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'jsonp',
      success: (body) => {
        this.setState({msg: body.msg})
      }
    });
  }

  render() {
    return (
      <div className="mailchimp-container">
        <h2>Want to learn more?</h2>
        <h4>Sign up to our newsletter, and we'll send you a new question ever week</h4>
        <div>
          <input id="mailchimp-email" type="email" ref={(email) => this.email = email}/>
        </div>
        <button onClick={this.submit.bind(this)}>Subscribe</button>
        <div className="mailchimp-msg">{this.state.msg}</div>
      </div>
    );
  }
}

export default MailChimp;
