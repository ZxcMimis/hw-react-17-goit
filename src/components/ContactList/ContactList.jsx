import './ContactList.scss'

export const ContactList = ({ deleteContact, contacts }) => {
    const handlDeleteContact = (e) => {
        e.preventDefault()
        deleteContact(e.target.parentElement.id)
    }

    return <ul className="contact-list">
        {contacts.map((el, indx) => {
            return <li key={indx} id={el.id} className="contact-item">
                <span className="contact-text">{el.name}: {el.number}</span>
                <button className="contact-delete-btn" onClick={handlDeleteContact}>delete</button>
            </li>
        })}
    </ul>

}