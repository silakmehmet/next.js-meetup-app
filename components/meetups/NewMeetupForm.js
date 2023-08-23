import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import LoginContext from '@/store/login-context';
import { useContext } from 'react';

function NewMeetupForm(props) {
  const loginCtx = useContext(LoginContext);

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      date: enteredDate,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  const addMeetupForm = (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id="image" ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" ref={addressInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Date</label>
        <input type="date" required id="date" ref={dateInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows="5"
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  );

  const alertPage = <p className={classes.alert}>You need to login first!</p>;

  return <Card>{loginCtx.isLoggedIn ? addMeetupForm : alertPage}</Card>;
}

export default NewMeetupForm;
