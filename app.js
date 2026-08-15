/* ==========================================================================
   HRTC SAFAR - Web Audio Engine, Clock, Visuals & Interactive Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --------------------------------------------------------------------------
    // 1. Digital Clock & Live Bus Counter
    // --------------------------------------------------------------------------
    const clockEl = document.getElementById('digital-clock');
    const busCountEl = document.getElementById('bus-count');

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        
        clockEl.textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    }
    
    updateClock();
    setInterval(updateClock, 1000);

    // Subtle random bus counter micro-variance
    let currentBusCount = 153;
    setInterval(() => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        currentBusCount = Math.max(140, Math.min(170, currentBusCount + delta));
        if (busCountEl) busCountEl.textContent = currentBusCount;
    }, 12000);

    // --------------------------------------------------------------------------
    // 2. Playlist Data (Complete 50 Pahadi & Travel Tracks)
    // --------------------------------------------------------------------------
    const playlist = [
        {
                "id": 1,
                "title": "Safarnama",
                "artist": "Tamasha · Lucky Ali & A.R. Rahman",
                "duration": "4:12",
                "freq": 220,
                "ytId": "sOhESxhibAM"
        },
        {
                "id": 2,
                "title": "Phir Se Ud Chala",
                "artist": "Rockstar · Mohit Chauhan & A.R. Rahman",
                "duration": "4:32",
                "freq": 247,
                "ytId": "2mWaqsC3U7k"
        },
        {
                "id": 3,
                "title": "Shiv Kailashon Ke Vasi",
                "artist": "Laman Band · Himachal Folk",
                "duration": "5:20",
                "freq": 261,
                "ytId": "BArlCOQ__ug"
        },
        {
                "id": 4,
                "title": "Maahi Ve",
                "artist": "Highway · A.R. Rahman & Alia Bhatt",
                "duration": "5:21",
                "freq": 293,
                "ytId": "s8aAlUynpEY"
        },
        {
                "id": 5,
                "title": "Shiv Kailasho Ke Vasi",
                "artist": "Hansraj Raghuwanshi",
                "duration": "5:45",
                "freq": 329,
                "ytId": "PlIoHp6v3LI"
        },
        {
                "id": 6,
                "title": "Ilahi",
                "artist": "Yeh Jawaani Hai Deewani · Arijit Singh",
                "duration": "3:49",
                "freq": 349,
                "ytId": "fdubeMFwuGs"
        },
        {
                "id": 7,
                "title": "Dil Beparvah",
                "artist": "The Dewarists · Prateek Kuhad & Ankur Tewari",
                "duration": "3:30",
                "freq": 392,
                "ytId": "2N8_XDPW67Q"
        },
        {
                "id": 8,
                "title": "Journey Song",
                "artist": "Piku · Anupam Roy & Shreya Ghoshal",
                "duration": "4:12",
                "freq": 440,
                "ytId": "oZ7PnR_ZKRE"
        },
        {
                "id": 9,
                "title": "Patakha Guddi",
                "artist": "Highway · Nooran Sisters & A.R. Rahman",
                "duration": "4:45",
                "freq": 493,
                "ytId": "8HDTS80dlr4"
        },
        {
                "id": 10,
                "title": "Babaji",
                "artist": "Mohit Chauhan",
                "duration": "4:18",
                "freq": 523,
                "ytId": "Gy3f_A8J7KQ"
        },
        {
                "id": 11,
                "title": "Banao Banao",
                "artist": "Papon",
                "duration": "4:02",
                "freq": 220,
                "ytId": "QMtJqPw2m-8"
        },
        {
                "id": 12,
                "title": "Yun Hi Chala Chal",
                "artist": "Swades · Udit Narayan & A.R. Rahman",
                "duration": "7:20",
                "freq": 247,
                "ytId": "eEeX2QMlSlo"
        },
        {
                "id": 13,
                "title": "Banjarey",
                "artist": "Fugly · Yo Yo Honey Singh",
                "duration": "4:05",
                "freq": 261,
                "ytId": "QkdYA_T-Mbs"
        },
        {
                "id": 14,
                "title": "Back Home To The Mountains",
                "artist": "Gaurav Pandey",
                "duration": "3:58",
                "freq": 293,
                "ytId": "9godkMYS1c4"
        },
        {
                "id": 15,
                "title": "Chota Sa Fasana",
                "artist": "Karwaan · Arijit Singh",
                "duration": "3:56",
                "freq": 329,
                "ytId": "4h5aIACGjQo"
        },
        {
                "id": 16,
                "title": "Subhanallah",
                "artist": "YJHD · Sreerama Chandra & Shilpa Rao",
                "duration": "4:09",
                "freq": 349,
                "ytId": "Q35-1LlyVzE"
        },
        {
                "id": 17,
                "title": "Khaabon Ke Parindey",
                "artist": "ZNMD · Mohit Chauhan & Alyssa Mendonsa",
                "duration": "5:07",
                "freq": 392,
                "ytId": "R0XjibbS_io"
        },
        {
                "id": 18,
                "title": "Kabira (Encore)",
                "artist": "YJHD · Arijit Singh & Harshdeep Kaur",
                "duration": "4:29",
                "freq": 440,
                "ytId": "jHNNMj5bNQw"
        },
        {
                "id": 19,
                "title": "Matargashti",
                "artist": "Tamasha · Mohit Chauhan",
                "duration": "5:28",
                "freq": 493,
                "ytId": "6vKucgAeF_Q"
        },
        {
                "id": 20,
                "title": "Agar Tum Saath Ho",
                "artist": "Tamasha · Arijit Singh & Alka Yagnik",
                "duration": "5:41",
                "freq": 523,
                "ytId": "sK7riqg25ac"
        },
        {
                "id": 21,
                "title": "Hawaa Hawaa",
                "artist": "Rockstar · Mohit Chauhan",
                "duration": "5:42",
                "freq": 220,
                "ytId": "p7YnB7K1i70"
        },
        {
                "id": 22,
                "title": "Nadaan Parindey",
                "artist": "Rockstar · A.R. Rahman & Mohit Chauhan",
                "duration": "6:26",
                "freq": 247,
                "ytId": "ttKXdO4XGjY"
        },
        {
                "id": 23,
                "title": "Kun Faya Kun",
                "artist": "Rockstar · A.R. Rahman & Mohit Chauhan",
                "duration": "7:53",
                "freq": 261,
                "ytId": "T94PHkuydcw"
        },
        {
                "id": 24,
                "title": "Rohru Jana (Pahadi Lofi)",
                "artist": "Himachali Pahadi Special",
                "duration": "3:45",
                "freq": 293,
                "ytId": "l2dL5SN5jO4"
        },
        {
                "id": 25,
                "title": "Bharmauri (Mohit Chauhan)",
                "artist": "Himachal Folk Beats",
                "duration": "4:12",
                "freq": 329,
                "ytId": "BArlCOQ__ug"
        },
        {
                "id": 26,
                "title": "Chamba Kitni Door (Lo-Fi)",
                "artist": "Spiti Sky Acoustic",
                "duration": "3:12",
                "freq": 349,
                "ytId": "sOhESxhibAM"
        },
        {
                "id": 27,
                "title": "Spiti Valley Sunset (Acoustic)",
                "artist": "Himalayan Chillout",
                "duration": "3:55",
                "freq": 392,
                "ytId": "s8aAlUynpEY"
        },
        {
                "id": 28,
                "title": "Laman - Saanjh (Pahadi Band)",
                "artist": "Laman Music",
                "duration": "4:05",
                "freq": 440,
                "ytId": "PlIoHp6v3LI"
        },
        {
                "id": 29,
                "title": "Nazaara (Pahadi Chill Beats)",
                "artist": "Dhauladhar Beats",
                "duration": "3:18",
                "freq": 493,
                "ytId": "2N8_XDPW67Q"
        },
        {
                "id": 30,
                "title": "Spiti Calling (High Elevation)",
                "artist": "Spiti Acoustic",
                "duration": "3:50",
                "freq": 523,
                "ytId": "9godkMYS1c4"
        },
        {
                "id": 31,
                "title": "Kullu Nati Traditional Beats",
                "artist": "Kullu Folk Society",
                "duration": "4:20",
                "freq": 220,
                "ytId": "fdubeMFwuGs"
        },
        {
                "id": 32,
                "title": "Shimla Mall Road Rain (Lo-Fi)",
                "artist": "Ridge Station",
                "duration": "3:05",
                "freq": 247,
                "ytId": "2mWaqsC3U7k"
        },
        {
                "id": 33,
                "title": "Mandi Shivratri Heritage Dhun",
                "artist": "Mandi Echoes",
                "duration": "3:40",
                "freq": 261,
                "ytId": "Gy3f_A8J7KQ"
        },
        {
                "id": 34,
                "title": "Kinnauri Folk Nati",
                "artist": "Kinnaur Kailash",
                "duration": "4:15",
                "freq": 293,
                "ytId": "QMtJqPw2m-8"
        },
        {
                "id": 35,
                "title": "Manali Riverside Coffee",
                "artist": "Beas Stream Beats",
                "duration": "3:08",
                "freq": 329,
                "ytId": "eEeX2QMlSlo"
        },
        {
                "id": 36,
                "title": "Kalpa Sunset Glow",
                "artist": "Apple Orchard Lo-Fi",
                "duration": "3:25",
                "freq": 349,
                "ytId": "QkdYA_T-Mbs"
        },
        {
                "id": 37,
                "title": "Solan Gaddi Tribe Melody",
                "artist": "Gaddi Folk Beats",
                "duration": "3:35",
                "freq": 392,
                "ytId": "4h5aIACGjQo"
        },
        {
                "id": 38,
                "title": "Chitkul Last Village Drift",
                "artist": "Indo-Tibet Border Beats",
                "duration": "3:45",
                "freq": 440,
                "ytId": "Q35-1LlyVzE"
        },
        {
                "id": 39,
                "title": "Rohtang Pass Snow Drift",
                "artist": "High Altitude Chill",
                "duration": "3:50",
                "freq": 493,
                "ytId": "R0XjibbS_io"
        },
        {
                "id": 40,
                "title": "HRTC Night Express (Final Stop)",
                "artist": "Him Bus Driver Lo-Fi",
                "duration": "4:20",
                "freq": 523,
                "ytId": "sOhESxhibAM"
        },
        {
                "id": 41,
                "title": "Ye Tumhari Meri Baatein",
                "artist": "Rockstar · Mohit Chauhan",
                "duration": "5:02",
                "freq": 220,
                "ytId": "2mWaqsC3U7k"
        },
        {
                "id": 42,
                "title": "Katiyabaaz",
                "artist": "A.R. Rahman",
                "duration": "3:40",
                "freq": 247,
                "ytId": "8HDTS80dlr4"
        },
        {
                "id": 43,
                "title": "Beedi",
                "artist": "Omkara · Sunidhi Chauhan & Sukhwinder",
                "duration": "5:05",
                "freq": 261,
                "ytId": "s8aAlUynpEY"
        },
        {
                "id": 44,
                "title": "Chaiyya Chaiyya",
                "artist": "Dil Se · Sukhwinder Singh & A.R. Rahman",
                "duration": "6:54",
                "freq": 293,
                "ytId": "eEeX2QMlSlo"
        },
        {
                "id": 45,
                "title": "Monta Re",
                "artist": "Lootera · Swanand Kirkire",
                "duration": "3:58",
                "freq": 329,
                "ytId": "oZ7PnR_ZKRE"
        },
        {
                "id": 46,
                "title": "Shubhaarambh",
                "artist": "Kai Po Che · Amit Trivedi",
                "duration": "3:45",
                "freq": 349,
                "ytId": "fdubeMFwuGs"
        },
        {
                "id": 47,
                "title": "Behti Hawa Sa Tha Wo",
                "artist": "3 Idiots · Shaan & Shantanu Moitra",
                "duration": "5:01",
                "freq": 392,
                "ytId": "sOhESxhibAM"
        },
        {
                "id": 48,
                "title": "Give Me Some Sunshine",
                "artist": "3 Idiots · Suraj Jagan & Sharman Joshi",
                "duration": "4:07",
                "freq": 440,
                "ytId": "Q35-1LlyVzE"
        },
        {
                "id": 49,
                "title": "Tu Kisi Rail Si",
                "artist": "Masaan · Indian Ocean & Swanand Kirkire",
                "duration": "3:30",
                "freq": 493,
                "ytId": "R0XjibbS_io"
        },
        {
                "id": 50,
                "title": "Sham",
                "artist": "Aisha · Amit Trivedi & Nikhil D'Souza",
                "duration": "4:45",
                "freq": 523,
                "ytId": "jHNNMj5bNQw"
        },
        {
                "id": 51,
                "title": "Hairat",
                "artist": "Anjaana Anjaani · Lucky Ali",
                "duration": "4:08",
                "freq": 220,
                "ytId": "sOhESxhibAM"
        },
        {
                "id": 52,
                "title": "Ahista Ahista",
                "artist": "Himesh Reshammiya & Lucky Ali",
                "duration": "4:45",
                "freq": 247,
                "ytId": "2mWaqsC3U7k"
        },
        {
                "id": 53,
                "title": "Zindagi Ki Yehi Reet Hai",
                "artist": "Mr. India · Kishore Kumar",
                "duration": "5:12",
                "freq": 261,
                "ytId": "eEeX2QMlSlo"
        },
        {
                "id": 54,
                "title": "Tanha Dil",
                "artist": "Shaan",
                "duration": "4:50",
                "freq": 293,
                "ytId": "fdubeMFwuGs"
        },
        {
                "id": 55,
                "title": "Pani Da Rang",
                "artist": "Vicky Donor · Ayushmann Khurrana",
                "duration": "4:00",
                "freq": 329,
                "ytId": "oZ7PnR_ZKRE"
        },
        {
                "id": 56,
                "title": "Galliyan",
                "artist": "Ek Villain · Ankit Tiwari",
                "duration": "5:40",
                "freq": 349,
                "ytId": "sK7riqg25ac"
        },
        {
                "id": 57,
                "title": "Tum Se Hi",
                "artist": "Jab We Met · Mohit Chauhan",
                "duration": "5:23",
                "freq": 392,
                "ytId": "6vKucgAeF_Q"
        },
        {
                "id": 58,
                "title": "Yeh Ishq Hai",
                "artist": "Jab We Met · Shreya Ghoshal",
                "duration": "4:40",
                "freq": 440,
                "ytId": "jHNNMj5bNQw"
        },
        {
                "id": 59,
                "title": "Aao Milo Chalo",
                "artist": "Jab We Met · Shaan",
                "duration": "5:28",
                "freq": 493,
                "ytId": "R0XjibbS_io"
        },
        {
                "id": 60,
                "title": "Hum Kis Gali Jaa Rahe Hain",
                "artist": "Atif Aslam",
                "duration": "5:02",
                "freq": 523,
                "ytId": "p7YnB7K1i70"
        },
        {
                "id": 61,
                "title": "Dooba Dooba",
                "artist": "Silk Route & Mohit Chauhan",
                "duration": "4:55",
                "freq": 220,
                "ytId": "Gy3f_A8J7KQ"
        },
        {
                "id": 62,
                "title": "Boondein",
                "artist": "Silk Route",
                "duration": "4:30",
                "freq": 247,
                "ytId": "BArlCOQ__ug"
        },
        {
                "id": 63,
                "title": "Tu Aashiqui Hai",
                "artist": "Jhankaar Beats · KK",
                "duration": "6:10",
                "freq": 261,
                "ytId": "PlIoHp6v3LI"
        },
        {
                "id": 64,
                "title": "Kya Mujhe Pyar Hai",
                "artist": "Woh Lamhe · KK",
                "duration": "4:26",
                "freq": 293,
                "ytId": "2N8_XDPW67Q"
        },
        {
                "id": 65,
                "title": "Yaaron",
                "artist": "Rockford · KK",
                "duration": "4:28",
                "freq": 329,
                "ytId": "8HDTS80dlr4"
        },
        {
                "id": 66,
                "title": "Pal",
                "artist": "KK",
                "duration": "4:42",
                "freq": 349,
                "ytId": "9godkMYS1c4"
        },
        {
                "id": 67,
                "title": "Alvida",
                "artist": "Life in a Metro · KK",
                "duration": "5:40",
                "freq": 392,
                "ytId": "4h5aIACGjQo"
        },
        {
                "id": 68,
                "title": "O Meri Jaan",
                "artist": "Life in a Metro · KK",
                "duration": "4:58",
                "freq": 440,
                "ytId": "Q35-1LlyVzE"
        },
        {
                "id": 69,
                "title": "In Dino",
                "artist": "Life in a Metro · Soham",
                "duration": "6:33",
                "freq": 493,
                "ytId": "ttKXdO4XGjY"
        },
        {
                "id": 70,
                "title": "Baarishein",
                "artist": "Anuv Jain",
                "duration": "3:27",
                "freq": 523,
                "ytId": "l2dL5SN5jO4"
        },
        {
                "id": 71,
                "title": "Gul",
                "artist": "Anuv Jain",
                "duration": "3:38",
                "freq": 220,
                "ytId": "sOhESxhibAM"
        },
        {
                "id": 72,
                "title": "Husn",
                "artist": "Anuv Jain",
                "duration": "3:35",
                "freq": 247,
                "ytId": "2mWaqsC3U7k"
        },
        {
                "id": 73,
                "title": "Alag Aasmaan",
                "artist": "Anuv Jain",
                "duration": "3:30",
                "freq": 261,
                "ytId": "BArlCOQ__ug"
        },
        {
                "id": 74,
                "title": "Choo Lo",
                "artist": "The Local Train",
                "duration": "3:54",
                "freq": 293,
                "ytId": "fdubeMFwuGs"
        },
        {
                "id": 75,
                "title": "Aoge Tum Kabhi",
                "artist": "The Local Train",
                "duration": "5:12",
                "freq": 329,
                "ytId": "oZ7PnR_ZKRE"
        },
        {
                "id": 76,
                "title": "Dil Mere",
                "artist": "The Local Train",
                "duration": "3:30",
                "freq": 349,
                "ytId": "8HDTS80dlr4"
        },
        {
                "id": 77,
                "title": "Khudi",
                "artist": "The Local Train",
                "duration": "4:48",
                "freq": 392,
                "ytId": "QMtJqPw2m-8"
        },
        {
                "id": 78,
                "title": "Voh Dekhnay Mein",
                "artist": "London Paris New York · Ali Zafar",
                "duration": "3:18",
                "freq": 440,
                "ytId": "eEeX2QMlSlo"
        },
        {
                "id": 79,
                "title": "Teen Kabootar",
                "artist": "Lucknow Central · Amit Trivedi",
                "duration": "3:32",
                "freq": 493,
                "ytId": "QkdYA_T-Mbs"
        },
        {
                "id": 80,
                "title": "O Gujariya",
                "artist": "Queen · Amit Trivedi",
                "duration": "4:22",
                "freq": 523,
                "ytId": "9godkMYS1c4"
        },
        {
                "id": 81,
                "title": "London Thumakda",
                "artist": "Queen · Labh Janjua",
                "duration": "3:50",
                "freq": 220,
                "ytId": "4h5aIACGjQo"
        },
        {
                "id": 82,
                "title": "Jiya Re",
                "artist": "Jab Tak Hai Jaan · Neeti Mohan & A.R. Rahman",
                "duration": "5:20",
                "freq": 247,
                "ytId": "Q35-1LlyVzE"
        },
        {
                "id": 83,
                "title": "Challa",
                "artist": "Jab Tak Hai Jaan · Rabbi Shergill & A.R. Rahman",
                "duration": "5:22",
                "freq": 261,
                "ytId": "R0XjibbS_io"
        },
        {
                "id": 84,
                "title": "Saans",
                "artist": "Jab Tak Hai Jaan · Shreya Ghoshal & Mohit Chauhan",
                "duration": "5:28",
                "freq": 293,
                "ytId": "jHNNMj5bNQw"
        },
        {
                "id": 85,
                "title": "Tera Yaar Hoon Main",
                "artist": "Sonu Ke Titu Ki Sweety · Arijit Singh",
                "duration": "4:03",
                "freq": 329,
                "ytId": "6vKucgAeF_Q"
        },
        {
                "id": 86,
                "title": "Ae Dil Hai Mushkil",
                "artist": "Ae Dil Hai Mushkil · Arijit Singh",
                "duration": "4:29",
                "freq": 349,
                "ytId": "sK7riqg25ac"
        },
        {
                "id": 87,
                "title": "Channa Mereya",
                "artist": "Ae Dil Hai Mushkil · Arijit Singh",
                "duration": "4:49",
                "freq": 392,
                "ytId": "p7YnB7K1i70"
        },
        {
                "id": 88,
                "title": "Bulleya",
                "artist": "Ae Dil Hai Mushkil · Amit Mishra",
                "duration": "5:48",
                "freq": 440,
                "ytId": "ttKXdO4XGjY"
        },
        {
                "id": 89,
                "title": "Cutiepie",
                "artist": "Ae Dil Hai Mushkil · Pardeep Singh Sran",
                "duration": "3:51",
                "freq": 493,
                "ytId": "T94PHkuydcw"
        },
        {
                "id": 90,
                "title": "Kal Ho Naa Ho",
                "artist": "Kal Ho Naa Ho · Sonu Nigam",
                "duration": "5:21",
                "freq": 523,
                "ytId": "l2dL5SN5jO4"
        },
        {
                "id": 91,
                "title": "Mitwa",
                "artist": "KANK · Shankar Mahadevan",
                "duration": "6:22",
                "freq": 220,
                "ytId": "sOhESxhibAM"
        },
        {
                "id": 92,
                "title": "Main Agar Kahoon",
                "artist": "Om Shanti Om · Sonu Nigam",
                "duration": "5:10",
                "freq": 247,
                "ytId": "2mWaqsC3U7k"
        },
        {
                "id": 93,
                "title": "Deewangi Deewangi",
                "artist": "Om Shanti Om · Shaan & Udit Narayan",
                "duration": "5:43",
                "freq": 261,
                "ytId": "BArlCOQ__ug"
        },
        {
                "id": 94,
                "title": "Tere Naina",
                "artist": "My Name Is Khan · Shafqat Amanat Ali",
                "duration": "4:38",
                "freq": 293,
                "ytId": "s8aAlUynpEY"
        },
        {
                "id": 95,
                "title": "Noor-E-Khuda",
                "artist": "My Name Is Khan · Adnan Sami",
                "duration": "6:37",
                "freq": 329,
                "ytId": "PlIoHp6v3LI"
        },
        {
                "id": 96,
                "title": "Sajdaa",
                "artist": "My Name Is Khan · Rahat Fateh Ali Khan",
                "duration": "6:05",
                "freq": 349,
                "ytId": "fdubeMFwuGs"
        },
        {
                "id": 97,
                "title": "Raanjhanaa",
                "artist": "Raanjhanaa · A.R. Rahman",
                "duration": "4:16",
                "freq": 392,
                "ytId": "2N8_XDPW67Q"
        },
        {
                "id": 98,
                "title": "Tum Tak",
                "artist": "Raanjhanaa · Javed Ali & Keerthi Sagathia",
                "duration": "5:04",
                "freq": 440,
                "ytId": "oZ7PnR_ZKRE"
        },
        {
                "id": 99,
                "title": "Piya Milenge",
                "artist": "Raanjhanaa · K.S. Chithra & A.R. Rahman",
                "duration": "5:48",
                "freq": 493,
                "ytId": "8HDTS80dlr4"
        },
        {
                "id": 100,
                "title": "Tu Mun Shudi",
                "artist": "Raanjhanaa · A.R. Rahman & Rabbi Shergill",
                "duration": "4:41",
                "freq": 523,
                "ytId": "9godkMYS1c4"
        }
];

    // --------------------------------------------------------------------------
    // 3. Audio State & Real YouTube Iframe Audio Engine
    // --------------------------------------------------------------------------
    let currentTrackIndex = 0;
    let isPlaying = false;
    let isMuted = false;
    let volume = 0.8;
    let currentTime = 0;
    let trackDuration = 225; // Default duration in seconds
    let playInterval = null;
    let isRainEnabled = true;

    // YouTube Iframe Player API Integration
    let ytPlayer = null;
    let ytReady = false;

    window.onYouTubeIframeAPIReady = function() {
        ytPlayer = new YT.Player('yt-player-hidden', {
            height: '1',
            width: '1',
            playerVars: {
                'listType': 'playlist',
                'list': 'PLQdfb6nEJz_X-0Tkwec2N2Sj83d_DM36d',
                'autoplay': 0,
                'controls': 0,
                'disablekb': 1,
                'fs': 0,
                'modestbranding': 1,
                'rel': 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };

    function updateTrackMetaFromYT() {
        if (ytPlayer && ytPlayer.getVideoData) {
            const data = ytPlayer.getVideoData();
            if (data && data.title) {
                songTitleEl.textContent = data.title;
                songArtistEl.textContent = data.author || "Himachali Pahadi Special";
                
                // Sync active highlight in playlist drawer
                const items = document.querySelectorAll('.track-item');
                items.forEach((item, idx) => {
                    if (idx === currentTrackIndex) {
                        item.classList.add('active');
                        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        }
    }

    function onPlayerReady(event) {
        ytReady = true;
        updateTrackMetaFromYT();
        if (ytPlayer && ytPlayer.getDuration) {
            const dur = ytPlayer.getDuration();
            if (dur && dur > 0) {
                trackDuration = dur;
                totalDurationEl.textContent = formatTime(trackDuration);
            }
        }
        if (ytPlayer && ytPlayer.setVolume) {
            ytPlayer.setVolume(volume * 100);
        }
    }

    function onPlayerStateChange(event) {
        updateTrackMetaFromYT();
        if (event.data === YT.PlayerState.ENDED) {
            nextTrack();
        } else if (event.data === YT.PlayerState.PLAYING) {
            if (!isPlaying) {
                isPlaying = true;
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
                albumThumbBox.classList.add('playing');
            }
        }
    }

    // Web Audio API context for procedural lo-fi ambient audio + bus horn
    let audioCtx = null;
    let synthOsc = null;
    let synthGain = null;
    let rainGainNode = null;
    let rainNoiseNode = null;

    function initAudioContext() {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    // Procedural Ambient Rain Noise Generator
    function startAmbientRain() {
        if (!audioCtx || !isRainEnabled) return;
        try {
            const bufferSize = 2 * audioCtx.sampleRate;
            const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const output = noiseBuffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }

            rainNoiseNode = audioCtx.createBufferSource();
            rainNoiseNode.buffer = noiseBuffer;
            rainNoiseNode.loop = true;

            const filter = audioCtx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 800;

            rainGainNode = audioCtx.createGain();
            rainGainNode.gain.value = 0.04 * volume;

            rainNoiseNode.connect(filter);
            filter.connect(rainGainNode);
            rainGainNode.connect(audioCtx.destination);
            rainNoiseNode.start();
        } catch (e) {
            console.log('Ambient rain audio error:', e);
        }
    }

    function stopAmbientRain() {
        if (rainNoiseNode) {
            try { rainNoiseNode.stop(); } catch(e){}
            rainNoiseNode = null;
        }
    }

    // Procedural Ambient Pahadi Melody Synthesizer
    function startSynthMelody(frequency) {
        if (!audioCtx) return;
        stopSynthMelody();

        try {
            synthOsc = audioCtx.createOscillator();
            const filter = audioCtx.createBiquadFilter();
            synthGain = audioCtx.createGain();

            synthOsc.type = 'sine';
            synthOsc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

            // Subtle vibrato/lfo for warm lo-fi tape effect
            const lfo = audioCtx.createOscillator();
            lfo.frequency.value = 4; // 4Hz vibrato
            const lfoGain = audioCtx.createGain();
            lfoGain.gain.value = 3;
            lfo.connect(synthOsc.frequency);
            lfo.start();

            filter.type = 'lowpass';
            filter.frequency.value = 1200;

            synthGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
            synthGain.gain.exponentialRampToValueAtTime(0.12 * volume, audioCtx.currentTime + 1);

            synthOsc.connect(filter);
            filter.connect(synthGain);
            synthGain.connect(audioCtx.destination);
            synthOsc.start();
        } catch (e) {
            console.log('Synth melody error:', e);
        }
    }

    function stopSynthMelody() {
        if (synthGain && audioCtx) {
            try {
                synthGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.3);
                setTimeout(() => {
                    if (synthOsc) { synthOsc.stop(); synthOsc = null; }
                }, 300);
            } catch(e) {
                if (synthOsc) { synthOsc.stop(); synthOsc = null; }
            }
        }
    }

    // Authentic Dual-Tone HRTC Bus Horn Synthesizer!
    function playHRTCHorn() {
        initAudioContext();
        if (!audioCtx) return;

        const hornBtn = document.getElementById('horn-btn');
        if (hornBtn) hornBtn.classList.add('honking');

        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const hornGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        // Classic Indian bus dual-tone frequencies (440Hz + 554Hz C# / E chord)
        osc1.type = 'sawtooth';
        osc1.frequency.value = 440;

        osc2.type = 'sawtooth';
        osc2.frequency.value = 554;

        filter.type = 'lowpass';
        filter.frequency.value = 1800;

        hornGain.gain.setValueAtTime(0, audioCtx.currentTime);
        hornGain.gain.linearRampToValueAtTime(0.25, audioCtx.currentTime + 0.05);
        hornGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.7);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(hornGain);
        hornGain.connect(audioCtx.destination);

        osc1.start(audioCtx.currentTime);
        osc2.start(audioCtx.currentTime);
        osc1.stop(audioCtx.currentTime + 0.7);
        osc2.stop(audioCtx.currentTime + 0.7);

        setTimeout(() => {
            if (hornBtn) hornBtn.classList.remove('honking');
        }, 700);
    }

    // --------------------------------------------------------------------------
    // 4. UI Elements & Helper Functions
    // --------------------------------------------------------------------------
    const playBtn = document.getElementById('play-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    
    const songTitleEl = document.getElementById('song-title');
    const songArtistEl = document.getElementById('song-artist');
    const albumThumbBox = document.getElementById('album-thumb-box');
    
    const seekBar = document.getElementById('seek-bar');
    const progressFill = document.getElementById('progress-fill');
    const elapsedTimeEl = document.getElementById('elapsed-time');
    const totalDurationEl = document.getElementById('total-duration');
    
    const volumeSlider = document.getElementById('volume-slider');
    const muteBtn = document.getElementById('mute-btn');
    const volumeHighIcon = document.getElementById('volume-high-icon');
    const volumeMuteIcon = document.getElementById('volume-mute-icon');

    const ambientBtn = document.getElementById('ambient-btn');
    const hornBtn = document.getElementById('horn-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const ytMusicBtn = document.getElementById('yt-music-btn');

    const playlistToggleBtn = document.getElementById('playlist-toggle-btn');
    const closePlaylistBtn = document.getElementById('close-playlist-btn');
    const playlistDrawer = document.getElementById('playlist-drawer');
    const playlistOverlay = document.getElementById('playlist-overlay');
    const playlistItemsContainer = document.getElementById('playlist-items-container');
    const playlistSearchInput = document.getElementById('playlist-search');

    function parseDurationSeconds(durationStr) {
        const parts = durationStr.split(':');
        return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${String(secs).padStart(2, '0')}`;
    }

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = playlist[currentTrackIndex];
        
        songTitleEl.textContent = track.title;
        songArtistEl.textContent = track.artist;
        totalDurationEl.textContent = track.duration;
        trackDuration = parseDurationSeconds(track.duration);
        currentTime = 0;

        const ytId = track.ytId || 'l2dL5SN5jO4';
        if (ytReady && ytPlayer && ytPlayer.loadVideoById) {
            ytPlayer.loadVideoById(ytId);
            if (!isPlaying && ytPlayer.pauseVideo) {
                ytPlayer.pauseVideo();
            }
        }

        updateProgressUI();
        renderPlaylist();

        if (isPlaying) {
            startSynthMelody(track.freq);
        }
    }

    function togglePlay() {
        initAudioContext();
        isPlaying = !isPlaying;

        if (isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            albumThumbBox.classList.add('playing');

            if (ytReady && ytPlayer && ytPlayer.playVideo) {
                ytPlayer.playVideo();
            } else {
                startSynthMelody(playlist[currentTrackIndex].freq);
            }
            if (isRainEnabled) startAmbientRain();

            playInterval = setInterval(() => {
                if (ytReady && ytPlayer && ytPlayer.getCurrentTime) {
                    currentTime = ytPlayer.getCurrentTime();
                    const dur = ytPlayer.getDuration();
                    if (dur && dur > 0) {
                        trackDuration = dur;
                        totalDurationEl.textContent = formatTime(trackDuration);
                    }
                } else {
                    currentTime++;
                }
                if (currentTime >= trackDuration) {
                    nextTrack();
                }
                updateProgressUI();
            }, 1000);
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            albumThumbBox.classList.remove('playing');

            if (ytReady && ytPlayer && ytPlayer.pauseVideo) {
                ytPlayer.pauseVideo();
            }
            clearInterval(playInterval);
            stopSynthMelody();
            stopAmbientRain();
        }
    }

    function nextTrack() {
        if (ytReady && ytPlayer && ytPlayer.nextVideo) {
            ytPlayer.nextVideo();
            setTimeout(updateTrackMetaFromYT, 600);
        } else {
            currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
            loadTrack(currentTrackIndex);
        }
    }

    function prevTrack() {
        if (ytReady && ytPlayer && ytPlayer.previousVideo) {
            ytPlayer.previousVideo();
            setTimeout(updateTrackMetaFromYT, 600);
        } else {
            currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
            loadTrack(currentTrackIndex);
        }
    }

    function updateProgressUI() {
        const percent = (currentTime / trackDuration) * 100;
        seekBar.value = percent || 0;
        progressFill.style.width = `${percent || 0}%`;
        elapsedTimeEl.textContent = formatTime(currentTime);
    }

    // --------------------------------------------------------------------------
    // 5. Playlist Drawer Render & Filtering
    // --------------------------------------------------------------------------
    function bindPlaylistClickEvents() {
        const items = document.querySelectorAll('.track-item');
        items.forEach((item, index) => {
            // Remove existing listener duplicates by cloning or direct assignment
            const dataIdx = item.dataset.index !== undefined ? parseInt(item.dataset.index, 10) : index;
            item.onclick = () => {
                currentTrackIndex = dataIdx;
                if (ytReady && ytPlayer && ytPlayer.playVideoAt) {
                    ytPlayer.playVideoAt(dataIdx);
                }
                loadTrack(dataIdx);
                if (!isPlaying) togglePlay();
                closeDrawer();
            };
        });
    }

    function renderPlaylist(filterQuery = '') {
        const query = filterQuery ? filterQuery.toLowerCase().trim() : '';
        if (!query) {
            bindPlaylistClickEvents();
            return;
        }

        playlistItemsContainer.innerHTML = '';
        playlist.forEach((track, index) => {
            if (track.title.toLowerCase().includes(query) || track.artist.toLowerCase().includes(query)) {
                const item = document.createElement('div');
                item.className = `track-item ${index === currentTrackIndex ? 'active' : ''}`;
                item.dataset.index = index;
                item.innerHTML = `
                    <div class="track-item-left">
                        <span class="track-num">${index + 1}</span>
                        <div class="track-name-box">
                            <h4>${track.title}</h4>
                            <p>${track.artist}</p>
                        </div>
                    </div>
                    <span class="track-duration">${track.duration}</span>
                `;

                item.onclick = () => {
                    currentTrackIndex = index;
                    if (ytReady && ytPlayer && ytPlayer.playVideoAt) {
                        ytPlayer.playVideoAt(index);
                    }
                    loadTrack(index);
                    if (!isPlaying) togglePlay();
                    closeDrawer();
                };

                playlistItemsContainer.appendChild(item);
            }
        });
    }

    // --------------------------------------------------------------------------
    // 6. Event Listeners
    // --------------------------------------------------------------------------
    playBtn.addEventListener('click', togglePlay);
    nextBtn.addEventListener('click', nextTrack);
    prevBtn.addEventListener('click', prevTrack);

    seekBar.addEventListener('input', (e) => {
        const percent = parseFloat(e.target.value);
        currentTime = (percent / 100) * trackDuration;
        if (ytReady && ytPlayer && ytPlayer.seekTo) {
            ytPlayer.seekTo(currentTime, true);
        }
        updateProgressUI();
    });

    volumeSlider.addEventListener('input', (e) => {
        volume = parseFloat(e.target.value);
        if (ytReady && ytPlayer && ytPlayer.setVolume) {
            ytPlayer.setVolume(volume * 100);
        }
        if (volume === 0) {
            isMuted = true;
            volumeHighIcon.classList.add('hidden');
            volumeMuteIcon.classList.remove('hidden');
        } else {
            isMuted = false;
            volumeHighIcon.classList.remove('hidden');
            volumeMuteIcon.classList.add('hidden');
        }
        if (rainGainNode) rainGainNode.gain.value = 0.04 * volume;
        if (synthGain) synthGain.gain.value = 0.12 * volume;
    });

    muteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        if (isMuted) {
            volumeHighIcon.classList.add('hidden');
            volumeMuteIcon.classList.remove('hidden');
            if (synthGain) synthGain.gain.value = 0;
            if (rainGainNode) rainGainNode.gain.value = 0;
        } else {
            volumeHighIcon.classList.remove('hidden');
            volumeMuteIcon.classList.add('hidden');
            if (synthGain) synthGain.gain.value = 0.12 * volume;
            if (rainGainNode) rainGainNode.gain.value = 0.04 * volume;
        }
    });

    hornBtn.addEventListener('click', playHRTCHorn);

    ambientBtn.addEventListener('click', () => {
        isRainEnabled = !isRainEnabled;
        if (isRainEnabled) {
            ambientBtn.classList.add('active');
            if (isPlaying) startAmbientRain();
        } else {
            ambientBtn.classList.remove('active');
            stopAmbientRain();
        }
    });

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });

    const ytModal = document.getElementById('yt-modal');
    const closeYtModal = document.getElementById('close-yt-modal');

    ytMusicBtn.addEventListener('click', () => {
        window.open('https://music.youtube.com/playlist?list=PLQdfb6nEJz_X-0Tkwec2N2Sj83d_DM36d&si=rL4jrM_mR2olGUjCv', '_blank');
    });

    if (closeYtModal) {
        closeYtModal.addEventListener('click', () => {
            if (ytModal) ytModal.classList.remove('open');
        });
    }

    if (ytModal) {
        ytModal.addEventListener('click', (e) => {
            if (e.target === ytModal) ytModal.classList.remove('open');
        });
    }

    // Playlist Drawer Controls
    function openDrawer() {
        renderPlaylist(playlistSearchInput ? playlistSearchInput.value : '');
        playlistDrawer.classList.add('open');
        playlistOverlay.classList.add('visible');
    }

    function closeDrawer() {
        playlistDrawer.classList.remove('open');
        playlistOverlay.classList.remove('visible');
    }

    playlistToggleBtn.addEventListener('click', openDrawer);
    closePlaylistBtn.addEventListener('click', closeDrawer);
    playlistOverlay.addEventListener('click', closeDrawer);

    playlistSearchInput.addEventListener('input', (e) => {
        renderPlaylist(e.target.value);
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') return; // Ignore input typing

        switch(e.key.toLowerCase()) {
            case ' ':
                e.preventDefault();
                togglePlay();
                break;
            case 'h':
                playHRTCHorn();
                break;
            case 'p':
                if (playlistDrawer.classList.contains('open')) closeDrawer();
                else openDrawer();
                break;
            case 'm':
                muteBtn.click();
                break;
            case 'f':
                fullscreenBtn.click();
                break;
            case 'arrowright':
                nextTrack();
                break;
            case 'arrowleft':
                prevTrack();
                break;
        }
    });

    // --------------------------------------------------------------------------
    // 7. Canvas Atmospheric Raindrops on Bus Window Effect
    // --------------------------------------------------------------------------
    const canvas = document.getElementById('rain-canvas');
    const ctx = canvas.getContext('2d');
    let drops = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class RainDrop {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * -canvas.height;
            this.len = Math.random() * 18 + 10;
            this.speed = Math.random() * 4 + 3;
            this.opacity = Math.random() * 0.35 + 0.15;
            this.width = Math.random() * 1.5 + 0.8;
        }

        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + 1, this.y + this.len);
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.lineWidth = this.width;
            ctx.stroke();
        }
    }

    for (let i = 0; i < 90; i++) {
        drops.push(new RainDrop());
    }

    function animateRain() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (isRainEnabled) {
            drops.forEach(drop => {
                drop.update();
                drop.draw();
            });
        }
        requestAnimationFrame(animateRain);
    }
    animateRain();

    // --------------------------------------------------------------------------
    // 8. Mouse Pointer Background Parallax Tracking
    // --------------------------------------------------------------------------
    const bgImage = document.querySelector('.bg-image');
    
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    window.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        targetX = (e.clientX - centerX) / centerX; // -1 to +1
        targetY = (e.clientY - centerY) / centerY; // -1 to +1
    });

    function animateParallax() {
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;

        if (bgImage) {
            const moveX = currentX * -24; // smooth 24px parallax shift
            const moveY = currentY * -16; // smooth 16px parallax shift
            const rotX = currentY * -3;   // subtle 3D tilt
            const rotY = currentX * 4;

            bgImage.style.transform = `scale(1.10) translate3d(${moveX}px, ${moveY}px, 0px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        }
        requestAnimationFrame(animateParallax);
    }
    animateParallax();

    // Initial Load
    renderPlaylist();
    loadTrack(0);
});

