
import { ListItem, Btn } from './ContactList.styled';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";

export function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(s => s.contacts.contacts.items);
  const filter = useSelector(s => s.filter);
  console.log(contacts);
  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => (
          <ListItem key={id}>
            <p>
              {name}: <span>{phone}</span>
            </p>
            <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
          </ListItem>
        ))}
      </ul>
    </>
  );
};



