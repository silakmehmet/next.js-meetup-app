import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'The First Meetup',
    image: 'https://picsum.photos/200/300',
    address: 'Atakule no:65',
    description: 'This is the first meetup',
  },
  {
    id: 'm2',
    title: 'The Second Meetup',
    image: 'https://picsum.photos/200/300',
    address: 'Atakule no:75',
    description: 'This is the second meetup',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
