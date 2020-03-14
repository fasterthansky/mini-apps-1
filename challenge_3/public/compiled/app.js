'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
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
        'Phone Number': '',
        'Credit Card Number': '',
        'Expiration Date': '',
        'CVV': '',
        'Billing Zipcode': ''
      }
    };
    return _this;
  }

  _createClass(App, [{
    key: 'postData',
    value: function postData(event) {
      var _this2 = this;

      event.preventDefault();

      $.ajax({
        type: 'POST',
        url: '/',
        data: this.state.formData,
        dataType: 'text',
        success: function success() {
          var formData = Object.assign({}, _this2.state.formData);
          for (var key in formData) {
            formData[key] = '';
          };
          console.log('success');
          _this2.setState({ formView: 0, formData: formData });
        }
      });
    }
  }, {
    key: 'handleFormInputValue',
    value: function handleFormInputValue(event) {
      var formData = Object.assign({}, this.state.formData);
      formData[event.target.name] = event.target.value;
      this.setState({ formData: formData });
    }
  }, {
    key: 'changeToNext',
    value: function changeToNext() {
      this.setState({
        formView: this.state.formView < 4 ? this.state.formView + 1 : this.state.formView
      });
    }
  }, {
    key: 'changeToPrevious',
    value: function changeToPrevious() {
      this.setState({
        formView: this.state.formView > 1 ? this.state.formView - 1 : this.state.formView
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return this.state.formView === 0 ? React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Izzy\'s Store'
        ),
        React.createElement(
          'p',
          null,
          'Click here to check out!'
        ),
        React.createElement(
          'button',
          { id: 'next', onClick: this.changeToNext.bind(this) },
          'Check Out'
        )
      ) : this.state.formView < 4 ? React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Customer Checkout'
        ),
        this.state.forms[this.state.formView].map(function (formText) {
          return React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              { htmlFor: formText },
              formText
            ),
            React.createElement('input', { name: formText, type: 'text', onChange: _this3.handleFormInputValue.bind(_this3) })
          );
        }),
        React.createElement(
          'button',
          { id: 'previous', onClick: this.changeToPrevious.bind(this) },
          'Previous'
        ),
        React.createElement(
          'button',
          { id: 'next', onClick: this.changeToNext.bind(this) },
          'Next'
        )
      ) : React.createElement(
        'button',
        { onClick: this.postData.bind(this) },
        'Purchase'
      );
    }
  }]);

  return App;
}(React.Component);

var forms = {
  1: ['Name', 'Email', 'Password'],
  2: ['Line 1', 'Line 2', 'City', 'State', 'Zipcode', 'Phone Number'],
  3: ['Credit Card Number', 'Expiration Date', 'CVV', 'Billing Zipcode']
};

