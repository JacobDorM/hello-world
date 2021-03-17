window.setTimeout(() => {
  let movieDb: { title: string; rating: string; hasWatched: boolean }[] = [
    {
      title: "Shrek",
      rating: "5",
      hasWatched: true,
    },

    {
      title: "Ratatui",
      rating: "4.5",
      hasWatched: false,
    },

    {
      title: "Ice Age",
      rating: "5",
      hasWatched: true,
    },

    {
      title: "Frozen",
      rating: "3.5",
      hasWatched: false,
    },
  ];

  const haveWatched: () => void = () => {
    for (let i: number = 0; i < movieDb.length; i++) {
      if (movieDb[i].hasWatched === true) {
        console.log(`you have watched "${movieDb[i].title}" - ${movieDb[i].rating} stars`);
      } else console.log(`you have not seen "${movieDb[i].title}" - ${movieDb[i].rating} stars`);
    }
  };

  haveWatched();
}, 500);
