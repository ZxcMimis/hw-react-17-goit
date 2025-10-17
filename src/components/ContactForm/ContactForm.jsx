import { useState } from "react";

import './ContactForm.scss'

export const ContactForm = ({addContact}) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

   const  handleAddContact = (e) => {
        e.preventDefault();
        addContact(name, number);
        setName('')
        setNumber('')
    };

    return (<form onSubmit={handleAddContact} className="form">
        <h2 className="Phonebook">Phonebook</h2>
        <div className="form-box">
            <div>
                <label htmlFor="name-input" className="input-wrapper">
                    <input
                        className="styled-input"
                        onChange={(e) =>  setName(e.target.value)}
                        type="text"
                        name="name"
                        id="name-input"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        placeholder=" "
                    />
                    <span className="input-label">Імʼя контакту</span>
                </label>

            </div>
            <div>
                <label htmlFor="num-input" className="input-wrapper">
                    <input
                        className="styled-input"
                        onChange={(e) => setNumber(e.target.value )}
                        type="tel"
                        name="number"
                        id="num-input"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        required
                        placeholder=" "
                    />
                    <span className="input-label">Номер телефону</span>
                </label>

            </div>
        </div>
        <button className="button" role="button" type='submit'>add contact</button>
    </form >)
}