ReactDOM.render(React.createElement(App, { props: forms }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJmb3JtVmlldyIsImZvcm1zIiwiZm9ybURhdGEiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsImRhdGFUeXBlIiwic3VjY2VzcyIsIk9iamVjdCIsImFzc2lnbiIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNoYW5nZVRvTmV4dCIsImJpbmQiLCJtYXAiLCJmb3JtVGV4dCIsImhhbmRsZUZvcm1JbnB1dFZhbHVlIiwiY2hhbmdlVG9QcmV2aW91cyIsInBvc3REYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsQ0FEQztBQUVYQyxhQUFPSCxNQUFNQSxLQUZGO0FBR1hJLGdCQUFVO0FBQ1IsZ0JBQVEsRUFEQTtBQUVSLGlCQUFTLEVBRkQ7QUFHUixvQkFBWSxFQUhKO0FBSVIsa0JBQVUsRUFKRjtBQUtSLGtCQUFVLEVBTEY7QUFNUixnQkFBUSxFQU5BO0FBT1IsaUJBQVMsRUFQRDtBQVFSLG1CQUFXLEVBUkg7QUFTUix3QkFBZ0IsRUFUUjtBQVVSLDhCQUFzQixFQVZkO0FBV1IsMkJBQW1CLEVBWFg7QUFZUixlQUFPLEVBWkM7QUFhUiwyQkFBbUI7QUFiWDtBQUhDLEtBQWI7QUFIaUI7QUFzQmxCOzs7OzZCQUVRQyxLLEVBQU87QUFBQTs7QUFDZEEsWUFBTUMsY0FBTjs7QUFFQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGNBQU0sTUFERDtBQUVMQyxhQUFLLEdBRkE7QUFHTEMsY0FBTSxLQUFLVixLQUFMLENBQVdHLFFBSFo7QUFJTFEsa0JBQVUsTUFKTDtBQUtMQyxpQkFBUyxtQkFBTTtBQUNiLGNBQUlULFdBQVdVLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE9BQUtkLEtBQUwsQ0FBV0csUUFBN0IsQ0FBZjtBQUNBLGVBQUssSUFBSVksR0FBVCxJQUFnQlosUUFBaEIsRUFBMEI7QUFDeEJBLHFCQUFTWSxHQUFULElBQWdCLEVBQWhCO0FBQ0Q7QUFDREMsa0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFakIsVUFBVSxDQUFaLEVBQWVFLGtCQUFmLEVBQWQ7QUFDRDtBQVpJLE9BQVA7QUFjRDs7O3lDQUVvQkMsSyxFQUFPO0FBQzFCLFVBQUlELFdBQVdVLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtkLEtBQUwsQ0FBV0csUUFBN0IsQ0FBZjtBQUNBQSxlQUFTQyxNQUFNZSxNQUFOLENBQWFDLElBQXRCLElBQThCaEIsTUFBTWUsTUFBTixDQUFhRSxLQUEzQztBQUNBLFdBQUtILFFBQUwsQ0FBYyxFQUFDZixrQkFBRCxFQUFkO0FBQ0Q7OzttQ0FFYztBQUNiLFdBQUtlLFFBQUwsQ0FBYztBQUNaakIsa0JBQVcsS0FBS0QsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLENBQXRCLEdBQTBCLEtBQUtELEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixDQUFoRCxHQUFvRCxLQUFLRCxLQUFMLENBQVdDO0FBRDlELE9BQWQ7QUFHRDs7O3VDQUVrQjtBQUNqQixXQUFLaUIsUUFBTCxDQUFjO0FBQ1pqQixrQkFBVSxLQUFLRCxLQUFMLENBQVdDLFFBQVgsR0FBc0IsQ0FBdEIsR0FBMEIsS0FBS0QsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLENBQWhELEdBQW9ELEtBQUtELEtBQUwsQ0FBV0M7QUFEN0QsT0FBZDtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFLEtBQUtELEtBQUwsQ0FBV0MsUUFBWCxLQUF3QixDQUF4QixHQUVBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFRLElBQUcsTUFBWCxFQUFrQixTQUFTLEtBQUtxQixZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUEzQjtBQUFBO0FBQUE7QUFIRixPQUZBLEdBUUMsS0FBS3ZCLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixDQUF0QixHQUVEO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVLLGFBQUtELEtBQUwsQ0FBV0UsS0FBWCxDQUFpQixLQUFLRixLQUFMLENBQVdDLFFBQTVCLEVBQXNDdUIsR0FBdEMsQ0FBMEM7QUFBQSxpQkFDeEM7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLGdCQUFPLFNBQVNDLFFBQWhCO0FBQTJCQTtBQUEzQixhQUREO0FBRUMsMkNBQU8sTUFBTUEsUUFBYixFQUF1QixNQUFLLE1BQTVCLEVBQW1DLFVBQVUsT0FBS0Msb0JBQUwsQ0FBMEJILElBQTFCLENBQStCLE1BQS9CLENBQTdDO0FBRkQsV0FEd0M7QUFBQSxTQUExQyxDQUZMO0FBUUU7QUFBQTtBQUFBLFlBQVEsSUFBRyxVQUFYLEVBQXNCLFNBQVMsS0FBS0ksZ0JBQUwsQ0FBc0JKLElBQXRCLENBQTJCLElBQTNCLENBQS9CO0FBQUE7QUFBQSxTQVJGO0FBU0U7QUFBQTtBQUFBLFlBQVEsSUFBRyxNQUFYLEVBQWtCLFNBQVMsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBM0I7QUFBQTtBQUFBO0FBVEYsT0FGQyxHQWNEO0FBQUE7QUFBQSxVQUFRLFNBQVMsS0FBS0ssUUFBTCxDQUFjTCxJQUFkLENBQW1CLElBQW5CLENBQWpCO0FBQUE7QUFBQSxPQXZCRjtBQXlCRDs7OztFQXhGZU0sTUFBTUMsUzs7QUEyRnhCLElBQUk1QixRQUFRO0FBQ1YsS0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLENBRE87QUFFVixLQUFHLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsTUFBckIsRUFBNkIsT0FBN0IsRUFBc0MsU0FBdEMsRUFBaUQsY0FBakQsQ0FGTztBQUdWLEtBQUcsQ0FBQyxvQkFBRCxFQUF1QixpQkFBdkIsRUFBMEMsS0FBMUMsRUFBaUQsaUJBQWpEO0FBSE8sQ0FBWjs7QUFPQTZCLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELElBQUssT0FBTzlCLEtBQVosR0FERixFQUVFK0IsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1WaWV3OiAwLFxuICAgICAgZm9ybXM6IHByb3BzLnByb3BzLFxuICAgICAgZm9ybURhdGE6IHtcbiAgICAgICAgJ05hbWUnOiAnJyxcbiAgICAgICAgJ0VtYWlsJzogJycsXG4gICAgICAgICdQYXNzd29yZCc6ICcnLFxuICAgICAgICAnTGluZSAxJzogJycsXG4gICAgICAgICdMaW5lIDInOiAnJyxcbiAgICAgICAgJ0NpdHknOiAnJyxcbiAgICAgICAgJ1N0YXRlJzogJycsXG4gICAgICAgICdaaXBjb2RlJzogJycsXG4gICAgICAgICdQaG9uZSBOdW1iZXInOiAnJyxcbiAgICAgICAgJ0NyZWRpdCBDYXJkIE51bWJlcic6ICcnLFxuICAgICAgICAnRXhwaXJhdGlvbiBEYXRlJzogJycsXG4gICAgICAgICdDVlYnOiAnJyxcbiAgICAgICAgJ0JpbGxpbmcgWmlwY29kZSc6ICcnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHBvc3REYXRhKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvJyxcbiAgICAgIGRhdGE6IHRoaXMuc3RhdGUuZm9ybURhdGEsXG4gICAgICBkYXRhVHlwZTogJ3RleHQnLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmZvcm1EYXRhKTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGZvcm1EYXRhKSB7XG4gICAgICAgICAgZm9ybURhdGFba2V5XSA9ICcnO1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9ybVZpZXc6IDAsIGZvcm1EYXRhIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRm9ybUlucHV0VmFsdWUoZXZlbnQpIHtcbiAgICBsZXQgZm9ybURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmZvcm1EYXRhKTtcbiAgICBmb3JtRGF0YVtldmVudC50YXJnZXQubmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybURhdGF9KTtcbiAgfVxuXG4gIGNoYW5nZVRvTmV4dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1WaWV3OiAgdGhpcy5zdGF0ZS5mb3JtVmlldyA8IDQgPyB0aGlzLnN0YXRlLmZvcm1WaWV3ICsgMSA6IHRoaXMuc3RhdGUuZm9ybVZpZXdcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZVRvUHJldmlvdXMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb3JtVmlldzogdGhpcy5zdGF0ZS5mb3JtVmlldyA+IDEgPyB0aGlzLnN0YXRlLmZvcm1WaWV3IC0gMSA6IHRoaXMuc3RhdGUuZm9ybVZpZXdcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5mb3JtVmlldyA9PT0gMFxuICAgICAgP1xuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkl6enkncyBTdG9yZTwvaDI+XG4gICAgICAgIDxwPkNsaWNrIGhlcmUgdG8gY2hlY2sgb3V0ITwvcD5cbiAgICAgICAgPGJ1dHRvbiBpZD1cIm5leHRcIiBvbkNsaWNrPXt0aGlzLmNoYW5nZVRvTmV4dC5iaW5kKHRoaXMpfT5DaGVjayBPdXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgOlxuICAgICAgKHRoaXMuc3RhdGUuZm9ybVZpZXcgPCA0XG4gICAgICA/XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+Q3VzdG9tZXIgQ2hlY2tvdXQ8L2gzPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZvcm1zW3RoaXMuc3RhdGUuZm9ybVZpZXddLm1hcChmb3JtVGV4dCA9PlxuICAgICAgICAgICAgKDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtmb3JtVGV4dH0+e2Zvcm1UZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPXtmb3JtVGV4dH0gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtSW5wdXRWYWx1ZS5iaW5kKHRoaXMpfT48L2lucHV0PlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICl9XG4gICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aW91c1wiIG9uQ2xpY2s9e3RoaXMuY2hhbmdlVG9QcmV2aW91cy5iaW5kKHRoaXMpfT5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwibmV4dFwiIG9uQ2xpY2s9e3RoaXMuY2hhbmdlVG9OZXh0LmJpbmQodGhpcyl9Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgOlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnBvc3REYXRhLmJpbmQodGhpcyl9PlB1cmNoYXNlPC9idXR0b24+XG4gICAgKSk7XG4gIH1cbn1cblxubGV0IGZvcm1zID0ge1xuICAxOiBbJ05hbWUnLCAnRW1haWwnLCAnUGFzc3dvcmQnXSxcbiAgMjogWydMaW5lIDEnLCAnTGluZSAyJywgJ0NpdHknLCAnU3RhdGUnLCAnWmlwY29kZScsICdQaG9uZSBOdW1iZXInXSxcbiAgMzogWydDcmVkaXQgQ2FyZCBOdW1iZXInLCAnRXhwaXJhdGlvbiBEYXRlJywgJ0NWVicsICdCaWxsaW5nIFppcGNvZGUnXVxufTtcblxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgcHJvcHM9e2Zvcm1zfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pOyJdfQ==