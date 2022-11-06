import TripList from "../components/Trips/TripList";

const DUMMY_DATA = [
  {
    title: "Koh Chang Travel, Guide Eat Travel Stay? All in one here!",
    eid: "1",
    url: "https://www.wongnai.com/trips/travel-koh-chang",
    description:
      "Let's go Koh Change on your chilling day. Many activities at here like visiting waterfall, floating around mangrove forest, riding the elephant, adventuring in the forest, and shallow diving. This is fun trip for sure!\n\n“Koh Change” Trad, the Bangkok nearby sea. Visitable every season. Clear your work, pack you bag, ready, go! Koh Chang travel guide, where to eat, stay or visit? All of them at here!",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg",
    ],
    tags: ["Island", "Sea", "Sightseeing", "Nature", "Trad"],
  },
  {
    title: "10 Places to visit around BTS Green line!",
    eid: "2",
    url: "https://www.wongnai.com/trips/new-bts-route-trips",
    description:
      "BTS Green lines open 5 new stations. Let's go update the newest cool check-in point.\n\nStart with 'Ha Yaek Lardprao' the connected station with Central Plaza Lardprao which is the full service mall. However, we don't let you travel on the mall, you come to here! Let's go to the another level adventure fun activities then follow by chill relaxing cafe.",
    photos: [
      "https://img.wongnai.com/p/1600x0/2020/02/18/458b9a31b62b408d91137fbe152f7450.jpg",
      "https://img.wongnai.com/p/1600x0/2020/02/18/08bca1c784db4d7f92e93656b5376681.jpg",
      "https://img.wongnai.com/p/1600x0/2020/02/18/95bd2ca371e24436bcb24d432a86836c.jpg",
      "https://img.wongnai.com/p/1600x0/2020/02/18/68289e188ea54e00b5e9d806cfd0fc54.jpg",
    ],
    tags: ["Cafe", "Coffee", "Attraction", "Bangkok Nearby", "Bangkok"],
  },
];

export default function AllTrips() {
  return (
    <section>
      <h1>All Trips</h1>
      <TripList trips={DUMMY_DATA} />
    </section>
  );
}
