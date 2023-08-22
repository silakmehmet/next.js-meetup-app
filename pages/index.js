import { Fragment } from 'react';
import { getMeetups } from '@/components/helper/get-meetups';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Next.js Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active Next.js meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const loadedMeetups = await getMeetups();
  const meetups = [];
  for (const key in loadedMeetups) {
    meetups.push({
      id: key,
      title: loadedMeetups[key].title,
      date: loadedMeetups[key].date,
      description: loadedMeetups[key].description,
      address: loadedMeetups[key].address,
      image: loadedMeetups[key].image,
    });
  }
  return {
    props: {
      meetups,
    },
    revalidate: 1,
  };
}

export default HomePage;
