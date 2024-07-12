const START_CHAR = ' ';
const END_CHAR = '~';
const MID_CHAR = String.fromCharCode(
  Math.floor((START_CHAR.charCodeAt(0) + END_CHAR.charCodeAt(0)) / 2)
);

export const isLessThan = (upRank: string, downRank: string) =>
  upRank < downRank;

export const getMiddleRank = (upRank?: string, downRank?: string) => {
  if (!upRank && !downRank) return MID_CHAR.repeat(94);

  if (!upRank)
    return downRank!
      .split('')
      .map((char) =>
        String.fromCharCode(
          Math.max(char.charCodeAt(0) - 1, START_CHAR.charCodeAt(0))
        )
      )
      .join('');

  if (!downRank)
    return upRank
      .split('')
      .map((char) =>
        String.fromCharCode(
          Math.min(char.charCodeAt(0) + 1, END_CHAR.charCodeAt(0))
        )
      )
      .join('');

  const midRank = [];
  const maxLength = Math.max(upRank.length, downRank.length);

  for (let i = 0; i < maxLength; i++) {
    const upCharCode = upRank.charCodeAt(i) || START_CHAR.charCodeAt(0);
    const downCharCode = downRank.charCodeAt(i) || END_CHAR.charCodeAt(0);

    let midCharCode = Math.floor((upCharCode + downCharCode) / 2);

    if (midCharCode > END_CHAR.charCodeAt(0))
      midCharCode = END_CHAR.charCodeAt(0);
    else if (midCharCode < START_CHAR.charCodeAt(0))
      midCharCode = START_CHAR.charCodeAt(0);

    midRank.push(String.fromCharCode(midCharCode));
  }

  return midRank.join('');
};
