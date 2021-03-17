window.setTimeout(() => {
  const catSpace = {
    speak: () => {},
  };
  const dogSpace = {
    speak: () => {},
  };
  dogSpace.speak = () => {
    return "WOOF!";
  };
  catSpace.speak = () => {
    return "MEOW!";
  };
  const comments = {
    data: [],
    print: () => {},
  };
  comments.data = ["Good job!", "Bye", "Lame..."];
  comments.print = () => {
    comments.data.forEach((el) => {
      console.log(el);
    });
  };
  console.log(catSpace.speak());
  console.log(dogSpace.speak());
  console.log(comments.data);
  comments.print();
}, 500);
