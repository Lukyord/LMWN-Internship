import TripList from "../components/Trips/TripList";

const DUMMY_DATA = {
  trips: [
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
    {
      title:
        "Travel at sun flower field at Chon buri. Beutiful Pic without go too far at Ki ri burapha farm",
      eid: "3",
      url: "https://www.wongnai.com/trips/ki-ri-burapha-sun-flower",
      description:
        "Blooming time with the large sun flower field more than 30 acre. Hurry up! it opens until January! Let's go Ki ri burapha form Chonburi.",
      photos: [
        "https://img.wongnai.com/p/1600x0/2019/12/27/777681c6184b498baead821895f7d7ab.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/27/10b2aaf1f0df42a98d0b482e254789ee.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/27/79e5b71efa54433b909e08bac13f27bb.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/27/939f644df3d847409a85c1b2d054af25.jpg",
      ],
      tags: ["Attraction", "Nice Shot", "Bangkok Nearby", "Chon buri"],
    },
    {
      title:
        "New year eve time coming! Let's go Etong Pilok mine. Appreciate the fog with nice grilled pork and fantastic Milky Way",
      eid: "4",
      url: "https://www.wongnai.com/trips/travel-at-etong-pilok",
      description:
        "The best time to travel Ban Etong Pilok. Hunting for winter fog sea. Visiting old mine pretty village. Eating grilled pork. Waiting for Milky Way appear and ended with visiting the waterfall",
      photos: [
        "https://img.wongnai.com/p/1600x0/2019/12/25/54961e4326954765a80cd20e2044083d.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/25/183af5673b074e55a3842aca97676220.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/25/9bbcb032afc145d19e485defcf2067c1.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/25/2974828fdb16492da0e8f35f627ade7a.jpg",
      ],
      tags: [
        "Attraction",
        "Village",
        "Mountain",
        "Nature",
        "Nice Shot",
        "Ban Etong Pilok",
        "Karnchana buri",
      ],
    },
    {
      title: "Chiang mai travel & cafe trip. Nearby Korea without flight",
      eid: "5",
      url: "https://www.wongnai.com/trips/attraction-chiangmai-korea-style",
      description:
        "Vist Chiang mai cafe! Nearby Korean style travel without flight. Turn around and deep breath in the center of cotton field. Chick in the coffee cafe like the Seoul.",
      photos: [
        "https://img.wongnai.com/p/1600x0/2019/10/10/3092e773cda34ca2a77373b82f7639b7.jpg",
        "https://img.wongnai.com/p/1600x0/2019/10/10/7739627a33134587827ee72f1a9c2cce.jpg",
        "https://img.wongnai.com/p/1600x0/2019/10/10/e51a7af0bd18463db0685057809368ef.jpg",
        "https://img.wongnai.com/p/1600x0/2019/10/10/49c6a0f4c25a41b08b3ca47ce410195d.jpg",
      ],
      tags: ["Attraction", "Nice Shot", "Coffee", "Chiang mai", "Cafe"],
    },
    {
      title: "Lipe Eat Stay Travel Where? All in here!",
      eid: "6",
      url: "https://www.wongnai.com/trips/travel-koh-lipe",
      description:
        "Let's travel Lipe island, Relax on the white beach with very nice & clean sea beach, Go diving to appreciate the beauty of undersea. Eat, sleep, travel all in one in this guide content.",
      photos: [
        "https://img.wongnai.com/p/1600x0/2019/07/31/b3986319d85a4d85baecbacf03a519d8.jpg",
        "https://img.wongnai.com/p/1600x0/2019/07/31/9969a296fe1b452a8e64c2b7cfd58319.jpg",
        "https://img.wongnai.com/p/1600x0/2019/07/31/4edab94617f642d7ac11efd9bccb9863.jpg",
        "https://img.wongnai.com/p/1600x0/2019/07/31/58348f4c3ace47349e80e5930a7a525a.jpg",
      ],
      tags: ["Sea", "Island", "Satul", "Nature"],
    },
    {
      title: "Taipei travel guide of 2020, Let's celebrate FREE VISA!",
      eid: "7",
      url: "https://www.wongnai.com/trips/travel-around-taiwan-free-visa",
      description:
        "Let's plan the Taipei trip of 2020 together! Go Taiwan with free VISA!\n\nNowadays bubble milk tea is all around us, so why don't we go to taste the original at the origin of bubble milk tea! In this trip, we will go to taste the best bubble tea in Taiwan and go to travel for known that Taiwan has many nice attraction.",
      photos: [
        "https://img.wongnai.com/p/1920x0/2019/07/11/cefadd52a1424562bddf0d8fb4762d38.jpg",
        "https://img.wongnai.com/p/1920x0/2019/07/11/eee5544a928c4766a15a04852135dbbb.jpg",
        "https://img.wongnai.com/p/1920x0/2019/07/11/c725886d14b144868cf368bee07d1441.jpg",
        "https://img.wongnai.com/p/1920x0/2019/07/11/83cda5c3853443c4a1398fb3ae6b31a8.jpg",
      ],
      tags: ["Attraction", "International", "Taipei", "Nature"],
    },
    {
      title: "Japan trip with 15 attractions at famous volcano~",
      eid: "8",
      url: "https://www.wongnai.com/trips/views-around-fuji",
      description:
        "The instagram lover don't miss! Let's visit Japan, sightseeing Fuji mountain from different perspective.\n\nAppreciate the beauty of Fuji mountain from multiple season. For the first time, let's go to Kawaguchiko or Hakone Lake. In this guide we collect 15 attractions to shot the Fuji mountain!",
      photos: [
        "https://img.wongnai.com/p/1600x0/2019/06/04/371f3bfad9cd46399f30c8b04c816597.jpg",
        "https://img.wongnai.com/p/1600x0/2019/06/04/93b7b555b624490680ebe7b0a16b0519.jpg",
        "https://img.wongnai.com/p/1600x0/2019/06/04/bf2c001a72314452a261bff3f039ccdc.jpg",
        "https://img.wongnai.com/p/1600x0/2019/06/04/37b377e43f344da794cb3353aeca3fcf.jpg",
      ],
      tags: ["Attraction", "International", "Japan", "Nature", "Mountain"],
    },
  ],
};

export default function AllTrips() {
  return (
    <div className="h-full w-screen flex justify-center bg-slate-100 content-center pb-[3rem]">
      <div className="flex-col">
        <h1 className="text-center text-8xl font-semibold italic m-[6 rem]">
          All Trips
        </h1>
        <TripList trips={DUMMY_DATA.trips} />
      </div>
    </div>
  );
}
