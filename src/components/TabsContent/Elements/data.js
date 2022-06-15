import { v4 } from "uuid";

const Elements = [
  {
    id: v4(),
    name: "Test 1",
    type: "label",
    content: "This is a simple label and a test, or maybe both.",
  },
  {
    id: v4(),
    name: "Flutter",
    type: "skill",
    content: {
      level: 5,
    },
  },
  {
    id: v4(),
    name: "Google",
    type: "experience",
    content: {
      dates: {
        from: new Date("2005-06-15"),
        to: new Date(Date.now()),
      },
    },
  },
  {
    id: v4(),
    name: "My life",
    type: "label",
    content: "I'll just tell you about my life...",
  },
  {
    id: v4(),
    name: "HTML",
    type: "skill",
    content: {
      level: 10,
    },
  },
  {
    id: v4(),
    name: "Python",
    type: "skill",
    content: {
      level: 2,
    },
  },
  {
    id: v4(),
    name: "Swift",
    type: "skill",
    content: {
      level: 5,
    },
  },
  {
    id: v4(),
    name: "Binance",
    type: "experience",
    content: {
      dates: {
        from: new Date("2013-07-01"),
        to: new Date("2018-02-05"),
      },
    },
  },
];

export default Elements;
