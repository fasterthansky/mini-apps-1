

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formView: 0,
      forms: props.props,
      formData: {
        'Name': '',
        'Email': '',
        'Password': '',
        'Line 1': '',
        'Line 2': '',
        'City': '',
        'State': '',
        'Zipcode': '',
        'Credit Card Number': '',
        'Expiration Date': '',
        'CVV': '',
        'Billing Zipcode': ''
      }
    };
  }

  // let forms = {
  //   1: ['Name', 'Email', 'Password'],
  //   2: ['Line 1', 'Line 2', 'City', 'State', 'Zipcode'],
  //   3: ['Credit Card Number', 'Expiration Date', 'CVV', 'Billing Zipcode']
  // };


  // ReactDOM.render(
  //   <App props={forms} />,
  //   document.getElementById('app')
  // );