import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

function NewMeetupPage(props) {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    await fetch(
      'https://next-jsmeetups-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
      }
    );
    router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm
        isLoggedIn={props.isLoggedIn}
        onAddMeetup={addMeetupHandler}
      />
    </Fragment>
  );
}

export default NewMeetupPage;
