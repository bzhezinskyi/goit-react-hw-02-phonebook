import { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      contacts.length !== 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}:{number}
              <button type="button">Delete</button>
            </li>
          ))}
        </ul>
      )
    );
  }
}
