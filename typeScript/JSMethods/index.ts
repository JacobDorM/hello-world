window.setTimeout(() => {
  const catSpace: { speak: () => void } = {
    speak: () => {},
  };
  const dogSpace: { speak: () => void } = {
    speak: () => {},
  };

  dogSpace.speak = () => {
    return "WOOF!";
  };

  catSpace.speak = () => {
    return "MEOW!";
  };

  const comments: { data: any[]; print: () => void } = {
    data: [],
    print: () => {},
  };

  comments.data = ["Good job!", "Bye", "Lame..."];

  comments.print = () => {
    comments.data.forEach((el: string) => {
      console.log(el);
    });
  };

  console.log(catSpace.speak());
  console.log(dogSpace.speak());
  console.log(comments.data);
  comments.print();
}, 500);
