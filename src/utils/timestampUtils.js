const UNLIMITED = 99999;

export const calculateTimeDiff = (timestamp) => {
  const currentTime = Math.floor(new Date().getTime() / 1000);
  let timeDiff = currentTime - timestamp.seconds;
  const timeUnits = [
    { unit: 60, text: "초" },
    { unit: 60, text: "분" },
    { unit: 24, text: "시간" },
    { unit: 30, text: "일" },
    { unit: UNLIMITED, text: "개월" },
  ];
  for (let timeUnit of timeUnits) {
    const { unit, text } = timeUnit;
    if (timeDiff < unit) {
      return `${timeDiff}${text}`;
    }
    timeDiff = Math.floor(timeDiff / unit);
  }
};
