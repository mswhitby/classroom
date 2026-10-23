function MeetupCard() {
  const [attendees, setAttendees] = React.useState(0);
  return (
    <main>
      <h1>Robotics meetup</h1>
      <p>Attendees: <span id="count">{attendees}</span></p>
      <button id="join" onClick={() => { /* Update the count here. */ }}>
        Join the meetup
      </button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MeetupCard />);
