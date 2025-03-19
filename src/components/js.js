let z = [
  {
    username: "sajid",
    password: "aa",
    likedPost: [],
    commentPost: [],
    posts: [
      { text: "asdasdasdasd", image: "asd", video: "asd" },
      { text: "sadas", image: "asdsa", video: "sadsad" },
    ],
    friends: [],
    profile:
      "https://imgs.search.brave.com/5cAi-jXDh0PdCGuh2vvsggwMUWvGlmTFmbCQ7jYJ9OI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc",
  },
];

 let newOb = { text: "sajid", image: "asd", video: "asd" };


 let neww = [
    ...z,
    [posts]: [
        ...z.posts, 
        newOb
    ]
 ]

 console.log(neww);
